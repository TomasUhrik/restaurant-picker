export const MAP_STYLES = [
  {
    featureType: "all",
    stylers: [
      {
        saturation: 0,
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        saturation: -20,
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        saturation: -60,
      },
    ],
  },
];
