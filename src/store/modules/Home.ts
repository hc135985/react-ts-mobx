import { observable, action, computed, runInAction, makeObservable } from 'mobx'
class HomeStore {
    //定义状态
    constructor() {
        makeObservable(this)
    }
    @observable HomeNum: number = 0;

    //事件
    @action changeHomeNum = () => {
        this.HomeNum++;
    }

    //异步请求
    @action getList = async () => {
        //   let res = await axios.get('/list')
        let res = 1;
        runInAction(() => {
            this.HomeNum = res
        })
    }

    //计算属性
    @computed get shopCount() {
        return this.HomeNum * 2
    }

}



export default { name: 'homeStore', store: new HomeStore() }