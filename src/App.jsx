import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/home";
import Chart from "./pages/chart";
import Collection from "./pages/collection";
// ... other imports

function App() {
    return (
        <Routes>
            {/* Main Layout Routes */}
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="chart" element={<Chart />} />
                <Route path="collection" element={<Collection />} />
                {/* ... other routes */}
            </Route>
        </Routes>
    );
}

export default App;
