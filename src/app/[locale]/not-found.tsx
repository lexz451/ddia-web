import I18nLink from "@/lib/components/I18nLink";

export default function NotFoundPage() {
    return (
        <main className="pt-[120px] pb-footer">
            <div className="page-container flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <h2 className="text-3xl font-bold text-design-green">Not Found</h2>
                    <p className="mt-2">Could not find requested resource</p>
                    <I18nLink href="/" className="mt-10 underline">
                        Go back to home
                    </I18nLink>
                </div>
            </div>

        </main>
    )
}