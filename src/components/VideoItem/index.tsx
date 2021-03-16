import React from "react"
import "./styles.css"
import {VideoType} from "../../constants/@types";


const VideoItem = (props:VideoType) => {

    const dateItem = new Date(props.first_release_date);
    const dateString = `${dateItem.getDay()}/${dateItem.getMonth()}/${dateItem.getFullYear()}`


    return(
        <div className={"video-item-wrapper card"}>

            <div className={"video-container"}>
                <div className={"video-number-mobile"}>
                    {props.rating && Math.round(props.rating)}
                </div>

            </div>

            <div className={"video-details-wrapper"}>

                <div className={"video-details"}>
                    <h3 className={"heading"}>{props.name}</h3>
                    <p className={"text"}>Release Date: {dateString}</p>
                    <p className={"text max-len-3"} style={{ height:"fit-content", fontSize:14, marginTop:"1rem"}}>{props.summary}</p>
                </div>

                <div className={"video-number-container"}>

                    <div className={"video-number"}>
                        {props.rating && Math.round(props.rating)}
                    </div>

                </div>
            </div>

        </div>
    )
};


export default VideoItem