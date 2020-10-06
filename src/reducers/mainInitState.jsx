export default {
  currentScore: 0,
  isPaused: true,
  step: 20,
  ratio: 0.1,
  direction: [0, 1],
  positions: [
    {
      x: 40,
      y: 100,
    },
    {
      x: 40,
      y: 80,
    },
    {
      x: 40,
      y: 60,
    },
    {
      x: 40,
      y: 40,
    },
    {
      x: 40,
      y: 20,
    },
  ],
  food: {
    x: 200,
    y: 200,
  },
  area: {
    height: 300,
    width: 300,
  },
  border_width: 3,
  segment: {
    height: 20,
    width: 20,
  },
};
