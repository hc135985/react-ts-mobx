import React, { Component } from 'react';
import echarts from 'echarts'

// 基于准备好的dom，初始化echarts实例
// 绘制图表

class Tb extends Component {
    state = {
        option: {
            title: {
                text: 'tab'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']//名称
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [400, 850, 350, 300, 562, 650],//数值
                itemStyle: {
                    color: 'skyblue'
                }
            }]
        }
    }
    tb: HTMLDivElement | null = null
    componentDidMount() {
        var myChart = echarts.init(this.tb as HTMLDivElement);
        myChart.setOption(this.state.option);
    }
    render() {
        return (
            <div ref={(e) => this.tb = e} style={{ width: 400, height: 400 }}>

            </div>
        );
    }
}

export default Tb;