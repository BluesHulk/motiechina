import React, {
  Component
} from "react";
import { connect } from "react-redux";
// import styles from  './index.scss';
import   './index.scss';
import { HomeDataInit , RecentUpdate , RecentUpdateFree , RecentUpdateFreeVip } from '../../store/actionCreators';
import Header from '../../components/header';
import Logs from '../../components/logs';
import MinNav from '../../components/minNav';
import Container from '../../components/container';
import Footer from '../../components/footer';
import FixedNav from  '../../components/fixdNav';
import BackTop from '../../components/backtop';
import SunMenu from '../../components/submenu';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
       isScroll:false,
    };
    this.handleScroll = this.handleScroll.bind(this)
  }
  render() {
    let fixdNav;
    let backTop
    if(this.state.isScroll){
      fixdNav = <FixedNav />
      backTop = <BackTop />
    }
      return ( 
        <div id="home">
           <Header></Header>
           {fixdNav}
         
           <Logs ></Logs>
           <MinNav></MinNav>
           <Container></Container>
           <Footer></Footer>
           {backTop}
           <SunMenu></SunMenu>
        </div>
      
      );
  }

  componentDidMount(){
      //这是图片轮播的数据接口
      this.props.HomeDataInit();
      //最近更新的数据
      this.props.RecentUpdate();
      this.props.RecentUpdateFree();
      this.props.RecentUpdateFreeVip();
  }
  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
      window.removeEventListener('scroll',this.handleScroll)
  }
  
  handleScroll(event){
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) 
	        							|| window.pageYOffset
                        || (event.srcElement ? event.srcElement.body.scrollTop : 0);

    if(scrollTop>400){
      this.setState({
        isScroll:true,
      })
    }else{
      this.setState({
        isScroll:false
      })
    }

  }


}

  const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
      return {
          // bannerList:state.bannerList,
          // pushList:state.pushList
      }
  }
  const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
      return {
        HomeDataInit(){
              dispatch(HomeDataInit())
        },
        RecentUpdate(){
          dispatch(RecentUpdate())
        },
        RecentUpdateFree(){
          dispatch(RecentUpdateFree())
        },
        RecentUpdateFreeVip(){
          dispatch(RecentUpdateFreeVip())
        }
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home);