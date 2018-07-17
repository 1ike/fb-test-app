const options = {
  preset: "islands#blueCircleDotIconWithCaption",
  draggable: true
};

const point1 = {
  id: 0,
  name: "p0",
  placemark: {
    geometry: {
      coordinates: [55.78, 37.63]
    },
    properties: {
      hintContent: "p0",
      balloonContent: "p0"
    },
    options
  }
};
const point2 = {
  id: 1,
  name: "p1",
  placemark: {
    geometry: {
      coordinates: [55.74, 37.62]
    },
    properties: {
      hintContent: "p1",
      balloonContent: "p1"
    },
    options
  }
};
const point3 = {
  id: 2,
  name: "p2",
  placemark: {
    geometry: {
      coordinates: [55.76, 37.7]
    },
    properties: {
      hintContent: "p2",
      balloonContent: "p2"
    },
    options
  }
};

export default {
  points: [point1, point2, point3]
};

export const reorderedPoints = {
  points: [
    JSON.parse(JSON.stringify(point2)),
    JSON.parse(JSON.stringify(point1)),
    JSON.parse(JSON.stringify(point3))
  ]
};
