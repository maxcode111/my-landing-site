import 'bootstrap/dist/css/bootstrap.min.css';
import TopHead from './components/TopHead';
import './App.css'
import FeatursSection from './components/FeatursSection';
import LastProjectsSec from './components/LastProjectsSec';
import Footer from './components/Footer';
import MyRoad from './components/MyRoad';
import YandMap from './components/YandMap';



function App() {
  return (
    <div className="App">
      <TopHead/>
      <FeatursSection/>
      <MyRoad/>
      <YandMap/>
      <LastProjectsSec/>
      <Footer/>
    </div>
  );
}

export default App;
