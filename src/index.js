import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals.js';
import { Home } from './home.jsx';


function App() {
	
	//console.log(user);

  	return (
		<>
			
			<Routes>
				<Route exact path="/portfolio" element={ <Home/>  } ></Route>
			</Routes>
		</>
  	);

}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render (
  	
	
			<BrowserRouter>
				<App />
			</BrowserRouter>
	
);

reportWebVitals();
