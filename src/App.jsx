import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UsePageTitle from './components/TitlePage';
import routes from './Routes';
function App() {
    return (
        <section className="font-sans m-0 p-0">
            <Router>
                <UsePageTitle />
                <Header />
                <main>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </main>
                <Footer />
            </Router>
        </section>
    )
}

export default App;
