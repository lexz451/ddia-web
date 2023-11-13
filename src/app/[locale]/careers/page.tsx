import initTranslations from "@/i18n";

export default async function Careers({
    params: { locale },
}: {
    params: { locale: string };
}) {

    const { t } = await initTranslations(locale)

    return (
        <main className="page-container">
            <section className="flex flex-col items-center mt-10  pt-[120px]">
                <h1 className="w-fit mx-auto font-extrabold text-4xl lg:text-6xl text-design-green mb-4">
                    {t("careers-page.title")}
                </h1>
            </section>
            <section className="mb-20">
                <p className="max-w-prose text-center mx-auto text-lg">
                    {t("careers-page.message")}
                </p>
            </section>
            <section className="pb-footer"></section>
        </main>
    );
}
