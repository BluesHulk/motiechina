import React, {
  Component
} from "react";
import { connect } from "react-redux";
import   './index.scss';
import {Link} from 'react-router-dom';
class RecentUpdata extends Component {
  constructor(props) {
    super(props);
    this.state = {id: 0};
  }
  render() {
  
      return ( 
      <div className="listUpdate">
         <div  className="listUpdate" >
              <div className="mod-title">
                    <div className="title-bd">
                        <h2>最近更新</h2> 
                        <Link to="/books" target="_blank" className="more">更多>></Link> 
                       
                        <ul className="tab" ref="tab" onMouseOver={(e)=>this.handleMouseEnter(e)}  >
                          {this.tabList()}
                        </ul>
                        {/* <ul className="tab" ref="tab" onMouseOver={(e)=>this.props.handleMouseEnter(e)}  >
                          {this.tabList()}
                        </ul> */}
                     
                        {/* <ul className="tab" ref="tab" onClick={this.props.handleMouseEnter}  >
                          {this.tabList()}
                        </ul> */}
                    </div>
                </div> 
                <div className="listUpdate">
                        <div className="content-all">
                            <div className="title clearfixer">
                              <span className="classis">分类</span>
                              <span className="name">书名</span> 
                              <span className="newest">最新章节</span>
                              <span className="author">作者</span> 
                              <span className="time">更新时间</span>
                            </div> 

                            {this.recentUpdateList()}
                            
                        </div>
                </div>
          </div>
      </div>
      
      );
  }
  
  componentDidMount(){
    
  }
  tabList(){
    var arr= [{name:'全部',type:"is_all"},{name:'免费',type:"is_free"},{name:'vip',type:"is_vip"}]
        return arr.map((items,index) =>
            <li className={this.props.isAll === index ? "on":""} key={index} data-id={index} data-type={items.type} >{items.name}</li>
      
      )
  }
  dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": new Date(date).getFullYear().toString(),        // 年
        "m+": (new Date(date).getMonth() + 1).toString(),     // 月
        "d+": new Date(date).getDate().toString(),            // 日
        "H+": new Date(date).getHours().toString(),           // 时
        "M+": new Date(date).getMinutes().toString(),         // 分
        "S+": new Date(date).getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
  recentUpdateList(){
    const id = Number(this.state.id);
    var list ;
 
    if(id === 0){
      list = this.props.recentUpdateListAll;
    }else if(id === 1){
      list = this.props.recentUpdateListFree;
    }else if(id ===2){
      list = this.props.recentUpdateListVip;
    }
    if(list){
        return list.map((items,index)=>
                <div className="item clearfixer" key={index}>
                    <Link to="/books?sort=27" target="_blank" className="classis">{items.sort}</Link> 
                    <Link to="/book/83380" target="_blank" className="name">{items.bookName}</Link> 
                    <Link to="/chapter/83380/13160666" target="_blank" className="newest">{items.chapterName}</Link> 
                    <Link to="/people/17101376" target="_blank" className="author">{items.authorName}</Link> 
                    <Link to="/" target="_blank" className="time">{this.dateFormat("YYYY-mm-dd HH:MM:SS",items.lastUpdateTime)}</Link>
                </div>
        )
    }
    
  
  }
  // recentUpdateList(){
  //   var list ;
  //   const id = Number(this.props.isAll)
  //   console.log(this.props.isAll)
  //   if(id === 0){
  //     list = this.props.recentUpdateListAll;
  //   }else if(id === 1){
  //     list = this.props.recentUpdateListFree;
  //   }else if(id ===2){
  //     list = this.props.recentUpdateListVip;
  //   }
  //   if(list){
  //       return list.map((items,index)=>
  //               <div className="item clearfixer" key={index}>
  //                   <Link to="/books?sort=27" target="_blank" className="classis">{items.sort}</Link> 
  //                   <Link to="/book/83380" target="_blank" className="name">{items.bookName}</Link> 
  //                   <Link to="/chapter/83380/13160666" target="_blank" className="newest">{items.chapterName}</Link> 
  //                   <Link to="/people/17101376" target="_blank" className="author">{items.authorName}</Link> 
  //                   <Link to="/" target="_blank" className="time">{this.dateFormat("YYYY-mm-dd HH:MM:SS",items.lastUpdateTime)}</Link>
  //               </div>
  //       )
  //   }
    
  
  // }
  handleMouseEnter(e){
   
     const id = e.target.getAttribute("data-id");
    // const type = e.target.getAttribute("data-type");
    const olLis = this.refs.tab.getElementsByTagName("li");
    this.setState({id: id});
    if(id){
        for(let i=0;i<olLis.length;i++) {
            olLis[i].className = "";
        }
        olLis[id].className = "on";
    }
   
   
  }
  

  


}

  const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
      return {
        recentUpdateListAll:state.recentUpdateListAll,
        recentUpdateListFree:state.recentUpdateListFree,
        recentUpdateListVip:state.recentUpdateListVip,
        isAll:state.isAll
      }
  }
  const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
      return {
          handleMouseEnter(e){
            const id = e.target.getAttribute("data-id");
            const type = e.target.getAttribute("data-type");
            const action = {
                type:type,
                isAll:id
            }
            dispatch(action)
            console.log(id)
          
          }
     }
  }

export default connect(mapStateToProps,mapDispatchToProps)(RecentUpdata);