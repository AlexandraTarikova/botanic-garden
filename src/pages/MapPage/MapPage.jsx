import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import { MapInteractionCSS } from 'react-map-interaction';
import mapImg from './map2.png';
import pointerRed from './pointer_red.png';
import pointerGreen from './pointer_green.png';

import {Root, MapContainer, MapPointer} from './styles';
import { plantsIds, plantsPositions } from '../../data/plants';
import { plantsIcons } from '../../assets';

const MapPage = ({plantsState}) => {
  const params = useParams();

  return (
    <Root>
      <MapContainer>
        <img src={mapImg}/>
        {
          plantsIds.map((id, index) => (<MapPointer 
            to={`/map/${id}`}
            top={plantsPositions[id].top}
            left={plantsPositions[id].left}
            withArea={id === params?.id && plantsState[params.id] !== 'discovered'}
            isSmall={params?.id && id !== params.id}
            blured={plantsState[id] === 'hint'}
            >
              <div>
                <img src={plantsState[id] === 'discovered' ? pointerGreen : pointerRed}/>
                {
                  plantsState[id] !== 'initial' && <img src={plantsIcons[id]}/>
                }
              </div>
            </MapPointer>))
        }
      </MapContainer>
    </Root>
  )
};

export default MapPage;


/*
    <Root>
      <MapContainer>
        <MapInteractionCSS
          minScale={0.2}
          maxScale={1}
          translationBounds={{xMax: 0, yMax: 0}}
          onChange={(value) => console.log('EVENT EVENT')}
        >
            <img ref={mapRef} src={mapImg}/>
            {
              plantsIds.map((id, index) => (<MapPointer 
                to={`/map/${id}`}
                top={plantsPositions[id].top}
                left={plantsPositions[id].left}
                />))
            }
        </MapInteractionCSS>
      </MapContainer>
    </Root>
*/
