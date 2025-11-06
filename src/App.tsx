import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import MainHeader from "./components/MainHeader";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import ScheduledTasks from "./pages/ScheduledTasks";
import Settings from "./pages/Settings";

function App() {
    return (
        // BrowserRouter envuelve toda la aplicación para habilitar el enrutamiento
        <Router>
            <header>
                <MainHeader />
            </header>

            <div>
                <SideMenu />
            </div>
            <main style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<ScheduledTasks />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
