import React from "react";
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";

import _connect from "../redux/connect";

const zoom = 10;
const width = "70vw";
const height = "100vh";

const mapStateToProps = state => state;

export class MapBasics extends React.Component {
  shiftCenter = e => {
    const { newCenter } = e.originalEvent;
    const { center } = this.props;

    if (newCenter[0] === center[0] && newCenter[1] === center[1]) return;

    this.props.shiftCenter(e.originalEvent.newCenter);
  };

  shiftPoint = id => e => {
    const {
      target: {
        geometry: { _coordinates: coordinates }
      }
    } = e.originalEvent;
    console.log(coordinates);
    this.props.shiftPoint({ id, coordinates });
  };

  render() {
    const { center, points } = this.props;

    return (
      <YMaps>
        <div id="map-basics">
          <Map
            state={{ center, zoom }}
            width={width}
            height={height}
            onBoundsChange={this.shiftCenter}
          >
            {points.map(point => (
              <Placemark
                key={point.id}
                {...point.placemark}
                onGeometryChange={this.shiftPoint(point.id)}
              />
            ))}
            <Polyline
              geometry={{
                coordinates: points.map(
                  point => point.placemark.geometry.coordinates
                )
              }}
              options={{
                strokeColor: "#1e98ff",
                strokeWidth: 4,
                strokeOpacity: 0.5
              }}
            />
          </Map>
        </div>
      </YMaps>
    );
  }
}

export default _connect(mapStateToProps)(MapBasics);
