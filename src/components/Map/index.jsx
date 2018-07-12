import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import _connect from "../../redux/connect";

const zoom = 10;
const width = "70vw";
const height = "100vh";

const mapStateToProps = state => state;

class MapBasics extends React.Component {
  render() {
    const { center, points } = this.props;

    return (
      <YMaps>
        <div id="map-basics">
          <Map state={{ center, zoom }} width={width} height={height}>
            {points.map(point => (
              <Placemark key={point.id} {...point.placemark} />
            ))}
          </Map>
        </div>
      </YMaps>
    );
  }
}

export default _connect(mapStateToProps)(MapBasics);
