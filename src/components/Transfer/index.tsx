import React, { Component } from 'react';
import TranferItem from './TranferItem'
import { Button } from 'antd'
import './index.css'
class Transfer extends Component<any> {
    state = {
        leftArr: [],
        rightArr: [],
        leftAll: false,
        rightAll: false,
        leftC: [],
        rightC: []
    }
    componentDidMount() {
        const { targetKeys, dataSource } = this.props
        let left = dataSource.filter((ite: any) => {
            ite.flag = false
            return !targetKeys.some((e: any) => {
                return ite.keys === e
            })
        })
        let right = dataSource.filter((ite: any) => {
            ite.flag = false
            return targetKeys.some((e: any) => {
                return ite.keys === e
            })
        })
        this.setState({
            leftArr: left,
            rightArr: right,
            leftC: left,
            rightC: right
        })
    }
    rightCheck(item: any, flag: boolean) {
        const { rightArr } = this.state
        let data = JSON.parse(JSON.stringify(rightArr));
        data.forEach((ite: any) => {
            if (ite.keys === item.keys) {
                ite.flag = flag
            }
        })
        this.setState({
            rightArr: data,
            rightAll: data.every((e: any) => e.flag)
        })
        this.props.onSelectChange && this.props.onSelectChange(item)
    }
    leftCheck(item: any, flag: boolean) {
        const { leftArr } = this.state
        let data = JSON.parse(JSON.stringify(leftArr));
        data.forEach((ite: any) => {
            if (ite.keys === item.keys) {
                ite.flag = flag
            }
        })
        this.setState({
            leftArr: data,
            leftAll: data.every((e: any) => e.flag),
        })
        this.props.onSelectChange && this.props.onSelectChange(item)
    }
    leftCut() {
        const { leftArr, rightArr, leftC, rightC } = this.state
        let lc = JSON.parse(JSON.stringify(leftC))
        lc.forEach((item: any) => {
            leftArr.forEach((e: any) => {
                if (item.keys === e.keys && e.flag) {
                    console.log(item);
                    item.flag = true
                }
            })
        })
        let left = leftArr.filter((e: any) => !e.flag).sort((a: any, b: any) => {
            return a.keys - b.keys
        })
        let right = [...rightArr, ...leftArr.filter((e: any) => e.flag)].sort((a: any, b: any) => {
            return a.keys - b.keys
        })
        left.forEach((e: any) => {
            e.flag = false
        })
        right.forEach((e: any) => {
            e.flag = false
        })
        this.setState({
            leftArr: left,
            leftC: lc.filter((e: any) => !e.flag),
            rightArr: right,
            rightC: [...rightC, ...right.filter((item: any) => {
                return rightC.every((e: any) => {
                    return item.keys !== e.keys
                })
            })],
            leftAll: false
        }, () => {
            console.log(this.state.leftC, this.state.rightC);
        })
        this.props.onChange && this.props.onChange({
            targetKeys: this.props.targetKeys,
            type: 'left',
            data: [...leftArr.filter((e: any) => e.flag)]
        })
    }
    rightCut() {
        const { leftArr, rightArr, rightC, leftC } = this.state
        let rc = JSON.parse(JSON.stringify(rightC))

        rc.forEach((item: any) => {
            rightArr.forEach((e: any) => {
                if (item.keys === e.keys && e.flag) {
                    item.flag = true
                }
            })
        })
        let right = rightArr.filter((e: any) => !e.flag).sort((a: any, b: any) => {
            return a.keys - b.keys
        })
        let left = [...leftArr, ...rightArr.filter((e: any) => e.flag)].sort((a: any, b: any) => {
            return a.keys - b.keys
        })
        left.forEach((e: any) => {
            e.flag = false
        })
        right.forEach((e: any) => {
            e.flag = false
        })
        this.setState({
            rightC: rc.filter((e: any) => !e.flag),
            rightArr: right,
            leftC: [...leftC, ...rightArr.filter((e: any) => e.flag)],
            leftArr: left,
            rightAll: false
        })

        this.props.onChange && this.props.onChange(
            {
                targetKeys: this.props.targetKeys,
                type: 'right',
                data: [...rightArr.filter((e: any) => e.flag)]
            }
        )
    }
    leftAll(flag: boolean) {
        let data = this.state.leftArr
        data.forEach((item: any) => {
            if (item.disabled) return
            item.flag = flag
        })
        this.setState({
            leftAll: flag,
            leftArr: data,
        })
        this.props.onChange && this.props.onChange({ type: 'leftAll', data })
    }
    rightAll(flag: boolean) {
        let data = this.state.rightArr
        data.forEach((item: any) => {
            if (item.disabled) return
            item.flag = flag
        })
        this.setState({
            rightAll: flag,
            rightArr: data
        })
        this.props.onChange && this.props.onChange({ type: 'rightAll', data })
    }
    leftSearch(e: any) {
        if (e.target.value === '') {
            this.setState({
                leftArr: this.state.leftC
            })
        } else {
            this.setState({
                leftArr: this.state.leftC.filter((it: any) => it.title.indexOf(e.target.value) !== -1)
            })
        }
        this.props.onSearch && this.props.onSearch('left', e.target.value)
    }
    rightSearch(e: any) {
        if (e.target.value === '') {
            this.setState({
                rightArr: this.state.rightC
            })
        } else {
            this.setState({
                rightArr: this.state.rightC.filter((it: any) => it.title.indexOf(e.target.value) !== -1)
            })
        }
        this.props.onSearch && this.props.onSearch('right', e.target.value)
    }
    render() {
        const { leftArr, rightArr, leftAll, rightAll } = this.state
        const { showSelectAll, showSearch } = this.props
        let left = leftArr.filter((e: any) => e.flag).length ? false : true
        let right = rightArr.filter((e: any) => e.flag).length ? false : true
        return (
            <div className='tranfer'>
                <TranferItem
                    list={leftArr}
                    onchange={(item: any, flag: boolean) => this.leftCheck(item, flag)}
                    checkAll={(flag: boolean) => { this.leftAll(flag) }}
                    all={leftAll}
                    search={(e: any) => { this.leftSearch(e) }}
                    showSelectAll={showSelectAll}
                    showSearch={showSearch}
                />
                <div className='cut'>
                    <Button disabled={left} onClick={() => { this.leftCut() }} > {'>'} </Button>
                    <Button disabled={right} onClick={() => { this.rightCut() }} > {'<'} </Button>
                </div>
                <TranferItem
                    list={rightArr}
                    checkAll={(flag: boolean) => { this.rightAll(flag) }}
                    onchange={(item: any, flag: boolean) => this.rightCheck(item, flag)}
                    all={rightAll}
                    search={(e: any) => { this.rightSearch(e) }}
                    showSelectAll={showSelectAll}
                    showSearch={showSearch}
                />
            </div>
        );
    }
}

export default Transfer;