import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Checkbox } from 'antd'
@inject('homeStore')
@observer
class Shop extends Component<any, any> {
    render() {
        const { Shoplist, updataShopListCount, shopCount, updataShopListFlag, shopTotal, shopAll, updataShopAll } = this.props.homeStore
        return (
            <div>
                <ul>
                    {
                        Shoplist.map((item: any, index: number) => {
                            return <li key={item.id}>
                                <h4>
                                    <Checkbox
                                        checked={item.flag}
                                        onChange={() => updataShopListFlag(index)}
                                    />
                                    商品名称：{item.name}
                                </h4>
                                <p>商品价格:{item.prc}</p>
                                <p>
                                    <button onClick={() => updataShopListCount({ type: '-', index: index })}>
                                        -
                                    </button>
                                    {item.count}
                                    <button onClick={() => updataShopListCount({ type: '+', index: index })}>
                                        +
                                    </button>
                                </p>
                            </li>
                        })
                    }
                </ul>
                <h2>
                    全选： <Checkbox checked={shopAll} onChange={(e) => updataShopAll(e.target.checked)} />
                    总数：{shopCount}   ---
                    总价 ：{shopTotal}
                </h2>
            </div>
        );
    }
}

export default Shop;