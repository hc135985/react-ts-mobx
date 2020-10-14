import React from 'react'
import { Menu } from 'antd';
import { admin } from '@/config/homeMenu'
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu;

class MyMenu extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    {
                        admin.map((item: any, index: number) => {
                            return <SubMenu key={index + 'sub'} icon={<item.icon />} title={item.title}>
                                {
                                    item.children && item.children.map((e: any, i: number) => {
                                        return <Menu.Item key={i + e}>
                                            <NavLink to={e.path}>
                                                {e.title}
                                            </NavLink>
                                        </Menu.Item>
                                    })
                                }
                            </SubMenu>
                        })
                    }
                </Menu>
            </div>
        );
    }
}
export default MyMenu;