import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="pt-[120px] pb-footer">
            <div className="page-container flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
                </div>
            </div>

        </main>
    )
}