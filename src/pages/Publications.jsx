import PublicationsList from "../components/PublicationsList";
import { useTranslation } from 'react-i18next';

function  Publications() {
    const { t } = useTranslation();

    return(
        <section id="publications" className="p-8">
        <h2 className="text-3xl font-bold mb-6"> {t("publications.title")}</h2>
        <PublicationsList/>
    </section>
    )
}

export default Publications;