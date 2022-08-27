import {Route,Routes} from "react-router-dom";
import {Home} from './pages/Home/commponents/Home'
import {MothStatistic} from './pages/MonthStatistic/commponents/MothStatistic'
import { Header } from "./shared/Header/Header.jsx";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global_contanier">
        {/* <Popup/> */}
      <div className="contanier">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Moth-Statistic" element={<MothStatistic/>}/>
        </Routes>
        </div>
      </div>
  );
}

export default App;
