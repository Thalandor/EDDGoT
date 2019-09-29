export const saveLocalStorageValue = () => {};

export class LocalStorageHelper{
    public static saveValue<T>(key: string, value: T){
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
    }

    public static getValue<T>(key: string){
        const value = localStorage.getItem(key);
        if(value){
            return <T>JSON.parse(value);
        }
        return null;
    }
}