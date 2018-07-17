export const name = "test point 1";
export const coordinates = [50, 70];
export const point = {
  id: 5,
  name,
  placemark: {
    geometry: {
      coordinates
    },
    properties: {
      hintContent: name,
      balloonContent: name
    },
    options: {
      preset: "islands#blueCircleDotIconWithCaption",
      draggable: true
    }
  }
};
