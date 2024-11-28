import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DynamicImport from './pages/DynamicImport';
import ImportOnVisibility from './pages/ImportOnVisibility';
import ListVirtualization from './pages/ListVirtualization';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <h1>React Router</h1>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/dynamic-import"><li>Dynamic Import</li></Link>
          <Link to="/import-on-visibility"><li>Import On Visibility</li></Link>
          <Link to="/list-virtualization"><li>List Virtualization</li></Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dynamic-import" element={<DynamicImport />} />
        <Route path="/import-on-visibility" element={<ImportOnVisibility />} />
        <Route path="/list-virtualization" element={<ListVirtualization />} />
      </Routes>
    </Router>
  );
}

export default App;