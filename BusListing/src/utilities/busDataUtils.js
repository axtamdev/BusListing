export const handleData = (busData) => {
  const currentTimestamp = new Date();
  const dataArray = Array.isArray(busData.busStopETA) ? busData.busStopETA : [];

  const filteredData = dataArray.reduce((acc, item) => {
    const staTimestamp = new Date(item.eta);
    const timeDifference = staTimestamp - currentTimestamp;
    var minutesDifference
    if (item.eta === null) {
      minutesDifference = "!"
    } else {
      minutesDifference = Math.floor(timeDifference / (1000 * 60))
      if (minutesDifference <= 0) {
        minutesDifference = "-"
      }
    }

    const existingItem = acc.find((existing) => existing.route === item.route);
    if (!existingItem || minutesDifference < existingItem.minutesDifference) {
      const newItem = {
        route: item.route,
        destination: item.dest_tc,
        busStop: busData.busStopName,
        minutesDifference: minutesDifference,
        serviceType: item.service_type,
        busStopId: busData.busStopId,
        long: busData.busStopLong,
        lat: busData.busStopLat
      };
      if (existingItem) {
        acc.splice(acc.indexOf(existingItem), 1, newItem);
      } else {
        acc.push(newItem);
      }
    }

    return acc;

  }, []);

  return filteredData;
};