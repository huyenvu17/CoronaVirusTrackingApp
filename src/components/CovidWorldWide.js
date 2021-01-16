import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import {covidTrackingServices} from '../services/CovidTrackingServices';
import {global} from '../config/config'
function CovidWorldWide() {
  let [covidWorldWideInfo, setCovidWorldWideInfo] = useState({});
  let [isFirstLoading, setIsFirstLoading] = useState(true);
  useEffect(() => {
    covidTrackingServices.covidSummary().then((response)=>{
      if(response.status === 200){
        setCovidWorldWideInfo(response.data.Global);
        setIsFirstLoading(false)
      }
    }).catch((error)=>{
      console.log(error)
    })
  },[global])
  const renderGlobalStatus = () => {
    if(isFirstLoading){
      return (<Skeleton height={80}/>)
    }else{
      return (
        <div className="covidworldwide__list">
            <div className="covidworldwide__item">
                <div className="covidworldwide__status">Confirmed</div>
                <div className="covidworldwide__number">{covidWorldWideInfo.TotalConfirmed.toLocaleString('en')}</div>
            </div>
            <div className="covidworldwide__item">
                <div className="covidworldwide__status">Recovered</div>
                <div className="covidworldwide__number">{covidWorldWideInfo.TotalRecovered.toLocaleString('en')}</div>
            </div>
            <div className="covidworldwide__item">
                <div className="covidworldwide__status">Deaths</div>
                <div className="covidworldwide__number">{covidWorldWideInfo.TotalDeaths.toLocaleString('en')}</div>
            </div>
          </div>
      )
    }
  }
  return (
    <div className="covidworldwide">
      <div className="heading-md-cap">WorldWide</div>
      {renderGlobalStatus()}
    </div>
  )
  
}

export default CovidWorldWide
