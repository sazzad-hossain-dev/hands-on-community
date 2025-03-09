import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Registration";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Register />} />
            </Routes>
        </Layout>
    );
}

export default App;
