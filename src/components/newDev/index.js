import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
//   import {Link} from 'react-router-dom';
  class NewDev extends Component {
    
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
                  {this.lastestDev()}
               </ul>
          </div>
          
        </div>
        
        );
    }
    lastestDev(){
        return  this.props.newRecent.map((item,index)=>
                   <li key={index} >
                        <a  key={item.id}
                            href={item.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shelf-box">
                            {item.name}
                        </a>
                    </li>
                    
        )

    }
    componentDidMount(){

    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            newRecent:state.newRecent
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(NewDev);