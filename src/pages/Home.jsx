import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return(
        <section className="min-h-screen ">
            <div className="p-5 bg-white mx-5 mt-4 rounded-lg shadow-md text-center justify-center ">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {t('home.title')}    
                </h1>
                <div className="flex justify-center">
                    <p className="text-zinc-950 max-w-xl "> 
                        {t('home.description')}
                    </p>
                </div>
            </div>
    </section>
    )
}

export default Home;