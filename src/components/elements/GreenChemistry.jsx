import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function GreenChemistry() {
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
            <Link to="/TPQVS"> 
              <button 
                className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90 mb-6">
                Voltar à Tabela
              </button>
              </Link>
            <div className="flex flex-col sm:flex-row justify-center items-start">
              <div className="grid xs:mb-3 xs:grid-cols-10 xs:ml-10  sm:grid-cols-10 sm:justify-items-end xs:justify-center xs:justify-items-center gap-0  ">
                {renderColumn(elements, 13, 17, true, 0, handleElementClick, setSelectedElement,)}
                {renderColumn(elements, 17, 21, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 21, 25, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 25, 29, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 29, 33, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 33, 37, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 37, 41, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 41, 45, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 45, 49, true, 0, handleElementClick, setSelectedElement)}
                {renderColumn(elements, 49, 53, true, 0, handleElementClick, setSelectedElement)}
              </div>
              <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
                <h2 className="text-xl sm:text-2x1 font-bold text-center mb-2 sm:mb-4 text-gray-900">
                  Química Verde e Elementos de Engenharia Verde 
                </h2>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                  Esta coleção de ciência e tecnologia é a manifestação dos Doze Princípios da Química Verde e dos Doze Princípios da Engenharia Verde.
                </p>
              </div>
          </div>
        </section>
        )}
      </section>
  );
}