import { Credentials } from "uport-credentials";

export class Configuration{

    private static instance: Configuration;
    private _endpoint: string = '';

    get endpoint(){
        return this._endpoint;
    }

    set endpoint(value: string){
        this._endpoint = value;
    }

    public static getInstance() {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
            // ... any one time initialization goes here ...
        }
        return Configuration.instance;
    }

    public getCredentials(){
        //setup Credentials object with newly created application identity.
        return new Credentials({
            did: 'did:ethr:0x3c01723a220cd7a959675e2377f8843fa5dec9a0',
            privateKey: '5f190d5c3996862ca8f89b499714a9f49efddded7bab86eb288ede4df4d306e3',
        })
    }



    

}