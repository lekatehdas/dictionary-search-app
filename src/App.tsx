import './App.css'
import SearchPage from "./components/pages/SearchPage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailsPage from "./components/pages/DetailsPage.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<SearchPage/>}/>
                    <Route path="/:word" element={<DetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
