'use client';
import { FormEventHandler } from "react";

export const CommentForm = ({
    threadOf, isInline, busy, onCancel, onSubmit
}: { threadOf?: number; isInline?: boolean; busy?: boolean; onCancel?: () => void; onSubmit?: FormEventHandler; }) => {
    const uuid = crypto.randomUUID();
    return (
        <form onSubmit={onSubmit} className={`flex flex-col items-start w-full ${isInline ? 'mb-5' : 'mt-5'}`}>
            <input type="hidden" name="id" id="" value={uuid.toString()} />
            <input type="hidden" name="threadOf" value={threadOf?.toString() || ''} />
            <textarea disabled={busy} required name="content" rows={3} className="w-full p-5 rounded-lg border border-neutral-300" placeholder="Comment"></textarea>
            <div className="grid grid-cols-2 gap-5 mt-3 w-full">
                <input disabled={busy} required name="name" type="text" className="w-full px-5 py-2 rounded-lg border border-neutral-300" placeholder="Name"></input>
                <input disabled={busy} required name="email" type="email" className="w-full px-5 py-2 rounded-lg border border-neutral-300" placeholder="Email"></input>
                {/* <input name="website" type="text" className="w-full px-5 py-2 rounded-lg border border-neutral-300" placeholder="Website"></input> */}
            </div>
            <div className="flex items-center">
                <button disabled={busy} type="submit" className={`border-none bg-design-green text-white r-btn mt-5 ${isInline ? 'ml-auto' : ''}`}>
                    Comment
                </button>
                {isInline && (
                    <button disabled={busy} onClick={onCancel} className={`border-none  text-design-green r-btn mt-5 ${isInline ? 'ml-auto' : ''}`}>
                        Cancel
                    </button>)}
            </div>
        </form>
    );
};
