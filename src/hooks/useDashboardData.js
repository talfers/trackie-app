

export default (shouldTrack, callback) => {
  const createSpeedData = (locations) => {
    const speedList = locations.map(loc => {
      const milesPerHour = loc.coords.speed * 2.23694;
      return milesPerHour;
    });
    let sum = speedList.reduce((previous, current) => current += previous);
    const speedAvg = sum / speedList.length;
    const speedMax = Math.max(...speedList)
    return {
      speedList,
      speedMax,
      speedAvg
    }
  }

  return [dashboardData];
}
