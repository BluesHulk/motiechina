import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  import LazyLoad from 'react-lazyload';
  class PosterBanner extends Component {
    
    render() {
        return ( 
        <div className="">
          {this.posterBanner()}
        </div>
        
        );
    }
    posterBanner(){
      
        return this.props.banner1img.map((item,index)=>
        <div className="posterbanner" key={index}>
            <Link to={`/book/${item.id}`} target="_blank" className="shelf-box one">
              <LazyLoad>
                <img src={item.imgUrl} alt="" />
              </LazyLoad>
              
            </Link>
        </div>
                
        )

    }
    componentDidMount(){

    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            banner1img:state.banner1img
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(PosterBanner);