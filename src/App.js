import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routes from './route';
import React from 'react';
import StatusBar from './components/StatusBar/StatusBar';
import { DataContextProvider } from './DataContext';

function App() {

  const globalState = {
    data: 'This is a global value',
    // 다른 전역 상태 데이터 추가
  };

  return (
  <Router>
    <DataContextProvider>
      <div>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} exact element={route.component} />
            )
          })}
        </Routes>
      </div>
    </DataContextProvider>
  </Router>
  );
}

export default App;
