import { TeamList } from "../components/Teamlist";
import { motion } from 'framer-motion';
const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 10 } },
  };
  
function renderElements(element) {
    return (
      <div
        key={element.name}
        className="team-member flex flex-col sm:flex-row items-center p-5 bg-gray-200 rounded-lg shadow-md"
      >
        <motion.div
          className="team-image flex-shrink-0 mb-5 sm:mb-0 sm:mr-5"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={element.img}
            alt={element.name}
            className="w-36 h-36 rounded-full object-cover"
          />
        </motion.div>
        <div className="team-info text-center sm:text-left">
          <h2 className="text-xl font-bold">{element.name}</h2>
          <p className="text-gray-700 italic mb-2">{element.post}</p>
          <p className="text-gray-600">{element.description}</p>
          <a
            href={element.curriculum}
            className="inline-block cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-5 h-5 transition-transform duration-600 ease-in-out hover:scale-110"
              src="/./img/lattes.svg"
              alt="Lattes"
            />
          </a>
        </div>
      </div>
    );
  }
  

function Team() {
    return(
        <section className="min-h-screen">
            <div className="p-5 bg-white mx-5 my-3 rounded-lg shadow-lg" >
                <h2 className="text-3xl font-bold text-center mb-8">Time</h2>
                <div className="flex flex-col gap-8">
                    {TeamList.map(renderElements)}
                </div>
            </div>
        </section>
    )
}

export default Team;