export default class LocalStorage{
    static set(localName, data){
        const dataStringify = JSON.stringify(data)
        window.localStorage.setItem(localName, dataStringify)
    }

    static get(localName){
        const data = window.localStorage.getItem(localName)
        return JSON.parse(data)
        
    }
}