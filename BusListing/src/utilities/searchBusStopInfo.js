export const searchBusStopInfo = async (busStopList) => {
    try {
      const searchStop = "18492910339410B1"; // Replace with the stop you want to search
  
      const foundStops = busStopList.data.data.filter((item) => item.stop === searchStop);
  
  
      if (foundStops.length > 0) {
        const results = foundStops.map((item) => ({
          name_tc: item.name_tc,
          lat: item.lat,
          long: item.long,
          stop: item.stop,
        }));
  
        console.log("Matching Results:", results);
      } else {
        console.log("Stop not found.");
      }
    } catch (error) {
      throw error;
    }
  };
  