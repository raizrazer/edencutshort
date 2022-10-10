import { useSelector } from 'react-redux'

import logo from "./resources/edenlogo.png";
import Page1 from "./components/CreateNewUser/Page1";
import Page2 from "./components/CreateNewUser/Page2";
import Page3 from "./components/CreateNewUser/Page3";
import Page4 from "./components/CreateNewUser/Page4";

import ProgressTrackBarL from "./components/ProgressTrackBarL";

function App() {
  const progressTrack = useSelector((state) => state.progressTrack.value);
  const displayPromtPage = () => {
    switch(progressTrack){
      case 1:{
        return <Page1/>
      }
      case 2:{
        return <Page2/>
      }
      case 3:{
        return <Page3/>
      }
      case 4:{
        return <Page4/>
      }
      default:{
        return <Page1/>
      }
    }
  }
  return (
    <div className="App flex justify-center items-center min-h-screen ">
      <div className="create_new_user">
        <div className="logo flex justify-center">
          <img src={logo} className=" max-w-[130px] pt-0 md:pt-10" alt="Eden"></img>
        </div>
        <ProgressTrackBarL current={progressTrack}/>
        {displayPromtPage()}
      </div>
    </div>
  );
}

export default App;
