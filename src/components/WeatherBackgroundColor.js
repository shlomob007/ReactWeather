import React from "react";
import { connect } from "react-redux";

class WeatherBackgroundColor extends React.Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.telemetry.temp !== prevProps.telemetry.temp) {
      document.body.style.background = getColorByTeampature(this.props.telemetry.temp);
    }
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => {
  const telemetry = state.weather.data.main || { temp: 0 };
  return {
    telemetry
  };
};

WeatherBackgroundColor = connect(mapStateToProps)(WeatherBackgroundColor);

export default WeatherBackgroundColor;

const colors = [
  "#9C2FAE",
  "#663FB4",
  "#4055B2",
  "#587CF7",
  "#1DAAF1",
  "#20BCD2",
  "#159588",
  "#2D9A2D",
  "#8CC051",
  "#FDC12F",
  "#FD9728",
  "#FB582F"
];

const getColorByTeampature = (temp) => {
  let result = temp;
  result = result < 0 ? 0 : result;
  result = result > 100 ? 100 : result;
  const index = Math.floor(result / 10);
  return colors[index];
}