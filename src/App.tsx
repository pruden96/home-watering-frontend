import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import MenuButton from "./components/MenuButton";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ScheduledTasks from "./pages/ScheduledTasks";

function App() {
    return (
        // 3. BrowserRouter envuelve toda la aplicación para habilitar el enrutamiento
        <Router>
            <header>
                <MenuButton />
            </header>
            <Navigation /> {/* Incluimos la barra de navegación */}
            <main style={{ padding: "20px" }}>
                {/* 4. Routes define dónde se mostrarán los componentes de la vista */}
                <Routes>
                    {/* Route define una ruta específica: */}
                    <Route path="/" element={<Home />} />{" "}
                    {/* La ruta raíz (Home) */}
                    <Route
                        path="/scheduled-tasks"
                        element={<ScheduledTasks />}
                    />{" "}
                    {/* La ruta de Tareas Programadas */}
                    {/* Puedes añadir una ruta para un 404/No Encontrado si deseas: */}
                    <Route
                        path="*"
                        element={<h1>404 | Página no encontrada</h1>}
                    />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
