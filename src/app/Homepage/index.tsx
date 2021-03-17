import React, {useState} from "react"
import "./index.css"
import Dropdown from "../../components/Dropdown"
import VideoItem from "../../components/VideoItem"
import {VideoContext} from "../index";
import {VideoType} from "../../constants/@types";

const sortTypes = {
    DATE:"DATE",
    SCORE:"SCORE",
    NAME:"NAME"
};

const Homepage = () => {

    // @ts-ignore
    const [videos] = React.useContext(VideoContext);
    const [filterName, setFilterName] = useState("");
    const [minimumScore, setMinimumScore] = useState<string>("0");
    const [sortType, setSortType] = useState<string>(sortTypes.DATE);


    const reset = () => {
        setFilterName("");
        setSortType(sortTypes.DATE);
        setMinimumScore("0")
    };

    const numberFilter =(string:string) => string.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '');



    return (
        <div className={"home-page-container"}>
            <div className="filter-wrapper card">
                <div className="filter-item-container">
                    <h3>Filter Results</h3>

                    <div className={"filter-param-wrapper"}>
                        <div className={"input-wrapper"}>
                            <label htmlFor="">Name(contains)</label>
                            <input type="text" value={filterName} onChange={(e)=>{setFilterName(e.target.value)}} className={"text-input"}/>
                        </div>

                        <div className={"tab-control-container"}>
                            <div  className={"input-wrapper"}>
                                <label htmlFor="">Minimum score</label>
                                <input type="text" value={minimumScore}  onChange={(e)=>{
                                    const val = e.target.value.replace(/[^0-9.]/g, '');
                                    setMinimumScore(val)}}  className={"text-input"}/>
                            </div>

                            <div  className={"input-wrapper"}>
                                <label htmlFor="">Order By</label>
                                <Dropdown  options={[
                                    {
                                        id:1,
                                        text:"Release Date",
                                        label:sortTypes.DATE

                                    },
                                    {
                                        id:2,
                                        text:"Score",
                                        label:sortTypes.SCORE

                                    },
                                    {
                                        id:3,
                                        text:"Name",
                                        label:sortTypes.NAME

                                    }
                                ]} onItemSelect={(item) => {
                                    setSortType(item.label)
                                } }/>
                            </div>


                            <div className={"clear-button-container"}>
                                <button className={"button-clear"} onClick={reset}>Clear</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="videos-wrapper">

                {
                    videos
                        .sort((a:VideoType, b:VideoType) => {
                            switch (sortType) {
                                case sortTypes.DATE:
                                    return a.first_release_date - b.first_release_date;

                                case sortTypes.SCORE:
                                    return a.rating - b.rating;

                                case sortTypes.NAME:
                                    if(a.name < b.name) { return -1; }
                                    if(a.name > b.name) { return 1; }
                                    return 0;


                                default:
                                    return a.first_release_date - b.first_release_date
                            }
                        })
                        .filter((item:VideoType)=>{ return item.name && item.name.toLowerCase().includes(filterName.toLowerCase())})
                        .filter((item:VideoType) =>  {
                            if(minimumScore.length > 0){
                                return item.rating > parseFloat(minimumScore)
                            }else
                                return item.rating > 0
                        })
                        .map((item:VideoType, id:number)=>(
                            <VideoItem key={`video-${id}`} {...item}/>
                        ))
                }

                <div>
                    {videos.length === 0 && <p>No videos available</p>}
                </div>

            </div>
        </div>
    )

};


export default Homepage