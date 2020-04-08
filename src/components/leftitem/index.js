import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  class LeftItem extends Component {
    
    render() {
        return ( 
        <div className="skeletonBox">

          <div className="listBookname1">
               <div className="listTitle">
                   <div className="mod-title">
                       <div className="title-bd">
                           <h2>本周强推</h2>
                       </div>
                   </div>
               </div>
               <ul className="boxlist">
                  {this.catalogsItem()}
               </ul>
          </div>
          
        </div>
        
        );
    }
    catalogsItem(){
        return  this.props.pushList.map((item,index)=>
               <Link  key={index} to={`book/${item.id}`}>
                   <li >
                        <p target="_blank"
                            key={item.id}
                            className="shelf-box">
                                <span data-v-1dd65e2c="" >「{item.content}」</span>
                            {item.name}
                        </p>
                    </li>
               </Link>
                    
        )

    }
    componentDidMount(){

    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            pushList:state.pushList
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(LeftItem);