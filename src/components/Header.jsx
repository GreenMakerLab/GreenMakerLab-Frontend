import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header
        className={`bg-green-800 text-white p-6 flex items-center shadow-md transition-all duration-500 ease-in-out fixed top-0 left-0 w-full z-50 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}
      >
        <div className={`flex items-center xs:gap-0 xs:text-sm sm:gap-5 text-lg ${isScrolled ? 'justify-center' : ''}`}>
          <Link to="/" className="transition-transform duration-600 ease-in-out hover:scale-110">
            <img src="/img/logo.png" alt="Logo Image" className="max-w-[70px] h-auto sm:block xs:hidden" />
          </Link>
          {!isScrolled && (
            <h1 className="m-0 text-2xl hidden md:block">
              {t("header.titleLogo")}
            </h1>
          )}
          <nav className="flex items-center gap-5 xl:text-lg xs:text-sm ">
            <Link
              to="/"
              className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
            >
              {t("header.homePage")} 
            </Link>
            <Link
              to="/publications"
              className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
            >
              {t("header.publications")} 
            </Link>
            <Link
              to="/team"
              className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
            >
              {t("header.team")}
            </Link>
            <Link
              to="/about-us"
              className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline"
            >
              {t("header.aboutUs")}
            </Link>
            <Link
              to="/TPQVS"
              className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-105 hover:underline"
            >
              {isMobileView ? "PTSGC" : t("header.TPQVS")}
            </Link>
          </nav>
          {i18n.language === "pt"? 
            <div className="flex ">
              <button 
              onClick={() => handleLanguageChange('en')}
              className="text-white flex  font-bold ml-2 transition-transform duration-300 ease-in-out hover:scale-125 "
              >
                EN
                <img className='' src="/img/EUA.png" alt="" />
              </button>
             
            </div>
          :
            <div className="flex ">
              <button
                onClick={() => handleLanguageChange('pt')}
                className="text-white flex font-bold ml-2  transition-transform duration-300 ease-in-out hover:scale-125 "
              >
                PT
                <img  src="/img/BR.png" alt="" />

              </button>
            </div>
          }
          </div>
      </header>
      <div style={{ paddingTop: isScrolled ? '3rem' : '4rem' }} />
    </>
  );
}

export default Header;
