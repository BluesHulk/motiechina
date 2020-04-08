import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
 
import LeftItem from '../leftitem';
import Swiper from '../slider';
import NewDev from '../newDev';
import HotRecomend from '../hotrecommend';
import CenterBanner from '../centerB';
import FourItem from '../fouritem';
import BillBoard from '../billBoard';
import PosterBanner from '../posterbanner';
import Rank from '../rank';
import RecentUpdata from '../recentupdata';
import ConCatUs from '../concatus';
  const divSty1 = {
    marginBottom:'10px', 
    height: '360px'
  }

  const divSty2 = {
    marginBottom:'20px', 
    height: '280px'
  }

  const divSty3 ={
    marginBottom:'30px',
  }

  const divSty4 = {
    marginBottom:'10px', 
    height: '610px'
  }
  const divSty5 = {
    marginBottom:'10px', 
    height: '100px'
  }

  const divSty6 = {
    marginBottom: '10px',
    height: '540px'
  }
  
  const divSty7 = {
    marginBottom: '10px',
    overflow: "hidden"
  }
  
  class Container extends Component {
    
    render() {
        return ( 
          <div className="container">
             <div>
                 <div className="motie-index clearfix">
                     <div style={ divSty1 }>
                        <LeftItem></LeftItem>
                        <Swiper list={this.props.bannerList}></Swiper>
                     </div>
                     <div style={ divSty2 }>
                        <NewDev></NewDev>
                        <HotRecomend></HotRecomend>
                     </div>
                     <div style={divSty3}>
                         <CenterBanner></CenterBanner>
                     </div>
                     <div style={divSty4}>
                         <FourItem></FourItem>
                         <BillBoard></BillBoard>
                     </div>
                     <div style={divSty5}>
                         <PosterBanner></PosterBanner>
                     </div>
                     <div style={divSty6}>
                        <Rank></Rank>
                     </div>
                     <div style={divSty7}>
                        <RecentUpdata></RecentUpdata>
                        <ConCatUs></ConCatUs>
                     </div>
                 </div>
             </div>
          </div>
        
        );
    }
  
    componentDidMount(){
      
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
          bannerList:state.bannerList
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
         
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Container);