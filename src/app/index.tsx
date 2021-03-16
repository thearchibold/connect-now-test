import React, {useState} from "react"
import {Switch, Route, NavLink, useLocation, Redirect} from "react-router-dom";
import "./index.css"
import Homepage from "./Homepage"
import Contactpage from "./Contactpage"
import css from "../constants/css"
import {fetchVideos} from "../services/restService";
import {VideoType} from "../constants/@types";
import Loader from "../components/Loader"

export const VideoContext = React.createContext({});


const routes = {
    videos:"/videos",
    contacts:"/contacts"
};

const Navigation = (props:any) => {

    const [currentPage, setCurrentPage] = React.useState<string>(routes.videos);
    const [videos, setVideos] = React.useState<Array<VideoType>>([]);
    const [loading, setLoading] = useState(true);



    const location = useLocation();
    React.useEffect(()=>{
        const {pathname} = location;
        console.log(pathname);
        setCurrentPage(pathname)

    }, [location]);

    React.useEffect(()=>{
        fetchVideos().then(({data}:any) =>{
            console.log(data);
            setVideos(data)
        }).finally(()=>{
            setLoading(false)
        })
    }, []);



    return (
        <VideoContext.Provider value={[videos]}>
            <Route exact path="/">
                <Redirect to="/videos" />
            </Route>

            {
                loading && <Loader/>
            }
            <div className={"page"}>
                <div className={"nav-container"}>
                    <div className={"nav-bg-indicators"}>
                        <div className={"nav-item-container"}>
                            <h1 style={{
                                color:currentPage === routes.videos ? css.color_card_background :"transparent",
                            }}>VIDEO</h1>
                            <NavLink  className={"nav-item"} to={routes.videos}>VIDEOS GAMES</NavLink>
                        </div>

                        <div className={"nav-item-container"}>
                            <h1 style={{
                                color:currentPage === routes.contacts ? css.color_card_background :"transparent",
                            }}>CONTACT</h1>
                            <NavLink  className={"nav-item"} to={routes.contacts}>CONTACTS</NavLink>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"4rem"}}>
                    <Switch>
                        <Route path={routes.videos} component={Homepage} key={"videos"}/>
                        <Route path={routes.contacts} exact component={Contactpage} key={"contact"}/>
                    </Switch>
                </div>
            </div>
        </VideoContext.Provider>
    )
};

export default Navigation