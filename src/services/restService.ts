import axios from "axios"

export const fetchVideos = () => {
    return axios.get("https://public.connectnow.org.uk/applicant-test/")
};