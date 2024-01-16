var number = function (busStops) {
  // Check if no bus stop was made:
  if (busStops.length === 0) {
    return 0;
  }

  let peopleInBus = 0;
  // Itterate over the bus stops:
  for (let i = 0; i < busStops.length; i++) {
    peopleInBus += busStops[i][0] - busStops[i][1];
  }

  return peopleInBus;
};
