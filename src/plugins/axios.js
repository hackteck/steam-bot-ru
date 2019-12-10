import Vue from "vue"
import axios from "axios"

//api host
if (!Vue.$isServer && typeof location != "undefined") {
    const prefix = "api";
    const { protocol, hostname } = location;
    axios.defaults.baseURL = protocol + "//" + prefix + "." + hostname;
}
else console.warn("!!! NEED TO SET AXIOS HOST WITH API !!!");

//interceptors
axios.interceptors.response.use(
    response => response,
    error => {
        //if (error.response == undefined) alert("Ошибка сети!");
        return Promise.reject(error);
    });