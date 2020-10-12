import React, { Component } from 'react';
import echarts from 'echarts'
class Zx extends Component {
    state = {
        option: {
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        { value: 235, name: '视频广告' },
                        { value: 274, name: '联盟广告' },
                        { value: 310, name: '邮件营销' },
                        { value: 335, name: '直接访问' },
                        { value: 400, name: '搜索引擎' }
                    ]
                }
            ]
        }
    }
    componentDidMount() {
        var myChart = echarts.init(this.zx as HTMLDivElement);
        myChart.setOption(this.state.option);
    }
    zx: HTMLDivElement | null = null
    render() {
        return (
            <div ref={(e) => this.zx = e} style={{ width: 400, height: 400 }}>

            </div>
        );
    }
}

export default Zx;