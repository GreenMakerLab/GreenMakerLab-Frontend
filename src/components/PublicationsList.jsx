import { useEffect, useState } from "react";
import { getArticles } from "../api";


function PublicationsList() {
    const [articles, setArticles] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await getArticles()
            
            const sortedArticles = [...data].sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            )

            const articlesWithShowMore = sortedArticles.map(article => ({
                ...article,
                showMore: false
            }))

            setArticles(articlesWithShowMore)
        }
        fetchArticles()
    }, [])
    const toggleShowMore = (id) => {
        setArticles(articles.map(article => 
            article.id === id 
                ? { ...article, showMore: !article.showMore } 
                : article
        ));
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    return (
        <>
            <div className="search mb-8"> 
                <svg  className="inline-flex items-center size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" id="search-bar" placeholder="Pesquisa..."  
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-2 p-2 border rounded-md shadow-sm w-full max-w-md"/> 
            </div>
            {searchTerm === "" && (
                <h3 className="text-xl font-normal mb-4">ARTIGOS PUBLICADOS</h3>
            )}
            <div id="articles-container" className="space-y-8">
                    {filteredArticles.map((article) => (
                        <div key={article.id} className="article p-6 bg-white shadow rounded-md" data-title={article.title}>
                            <h2 className="text-2xl font-serif mb-4">{article.title}</h2>
                            <p className="font-bold mb-2">Resumo:</p>
                        <span>
                            {article.resume}
                            <button
                                id="forMore"
                                onClick={() => toggleShowMore(article.id)}
                                className="mt-4 text-blue-600 hover:underline"
                            >
                                Saiba mais
                            </button>
                            {article.showMore && (
                                <p  className="mt-2 leading-relaxed">
                                    {article.content}
                                    {article.doi && (
                                        <a href={article.doi} target="_blank" className="text-blue-600 hover:underline">DOI</a>
                                    )}
                                    {article.pdf && (
                                        <a href={article.pdf} target="_blank">
                                            <img src="/img/pdf.svg" alt="pdf" className="inline ml-2"/>
                                        </a>
                                    )}
                                </p>
                            )}
                        </span>
                        </div>
                    ))}
            </div>
            
        </>
    );
}

export default PublicationsList;
