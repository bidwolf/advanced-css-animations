import '@styles/App.css'
import { 
  Hexagon,
  LightedHexagon,
  HoveredHexagonEffect,
  StrokedBlurEffect,
  StrokeHexagonEffect
  }from './components/Hexagon'

import Card from './components/Card'
import Wavy from './components/Wavy'
import ScrollingText from './components/ScrollingText'
import RainComponent from './components/Rain'

function App() {
  return (
    <div className="app">
      <Card title={"aula-01"} key={"1"}>
        <Hexagon/>
      </Card>
      <Card title={"aula-02"} key={"2"}>
        <LightedHexagon/>
      </Card>
      <Card title={"aula-03"} key={"3"}>
        <HoveredHexagonEffect/>
      </Card>
      <Card title={"aula-04"} key={"4"}>
        <StrokeHexagonEffect/>
      </Card>
      <Card title={"aula-05"} key={"5"}>
       <StrokedBlurEffect/>
      </Card>
      
      <Card title={"aula-06"} key={"6"}>
       <Wavy/>
      </Card>
      <Card title={"aula-07"} key={"7"}>
       <ScrollingText/>
      </Card>
      <Card title={"aula-08"} key={"8"}>
       <RainComponent/>
      </Card>
      
    </div>
    
  )
}

export default App
