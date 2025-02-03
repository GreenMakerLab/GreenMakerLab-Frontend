import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Policies() {
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
              {renderColumn(elements, 71, 74, true, 1, handleElementClick, setSelectedElement, true)} 
              {renderColumn(elements, 74, 77, true, 1, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Políticas e Regulamentos 
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                O panorama das tecnologias na empresa química não é moldado apenas por soluções científicas e de engenharia, mas sim em combinação com o ambiente de regulamentação, políticas e leis que constroem o contexto social em que operam.
                As políticas e regulamentações podem acelerar ou retardar soluções de sustentabilidade e podem proteger ou ajudar a substituir tecnologias insustentáveis arraigadas. 
                O desenvolvimento de regulamentos e políticas que capacitem e permitam que a química verde e a engenharia verde tenham sucesso na sociedade será necessário para remover os obstáculos e a inércia que mantêm o status quo em vigor.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}