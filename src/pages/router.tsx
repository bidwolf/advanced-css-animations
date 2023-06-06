import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom"
import Root from "./root";
import SectionPage from "./sections/SectionPage";
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
            index:true,element:<SectionPage sectionId="1"/>
          },
          {
            path:'lesson/1/',
            element:<Hexagon/>,
          },{
            path:'lesson/2/',
            element:<LightedHexagon/>
          },{
            path:'lesson/3/',
            element:<HoveredHexagonEffect/>
          },{
            path:'lesson/4/',
            element:<StrokeHexagonEffect/>
          },{
            path:'lesson/5/',
            element:<StrokedBlurEffect/>
          },{
            path:'lesson/6/',
            element:<Wavy/>
          },{
            path:'lesson/7/',
            element:<ScrollingText/>
          },{
            path:'lesson/8/',
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