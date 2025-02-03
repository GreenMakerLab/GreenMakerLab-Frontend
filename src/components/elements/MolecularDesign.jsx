import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function MolecularDesign() {
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
            {renderColumn(elements, 25, 29, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
             Design Molecular 
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              A base da nossa sociedade e economia são os produtos químicos e materiais sintéticos.  Embora tenha havido avanços significativos na toxicologia associados à identificação e, em alguns casos, à previsão de produtos químicos industriais que são susceptíveis de causar danos à saúde humana e aos ecossistemas, os ganhos na informação da concepção a priori de produtos químicos com risco reduzido para os seres humanos e para o ambiente têm sido evasivos.  Para concretizar o objetivo de conceber produtos químicos que sejam seguros e funcionalmente relevantes, é necessário criar um corpo interdisciplinar de conhecimento que se situe no nexo da química computacional, da toxicologia mecanicista e da análise de big data, entre outros.  Somente quando mudarmos a natureza inerente dos produtos químicos e materiais que são fundamentais para a qualidade de vida é que poderemos realmente avançar em direção a um futuro sustentável que não dependa mais de dispendiosos controles regulatórios e tecnológicos das circunstâncias em que produtos químicos perigosos podem ser usados. e gerenciado.
            </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}