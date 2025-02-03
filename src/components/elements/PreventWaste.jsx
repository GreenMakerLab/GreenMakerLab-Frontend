import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function PreventWaste() {
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
            <div className="grid grid-cols-2 xs:mb-3 xs:justify-center xs:justify-items-center xs:ml-32">
              {renderColumn(elements, 13, 17, false, 0, handleElementClick, setSelectedElement, true)}
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Evite desperdícios
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                Independentemente da sua natureza, os resíduos consomem recursos, tempo, esforço e dinheiro, tanto quando são criados como quando são manuseados e geridos no final da vida útil, sendo que os resíduos perigosos exigem investimentos ainda maiores para monitorização e controlo.  Como já foi afirmado em diversas ocasiões, criar, manusear, armazenar e descartar resíduos é necessariamente uma despesa e não agrega valor em termos de inovação ou desempenho. Nos processos de produção, portanto, o desperdício é sempre indesejável em todas as suas formas.
                Idealmente, moléculas, produtos, processos e sistemas seriam concebidos para não criar resíduos.  Ou seja, deveríamos procurar eliminar o conceito de desperdício, concebendo os resultados como matérias-primas noutros locais, imitando os sistemas naturais. Quer o desperdício seja material, energia, espaço, tempo ou o derivado de tudo isso, dinheiro, existem estratégias de design que podem e estão sendo implementadas na Química e Engenharia Verde para eliminar o conceito de desperdício.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}