import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getErrorMessage, getIsFetching } from "../reducers";
import styled from "styled-components";

const Select = styled.select`
  height: 2em;
  overflow: hidden;
  border-radius: 0.5em;
  width: 250px;
  font-size: 1em;
`;

const Message = styled.div`
  height: 2em;
  width: 250px;
  font-size: 1em;
  color: white;
`;

class Cities extends React.Component {
  onChange = event => {
    this.fetchData(event.target.value);
  };

  componentWillMount() {
    this.options = [
      {
        id: 6356055,
        name: "Barcelona"
      },
      {
        id: 6359304,
        name: "Madrid"
      },
      {
        id: 2968815,
        name: "Paris"
      },
      {
        id: 2950159,
        name: "Berlin"
      },
      {
        id: 2935517,
        name: "Dortmund"
      },
      {
        id: 2643743,
        name: "London"
      },
      {
        id: 3169070,
        name: "Roma"
      },
      {
        id: 6542283,
        name: "Milan"
      },
      {
        id: 2759794,
        name: "Amsterdam"
      },
      {
        id: 524901,
        name: "Moscow"
      }
    ];
  }

  fetchData(id) {
    const { fetchWeather } = this.props;
    fetchWeather(id);
  }

  render() {
    const { isFetching, errorMessage } = this.props;
    if (isFetching) {
      return <Message>Loading...</Message>;
    }
    if (errorMessage) {
      return <Message>{errorMessage}</Message>;
    }
    return (
      <Select onChange={this.onChange} disabled={this.isFetching}>
        <option value="-1" defaultValue>
          Select City
        </option>
        {this.options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state)
  };
};

Cities = connect(mapStateToProps, actions)(Cities);

export default Cities;
