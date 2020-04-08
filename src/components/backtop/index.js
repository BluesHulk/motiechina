import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  class BackTop extends Component {
    constructor(props){
        super(props)
       this.scrollTopBack = this.scrollTopBack.bind(this)
    }
    render() {
        return ( 
            <div className="to_top ui-toTop" onClick={this.scrollTopBack}></div>
        );
    }
    scrollTopBack(){
        document.documentElement.scrollTop = 0;
    }
    componentDidMount(){

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
  
  export default connect(mapStateToProps,mapDispatchToProps)(BackTop);