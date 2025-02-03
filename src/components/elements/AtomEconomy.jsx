import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';

export default function AtomEconomy() {
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
  <div className="flex flex-col sm:flex-row justify-center items-start">
    <Link to="/TPQVS">
      <button 
        className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 mb-6">
        Voltar à Tabela
      </button>
    </Link>
    <div className="grid grid-cols-2 xs:mb-3 xs:justify-center xs:justify-items-center xs:ml-32  ">
      {renderColumn(elements, 17, 21, false, 0, handleElementClick, setSelectedElement, true)} 
    </div>
    <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ml-0 sm:ml-8 sm:mt-0 xl:mt-14">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
        Economia Atômica
      </h2>
      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
        O milagre moderno da empresa química é a capacidade de transformar os materiais que ocorrem naturalmente no mundo em novos materiais com novas propriedades e desempenho que de outra forma não existiriam. A história tem mostrado que existem formas ponderadas e sábias de se envolver na transformação molecular e que existem métodos que são profundamente tóxicos, dispendiosos e esgotadores. Os novos métodos sintéticos emergentes que foram demonstrados no campo da química verde provêm de um design cuidadoso do ciclo de vida e muitas vezes usam a Natureza e os sistemas biológicos como inspiração, mentor e guia. Através deste tipo de design cuidadoso, passamos de uma definição restrita de mera eficiência para uma definição de produtividade holística.
      </p>
    </div>
  </div>
</section>

      )}
    </section>
  );
}
