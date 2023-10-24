'use client'
import { FormEvent, useEffect, useState } from "react";
import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";

const renderComment = (comment: any, postComment: (e: FormEvent) => Promise<void>) => {
    return (
        <div key={comment.id} className="">
            <Comment comment={comment} postComment={postComment}></Comment>
            {
                comment.children && comment.children.map((child: any) => (
                    <div key={child.id} className="ml-10">
                        {renderComment(child, postComment)}
                    </div>
                ))
            }
        </div>
    )
}

export default function CommentBox({
    postId
}: {
    postId: number
}) {

    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState<any[]>([]);


    useEffect(() => {
        fetch(`/api/comments/${postId}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setComments(json);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [postId])

    const findCommentRecursively = (comment: any, id: number): any => {
        if (comment.id === id) {
            return comment;
        }
        if (comment.children) {
            for (const child of comment.children) {
                const found = findCommentRecursively(child, id);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

    const pushComment = (comment: any) => {
        let _comments = [...comments];
        if (comment.threadOf) {
            let parentComment = null;
            for (const _comment of _comments) {
                const found = findCommentRecursively(_comment, comment.threadOf);
                if (found) {
                    parentComment = found;
                    break;
                }
            }
            if (parentComment) {
                parentComment.children = parentComment.children || [];
                parentComment.children.push(comment);
            }
            setComments(_comments);
        } else {
            setComments([comment, ..._comments]);
        }
        // console.log(comment);
    }

    const postComment = async (event: FormEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        
        // validate form
        // TODO

        const data = Object.fromEntries(formData.entries());
        const body: any = {
            content: data.content,
            author: {
                id: data.id,
                name: data.name,
                email: data.email,
                website: data.website || null
            }
        }

        if (data.threadOf) {
            body.threadOf = +data.threadOf;
        }

        const res = await fetch(`/api/comments/${postId}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });

        const comment = await res.json();

        // fix threadOf response
        if (comment.threadOf) {
            comment.threadOf = comment.threadOf.id;
        }

        pushComment(comment);

        form.reset();
    }

    return (
        <div id="comments" className="my-10">
            <div className="IntroductoryText mb-4 text-neutral-800 text-xl font-semibold leading-3">Comments</div>
            <div className="w-full h-[1px] bg-neutral-800"></div>
            <div className="mt-5 text-gray-500 text-base font-normal leading-normal">Find people with high expectations and a low tolerance for excuses. They’ll have higher expectations for you than you have for yourself. Don’t flatter yourself that this has much to do with you – this is just who they are. Don’t look for “nice” in these relationships.</div>
            <CommentForm onSubmit={postComment}></CommentForm>
            <div className="w-full h-[1px] bg-neutral-300 mt-10"></div>
            {
                isLoading && (
                    <div className="IntroductoryText mt-5 text-neutral-800 font-semibold leading-3">Loading...</div>
                )
            }
            {
                !isLoading && !comments.length && (
                    <div className="IntroductoryText mt-5 text-neutral-800 font-semibold leading-3">No comments yet</div>
                )
            }
            {
                !isLoading && comments.map((comment: any) => (
                    renderComment(comment, postComment)
                ))
            }
        </div>
    );
}