import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// MiniDapps Import
import MiniDapps from './pages/MiniDapps';

// Css Import
import './assets/scss/app.scss';

const App = () => {
  return (
    <Router>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<MiniDapps />}/>
			</Routes>
    </Router>
  )
}

export default App;
