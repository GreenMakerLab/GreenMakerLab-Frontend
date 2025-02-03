import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Solvents() {
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
              {renderColumn(elements, 29, 33, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              Solventes/Produtos Químicos Auxiliares
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              O custo, o impacto ambiental e a segurança de um processo químico são frequentemente determinados pelos solventes e outros produtos químicos auxiliares. É interessante notar que a quantidade de solvente utilizada muitas vezes excede matérias-primas, reagentes e produtos, principalmente no caso de processos de separação e purificação.  Mais uma vez, embora a quantidade destes produtos químicos seja uma consideração importante do ponto de vista da eficiência material e energética, é a natureza dos nossos solventes históricos que tem colocado o maior desafio ao ambiente e à saúde humana.   Os solventes convencionais têm sido geralmente voláteis, aumentando as exposições prováveis; hidrofóbicos, servindo como fontes de preocupação a longo prazo nos sistemas ambientais, e tóxicos para os ecossistemas e os seres humanos, particularmente notáveis em termos de exposição dos trabalhadores. 
              Se aspiramos a conceber produtos químicos mais seguros, o mesmo esforço e atenção devem ser aplicados na conceção de solventes mais seguros ou de processos isentos de solventes, tanto através da melhoria da natureza inerente destes compostos como da minimização dos seus potenciais de exposição.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}