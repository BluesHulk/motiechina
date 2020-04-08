import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  class ConCatUs extends Component {
 
    render() {
    
        return ( 
            <div   className="contactWe">
                 <div  className="listTitle">
                      <div className="mod-title">
                           <div className="title-bd">
                                 <h2 className="">联系客服</h2>
                           </div>
                      </div>
                 </div>
                 <div  className="bd">
                        <p>
                            <span  className="con-left">客服QQ：</span>
                            <span  className="con-right">3519233850</span>
                            <Link to="" target="_blank" className="qqcontact"></Link>
                        </p> 
                        <p>
                            <span  className="con-left">客服邮箱：</span>
                            <span  className="con-right">kefu@motie.com<br />
                            (周一到周五8:00-24:00)<br />
                            (周六、周日9:00-24:00)
                            </span>
                        </p> 
                        <p>
                            <span  className="con-left">客服电话：</span>
                            <span  className="con-right">010-84242006
                            <br />

                                  (周一到周五8:00-18:00)
                            </span>
                        </p>
                        <p  className="lc">
                            <Link  to="/about/faq" target="_blank">常见问题</Link>
                        </p> 
                        <div  className="jinwen-editor">
                            <span  className="conect-tit">联系编辑：</span>
                            <p  className="con-bot"><span >两万字+大纲，请勿一稿多投</span> 
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box"></i>
                            </p>
                            <p  className="con-bot">
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box"></i>
                            </p>
                            <p  className="con-bot">
                                <span >都市/玄幻/无线向</span>
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">天佑（QQ）：1351594056</i>
                            </p>
                            <p  className="con-bot">
                                <span >都市/玄幻/现实/热血升级</span> 
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">青柠（QQ）：3543469448</i>
                            </p>
                            <p  className="con-bot">
                                <span >都市/玄幻/脑洞/系统/特殊职业</span>
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">青阳（QQ）：2689512106</i>
                            </p>
                            <p  className="con-bot">
                                <span >都市/热血/升级/爽文/脑洞</span>
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">翩若（QQ）：492927046</i>
                            </p>
                            <p  className="con-bot">
                                <span >悬疑／泛悬疑／现实</span>
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">糯米（QQ）：457941304</i>
                            </p>
                            <p  className="con-bot">
                                <span >综合支持/网编管理</span> 
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">麦穗（QQ）：1561633614</i>
                            </p>
                            <p  className="con-bot">
                                <span >总编</span> 
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">三生（QQ）: 182428570</i></p>
                                <p  className="con-bot"><span >副总编/食奇工作室总编</span>
                                <i  shelfid="Mt_2017_index_link_editor" className="shelf-box">朱侯（QQ）：1417675780</i>
                            </p>
                       </div>
                 </div>
            </div>
        );
    }
    
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            linkEditor:state.linkEditor,
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
           
       }
    }
    
   

  export default connect(mapStateToProps,mapDispatchToProps)(ConCatUs);