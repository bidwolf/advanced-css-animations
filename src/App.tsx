import '@styles/App.css'
// import { Hexagon,LightedHexagon,HoveredHexagonEffect} from './components/Hexagon'
import {StrokeHexagonEffect} from './components/Hexagon'
import CursorComponent from './components/CursorComponent'

function App() {
  return (
    <>
      {
      /*
      <Hexagon/>
      <LightedHexagon/>
      <HoveredHexagonEffect/>
      */
      }
      <StrokeHexagonEffect/>
      <CursorComponent/>
    </>
  )
}

export default App
