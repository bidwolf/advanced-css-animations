import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom"
import Root from "./root";
import FirstSectionPage from "./sections/FirstSection";
import { Hexagon, HoveredHexagonEffect, LightedHexagon, StrokedBlurEffect, StrokeHexagonEffect } from "../components/Hexagon";
import SectionRoot from "./sections";
import Wavy from "../components/Wavy";
import ScrollingText from "../components/ScrollingText";
import RainComponent from "../components/Rain";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/> ,
      errorElement:<div><h1>NOT FOUND</h1></div>, //TODO: CREATE ERROR ELEMENT
      children:[
       {
        path:"section/",
        element:<div>HA YEYE Pegadita</div>,
          
       },
       {
        path:"section/:sectionId/",
        element:<SectionRoot/>,
      },
      {
        path:"section/1/",
        element:<section id="section-1" ><Outlet/></section>,
        children:[
          {
            index:true,element:<FirstSectionPage/>
          },
          {
            path:'lesson/aula-01/',
            element:<Hexagon/>,
          },{
            path:'lesson/aula-02/',
            element:<LightedHexagon/>
          },{
            path:'lesson/aula-03/',
            element:<HoveredHexagonEffect/>
          },{
            path:'lesson/aula-04/',
            element:<StrokeHexagonEffect/>
          },{
            path:'lesson/aula-05/',
            element:<StrokedBlurEffect/>
          },{
            path:'lesson/aula-06/',
            element:<Wavy/>
          },{
            path:'lesson/aula-07/',
            element:<ScrollingText/>
          },{
            path:'lesson/aula-08/',
            element:<RainComponent/>
          }
        ]
      }
      ]
    },
  ]);

  function Router (){
    
      return(
        <RouterProvider router={router}/>
      );
  }

  export default Router;