import React, { useEffect, useState } from 'react';

export const useGetBusStopListAPI1 = (callback) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isRequestSent, setRequestSent] = useState(false);

  useEffect(() => {
    const getBusStopList = async () => {
      try {
        const response = await fetch('https://data.etabus.gov.hk/v1/transport/kmb/stop');
        const json = await response.json();
        setData(json);
        setLoading(false);
        callback(json); // Notify the caller with the data
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (!isRequestSent) {
      getBusStopList();
      setRequestSent(true);
    }
  }, [callback, isRequestSent]);

  return isLoading;
};