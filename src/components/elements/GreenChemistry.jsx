import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';
import { useTranslation } from 'react-i18next';

export default function GreenChemistry() {
  const [selectedElement, setSelectedElement] = useState(null);
  const { t } = useTranslation();
  const [screenX, setScreenX] = useState(window.innerWidth);

    useEffect(()=>{
      const handleSize = ()=>{
        setScreenX(window.innerWidth)
      } 
      window.addEventListener("resize", handleSize)
      return () => {window.removeEventListener("resize", handleSize)}
    }, [])


  return (
      <section>
        {selectedElement ? (
          <section>
            <div className="flex items-center justify-center">
            {renderElementVideo(selectedElement, setSelectedElement)}
          </div>
          </section>
          
        ) : (
          <section className="mx-auto min-h-screen bg-Periodic">
            <Link to="/TPQVS"> 
              <button 
                className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90 mb-6">
               {t("elements.back")}
              </button>
              </Link>
            <div className="flex flex-col sm:flex-row justify-center items-start gap-2">
              <div className="grid grid-cols-10 justify-items-end ">
                {screenX >= 500
  ? [
      renderColumn(elements, 13, 17, true, 1, handleElementClick, setSelectedElement,false, false, 1),
      renderColumn(elements, 17, 21, true, 1, handleElementClick, setSelectedElement,false, false,2),
      renderColumn(elements, 21, 25, true, 1, handleElementClick, setSelectedElement,false, false,3),
      renderColumn(elements, 25, 29, true, 1, handleElementClick, setSelectedElement,false, false,4),
      renderColumn(elements, 29, 33, true, 1, handleElementClick, setSelectedElement,false, false,5),
      renderColumn(elements, 33, 37, true, 1, handleElementClick, setSelectedElement,false, false,6),
      renderColumn(elements, 37, 41, true, 1, handleElementClick, setSelectedElement,false, false,7),
      renderColumn(elements, 41, 45, true, 1, handleElementClick, setSelectedElement,false, false,8),
      renderColumn(elements, 45, 49, true, 1, handleElementClick, setSelectedElement,false, false,9),
      renderColumn(elements, 49, 53, true, 1, handleElementClick, setSelectedElement,false, false,10)
    ]
  : [
      renderColumn(elements, 13, 17, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 17, 21, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 29, 33, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 21, 25, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 33, 37, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 37, 41, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 41, 45, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 45, 49, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 49, 53, true, 0, handleElementClick, setSelectedElement, false, true),
      renderColumn(elements, 25, 29, true, 0, handleElementClick, setSelectedElement, false, true)
    ]
}
              </div>
              <div className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black xl:mt-20">
                <h2 className="text-xl sm:text-2x1 font-bold text-center mb-2 sm:mb-4 text-gray-900">
                {t("GreenChemistry.name")}
                </h2>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
                  {t("GreenChemistry.discretion")}
                </p>
              </div>
          </div>
        </section>
        )}
      </section>
  );
}