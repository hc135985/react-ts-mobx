import React from 'react';

class Tabs extends React.Component {
    state = {
        activeIndex: 0
    }

    render() {
        //遍历子组件返回新的子组件
        const newChildren = React.Children.map(this.props.children, (child: any, index) => {
            if (child.type) {
                return React.cloneElement(child, {
                    active: this.state.activeIndex === index,
                    onClick: () => this.setState({ activeIndex: index })
                });
            } else {
                return child;
            }
        });
        return (
            <div>
                {newChildren}
            </div>
        );
    }
}
export default Tabs;