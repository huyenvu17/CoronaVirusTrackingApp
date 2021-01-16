import React from 'react'
export default function CovidByCountryResults(props) {
  let covidResults = props !== 'undefined' && props.covidResults;
  return (
    // <div></div>
    covidResults ? (
      <div className="covidbycountry__results">
        <div className="results__countryname">Corona virus status in {covidResults.Country}</div>
        <div className="results__statistics">
          <div className="statistics__item confirmedbg">
            <div className="results__status">Confirmed</div>
            <div className="results__number">{covidResults.TotalConfirmed}</div>
          </div>
          <div className="statistics__item recoveredbg">
            <div className="results__status">Recovered</div>
            <div className="results__number">{covidResults.TotalRecovered}</div>
          </div>
          <div className="statistics__item deadbg">
            <div className="results__status">Deaths</div>
            <div className="results__number">{covidResults.TotalDeaths}</div>
          </div>
        </div>
      </div>
    )
      : (<div className="covidbycountry__results">
      <div className="results__countryname">No data.</div>
      <div className="results__statistics">
        <div className="statistics__item confirmedbg">
          <div className="results__status">Confirmed</div>
          <div className="results__number">0</div>
        </div>
        <div className="statistics__item recoveredbg">
          <div className="results__status">Recovered</div>
          <div className="results__number">0</div>
        </div>
        <div className="statistics__item deadbg">
          <div className="results__status">Dead</div>
          <div className="results__number">0</div>
        </div>
      </div>
    </div>)
  )
}
