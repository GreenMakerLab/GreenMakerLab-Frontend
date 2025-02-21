import { elements } from "../periodicElements";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {handleElementClick,renderElementVideo,renderColumn,} from "../FunctionsElements";
import { useTranslation,  } from "react-i18next";

export default function NobleElements() {
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
          <Link  to="/TPQVS">
            <button className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90 ">
              {t("elements.back")}
            </button>
          </Link>
          <div className="flex flex-row gap-4 justify-center  items-start">
            <div className={`grid grid-cols-2 ${screenX <= 500 ? "mt-20" : "mt-0"} `}>
              {renderColumn(
                elements,
                83,
                87,
                false,
                0,
                handleElementClick,
                setSelectedElement,
                true
              )}
              {renderColumn(
                elements,
                87,
                90,
                true,
                1,
                handleElementClick,
                setSelectedElement,
                true
              )}
            </div>
            <div className={` ${screenX <= 768 ? 'w-3/4' : "w-2/4"} p-5 bg-gray-100 rounded-lg shadow-lg text-black ml-0 xl:mt-36 xs:mt-20`}>
              <h2 className="text-xl  md:text-3xl font-bold text-center mb-2  text-gray-900">
                {t("NobleGoals.title")}
              </h2>
              <p className="text-xs  md:text-base leading-relaxed text-justify text-gray-700">
                {t("NobleGoals.discretion")}
              </p>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
