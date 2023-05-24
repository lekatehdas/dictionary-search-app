import './App.css'
import SearchPage from "./components/pages/SearchPage.tsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DetailsPage from "./components/pages/DetailsPage.tsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="" element={<SearchPage />}/>
                    <Route path="/:word" element={<DetailsPage />}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
