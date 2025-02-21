import { useState, useEffect, useRef } from 'react';
import { elements } from '../components/periodicElements';
import { Link, useNavigate } from 'react-router-dom';
import { handleElementClick, renderElementVideo, renderColumn } from '../components/FunctionsElements';
import { useTranslation } from 'react-i18next';

function TablePeriodic() {
  const [selectedElement, setSelectedElement] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // isMobileView para telas < 768px
  const isMobileView = screenWidth < 768;
  // isLargeScreen para telas >= 1024px
  const isLargeScreen = screenWidth >= 1024;

  const [greenChemistryOpen, setGreenChemistryOpen] = useState(false);
  const [enablingSystemOpen, setEnablingSystemOpen] = useState(false);

  const greenChemistryRef = useRef(null);
  const enablingSystemRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // Se a tela ficar maior que 768, feche menus mobile (caso estivessem abertos)
      if (window.innerWidth >= 768) {
        setGreenChemistryOpen(false);
        setEnablingSystemOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        greenChemistryOpen &&
        greenChemistryRef.current &&
        !greenChemistryRef.current.contains(e.target)
      ) {
        setGreenChemistryOpen(false);
      }
      if (
        enablingSystemOpen &&
        enablingSystemRef.current &&
        !enablingSystemRef.current.contains(e.target)
      ) {
        setEnablingSystemOpen(false);
      }
    };

    if (isMobileView && (greenChemistryOpen || enablingSystemOpen)) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [greenChemistryOpen, enablingSystemOpen, isMobileView]);

  return (
    <section className="mx-auto min-h-screen overflow-x-hidden ">
      {selectedElement ? (
        <div className="flex items-center justify-center">
          {renderElementVideo(selectedElement, setSelectedElement)}
        </div>
      ) : (
        <div className="flex justify-center mx-auto min-h-screen bg-Periodic">
          <div className="w-full mt-2">
            {/* MENU PRINCIPAL */}
            <div className="flex flex-row justify-evenly font-bold xl:gap-30 xs:gap-7 text-white text-center">
              
              <Link
                to="/Humanitarian"
                className="w-1/4 mb-5 xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-110"
              >
                <h3>
                  {t("Humanitarian.Humanitarian")}<br />
                  {t("Humanitarian.Elements")}
                </h3>
              </Link>

              {/* ============= MENU GREEN CHEMISTRY ============= */}
              {isMobileView ? (
                // Mobile
                <div
                  ref={greenChemistryRef}
                  className="relative  h-10 xl:ml-20 xs:ml-4 xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-105 z-10"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!greenChemistryOpen) {
                        setGreenChemistryOpen(true);
                      } else {
                        navigate("/GreenChemistry");
                      }
                    }}
                    className="w-full text-white font-bold focus:outline-none"
                  >
                    <h3>{t("GreenChemistry.name")}</h3>
                  </button>
                  {greenChemistryOpen && (
                    <div
                      className="
                        absolute 
                        bg-white 
                        text-black 
                        shadow-lg 
                        rounded-md 
                        p-2 
                        xs:p-0 
                        z-50 
                        w-48
                        max-w-xs 
                        sm:max-w-sm 
                        md:max-w-md 
                        break-words
                      "
                    >
                      <ul className="grid grid-cols-2 w-[100%] sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                        <li>
                          <Link to="/PreventWaste" className="hover:text-PreventWaste">
                            {t("PreventWaste.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/AtomEconomy" className="hover:text-AtomEconomy">
                            {t("AtomEconomy.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/LessHazardous" className="hover:text-LessHazardous">
                            {t("LessHazardousSynthesis.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/MolecularDesign" className="hover:text-MolecularDesign">
                            {t("MolecularDesign.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Solvents" className="hover:text-Solvents">
                            {t("Solvents/AuxiliaryChemicals.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Energy" className="hover:text-Energy">
                            {t("Energy.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Renewable" className="hover:text-Renewable">
                            {t("RenewableFeedstocks.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Catalysis" className="hover:text-Catalysis">
                            {t("Catalysis.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Degradation" className="hover:text-Degradation">
                            {t("Degradation.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Measurement" className="hover:text-Measurement">
                            {t("MeasurementandAwareness.title")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                // Desktop
                <div className="relative group w-3/4 xl:ml-20 xs:ml-4 xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-105 z-10">
                  <Link to="/GreenChemistry">
                    <h3>{t("GreenChemistry.name")}</h3>
                  </Link>
                  <div
                    className={`
                      absolute 
                      hidden 
                      group-hover:block 
                      bg-white 
                      text-black 
                      shadow-lg 
                      rounded-md 
                      p-2
                      xs:p-0 
                      z-50
                      break-words
                      w-100%
                    `}
                  >
                    <ul
                      className={`
                        grid 
                        gap-2 
                        text-base
                        w-100%
                        ${
                          isLargeScreen
                            ? "grid-cols-3" // Mais colunas em telas grandes
                            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        }
                      `}
                    >
                      <li>
                        <Link to="/PreventWaste" className="hover:text-PreventWaste">
                          {t("PreventWaste.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/AtomEconomy" className="hover:text-AtomEconomy">
                          {t("AtomEconomy.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/LessHazardous" className="hover:text-LessHazardous">
                          {t("LessHazardousSynthesis.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/MolecularDesign" className="hover:text-MolecularDesign">
                          {t("MolecularDesign.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Solvents" className="hover:text-Solvents">
                          {t("Solvents/AuxiliaryChemicals.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Energy" className="hover:text-Energy">
                          {t("Energy.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Renewable" className="hover:text-Renewable">
                          {t("RenewableFeedstocks.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Catalysis" className="hover:text-Catalysis">
                          {t("Catalysis.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Degradation" className="hover:text-Degradation">
                          {t("Degradation.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Measurement" className="hover:text-Measurement">
                          {t("MeasurementandAwareness.title")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ============= MENU ENABLING SYSTEM ============= */}
              {isMobileView ? (
                // Mobile
                <div
                  ref={enablingSystemRef}
                  className="relative w-1/4 h-12 xs:ml-4 xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-105 z-10"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!enablingSystemOpen) {
                        setEnablingSystemOpen(true);
                      } else {
                        navigate("/EnablingSystem");
                      }
                    }}
                    className="w-full text-white font-bold focus:outline-none"
                  >
                    <h3>{t("ConditionsElements.name")}</h3>
                  </button>
                  {enablingSystemOpen && (
                    <div
                      className="
                        absolute 
                        bg-white 
                        text-black 
                        shadow-lg 
                        rounded-md 
                        p-2 
                        z-50 
                        w-32
                        max-w-xs 
                        sm:max-w-sm 
                        md:max-w-md 
                        break-words
                        
                      "
                    >
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <li>
                          <Link to="/Frameworks" className="hover:text-Frameworks">
                            {t("ConceptualFrameworks.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/EconomyMarket" className="hover:text-Market">
                            {t("EconomicsandMarketForces.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Metrics" className="hover:text-Metrics">
                            {t("Metrics.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Policies" className="hover:text-Policie">
                            {t("PoliciesandRegulations.title")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/Tools" className="hover:text-Tools">
                            {t("Tools.title")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                // Desktop
                <div className="relative group w-80 h-12 xs:ml-4 xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-105 z-10">
                  <Link to="/EnablingSystem">
                    <h3>{t("ConditionsElements.name")}</h3>
                  </Link>
                  <div
                    className={`
                      absolute 
                      hidden 
                      group-hover:block 
                      bg-white 
                      text-black 
                      shadow-lg 
                      rounded-md 
                      p-2 
                      z-50
                      break-words
                      ${
                        isLargeScreen
                          ? "w-[100%] max-w-xl"
                          : "w-[90%] max-w-xs sm:max-w-sm md:max-w-md"
                      }
                    `}
                  >
                    <ul
                      className={`
                        grid 
                        gap-4 
                        text-base
                        h-72
                        ${isLargeScreen ? "grid-cols-1" : "sm:grid-cols-2"}
                      `}
                    >
                      <li>
                        <Link to="/Frameworks" className="hover:text-Frameworks">
                          {t("ConceptualFrameworks.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/EconomyMarket" className="hover:text-Market">
                          {t("EconomicsandMarketForces.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Metrics" className="hover:text-Metrics">
                          {t("Metrics.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Policies" className="hover:text-Policie">
                          {t("PoliciesandRegulations.title")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/Tools" className="hover:text-Tools">
                          {t("Tools.title")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <Link 
                to="/NobleElements" 
                className="w-1/4 xs:text-[10px] xl:text-lg transition-transform duration-600 ease-in-out hover:scale-110"
              >
                <h3>{t("NobleElements.name")}</h3>
              </Link>
            </div>

            {/* RENDERIZAÇÃO DA TABELA */}
            <div className={`flex justify-center overflow-hidden ${screenWidth <=768 ? 'mt-8' : 'mt-0' }`}>
              {renderColumn(elements, 0, 7, false, 0, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 7, 13, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 13, 17, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 17, 21, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 21, 25, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 25, 29, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 29, 33, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 33, 37, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 37, 41, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 41, 45, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 45, 49, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 49, 53, true, 3, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 53, 59, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 59, 65, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 65, 71, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 71, 77, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 77, 83, true, 1, handleElementClick, setSelectedElement)}
              {renderColumn(elements, 83, 90, true, 0, handleElementClick, setSelectedElement)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default TablePeriodic;
