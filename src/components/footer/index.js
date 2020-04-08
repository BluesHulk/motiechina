import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  // import styles from  './index.scss';
  import   './index.scss';

  class Footer extends Component {
    
    render() {
        return ( 
            <div   className="footer">
                <div  className="footer-default">
                    <p  className="font">
                        <span  href="/" >磨铁旗下网站：</span> 
                        <a  href="http://www.motie.com/wenxue" target="_blank" rel="noopener noreferrer">磨铁文学</a>
                        <a  href="http://www.motie.com/index" target="_blank" rel="noopener noreferrer">磨铁中文网</a>
                        <a  href="http://jw.motie.com/index" target="_blank" rel="noopener noreferrer">锦文小说网</a>
                        <a  href="http://mm.motie.com/index" target="_blank" rel="noopener noreferrer">墨墨言情网</a>
                        <a  href="http://yynovel.motie.com/index" target="_blank" rel="noopener noreferrer">逸云书院</a>
                        <a  href="http://www.zuitang.com/index" target="_blank" rel="noopener noreferrer">醉唐中文网</a>
                        <br />
                        <a  href="/about/aboutUs" target="_blank" rel="noopener noreferrer">关于我们</a> 
                        <a  href="/about/contactUs" target="_blank" rel="noopener noreferrer">联系我们</a>
                        <a  href="/about/joinUs" target="_blank" rel="noopener noreferrer">加入我们</a> 
                        <a  href="/about/faq" target="_blank" rel="noopener noreferrer">帮助中心</a>
                        <a  href="/about/websitMap" target="_blank" rel="noopener noreferrer">网站地图</a>
                        </p> 
                    <p  className="announce">
                        Copyright © 2011-2020 Motie.com All Rights Reserved.   北京磨铁数盟信息技术有限公司 版权所有<br />
                        新出网证京字071号  丨 文网文[2018]9602-833号  丨 京ICP证110262号  经营性网站备案信息   丨 京ICP备11010626号-1 <br /> 
                        <a  target="_blank" rel="noopener noreferrer" href="http://www.cyberpolice.cn" >网络违法犯罪举报</a>  丨
                        <a  target="_blank" rel="noopener noreferrer" href="http://www.12377.cn/" >中国互联网举报中心</a>   丨
                        <a  target="_blank" rel="noopener noreferrer" href="http://www.12377.cn/node_548446.htm" >网络举报APP下载</a>
                        <br />不良信息举报：kefu@motie.com  举报电话：010-84242006
                    </p> 
                    <div className="bei" >
                        <a  target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502034287" >
                                <img alt=""  src="https://pic.motieimg.com/web-pc/dist/static/img/guohui.d0289dc.png" /> 
                                <p>
                                    京公网安备 11010502034287号
                                </p>
                        </a>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Footer);