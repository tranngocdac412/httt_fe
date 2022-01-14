import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import NotfoundPage from './Notfound/NotfoundPage';
import { render } from '@testing-library/react';
import { Component } from 'react';
import CreatePage from './Pages/CreatePage';

class App extends Component {
  render(){
    return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/create" element={<CreatePage/>}/>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    );
  }
}

export default App;
