import { elements } from '../periodicElements';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { handleElementClick, renderElementVideo, renderColumn } from '../FunctionsElements';
import { useTranslation } from 'react-i18next';

export default function EnablingSystem() {
  const [selectedElement, setSelectedElement] = useState(null);
  const { t } = useTranslation(); 
  const [screenX, setScreenX] = useState(window.innerWidth)

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
              className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90">
              {t("elements.back")}
            </button>
            </Link>
          <div className="flex flex-col sm:flex-row justify-center items-start xs:items-center ">
            <div className="grid grid-cols-5 mt-4 mr-5  xs:mb-3 justify-center " >
              { screenX >=500 ? 
                [
                  renderColumn(elements, 53, 59, false,0, handleElementClick, setSelectedElement, false, false, 1 ),
                  renderColumn(elements, 59, 65, false, 0, handleElementClick, setSelectedElement, false, false, 2),
                  renderColumn(elements, 65, 71, false, 0, handleElementClick, setSelectedElement, false, false, 3),
                  renderColumn(elements, 71, 77, false, 0, handleElementClick, setSelectedElement, false, false, 4),
                  renderColumn(elements, 77, 83, false, 0, handleElementClick, setSelectedElement, false, false, 5)
                ]
                : 
                [ renderColumn(elements, 53, 59, false,0, handleElementClick, setSelectedElement, false, false,true),
                renderColumn(elements, 59, 65, false, 0, handleElementClick, setSelectedElement, false, false,true),
                  renderColumn(elements, 65, 71, false, 0, handleElementClick, setSelectedElement, false, false,true,),
                  renderColumn(elements, 71, 77, false, 0, handleElementClick, setSelectedElement, false, false,true),
                  renderColumn(elements, 77, 83, false, 0, handleElementClick, setSelectedElement, false, false,true)
                ]
            }
            </div>
            <div className=" w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-2/4 bg-gray-100 rounded-lg shadow-lg text-black ">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">{t("ConditionsElements.name")} </h2>
              <p className="text-lg leading-relaxed text-justify text-gray-700">
             {t("ConditionsElements.discretion")}
              </p>
            </div>
          </div>
        </section>
        )}
      </section>
  );
}