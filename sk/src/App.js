import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './components/Home';
import { Menu, Icon } from 'antd';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu:[
        {
          text:'首页',
          path:'/home',
          name:'Home',
          icon:'home'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Menu>
          {
            this.state.menu.map(menu=>{
              return (
                <Menu.Item key={menu.path}>
                  <Icon type={menu.icon}/>{menu.text}
                </Menu.Item>
               )
            })
          }
        </Menu>
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    );
  }
}

App.contextTypes = {
  router:PropTypes.object
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);


export default App;
