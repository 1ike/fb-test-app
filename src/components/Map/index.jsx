import React from "react";

import { YMaps, Map } from "react-yandex-maps";

const mapState = { center: [55.76, 37.64], zoom: 10 };
const width = "70vw";
const height = "70vw";

class MapBasics extends React.Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    return (
      <YMaps>
        <div id="map-basics">
          <Map state={mapState} width={width} height={height} />
        </div>
      </YMaps>
    );
  }
}

export default MapBasics;
