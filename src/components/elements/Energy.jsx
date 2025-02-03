import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Energy() {
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
            {renderColumn(elements, 33, 37, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              Energia
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              O setor químico consome aproximadamente 20% do consumo total de energia industrial nos EUA e contribui em proporções semelhantes para as emissões de gases de efeito estufa nos EUA. Dada a dependência dos recursos de combustíveis fósseis e das emissões de gases com efeito de estufa associadas, há uma indicação clara de que, no mínimo, a empresa química deve esforçar-se por ser tão eficiente em termos energéticos quanto possível, normalizando a função química em vez da massa na avaliação. O ganho em eficiência pode ser obtido considerando a quantidade e a qualidade dos insumos energéticos, bem como a utilização de energia residual. É claro que o sector químico tem um papel significativo a desempenhar na mudança da natureza das nossas matérias-primas energéticas para outras que sejam renováveis e no desenvolvimento de materiais que possam melhorar a geração, o armazenamento e a transmissão de energia para permitir a utilização destas fontes de energia renováveis.
              Se aspiramos a conceber produtos químicos mais seguros, o mesmo esforço e atenção devem ser aplicados na conceção de solventes mais seguros ou de processos isentos de solventes, tanto através da melhoria da natureza inerente destes compostos como da minimização dos seus potenciais de exposição.
            </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}