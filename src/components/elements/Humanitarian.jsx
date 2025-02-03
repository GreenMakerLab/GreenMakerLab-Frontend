import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Humanitarian() {
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
              {renderColumn(elements, 0, 7, false, 0, handleElementClick, setSelectedElement)} 
              {renderColumn(elements, 7, 13, true, 1, handleElementClick, setSelectedElement)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Elementos Humanitários
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                Estes elementos da Química Sustentável são apresentados para enfatizar os objetivos e princípios humanitários fundamentais. 
                Desde que a química existe como disciplina, ela tem desempenhado um papel central na satisfação das necessidades humanas fundamentais. 
                À medida que continuamos a exercer pressão contra os limites dos sistemas naturais, continuará a ser um desafio garantir 
                necessidades como comida, água, segurança e abrigo para as gerações futuras. A Química Sustentável também deve 
                esforçar-se para garantir que os riscos e benefícios sejam igualmente partilhados entre as populações.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}