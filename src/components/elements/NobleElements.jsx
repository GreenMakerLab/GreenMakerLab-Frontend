import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function NobleElements() {
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
              <span className='mt-4' >
                {renderColumn(elements, 83, 87, false, 0, handleElementClick, setSelectedElement, true)} 
              </span>
                {renderColumn(elements, 87, 90, true, 2, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-36">              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Objetivos Nobres
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                Existem alguns conceitos que são transcendentes. Estas considerações estão acima das preocupações económicas ou políticas imediatas do momento.  Elementos nobres são aqueles que se baseiam em imperativos morais que são partilhados entre culturas e através do tempo.  Estes elementos encontram a sua base em valores, justiça e equidade transgeracional.  A química pode impactar todas essas questões de forma positiva ou negativa e, portanto, esses objetivos devem entrar conscientemente em nossa tomada de decisões e em nossos projetos.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}