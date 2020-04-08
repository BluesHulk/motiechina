import React, {
    Component
} from "react";
import { connect } from "react-redux";
import Swiper from 'swiper/dist/js/swiper.js'
import { withRouter,Link } from 'react-router-dom';
import 'swiper/dist/css/swiper.min.css'
import LazyLoad from 'react-lazyload';
class SwiperPc extends Component {
   
    render() {
        return (
        <div >
            <div className="swiper-container"  ref="lun">
                <div className="swiper-wrapper">
                    {
                      this.bannerInit()
                    }
                </div>
                <div className='swiper-pagination'></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
        ); 
    }
    commponentWillMount(){
      
    }
    bannerInit() {
        
            return this.props.list.map((item,index) =>
            <div  className="swiper-slide" key={index} data-id={index} >
                {/* /此处有待调整/ */}
                <Link to={`/book/${item.id}`}  key={index}>
                    <LazyLoad>
                       <img alt="" src={item.imgUrl}/>
                    </LazyLoad>
                </Link>
            </div>
           )
    }
    
    componentDidMount() {
        
        setTimeout(function(){
            
            new Swiper('.swiper-container', {
                observer:true,
                cssMode: true,
                autoplay: {   //滑动后继续播放（不写官方默认暂停）
                    disableOnInteraction: false,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                pagination: {
                  el: '.swiper-pagination'
                },
                // mousewheel: true,
                keyboard: true,
                loop: true,
                currentClass : 'my-pagination-current',
              });
        },3000)
      

        
        

    }
    commponentWillReceiveProps(nextProps,nextState){
    }
    shouldCommponentUpdate(nextProps,nextState){
    }
}


const mapState = (state) => { //遍历所有的store获取
    return {
      bannerList:state.bannerList
    }
}

const mapDispatch = (dispatch) => ({
  
})

export default connect(mapState,mapDispatch)(withRouter(SwiperPc));