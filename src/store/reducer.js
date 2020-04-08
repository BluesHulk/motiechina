import * as constants from './actionType.js'
const defaultStatus = {
     bannerList:[],
     pushList:[],
     newRecent:[],
     hotRecommend:[],
     banner3Img:[],
     banner1img:[],
     ipWorth:[],
     linkEditor:[],
     pvRank:[],
     recommend1:[],
     recommend2:[],
     recommend3:[],
     recommend4:[],
     slide:[],
     topBanner:[],
     updateRank:[],
     userDonateRank:[],
     hotRank:[],
     recentUpdateListAll:[],
     recentUpdateListFree:[],
     recentUpdateListVip:[],
     isAll:0,
     searchList:[],
     searchListFix:[]
}


export default (state = defaultStatus, action) =>{
        if(action.type === constants.INIT_HOME_DATA){
             const newState = JSON.parse(JSON.stringify(state));
                   newState.bannerList = action.bannerList.slide.templateList;
                   newState.pushList = action.pushList.strongPush.templateList;
                   newState.newRecent = action.newRecent.newRecent.templateList;
                   newState.hotRecommend = action.hotRecommend.hotRecommend.templateList;
                   newState.banner3Img = action.banner3Img.banner3Img.templateList;
                   newState.banner1img = action.banner1img.banner1img.templateList;
                   newState.ipWorth = action.ipWorth.ipWorth.templateList;
                   newState.linkEditor = action.linkEditor.linkEditor.templateList;
                   newState.pvRank = action.pvRank.pvRank.templateList;
                   newState.recommend1 = action.recommend1.recommend1;
                   newState.recommend2 = action.recommend2.recommend2;
                   newState.recommend3 = action.recommend3.recommend3;
                   newState.recommend4 = action.recommend4.recommend4;
                   newState.slide = action.slide.slide.templateList;
                   newState.topBanner = action.topBanner.topBanner.templateList;
                   newState.updateRank = action.updateRank.updateRank.templateList;
                   newState.userDonateRank = action.userDonateRank.userDonateRank.templateList;

                   newState.hotRank = action.hotRank.hotRank.templateList;
                   
               //     console.log(newState)
             return newState;
        }

        if(action.type === constants.INIT_RECENT_UPDATE_ALL){
          const newState = JSON.parse(JSON.stringify(state));
          newState.recentUpdateListAll = action.recentUpdateListAll;
          return newState;
        }

        if(action.type === constants.INIT_RECENT_UPDATE_FREE){
          const newState = JSON.parse(JSON.stringify(state));
          newState.recentUpdateListFree = action.recentUpdateListFree;
          return newState;
        }
       
        if(action.type === constants.INIT_RECENT_UPDATE_VIP){
          const newState = JSON.parse(JSON.stringify(state));
          newState.recentUpdateListVip = action.recentUpdateListVip;
          // console.log(newState,action)
          return newState;
        }

        if(action.type === constants.INIT_SEARCH_DATA_FIX){
          const newState = JSON.parse(JSON.stringify(state));
          newState.searchListFix = action.searchListFix.bookList;
          console.log( newState)
          return newState;
        }

        if(action.type === constants.INIT_SEARCH_DATA){
          const newState = JSON.parse(JSON.stringify(state));
          newState.searchList = action.searchList.bookList;
          console.log( newState)
          return newState;
        }
       
        if(action.type === constants.IS_ALL){
          const newState = JSON.parse(JSON.stringify(state));
          newState.isAll = 0;
          return newState;
        }
        if(action.type === constants.IS_FREE){
            const newState = JSON.parse(JSON.stringify(state));
            newState.isAll = 1;
            return newState;
        }
        if(action.type === constants.IS_VIP){
            const newState = JSON.parse(JSON.stringify(state));
            newState.isAll = 2;
            return newState;
        }
    
       
       
        return state;

        
}