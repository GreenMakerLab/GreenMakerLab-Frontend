import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Catalysis() {
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
            <div className="grid grid-cols-2 xs:mb-3 xs:justify-center xs:justify-items-center xs:ml-32   ">
                {renderColumn(elements, 41, 45, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Catálise 
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              Existem poucas áreas da química que exemplificam melhor a sustentabilidade do que a catálise. A catálise permite aumentar a taxa de transformação, aumentar a eficiência, utilizar menos matéria-prima, melhorar a qualidade do produto, reduzir desperdícios e emissões, ao mesmo tempo que aumenta a rentabilidade de um processo/produto. Praticamente todas as grandes empresas petroquímicas, de especialidades químicas ou farmacêuticas não seriam economicamente viáveis sem o uso da catálise. A combinação de benefícios ambientais e retornos económicos através da catálise torna-a uma das ferramentas mais óbvias e poderosas para promover a sustentabilidade através da química.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}