import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';


import Home from '../view/home';

const Router = ()=>{
       return  <div>
            <BrowserRouter>
              <div>

              <Switch>
           
                <Route path="/index" exact component={()=>(<Home/>) } ></Route>
                <Redirect from ="/" exact to="/index"/>
             </Switch>  
              </div>
            </BrowserRouter>
　　　　 </div>
}


export default Router