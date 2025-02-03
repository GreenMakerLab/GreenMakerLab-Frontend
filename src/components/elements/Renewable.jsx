import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Renewable() {
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
              {renderColumn(elements, 37, 41, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              Matérias-primas renováveis
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              O combustível fóssil é a base da base química, material e energética da economia global. As matérias-primas de combustíveis fósseis são utilizadas para gerar eletricidade, para produzir combustíveis para transporte e para produzir uma ampla gama de bens de consumo, como plásticos, produtos de saúde e medicamentos, e agroquímicos. Estas reservas são finitas e colocam desafios adicionais relacionados com a geopolítica e a acessibilidade física.
              Dado este contexto, têm surgido esforços emergentes e importantes para aumentar a utilização de matérias-primas de base biológica para a produção de energia, produtos químicos e materiais. A utilização de matérias-primas renováveis provenientes de recursos agrícolas, florestais e aquáticos, especialmente não alimentares, resíduos e fluxos de resíduos provenientes do processamento destes materiais, será essencial para o desenvolvimento e a mudança da base material e energética da nossa economia e sociedade. No entanto, isto deve ser implementado num contexto de concorrência com a utilização de alimentos, terra e água, bem como de processamento a jusante benigno e eficiente para a recuperação do valor total da matéria-prima.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}