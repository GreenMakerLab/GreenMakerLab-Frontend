import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';
import { useTranslation } from 'react-i18next';

export default function Humanitarian() {
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
          <section className="mx-auto min-h-screen p-3 bg-Periodic">
            <Link to="/TPQVS"> 
            <button 
              className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90 mb-6">
              {t("elements.back")}
            </button>
            </Link>
          <div className="flex flex-row sm:flex-row justify-center items-center gap-2 "  >
            <div className={"grid grid-cols-2"}>
              {screenX <= 500 ? 
                [
                  renderColumn(elements, 0, 7, false, 0, handleElementClick, setSelectedElement,true,1),
                  renderColumn(elements, 7, 13, true, 1, handleElementClick, setSelectedElement,true,2)
                ]
                :
                [ renderColumn(elements, 0, 7, false, 0, handleElementClick, setSelectedElement),
                  renderColumn(elements, 7, 13, true, 1, handleElementClick, setSelectedElement)]
              }
             
            </div>
            <div className={` ${screenX <= 768 ? 'w-3/4' : "w-2/4"}  p-5 bg-gray-100 rounded-lg shadow-lg text-black xs:mt-10`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900">
              {t("Humanitarian.Humanitarian")} {t("Humanitarian.Elements")}
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-700">
              {t("Humanitarian.discretion")}
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}