import React, { ComponentType } from 'react';
//引入路由内置组件
import { Route, Redirect, Switch } from 'react-router-dom';
const RouterView = (props: any) => {
    let com = props.routes.filter((e: any) => e.component);
    let reds = props.routes.filter((e: any) => e.redirect);
    console.log(reds);
    return <Switch>  {com.map((e: any) => {
        return <Route key={e.path} path={e.path} render={(R) => {
            let Item: ComponentType = e.component as ComponentType;
            let child: any = e.children ? { routes: e.children } : {};
            return e.authToken ? localStorage.getItem('token') ? <Item {...R} {...child} />
                //@ts-ignore
                : <Redirect to={{ pathname: '/login', path: e.path }} /> : <Item {...R} {...child} />
        }} />
    })}  {reds.map((e: any) => { return <Redirect key={e.redirect} to={e.redirect as string} /> })}
    </Switch>
}
export default RouterView