import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  import LazyLoad from 'react-lazyload';
  class HotRecomend extends Component {
    
    render() {
        return ( 
        <div className="skeletonBoxH">

          <div className="listBook3">
               <div className="listTitle">
                   <div className="mod-title">
                       <div className="title-bd">
                           <h2>本周强推</h2>
                       </div>
                   </div>
               </div>
               <div className="ul">
                    {this.lastestDev()}
               </div>
              
          </div>
          
        </div>
        
        );
    }
    lastestDev(){
        return  this.props.hotRecommend.map((item,index)=>
                   <Link to={`/book/${item.id}`}  key={index}>
                        <dl  className="piclist">
                                <dt >
                                    <span className="shelf-box">
                                        <LazyLoad>
                                          <img src={item.imgUrl} alt="" />
                                        </LazyLoad>
                                    </span>
                                </dt>
                                <dd >
                                    <span className="shelf-box htit">
                                        <i >{item.name}</i>
                                    </span>
                                    <span className="hname">
                                        {item.authorName}
                                    </span>
                                </dd>
                        </dl>
                   </Link>
                    
        )

    }
    componentDidMount(){

    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            hotRecommend:state.hotRecommend
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(HotRecomend);