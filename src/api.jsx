
const API_URL = 'https://greenmakerlab-backend.onrender.com';

// Função para obter o cabeçalho de autenticação
const getAuthHeader = () => {
    const token = localStorage.getItem('access_token'); 
    return { 'Authorization': `Bearer ${token}` };
};

// Função para buscar artigos
export const getArticles = async () => {
    const response = await fetch(`${API_URL}/articles`);
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao buscar artigos');
    }
    return response.json();
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
          const errorText = await response.text(); 
          throw new Error(errorText || 'Erro ao criar artigo');
        }
    
        return await response.json(); 
      } catch (error) {
        throw new Error(error.message);
      }
    };

// Função para deletar um artigo
export const deleteArticle = async (id) => {
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

    return response.json();
};

// Função para fazer login
export const loginUser = async (username, password) => {
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
};