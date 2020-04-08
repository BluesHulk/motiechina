import React, {
    Component
  } from "react";
  import {Link} from 'react-router-dom';
  import { connect } from "react-redux";
  import { searchData } from '../../store/actionCreators';
  import   './index.scss';

  class FixedNav extends Component {
    constructor(props){
        super(props);
     
        this.state = {
            recentFalg:false,
            searchTxt:""
         };
         this.changeEventSearch = this.changeEventSearch.bind(this)
    }
    render() {
        return ( 
          <div  className="secondnav">
              <div  className="wrap1200">
                    <div  className="secondnav-l fl">
                      <ul >
                          <li ><a  href="/index" className="sitename">磨铁中文网</a></li> 
                          <li ><a  href="http://www.motie.com/all" target="_blank" rel="noopener noreferrer" className="site-tag">书库</a></li>
                          <li ><a  href="http://www.motie.com/book/rank" target="_blank" rel="noopener noreferrer" className="site-tag">排行</a></li>
                          <li ><a  href="http://www.motie.com/author_area" target="_blank" rel="noopener noreferrer" className="site-tag">作家专区</a></li>
                          <li ><a  href="http://www.motie.com/about/reward/motie" target="_blank" rel="noopener noreferrer" className="site-tag">福利</a></li>
                          <li  className="morefl ">
                              <span className="moreh ">更多</span> 
                              <div  className="morestyle">
                                  <a  href="http://www.motie.com/all?sort=1" target="_blank" rel="noopener noreferrer">悬疑</a>
                                  <a  href="http://www.motie.com/all?sort=4" target="_blank" rel="noopener noreferrer">都市</a>
                                  <a  href="http://www.motie.com/all?sort=6" target="_blank" rel="noopener noreferrer">玄幻</a>
                                  <a  href="http://www.motie.com/all?sort=14" target="_blank" rel="noopener noreferrer">奇幻</a>
                                  <a  href="http://www.motie.com/all?sort=5" target="_blank" rel="noopener noreferrer">军事</a>
                                  <a  href="http://www.motie.com/all?sort=3" target="_blank" rel="noopener noreferrer">历史</a>
                              </div>
                          </li>
                       </ul>
                    </div>
                    <div  className="secondnav-r fr">
                        <div  className="secondnav-user fl">
                            <span className="motie-login">登录</span>
                            <span className="motie-login">注册</span> 
                        </div> 
                        <div  className="fr lateread">
                            <span className="lateread_text" onClick={()=>this.recentRead()}>最近阅读</span> 
                            <div className={ this.state.recentFalg ? "lastread_box islogin" : "lastread_box" }>
                                 <span  className="icon-read"></span>
                                 <div  className="lastread_con">
                                     <p  className="unlogin">
                                         <span className="login">登录</span>
                                     </p>
                                 </div>
                            </div>
                        </div> 
                        <div  className= "searchbox"  >
                            <div className="searchbox-inner">
                                <input  type="text" value={this.state.searchTxt}  placeholder="找书" onChange={this.changeEventSearch} className="searchinput"/>
                                <span className="searchbtn">
                                    <i  className="search-icon"></i>
                                </span>
                              
                            </div>
                            <ul className={this.props.searchList.length>0 && this.state.searchTxt !== "" ? "search-list":"search-list hide"} >
                                    <li >
                                        <span className="product-title">
                                            <i></i> 搜“<span>{this.state.searchTxt}</span>”相关作品>>;
                                        </span>
                                    </li>
                                   {this.renderSearchList()}
                                </ul>
                        </div>
                    </div>
              </div>
          </div>
        );
    }
  
    componentDidMount(){
      
    }
    recentRead(){
       this.setState({
           recentFalg:!this.state.recentFalg
       })
    }
    changeEventSearch(e){
        const txt = e.target.value
        this.setState({
            searchTxt:txt
        })
        this.props.searchData(txt);
    }
    renderSearchList(){
        const searchList = this.props.searchList
        if(searchList.length>0){
            return searchList.map((items,index) =>
                <li className="line" key={index}>
                        <Link to={`/book/${items.id}`} className="product">
                            <div className="imgbox">
                                <img alt="" src={items.icon} />
                            </div> 
                            <div className="detail">
                                <p className="book-name" dangerouslySetInnerHTML={{__html:this.matchStr(items.name)}}>
                                  {/* {items.name} */}
                                </p> 
                                <p className="author" dangerouslySetInnerHTML={{__html:this.matchStr(items.authorName)}}>
                                 {/* {this.matchStr(items.authorName)} */}
                                </p>
                            </div>
                        </Link>
                        
                </li>
          )
        }
    
    }

    matchStr(item){
       var temp = item.split("");
       var str = ''
   
       for(var i = 0; i<temp.length;i++){
            if(this.state.searchTxt === temp[i]){
                 str+=`<span style="color:#ff4c2f;" >${temp[i]}</span>`
            }else{
                 str+=temp[i]
            }
       }
       return str;
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            searchList:state.searchList
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
            searchData(value){
                dispatch(searchData(value))
            }
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(FixedNav);