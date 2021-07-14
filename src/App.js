import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/incubatorwhite/layout/home'
import Service from './component/incubatorwhite/layout/service'
import ProgressService from './component/progress/layout/service'
import ProgressHome from './component/progress/layout/home'
import CoursePlay from './component/coursedetail/layout/play'
import CoursePause from './component/coursedetail/layout/pause'
import CourseCompleteBlue from './component/coursedetail/layout/completecardcolored'
import CourseCompleteWhite from './component/coursedetail/layout/completecardwhite'
import Learn from './component/learnblockchain/learnblockchain'
import Incubator from './component/incubatorpage/feature'
import Mangoswap from './component/mangoswapPage/fund'

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/home"> <Home /></Route>
            <Route exact path="/service"> <Service /></Route>
            <Route exact path="/progress/home"> <ProgressHome /></Route>
            <Route exact path="/progress/service"> <ProgressService /></Route>
            <Route exact path="/course/pause"> <CoursePause /></Route>
            <Route exact path="/course/play"> <CoursePlay /></Route>
            <Route exact path="/course/completed/home"> <CourseCompleteBlue /></Route>
            <Route exact path="/course/completed/service"> <CourseCompleteWhite /></Route>
            <Route exact path="/learn"> <Learn /></Route>
            <Route exact path="/"> <Incubator /></Route>
            <Route exact path="/mangoswap"> <Mangoswap /></Route>
        </Switch>
    </Router>
    </div>
    
  );
}

export default App;
