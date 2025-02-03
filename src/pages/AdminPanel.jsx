import { useState, useEffect } from "react";
import { createArticles,deleteArticle, getArticles  } from "../api"; 
import { useAuth } from "../context/AuthContext";

function AdminPanel() {
    const [title, setTitle] = useState("");
    const [resume, setResume] = useState("");
    const [content, setContent] = useState("");
    const [doi, setDoi] = useState("");
    const [date, setDate] = useState("");
    const { isAuthenticated, logout } = useAuth();
    const [adminData, setAdminData] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
              const response = await fetch('http://localhost:5000/api/admin', {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
                }
              });
          
              if (!response.ok) {
                throw new Error('Erro ao carregar dados do admin');
              }
          
              const data = await response.json();
              setAdminData(data);
            } catch (error) {
              console.error('Erro:', error);
            }
          };

          //buscar artigos
          const fetchArticles = async () => {
            try {
                const data = await getArticles();
                setArticles(data || []);
            } catch (error) {
                console.error('Erro ao carregar artigos:', error);
            }
        };

        if (isAuthenticated) {
            fetchAdminData();
            fetchArticles();
        }

    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <p>Você não está autorizado a acessar esta página.</p>;
    }
   
    //função para deletar os artigos
    const handleDelete = async (id) =>{
        try{
            await deleteArticle(id);
            alert("Artigo deletado com sucesso!");
            setArticles(articles.filter(article => article.id !== id));
        }catch(error){
            console.error("Erro ao deletar o artig", error)
            alert("Erro ao deletar artigo. Tente novamente em alguns minutos");
        }
    }

    //função para adicionar os artigos
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newArticle = {
                title,
                resume,
                content,
                doi,
                date,
            };
            await createArticles(newArticle); 
            alert("Artigo criado com sucesso!");
            setTitle("");
            setResume("");
            setContent("");
            setDoi("");
            setDate("");
            const data = await getArticles();
            setArticles(data || []);
        } catch (error) {
            console.error("Erro ao criar artigo:", error);
            alert("Erro ao criar artigo. Tente novamente em alguns minutos");
        }
    };

    return (
        <div className="p-6 bg-gray-100 rounded-md">
            <h1>Painel do admin</h1>
                {adminData ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Adicionar Artigo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Título"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                                <textarea
                                    placeholder="Resumo"
                                    value={resume}
                                    onChange={(e) => setResume(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                                <textarea
                                    placeholder="Conteúdo"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="DOI"
                                    value={doi}
                                    onChange={(e) => setDoi(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                />
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-72 p-2 border rounded-md"
                                    required
                                />
                                <br/>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Adicionar Artigo
                                </button>
                            </div>
                        </form>
                        <h2 className="text-2xl font-bold mt-6 mb-4">Artigos Criados</h2>
                        <ul>
                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <li key={article.id} className="border-b py-2">
                                        <h3> <b>Título do artigo:</b> {article.title}</h3>
                                        <p> <b>Resumo do artigo:</b> {article.resume}</p>
                                        <button
                                            onClick={() => handleDelete(article.id)}
                                            className="bg-red-600 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-700"
                                        >
                                            Remover
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p>Não há artigos.</p>
                            )}
                        </ul>
                    </>
                ) : (
                    <p>Carregando...</p>
            )}
            <button
                    onClick={logout}
                    className="bg-red-600 text-white  mt-5 px-4 py-2 rounded-md hover:bg-red-700"
                >
                    Logout
                </button>
        </div>
    );
}

export default AdminPanel;