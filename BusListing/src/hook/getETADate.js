import React, { useState, useEffect } from "react";

export const useGetETADate = (busStopId, route, service_type) => {
    const [error, setError] = useState(null)
    const [etaData, setETAData] = useState([])

    useEffect(() => {
        const fetchData= async () => {
            try{
                const data = await fetchETAData(busStopId, route, service_type)
                setETAData(data)
            }catch (error){
                setError('Error')
                throw error
            }
        }
        fetchData()
        
        const timer = setInterval(fetchData, 5000)

        return(()=>{
            clearInterval(timer)
        })
    },[])

    return [etaData]

}

export const fetchETAData = async ({busStopId, route, service_type}) => {
    try {
        const res = await fetch(`https://data.etabus.gov.hk/v1/transport/kmb/eta/${busStopId}/${route}/${service_type}`)

        const data = await res.json()
        return data
    } catch (error) {
        setError('Error')
        throw error
    }
}