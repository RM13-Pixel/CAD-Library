import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Forum from './Forum';
import Object from './Components/Object';
import Subject from './Subject'
import SearchLibrary from './SearchLibrary';
import HorseEvolution from './Components/HorseEvolution';

import { BrowserRouter} from "react-router-dom";
import { Routes, Route} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      {/* https://stackoverflow.com/questions/49001001/using-same-component-for-different-route-path-in-react-router-v4 */}
      <Route path="/science" element={<Subject key="science" subjectArg="science"/>}></Route>
      <Route path="/technology" element={<Subject key="technology" subjectArg="technology"/>}></Route>
      <Route path="/engineering" element={<Subject key="engineering" subjectArg="engineering"/>}></Route>
      <Route path="/mathematics" element={<Subject key="mathematics" subjectArg="mathematics"/>}></Route>
      <Route path="/browse" element={<SearchLibrary/>}></Route>

      <Route path="/forum" element={<Forum/>}></Route>
      <Route path="/objects/:doi" element={<Object/>}></Route>
      <Route path="/objects/00000C144" element={<HorseEvolution/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
