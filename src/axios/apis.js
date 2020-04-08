
const baseUrl = "http://127.0.0.1:3000/motie";
export default {
 
    homeIndex:{
        url:baseUrl + "/pc//home",
        method:"GET"
    },
    recentUpdate:{
        url:baseUrl + "/pc/recentUpdates",
        method:"GET"
    },
    searchList:{
        url:baseUrl +"search",
        method:"GET"
    }

};