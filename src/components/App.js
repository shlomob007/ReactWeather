import React from "react";
import WeatherBackgroundColor from "./WeatherBackgroundColor";
import Cities from "./Cities";
import CityInfo from "./CityInfo";
import Favorites from "./Favorites";
import Map from "./Map";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Item = styled.div``;

const WideItem = styled.div`
  flex-grow: 2;
`;

const App = () => (
  <WeatherBackgroundColor>
    <Container>
      <Item>
        <Cities />
        <CityInfo />
      </Item>
      <Item>
        <Favorites />
      </Item>
      <WideItem>
        <Map
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </WideItem>
    </Container>
  </WeatherBackgroundColor>
);

export default App;
