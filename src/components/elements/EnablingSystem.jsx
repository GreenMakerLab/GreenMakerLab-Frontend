import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function EnablingSystem() {
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
          <div className="flex flex-col sm:flex-row justify-center items-start xs:items-center ">
            <div className="grid grid-cols-7  xs:mb-3 justify-center " >
              {renderColumn(elements, 53, 59, false,0, handleElementClick, setSelectedElement,)}
              {renderColumn(elements, 59, 65, false, 0, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 65, 71, false, 0, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 71, 77, false, 0, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 77, 83, false, 0, handleElementClick, setSelectedElement)}
            </div>
            <div className="sm:w-1/3 p-4 bg-gray-100 rounded-lg shadow-lg text-black ">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Habilitando condições do sistema </h2>
              <p className="text-lg leading-relaxed text-justify text-gray-700">
              Para transformar a invenção e a inovação em implementação e impacto, é necessário alinhar a vasta gama de condições do sistema.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}