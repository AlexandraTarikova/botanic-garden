import React, {UseState} from 'react';
import {useParams} from 'react-router-dom';

import {
  Root, 
  CardContainer, 
  CardIconDummy,
  CardIcon,
  CardBg,
  CardPlate,
  CardTitle, 
  CardDescription, 
  CardOptions, 
  CardOption, 
  CloseButton,
} from './styles';

import { plantsIds, plantsNames, plantsDescriptions, plantsQuestions, plantsOptions } from '../../data/plants';
import { plantsIcons, plantsBgPictures } from '../../assets';
import arrowImg from './arrow.png';

const PlantPage = ({plantsState, setPlantsState}) => {
  const params = useParams();
  const plantState = plantsState[params.id];

  const handleOptionClick = (index) => {
    setPlantsState({...plantsState, [params.id]: (index === 0 ? 'discovered' : 'hint')})
  }

  return (
    <Root>
      {
        plantState !== 'discovered' 
        ? 
          <CardContainer>
            {
              plantState === 'initial' 
              ? <CardIconDummy/>
              : <CardIcon src={plantsIcons[params.id]} blured={true}/>
            }
            <CardTitle>???</CardTitle>
            <CardDescription>{plantsDescriptions.ru[params.id]}<br/><br/>{plantsQuestions.ru[params.id]}</CardDescription>
            <CardOptions>
              {
                plantsOptions.ru[params.id].map((option, index) => <CardOption onClick={() => handleOptionClick(index)}>{option}</CardOption>)
              }
            </CardOptions>
            <CloseButton to='/map' withBg={false}>
              <img src={arrowImg}/>
            </CloseButton>
          </CardContainer>
        :
          <CardContainer>
            <CardBg src={plantsBgPictures[params.id]}/>
            <CardPlate>
              <CardTitle>{plantsNames.ru[params.id]}</CardTitle>
              <CardDescription>{plantsDescriptions.ru[params.id]}</CardDescription>
              <CardOptions />
            </CardPlate>
            <CloseButton to='/map' withBg={true}>
              <img src={arrowImg}/>
            </CloseButton>
          </CardContainer>
      }
    </Root>
  )
};

export default PlantPage;

/*
    <Root>
      {
        plantState !== 'discovered' 
        ? 
          <CardContainer>
            <CardOptions>
              {
                plantsOptions[params.id].map((option, index) => 
                  <CardOption onClick={() => handleOptionClick(index)}>
                    {option}
                  </CardOption>
                )
              }
            </CardOptions>
          </CardContainer>
        :
          <CardContainer>
          </CardContainer>


      }
    </Root>
*/