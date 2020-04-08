import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  class CityFun extends Component {
    
    render() {
        return ( 
            <div className="inleft">
              
                {this.hotRecommend()}
            </div>
        
        )
    }
    hotRecommend(){
        const recommend = [];
        recommend.push(this.props.recommend1,this.props.recommend2,this.props.recommend3,this.props.recommend4);
        if(recommend.length>0){
             return  recommend.map((item,index)=>
                <div className="tagBook" key={index}>
                        <div className="titmenu">{item.shelfName}</div> 
                      
                        {
                            this.cityFun(item.templateList)
                        }

                </div> 
                        
            )
        }
       

    }
    cityFun(item){
         if(item){
               return item.map((its,idx)=>
           
                <dl className="book-block" key={idx}>
                     {idx===0 ? (
                         <dl> 
                           <dt>
                                <Link to="/book/157234" target="_blank"  className="shelf-box">
                                    <img src={its.imgUrl} alt="" />
                                </Link>
                            </dt> 
                            <dd>
                                    <Link to="/book/157234"  target="_blank" className="book-name shelf-box">
                                    {its.name}
                                    </Link> 
                                    <span className="book-info">{its.content}</span>
                                    <span className="book-author">作者：<Link className="authorName" to="/people/22669230" target="_blank">{its.authorName}</Link></span>
                            </dd>
                          </dl>
                        ) : (
                            <ul className="n-book-list">
                                    <li>
                                        <Link to="/book/157234" className="n-tags shelf-box">都市</Link> 
                                        <Link to="/book/157234" href="/book/150612" target="_blank" className="f-1 shelf-box">都市之最强仙帝：拳王赛</Link>
                                    </li>
                                    <li>
                                        <Link to="/book/157234" className="n-tags shelf-box">都市</Link>
                                        <Link to="/book/157234"  href="/book/158604" target="_blank" className="f-1 shelf-box">龙纹战神：特殊职业武者</Link>
                                    </li>
                            </ul> 
                        )}
                        
                    
                </dl> 
                        
                            
            )
         }
       
        

    }
    componentDidMount(){
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            recommend1:state.recommend1,
            recommend2:state.recommend2,
            recommend3:state.recommend3,
            recommend4:state.recommend4
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CityFun);