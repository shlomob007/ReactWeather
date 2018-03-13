import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5em 0.5em;
  border-radius: 0.5em;
  border: 0.1em solid white;
`;
const Title = styled.div`
  color: #ffffff;
  margin: 0.3em;
  font-size: 1.4em;
`;
const Button = styled.button`
  font-size: 0.8em;
  padding: 0.25em 1em;
  border: 3px solid palevioletred;
  border-radius: 3px;
`;

class CityInfo extends React.Component {
  onClick = event => {
    const { addToFavorits } = this.props;
    addToFavorits(this.props.city);
  };
  render() {
    if (this.props.name === undefined) {
      return <Wrapper />;
    }

    return (
      <Wrapper>
        <Title>City: {this.props.name}</Title>
        <Title>Temperature: {this.props.telemetry.temp}&#8451;</Title>
        <Button onClick={this.onClick}>Add to Favorites</Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const name = state.weather.data.name;
  const telemetry = state.weather.data.main || { temp: 0 };
  const city = state.weather.data;

  console.log("HERE", {
    name,
    telemetry,
    city
  });
  return {
    name,
    telemetry,
    city
  };
};

CityInfo = connect(mapStateToProps, actions)(CityInfo);

export default CityInfo;
