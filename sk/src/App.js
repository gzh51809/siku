import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

// 引入样式
import './css/app.css';

// 引入组件
import Home from './components/Home';
import Discover from './components/Discover';
import Classify from './components/Classify';
import Cart from './components/Cart';
import Person from './components/Person';

// 引入框架组件
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
        },
        {
          text:'发现',
          path:'/discover',
          name:'Discover',
          icon:'dashboard'
        },
        {
          text:'分类',
          path:'/classify',
          name:'Classify',
          icon:'bars'
        },
        {
          text:'购物袋',
          path:'/cart',
          name:'Cart',
          icon:'shopping'
        },
        {
          text:'我的',
          path:'/person',
          name:'Person',
          icon:'user'
        },
      ],
      current: '/home',
    }
  }

  handleClick({ item, key, keyPath }){
    this.setState({
      current:key
    });
    // console.log(key);
    // console.log(this.props.history);
    this.props.history.push(key);
  }

  componentDidMount(){
    // console.log(window.location.hash);
    let hash = window.location.hash;
    hash = hash.split('/')[1];
    this.setState({
      current:'/'+hash
    });

  }

  render() {
    return (
      <div>
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal"
          onClick={this.handleClick.bind(this)}
        >
          {
            this.state.menu.map(menu=>{
              return (
                <Menu.Item key={menu.path}>
                  <Icon type={menu.icon}/>
                  <span>{menu.text}</span>
                </Menu.Item>
               )
            })
          }
        </Menu>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/discover' component={Discover} />
          <Route path='/classify' component={Classify} />
          <Route path='/cart' component={Cart} />
          <Route path='/person' component={Person} />
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
