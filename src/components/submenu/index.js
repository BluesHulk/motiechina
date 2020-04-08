import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';

    class SubMenu extends Component {
        render(){
        return  <div  className="rfloat"><ul >
            <li  className="r-1"><a  href="/"><i ></i><span  className="rightSpan">最近阅读</span></a></li>
            <li  className="r-2"><a  href="/"><i ></i><span  className="rightSpan">充值</span></a></li>
            <li  className="r-3"><a  href="/about/contactUs"><i ></i><span  className="rightSpan">客服</span></a></li></ul></div>
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

export default connect(mapStateToProps,mapDispatchToProps)(SubMenu);