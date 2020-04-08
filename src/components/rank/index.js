import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  import LazyLoad from 'react-lazyload';
  class Rank extends Component {
    
    render() {
        return ( 
        <div className="rank">
             {this.ranksort()}
            
        </div>
        
        );
    }
    ranksort(){
        const rank = [];
        rank.push(this.props.userDonateRank,this.props.hotRank,this.props.updateRank,this.props.ipWorth);
        const rankName = [{rank:'财神榜',url:""},{rank:'畅销榜',url:""},{rank:'更新榜',url:""},{rank:'IP价值榜',url:""}]
        if(rank.length>0){
            return  rank.map((items,index)=>
               
             <div className="listRank" key={index} >
                    <div  className="listTitle">
                        <div className="mod-title">
                            <div className="title-bd">
                                <h2 className="">{ rankName[index].rank}</h2> 
                            </div>
                        </div>
                    </div>
                   
                    <ul  className="rank-1">

                            {this.ranklist(items,index)}
                            
                     </ul> 
                     <Link to="/rank?type=10&sex" className={index===3 ? "none":"more"} target="_blank">查看更多>></Link>
               </div>          
           )
       }
    }
   
    ranklist(items,worth){
        
        return items.map((item,index)=>
            <div  key={index}>
                { index===0 ? (
                    <li  className="top" >
                        <span  className="num front">{1+index*1}</span> 
                        <dl  className="book-block">
                                <dt >
                                    <Link  to={`/book/${item.id}`} target="_blank" className="">
                                        <LazyLoad>
                                          <img src={item.imgUrl} alt=""/>
                                        </LazyLoad>
                                    </Link>
                                </dt> 
                                <dd >
                                    <Link  to={`/book/${item.id}`} target="_blank" className="book-name">{item.name}</Link>
                                    <span  className={ worth===0 ? "none" :"book-author"}>
                                        作者：<Link  to={`/people/${item.authorId}`} target="_blank">{item.authorName}</Link>
                                    </span> 
                                </dd>
                        </dl>
                    </li>
                ):(
                    <li  className="" >
                           <span  className={index===1 || index===2 ? "num front":"num" }>{1+index*1}</span>
                           <Link  to={`/book/${item.id}`} target="_blank" className="book-list-f ">{item.name}</Link> 
                    </li>
                )

                }
            </div>
                
        )

    }
    componentDidMount(){
        // console.log(this.props.ipWorth)
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            ipWorth:state.ipWorth,//IP价值榜
            hotRank:state.hotRank,//畅销榜
            updateRank:state.updateRank,//更新榜
            userDonateRank:state.userDonateRank, //财神榜
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Rank);