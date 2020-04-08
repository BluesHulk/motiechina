import { 
    INIT_HOME_DATA,
    INIT_RECENT_UPDATE_ALL,
    INIT_RECENT_UPDATE_FREE,
    INIT_RECENT_UPDATE_VIP,
    IS_ALL, 
    IS_FREE,
    IS_VIP, 
    INIT_SEARCH_DATA,
    INIT_SEARCH_DATA_FIX
} from './actionType';

import network from '../axios/index.js';

export const isALL = (value)=>({
    type:  IS_ALL,
    value
})
export const isFree = (value)=>({
    type:  IS_FREE,
    value
})
export const isVip = (value)=>({
    type:  IS_VIP,
    value
})
//图片轮播数据
const initHomeData = function(data){
    return {
        type:  INIT_HOME_DATA,
        bannerList:data,
        pushList:data,
        newRecent:data,
        hotRecommend:data,
        banner3Img:data,
        banner1img:data,
        ipWorth:data,
        linkEditor:data,
        pvRank:data,
        recommend1:data,
        recommend2:data,
        recommend3:data,
        recommend4:data,
        slide:data,
        topBanner:data,
        updateRank:data,
        userDonateRank:data,
        hotRank:data,
       
    }
}

//最近更新数据
const initRecntUpdateAll = function(data){
        return {
            type:INIT_RECENT_UPDATE_ALL,
            recentUpdateListAll:data
        }
}

const initRecntUpdateFree = function(data){
  
        return {
            type:INIT_RECENT_UPDATE_FREE,
            recentUpdateListFree:data
        }
    
}

const initRecntUpdateVip = function(data){
 
        return {
            type:INIT_RECENT_UPDATE_VIP,
            recentUpdateListVip:data
        }
    
}

const initSearchList = function(data){
    return {
        type:INIT_SEARCH_DATA,
        searchList:data
    }
}

const initSearchListFix = function(data){
    return {
        type:INIT_SEARCH_DATA_FIX,
        searchListFix:data
    }
}



export const HomeDataInit = ()=>{
    return (dispatch)=>{
        network('homeIndex', {
            "type":"1",
        }).then(function(res){
            const data = res.data.data; 
            const action = initHomeData(data);
            dispatch(action);
        })
    }
}

export const RecentUpdate = ()=>{
    return (dispatch)=>{
        network('recentUpdate', {
            "siteType":"1",
            "type":"0"
        }).then(function(res){
            const data = res.data.data; 
            const action = initRecntUpdateAll(data);
            dispatch(action);
        })
    }
}

export const RecentUpdateFree = ()=>{
    return (dispatch)=>{
        network('recentUpdate', {
            "siteType":"1",
            "type":"1"
        }).then(function(res){
            const data = res.data.data; 
            const action = initRecntUpdateFree(data);
            dispatch(action);
        })
    }
}


export const RecentUpdateFreeVip = ()=>{
    return (dispatch)=>{
        network('recentUpdate', {
            "siteType":"1",
            "type":"2"
        }).then(function(res){
            const data = res.data.data; 
            const action = initRecntUpdateVip(data);
            dispatch(action);
        })
    }
}


export const searchData = (value)=>{
    return (dispatch)=>{
        network('searchList', {
            "objectType":"2",
            "pageSize":"2",
            "word":value
        }).then(function(res){
            const data = res.data.data; 
            const action = initSearchList(data);
            dispatch(action);
        })
    }
}

export const searchDataFix = (value)=>{
    return (dispatch)=>{
        network('searchList', {
            "objectType":"2",
            "pageSize":"2",
            "word":value
        }).then(function(res){
            const data = res.data.data; 
            const action = initSearchListFix(data);
            dispatch(action);
        })
    }
}



