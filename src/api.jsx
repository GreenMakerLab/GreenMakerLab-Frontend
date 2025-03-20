
const API_URL = import.meta.env.VITE_API_URL;

// Função para obter o cabeçalho de autenticação
const getAuthHeader = () => {
    const token = localStorage.getItem('access_token'); 
    return { 'Authorization': `Bearer ${token}` };
};

// Função para buscar artigos
export const getArticles = async () => {
    try{
        const response = await fetch(`${API_URL}/articles`);
        const data  = response.headers.get('Content-Type')?.includes('application/json')
        ? await response.json()
        : null;

        if (!response.ok) {
            throw new Error(data?.message || 'Erro ao buscar artigos');
        }
        return data;
    }catch(error){
        throw new Error(`Falha ao buscar arquivos ${error.message}`)
    }
};

// Função para criar um artigo
export const createArticles = async (article) => {
    try {
        const response = await fetch(`${API_URL}/articles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader(),
          },
          body: JSON.stringify(article),
        });
    
        if (!response.ok) {
            
          const errorText = await response.json(); 
          throw new Error(errorText || 'Erro ao criar artigo');
        }
    
        return await response.json(); 
      } catch (error) {
        throw new Error(error.message);
      }
    };
//Função para alterar um artigo
export const change_article = async(article) =>{
    try{ 
        const response = await fetch(`${API_URL}/articles/${article.id}`, {
            method: 'PUT',
            headers:{ 
                'Content-Type': 'application/json', 
                ...getAuthHeader(),
            },
            body: JSON.stringify(article)
        })
        if (!response.ok) {
            
            const errorText = await response.json(); 
            throw new Error(errorText || 'Erro ao alterar o artigo');
          }
      
          return await response.json(); 
    }catch (error) {
          throw new Error(error.message);
        }
      };
    



// Função para deletar um artigo
export const deleteArticle = async (id) => {
    try{
        const response = await fetch(`${API_URL}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                ...getAuthHeader()
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao deletar artigo');
        }
        if (response.status === 204) {
            return { message: 'Artigo deletado com sucesso.' };
        }
        return await response.json();
    }catch(error){
        throw new Error(`Falha ao deletar o artigo ${error.message}`)
    }
};

// Função para fazer login
export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('access_token', data.access_token); 
            return data;
        } else {
            throw new Error(data.message || 'Erro no login');
        }
    } catch(error){
        throw new Error(`Falha ao fazer login: ${error.message}`);
    }
};
