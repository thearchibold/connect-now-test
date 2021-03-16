import React from "react"


const Loader = () => {

    return(
        <div style={{
            height:"100vh",
            width:"100vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            position:"absolute",
            top:0,
            left:0,
            right:0,
            bottom:0,
            color:"white",
            zIndex:9999,
            backgroundColor:"rgba(0,0,0,0.72)"
        }}>
            <div className="spinner-border"/>
            <div>
                Loading...
            </div>

        </div>
    )
};

export default Loader