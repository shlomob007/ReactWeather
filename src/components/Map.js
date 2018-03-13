import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  render() {
    const markers = []; //ToDo:
    return (
      <GoogleMap defaultZoom={4} defaultCenter={{ lat: 50.49, lng: 13.68 }}>
        {this.props.markers.map((marker, index) => (
          <Marker position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => {
  const markers = state.favorites.list.map(item => ({
    lng: item.coord.lon,
    lat: item.coord.lat
  }));
  return {
    markers
  };
};

Map = connect(mapStateToProps, actions)(Map);

export default withGoogleMap(Map);
