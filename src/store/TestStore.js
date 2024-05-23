import {makeAutoObservable} from "mobx";

export default class TestsStore{
    constructor() {
        this._types = [
            {id: 1, name: 'type1'},
            {id: 2, name: 'type2'},
            {id: 3, name: 'type3'},
            {id: 4, name: 'type4'},
        ]


        makeAutoObservable(this)
    }
    setTypes(bool) {
        this._types = bool;
    }
    get types() {
        return this._types
    }

}