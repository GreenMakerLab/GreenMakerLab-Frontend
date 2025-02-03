import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Função usada para mudar o titulo da página cada vez que o usuário viaja para um novo tópico do header
function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {

    switch (location.pathname) {
      case '/':
        document.title = 'Página inicial - Green Maker Lab';
        break;
      case '/publications':
        document.title = 'Publicações - Green Maker Lab';
        break;
      case '/team':
        document.title = 'Time - Green Maker Lab';
        break;
      case '/about-us':
        document.title = 'Sobre nós - Green Maker Lab';
        break;
      case '/TPQVS':
        document.title = 'Tabela Periódica da química verde e sustentável - Green Maker Lab';
        break;
      default:
        document.title = 'Green Maker Lab';
    }
  }, [location]); 
}

export default UsePageTitle;
