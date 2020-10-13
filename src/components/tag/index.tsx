import React, { Component } from 'react';

class Tag extends Component<any> {
    state = {
        closable: false
    }
    componentDidMount() {
        this.setState({
            closable: this.props.closable//关闭按钮的显示与隐藏
        })
    }
    render() {
        const {
            onClose = null,//关闭的回调函数
            color,//颜色
            visible = true,//开关
            icon = false,//图标
            onChange = null,//点击的回调函数
            closeIcon = null//关闭的icon
        } = this.props;
        const { closable } = this.state
        let style = {
            padding: '3px  10px',
            border: `1px solid ${color || '#ccc'}`,
            background: color || '#e8e8e8',
            color: color ? `#fff` : '#000',
            borderRadius: '3px',
            fontSize: 12
        }
        switch (color) {
            case 'success':
                style.background = '#f6ffed'
                style.color = '#52c41a'
                style.border = '1px solid #b7eb8f'
                break;
            case 'processing':
                style.background = '#e6f7ff'
                style.color = '#1890ff'
                style.border = '1px solid #91d5ff'
                break;
            case 'error':
                style.background = '#fff1f0'
                style.color = '#f5222d'
                style.border = '1px solid #ffa39e'
                break;
            case 'warning':
                style.background = '#fff7e6'
                style.color = '#fa8c16'
                style.border = '1px solid #ffd591'
                break;
            case 'default':
                style.background = '#e8e8e8'
                style.color = 'rgba(0,0,0,.85)'
                style.border = '1px solid #ccc'
                break;
            default:
                break;
        }
        return (
            visible && <span className='tag' style={style} onClick={() => { onChange() }}>
                {
                    icon && icon
                }
                {this.props.children}
                {
                    closable &&
                    <span style={{ marginLeft: 5, }}
                        onClick={(e) => {
                            e.stopPropagation()
                            this.setState({
                                closable: false
                            })
                            onClose()
                        }}
                    > {closeIcon || 'x'} </span>
                }
            </span>
        );
    }
}

export default Tag;