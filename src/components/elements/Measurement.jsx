import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Measurement() {
  const [selectedElement, setSelectedElement] = useState(null);


  return (
      <section>
        {selectedElement ? (
          <section>
            <div className="flex items-center justify-center">
            {renderElementVideo(selectedElement, setSelectedElement)}
          </div>
          </section>
          
        ) : (
          <section className="mx-auto min-h-screen p-3 bg-Periodic">
          <div className="flex flex-col sm:flex-row justify-evenly items-start">
          <Link to="/TPQVS"> 
            <button 
              className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90 mb-6">
              Voltar à Tabela
            </button>
            </Link>
            <div className="grid grid-cols-2 xs:mb-3 xs:justify-center xs:justify-items-center xs:ml-32  ">
              {renderColumn(elements, 49, 53, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Medição e Conscientização 
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                Para saber se uma ação ou invenção é positiva ou negativa para o mundo, é necessário que haja algum tipo de feedback do sistema. Na ausência deste feedback, há pouco mais do que suposições e suposições insuficientes. No entanto, a forma como escolhemos medir o desempenho e o impacto dos nossos produtos, processos e sistemas terá frequentemente um impacto profundo na compreensão que retiramos destas medições. (Mesmo a bússola é apenas bidimensional.) Se operarmos em sistemas multidimensionais como os envolvidos com a sustentabilidade, precisaremos de sistemas de medição que sejam tão multidimensionais se quisermos obter insights deles. Medições tradicionais e limitadas, como medidas de eficiência, serão insuficientes para este sistema complexo. Além disso, os nossos sistemas de medição têm sido frequentemente ferramentas retrospectivas que nos fornecem relatórios sobre o que aconteceu no passado, por vezes com intervalos suficientemente longos para que a informação em si seja irrelevante. Agora temos ferramentas e capacidades computacionais que podem fornecer insights e consciência em tempo real que permitem ações relevantes.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}