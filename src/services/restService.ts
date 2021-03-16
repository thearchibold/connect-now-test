import axios from "axios"

export const fetchVideos = () => {
    return axios({
        method:"GET",
        url:"https://public.connectnow.org.uk/applicant-test/",
        headers:{
            "Access-Control-Allow-Origin":"*"
        }
    })
};