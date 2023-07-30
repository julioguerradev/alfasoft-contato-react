import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom";

import Home from './pages/Home';
import Details from './pages/Details';
import Form from "./pages/FormContact";
import Header from "./components/Header";

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <Header></Header>
    <div className="main_container">
      <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/create" element={<Form />}  />
                <Route path="/details/:id" element={<Details />}  />
            </Routes>
        </BrowserRouter>
    </div>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
