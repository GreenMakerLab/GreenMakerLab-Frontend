import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';


export default function Metrics() {
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
              {renderColumn(elements, 65, 68, true, 1, handleElementClick, setSelectedElement, true)} 
              {renderColumn(elements, 68, 71, true, 1, handleElementClick, setSelectedElement, true)} 
            </div>
            <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
                Métricas 
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                Para que as métricas sejam úteis na sustentabilidade, devem ter atributos que reflitam a própria sustentabilidade. Eles devem ser quantitativos e qualitativos.  Olhando para as métricas históricas e para a forma como as profissões muitas vezes “adoram no altar” as métricas de eficiência, muitas vezes parece que a sociedade terceirizou a nossa tomada de decisões para métricas reducionistas quantificáveis. Ao pensar em alcançar os objetivos de sustentabilidade, precisamos de ultrapassar em muito essas métricas simplistas e associá-las a uma nova geração de métricas mais qualitativas e, muitas vezes, desconfortáveis. Estas métricas irão além de meras quantidades e, em vez disso, fornecerão informações sobre o carácter e a natureza inerente das nossas fontes de energia, dos nossos sistemas de armazenamento de energia armazenada, dos nossos materiais e dos nossos produtos químicos básicos. As métricas sustentáveis devem ser aplicáveis e relevantes ao longo do tempo e do espaço, baseadas em sistemas e capazes de combinar o reducionismo e o pensamento sistémico integrativo.
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}