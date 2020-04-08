import React, {
    Component
  } from "react";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  import { connect } from "react-redux";
  import { searchDataFix } from '../../store/actionCreators';
  class Logs extends Component {
    constructor(props){
        super(props);
     
        this.state = {
            searchTxt:""
         };
         this.changeEventSearch = this.changeEventSearch.bind(this);
    }
    render() {
         
        return ( 
               <div  className="header-bg">
                        <div  className="logozone">
                            <div  className="wrap1200 logo">
                                <a  href="/" className="fl">
                                    <div  className="logoImage"></div>
                                </a>
                                <div  className="searchbox">
                                    <div className="searchbox-inner">
                                            <input type="text" value={this.state.searchTxt}  placeholder="找书" onChange={this.changeEventSearch}  className="searchinput"/> 
                                            <button  className="searchbtn"><i className="search-icon"></i></button>
                                    </div> 
                                           
                                    <ul className={this.props.searchListFix.length>0 && this.state.searchTxt !== ""  ? "search-list":"search-list hide"} >
                                            <li >
                                                <span className="product-title">
                                                    <i></i> 搜“<span>{this.state.searchTxt}</span>”相关作品>>;
                                                </span>
                                            </li>
                                        {this.renderSearchListFix()}
                                    </ul>
                                </div>
                                <a  href="/people/bookshelf" className="mybookshelf fr">
                                    <i></i>我的书架
                                </a>
                            </div> 
                        </div>
                </div>
        
        );
    }
  
    componentDidMount(){
    }
 
     changeEventSearch(e){
         const txt = e.target.value
         this.setState({
             searchTxt:txt
         })
         this.props.searchDataFix(txt);
        
     }
     renderSearchListFix(){
         const searchListFix = this.props.searchListFix
         if(searchListFix.length>0){
             return searchListFix.map((items,index) =>
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
        searchListFix:state.searchListFix
    }
}
const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
    return {
        searchDataFix(value){
            dispatch(searchDataFix(value))
        }
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Logs);