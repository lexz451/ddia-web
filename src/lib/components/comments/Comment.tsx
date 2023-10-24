'use client';
import { FormEvent, useState } from "react";
import { CommentForm } from "./CommentForm";
import Avatar from "react-avatar";

export const Comment = ({
    comment, postComment
}: {
    comment: any;
    postComment: (e: FormEvent) => Promise<void>;
}) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [busy, setBusy] = useState(false);

    const onSubmitForm = async (event: any) => {
        setBusy(true);
        await postComment(event);
        setBusy(false);
        setShowReplyForm(false);
    };

    return (
        <div key={comment.id} className={`flex flex-col bg-white px-4 my-4 rounded-lg`}>
            <div className="flex gap-5 py-4">
                <div className="flex-shrink-0 w-10 h-10">
                    <Avatar maxInitials={2} name={comment.author.name} size="40" round={true}></Avatar>
                </div>
                <div>
                    <div className="Title text-neutral-800 text-base font-semibold leading-snug">{comment.author.name}</div>
                    <div className="Preview prose prose-sm text-neutral-800 text-base font-normal leading-normal my-1">
                        {comment.content == '/** -- REMOVED -- **/' ? <span className="italic text-sm text-gray-500">This comment has been removed.</span> : <span className="text-sm italic">{comment.content}</span>}
                    </div>
                    <button onClick={() => setShowReplyForm(true)} className="IntroductoryText text-neutral-800 text-sm font-bold leading-loose">Reply</button>
                </div>
            </div>
            {showReplyForm && (
                <div className="flex flex-col items-start w-full">
                    <CommentForm
                        isInline
                        busy={busy}
                        threadOf={comment.id}
                        onCancel={() => setShowReplyForm(false)}
                        onSubmit={onSubmitForm}></CommentForm>
                </div>
            )}
        </div>
    );
};
