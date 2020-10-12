import React, { Component } from 'react';
import { Checkbox, Input } from 'antd'
class TranferItem extends Component<any> {

    itemCheck(item: any, flag: boolean) {
        this.props.onchange(item, flag)
    }
    render() {
        const { list, all, checkAll, search, showSelectAll, showSearch } = this.props
        return (
            <div className='tranferitem'>
                <div className='header'>
                    {
                        showSelectAll && <Checkbox checked={all} onChange={(e) => {
                            checkAll(e.target.checked)
                        }} />
                    }    {list.length}项
                  </div>
                {
                    showSearch && <Input placeholder="请输入搜索内容" suffix={'🔍'}
                        onChange={(e) => { search(e) }} />
                }
                <div className='main'>
                    {
                        list.map((item: any) => {
                            return <li key={item.keys}
                                className={item.disabled ? 'disabled' : ''}
                            >
                                <Checkbox
                                    disabled={item.disabled}
                                    checked={item.flag}
                                    onChange={(e) => {
                                        this.itemCheck(item, e.target.checked)
                                    }} />  {item.title}
                            </li>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TranferItem;