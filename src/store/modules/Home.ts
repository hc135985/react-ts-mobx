import { observable, action, computed, runInAction, makeObservable } from 'mobx'
class HomeStore {
    //定义状态
    constructor() {
        makeObservable(this)
    }
    @observable HomeNum: number = 0;
    @observable shopAll: boolean = false
    @observable Shoplist: any[] = [
        {
            id: 100001,
            name: '哇哈哈哈',
            prc: 40,
            count: 0,
            flag: false
        },
        {
            id: 100002,
            name: '威龙',
            prc: 10,
            count: 0,
            flag: false
        },
        {
            id: 100003,
            name: '好老婆',
            prc: 1000,
            count: 0,
            flag: false
        },
        {
            id: 100004,
            name: '薯片',
            prc: 4,
            count: 0,
            flag: false
        },
        {
            id: 100005,
            name: '火锅',
            prc: 60,
            count: 0,
            flag: false
        },
    ];

    //事件
    @action changeHomeNum = () => {
        this.HomeNum++;
    }
    @action updataShopListCount = (obj: any) => {
        if (obj.type === '-') {
            this.Shoplist[obj.index].count--
            this.Shoplist[obj.index].count = this.Shoplist[obj.index].count < 0 ? 0 : this.Shoplist[obj.index].count
        } else {
            this.Shoplist[obj.index].count++
        }
    }
    @action updataShopListFlag = (index: number) => {
        this.Shoplist[index].flag = !this.Shoplist[index].flag
        this.shopAll = this.Shoplist.every((item: any) => { return item.flag })
    }
    @action updataShopAll = (flag: boolean) => {
        this.shopAll = flag
        this.Shoplist.forEach((item: any) => {
            item.flag = this.shopAll
        })
    }
    //异步请求
    @action getList = async () => {
        //   let res = await axios.get('/list')
        let res: string[] = ['a', 'b']
        runInAction(() => {
            this.Shoplist = res
        })
    }

    //计算属性
    @computed get shopCount() {
        return this.Shoplist.filter((item: any) => item.flag).reduce((prev: any, next: any) => { return prev += next.count }, 0)
    }
    @computed get shopTotal() {
        return this.Shoplist.filter((item: any) => item.flag).reduce((prev: any, next: any) => { return prev += next.count * next.prc }, 0)
    }
}



export default { name: 'homeStore', store: new HomeStore() }