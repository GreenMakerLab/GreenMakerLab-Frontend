import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function EconomyMarket() {
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
              {renderColumn(elements, 59, 62, true, 1, handleElementClick, setSelectedElement, true)} 
              {renderColumn(elements, 62, 65, true, 1, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              Economia e Forças de Mercado
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                Os actuais sistemas económicos globais e as forças de mercado tendem a gerar incentivos perversos que resultaram na concepção e evolução da nossa infra-estrutura química existente.
                Estes sistemas económicos e de mercado são críticos e irão catalisar ou retardar a implementação da nossa ciência e da nossa tecnologia. É importante reconhecer que, além das abordagens tradicionais de análise de custo-benefício, contabilidade de custos completa, análise de risco ou métricas tradicionais, também precisaremos compreender fatores, incluindo onde os modelos de investimento são feitos, que tipo de modelos de negócios e de negócios. Os quadros de referência irão acelerar a adopção da Química Verde e da Engenharia Verde ou rejeitá-la, por mais transformadora que seja, e como podemos integrar estas forças económicas e de mercado, a fim de acelerar e ter as nossas tecnologias adoptadas.
                Estes poderosos impulsionadores podem ser aproveitados para incentivar comportamentos e tomadas de decisão alinhados com os objetivos de um futuro sustentável.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}