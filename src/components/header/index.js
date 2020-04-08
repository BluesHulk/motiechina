import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  // import styles from  './index.scss';
  import   './index.scss';
  import Code from '../../common/image/code.jpg';
  import apple from '../../common/image/apple.png';
  import android from '../../common/image/android.png';
  import wexin from '../../common/image/weixin.jpg';
  class Header extends Component {
    
    render() {
        return ( 
            <div id="topback" className="header">
                <div  className="subnav">
                    <div  className="subnavbar">
                       <div  className="subnavbar-content">
                           <div  className="con_left fl">
                               <a  href="http://www.motie.com/wenxue" target="_blank"  rel="noopener noreferrer" className="">磨铁文学</a>
                               <a  href="http://www.motie.com/index" target="_blank"  rel="noopener noreferrer" className="curr">磨铁中文网</a>
                               <a  href="http://jw.motie.com/index" target="_blank"  rel="noopener noreferrer" className="">锦文小说网</a>
                               <a  href="http://mm.motie.com/index" target="_blank"  rel="noopener noreferrer" className="">墨墨言情网</a>
                               <a  href="http://yynovel.motie.com/index" target="_blank"  rel="noopener noreferrer" className="">逸云书院</a>
                               <a  href="http://www.zuitang.com/index" target="_blank"  rel="noopener noreferrer" className="">醉唐中文网</a>
                           </div>
                           <div  className="right-login fr">
                                    <a  href="/" className="motie-login">登录</a>
                                    <a  href="/" className="motie-login">注册</a> 
                                    <span  className="indexmobile">
                                                手机版
                                        <div  className="pho-tabs">
                                                <em  className="dot-top"></em> 
                                                    <ul >
                                                        <li >
                                                            <span  className="scode fl">
                                                                <a  href="/app" target="_blank"  rel="noopener noreferrer">
                                                                    <img  alt="" src={Code}/>
                                                                </a>
                                                            </span> 
                                                            <p  className="fr">
                                                                <span  className="f14">磨铁阅读</span>
                                                                <span>让阅读更精彩</span>
                                                                <span >
                                                                    <img  alt="" src={apple}/> 
                                                                    <img  alt="" src={android}/>
                                                                </span>
                                                            </p>
                                                        </li> 
                                                        <li >
                                                            <span  className="scode fl">
                                                                <img alt="" src={wexin}/>
                                                            </span>
                                                            <p  className="fr" >
                                                                <span  className="f14">关注磨铁微信</span>
                                                                <span >微信扫一扫关注</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                        </div>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
  
    componentDidMount(){
        //这是图片轮播的数据接口
      
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Header);