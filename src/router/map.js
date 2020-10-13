import React from 'react';
//引入路由内置组件
import { Route, Redirect, Switch } from 'react-router-dom';
const RouterView = (props) => {
    let reds = props.routes.filter(e => e.redirect);
    let comS = props.routes.filter(e => e.component);
    return <Switch>
        {
            //渲染route视图组件
            comS.map((item, index) => {
                return <Route key={index} path={item.path} render={(RouteProps) => {
                    if (item.children) {
                        return <item.component {...RouteProps} routes={item.children} />
                    } else {
                        return <item.component {...RouteProps} />
                    }
                }} />
            })
        }
        {
            reds.map((item, index) => {
                return <Redirect to={item.redirect} key={index + 'red'} />
            })
        }
    </Switch>
}
export default RouterView