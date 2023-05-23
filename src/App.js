import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import MapPage from "./pages/MapPage/MapPage";
import PlantPage from "./pages/PlantPage/PlantPage";
import { plantsIds, plantsNames, plantsDescriptions } from './data/plants';
import { CombinedWrapper } from './styles';

function App() {
  const [plantsState, setPlantsState] = React.useState(plantsIds.reduce((acc, elem) => ({...acc, [elem]: 'initial'}), {}));
  return (
    <div className="App" style={{minWidth: '100vw'}}>
        <Routes>
          <Route path="/map" element={<MapPage plantsState={plantsState}/>} />
          <Route path="/map/:id" element={
            <CombinedWrapper>
              <MapPage plantsState={plantsState}/>
              <PlantPage plantsState={plantsState} setPlantsState={setPlantsState}/>
            </CombinedWrapper>
          }/>
          <Route path="/" element={<Navigate to="/map" />} />
        </Routes>
    </div>
  );
}

export default App;

