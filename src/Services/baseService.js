import Axios from "axios";
import { DOMAIN, TOKEN } from "../util/settings/config";
export class baseService {
    get = (url) => {
        // let headers = {};
        // if (TOKEN) {
        //     return (headers = {
        //         Authorization: "Bearer " + localStorage.getItem(TOKEN),
        //     });
        // }
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: "GET",
            headers: {
                TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk",
            },
            // headers,
        });
    };
}