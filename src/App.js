import CovidByCountry from './components/CovidByCountry';
import CovidWorldWide from './components/CovidWorldWide';
import './contents/styles/main.scss'
function App() {
  return (
    <div className="covidapp">
      <div className="covidapp__wrapper">
        <div className="heading-lg-upper">Covid-19 Updates</div>
        {/* covid status worldwide */}
        <CovidWorldWide/>
        {/* covid status by country */}
        <CovidByCountry/>
      </div>
    </div>
  );
}

export default App;
