import React from "react";
import { connect } from "react-redux";

class WeatherBackgroundColor extends React.Component {
  colors = [
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
  componentDidUpdate(prevProps) {
    if (this.props.telemetry.temp !== prevProps.telemetry.temp) {
      let temp = this.props.telemetry.temp;
      temp = temp < 0 ? 0 : temp;
      temp = temp > 100 ? 100 : temp;
      const index = Math.floor(temp / 10);
      document.body.style.background = this.colors[index];
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
