import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import CovidByCountryResults from './CovidByCountryResults';
import {covidTrackingServices} from '../services/CovidTrackingServices';

function CovidByCountry() {
  let [countryList, setCountryList] = useState([]);
  let [countrySlug, setCountrySlug] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let [isLoadingDetail, setIsLoadingDetail] = useState(false);
  let [covidByCountryInfo, setCovidByCountryInfo] = useState([]);
  useEffect(() => {
    covidTrackingServices.countryList().then((res) => {
      if(res.status === 200){
        setCountryList(res.data)
        setIsLoading(false)
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    covidTrackingServices.covidSummary().then((response)=>{
      if(response.status === 200){
        let countries = response.data.Countries;
        let covidStatusByCountry = countries.find(items => items.Slug === countrySlug)
         console.log('covidStatusByCountry', covidStatusByCountry)
        setCovidByCountryInfo(covidStatusByCountry);
        setIsLoadingDetail(false)
      }
    }).catch((error)=>{
      console.log(error)
    })
  },[countrySlug])

  const handleSelectCountry = (event) => {
    let countrySelected = event.target.value;
    setCountrySlug(countrySelected);
    setIsLoadingDetail(true);
  }
  const renderCountryDropdownSelect = () => {
    if (isLoading) {
      return <Skeleton height={35}/> 
    } else {
      return (
        <select id="covidByCountrySelectList" defaultValue={'default'} className="covidbycountry__selectlist"
          onChange={handleSelectCountry}
        >
          <option value="default" >Choose a country</option>
          {countryList?.map((countryItem, index)=>{
            return(
              <option value={countryItem.Slug} key={index}>{countryItem.Country}</option>
            )
          })}
        </select>
      )
    }
  }
  const renderCovidByCountryResults = () => {
    if(isLoadingDetail) {
      return (
        <div className="covidbycountry__results">
          <div className="results__statistics">
            <Skeleton height={150}/>
            <Skeleton height={150}/>
            <Skeleton height={150}/>
          </div>
        </div>
      )
    }  else{
      return <CovidByCountryResults covidResults={covidByCountryInfo} />
    } 
  }
  return (
    <div className="covidapp__covidbycountry">
      <div className="covidbycountry__search">
        <div className="heading-md-cap">Search by country</div>
        {renderCountryDropdownSelect()}
      </div>
        {renderCovidByCountryResults()}
  </div>
    
  )
}

export default CovidByCountry
