import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Playlist from "./pages/Playlist";
import Radio from "./pages/radio";

// ... other imports

function App() {
    // const location = useLocation();

    return (
        <Routes>
            {/* Main Layout Routes */}
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="playlist" element={<Playlist />} />
                <Route path="radio" element={<Radio />} />
                {/* ... other routes */}
            </Route>
        </Routes>
    );
}

export default App;
