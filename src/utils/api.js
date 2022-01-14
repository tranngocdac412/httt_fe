import axios from "axios";

export default function api(endpoint, param, method, body) {
    var path = (param==null) ? `` : `${param}`;
    return axios({
        method: method,
        // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        //   },
        url: `http://localhost:8080/${endpoint}/${path}`,
        // url: `https://61aab0b1bfb110001773f2cc.mockapi.io/api/v1/${endpoint}/${path}`,
        data: body
    })
    .catch(err => console.log(err));
}