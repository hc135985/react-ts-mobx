import { observable, action, makeObservable } from 'mobx'
class userStore {
    //定义状态
    constructor() {
        makeObservable(this)
    }
    @observable token: string = '';

    //事件
    @action setToken = (token: string) => {
        this.token = token
    }

}

export default { name: 'user', store: new userStore() }