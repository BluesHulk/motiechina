import React, {
    Component
  } from "react";
import { connect } from "react-redux";
import   './index.scss';
import newTips from '../../common/image/new.gif';
class MinNav extends Component {
        render(){
            return(
                <div className="minnav">
                    <ul>
                        <li className="curr"><a target="_blank" rel="noopener noreferrer" href="/index">首页</a></li>
                        <li className=""><a target="_blank" rel="noopener noreferrer" href="/books">书库</a></li>
                        <li className=""><a target="_blank" rel="noopener noreferrer" href="/rank">排行</a></li>
                        <li className=""><a target="_blank" rel="noopener noreferrer" href="http://author.motie.com/index">作家专区</a></li>
                        <li className="">
                             <a target="_blank" rel="noopener noreferrer" href="http://www.motie.com/about/reward/motie">福利</a>
                             <img alt="" src= { newTips } />
                        </li>
                    </ul>
                </div>
            )
        }
               
}

   const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
           
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
         
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(MinNav);