import { motion } from "framer-motion";

export const groupColors = {
  "Periodic": "bg-Periodic",
  "Humanitarian": "bg-Humanitarian",
  "PreventWaste": "bg-PreventWaste",
  "AtomEconomy": "bg-AtomEconomy",
  "LessHazardous": "bg-LessHazardous",
  "MolecularDesign": "bg-MolecularDesign",
  "Solvents": "bg-Solvents",
  "Energy": "bg-Energy",
  "Renewable": "bg-Renewable",
  "Catalysis": "bg-Catalysis",
  "Degradation": "bg-Degradation",
  "Measurement": "bg-Measurement",
  "Frameworks": "bg-Frameworks",
  "Market": "bg-Market",
  "Metrics": "bg-Metrics",
  "Policie": "bg-Policie",
  "Tools": "bg-Tools",
  "Noble": "bg-Noble"
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const elementVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function handleElementClick(element, setSelectedElement) {
  setSelectedElement(element);
}

export function renderElementVideo(element, setSelectedElement) {
  return (
    <div className="rounded-lg shadow-lg p-10 flex flex-col items-center">
      <h2 className="text-xl font-bold text-center mb-4">{element.description}</h2>
      <button
        onClick={() => setSelectedElement(null)}
        className="bg-buttom text-white font-bold py-2 px-6 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-90 mb-6"
      >
        Voltar à Tabela
      </button>
      <div className="relative overflow-hidden rounded-lg shadow-md w-full h-96">
        <iframe
          className="w-full h-full aspect-video"
          src={element.video}
          title={element.label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function renderElement(element, handleElementClick, setSelectedElement, groupsElements,useAlternativeSizeGreen,useAlternativeSizeEnabling  ) {
  const elementColor = groupColors[element.group];
  const commonClasses = 'flex flex-col justify-center items-center text-black transition-transform transform hover:scale-105 relative cursor-pointer border border-black';

  const sizes = useAlternativeSizeGreen
  ? 'h-14 w-10'
  : useAlternativeSizeEnabling
  ? 'h-16 w-16 '
  : groupsElements
  ? 'h-14 w-12 md:h-20 md:w-20 lg:h-32 lg:w-32'
  : 'xs:w-5 h-6 xl:w-18 xl:h-18';

const textSizes = useAlternativeSizeGreen
  ? 'text-[5px]'
  : useAlternativeSizeEnabling
  ? 'text-[7px]'
  : groupsElements
  ? 'xs:text-[5px] lg:text-[12px]'
  : 'xs:text-[2px] xl:text-[7px]';

  return (
    <motion.section
      key={element.id}
      variants={elementVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`${elementColor} ${sizes} ${commonClasses}  `}
        onClick={() => handleElementClick(element, setSelectedElement)}
        title={element.description}
      >
        <div className={`absolute top-0 left-1 ${textSizes}`}>{element.id}</div>
        <div className={`font-bold m-0 p-0 ${textSizes}`}>{element.label}</div>
        <div className={`text-center m-0 p-0 ${textSizes}`}>{element.description}</div>
      </div>
    </motion.section>
  );
}

export function renderColumn(elements, start, end, empty, quant, handleElementClick, setSelectedElement, groupsElements, useAlternativeSizeGreen, useAlternativeSizeEnabling) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      { groupsElements ? empty && Array.from({ length: quant }).map((_, index) => (
          <div key={index} className=" lg:h-32 xs:h-14 "/>
        )): empty && Array.from({ length: quant }).map((_, index) => (
          <div key={index} className=" xs:h-6 xl:h-18 "/>
        )) 
      }
      
      {elements.slice(start, end).map((element) => (
        <motion.div key={element.id} variants={elementVariants}>
          {renderElement(element, handleElementClick, setSelectedElement, groupsElements, useAlternativeSizeGreen, useAlternativeSizeEnabling)}
        </motion.div>
      ))}
    </motion.div>
  );
}
