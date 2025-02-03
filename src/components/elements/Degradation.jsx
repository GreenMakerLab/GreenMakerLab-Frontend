import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Degradation() {
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
              {renderColumn(elements, 45, 49, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              Degradação 
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              Substâncias persistentes podem permanecer nos ambientes naturais e artificiais por tempo indefinido. Estes compostos podem acumular-se e atingir níveis prejudiciais à saúde, ao ambiente e aos recursos naturais. Essa contaminação pode ser pouco reversível ou mesmo irreversível, e pode tornar inutilizáveis recursos naturais como o solo e a água num futuro distante. Como tal, existe a necessidade de conceber produtos químicos e materiais, especialmente aqueles que são distribuídos intencionalmente ou não no ambiente, que sejam estáveis durante a sua vida útil e depois se degradem quando já não são funcionalmente necessários. Projetar para a degradação é necessário, mas não suficiente para atingir os objetivos da química sustentável; os produtos de degradação subsequentes deverão, eles próprios, ser benignos para a saúde humana e para o ambiente.
            </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}