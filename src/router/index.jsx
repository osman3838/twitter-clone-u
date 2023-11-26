import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home"
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import NotFound  from "../pages/NotFound";
import Layout from "../Layout/Layout";
import Profile from "~/pages/profile";
import Messages from "~/pages/messages";
import Lists from "~/pages/lists";
import BookMarks from "~/pages/bookmarks";

 const routes  = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {

                index:true,
                element:<Home/>, 
            },
            {
                path:"explore",
                element:<Explore/>, 
            },
            {
                path:"notifications",
                element:<Notifications/>, 
            },
            {
                path:"/:slug", 
                element:<Profile/>
            }
            ,
            {
                path:"messages",
                element:<Messages/>
            }
            ,
            {
                path:"lists",
                element:<Lists/>
            }
            ,
            {
                path:"bookmarks",
                element:<BookMarks/>
            }
            ,
            {
                path:"*",
                element:<NotFound/>, 
            },
        ]
    }, 

]);
export default   routes