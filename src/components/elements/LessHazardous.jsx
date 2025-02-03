import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function LessHazardous() {
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
            {renderColumn(elements, 21, 25, false, 0, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              síntese menos perigosa 
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              Embora a eficiência tenha servido historicamente como um substituto para práticas sustentáveis na indústria química, é imperativo que o objectivo de reduzir a quantidade de material e energia consumida esteja intimamente associado a considerações relacionadas com a natureza desse material e energia.  Usar menos pode não ter os efeitos benéficos de redução do risco geral do processo sintético, dependendo da natureza das matérias-primas, reagentes e produtos químicos auxiliares.
              É imperativo que estas entradas e saídas, além do produto pretendido, sejam tão inerentemente benignas quanto possível.  Além disso, as condições sob as quais os processos sintéticos são realizados também devem ser consideradas na prossecução do objectivo de uma empresa química mais sustentável.  Isto oferece benefícios do ponto de vista ambiental e de saúde humana, além de uma redução na vulnerabilidade a acidentes químicos e sabotagem.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}