import Home from './pages/Home';
import Publications from './pages/Publications';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import TablePeriodic from './pages/TablePeriodic';
import AdminPanel from './pages/AdminPanel.jsx';
import Login from './pages/Login.jsx';
import Humanitarian from './components/elements/Humanitarian';
import GreenChemistry from './components/elements/GreenChemistry';
import PreventWaste from './components/elements/PreventWaste';
import AtomEconomy from './components/elements/AtomEconomy';
import LessHazardous from './components/elements/LessHazardous';
import MolecularDesign from './components/elements/MolecularDesign';
import Solvents from './components/elements/Solvents';
import Energy from './components/elements/Energy';
import Renewable from './components/elements/Renewable';
import Catalysis from './components/elements/Catalysis';
import Degradation from './components/elements/Degradation';
import Measurement from './components/elements/Measurement';
import Frameworks from './components/elements/Frameworks';
import EconomyMarket from './components/elements/EconomyMarket';
import Metrics from './components/elements/Metrics';
import Policies from './components/elements/Policies';
import Tools from './components/elements/Tools';
import EnablingSystem from './components/elements/EnablingSystem';
import NobleElements from './components/elements/NobleElements';

const routes = [
    { path: "/", element: <Home /> },
    { path: "publications", element: <Publications /> },
    { path: "TPQVS", element: <TablePeriodic /> },
    { path: "team", element: <Team /> },
    { path: "about-us", element: <AboutUs /> },
    {path: "login", element: <Login/>  },
    {path: "adminPanel", element: <AdminPanel/>},
    { path: "Humanitarian", element: <Humanitarian /> },
    { path: "GreenChemistry", element: <GreenChemistry /> },
    { path: "PreventWaste", element: <PreventWaste /> },
    { path: "AtomEconomy", element: <AtomEconomy /> },
    { path: "LessHazardous", element: <LessHazardous /> },
    { path: "MolecularDesign", element: <MolecularDesign /> },
    { path: "Solvents", element: <Solvents /> },
    { path: "Energy", element: <Energy /> },
    { path: "Renewable", element: <Renewable /> },
    { path: "Catalysis", element: <Catalysis /> },
    { path: "Degradation", element: <Degradation /> },
    { path: "Measurement", element: <Measurement /> },
    { path: "Frameworks", element: <Frameworks /> },
    { path: "EconomyMarket", element: <EconomyMarket /> },
    { path: "Metrics", element: <Metrics /> },
    { path: "Policies", element: <Policies /> },
    { path: "Tools", element: <Tools /> },
    { path: "EnablingSystem", element: <EnablingSystem /> },
    { path: "NobleElements", element: <NobleElements /> },
];

export default routes;
