import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  class RankClick extends Component {
    
    render() {
        return ( 
        <div className="clickRank">
             <div className="listRank" >
                    <div  className="listTitle">
                        <div className="mod-title">
                            <div className="title-bd">
                                <h2 className="">点击榜</h2> 
                            </div>
                        </div>
                    </div>
                   
                    <ul  className="rank-1">

                            {this.clickRank()}
                            
                     </ul> 
                     <Link data-v-3700c55a="" to="/rank?type=10&sex" className="more" target="_blank">查看更多>></Link>
               </div>
        </div>
        
        );
    }
    clickRank(){
      
        return this.props.pvRank.map((item,index)=>
            <div  key={index}>
                { index===0 ? (
                    <li  className="top" >
                        <span  className="num front">{1+index*1}</span> 
                        <dl  className="book-block">
                                <dt >
                                    <Link  to={`/book/${item.id}`} target="_blank" className="">
                                        <img src={item.imgUrl} alt=""/>
                                    </Link>
                                </dt> 
                                <dd >
                                    <Link  to={`/book/${item.id}`} target="_blank" className="book-name">{item.name}</Link>
                                    <span  className="book-author">
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
        console.log( this.props.banner3Img)
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            pvRank:state.pvRank
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(RankClick);