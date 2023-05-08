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
      
    </div>
    
  )
}

export default App
