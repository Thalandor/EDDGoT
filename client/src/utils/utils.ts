export class Utils{

    public static async GetConfig(){
        let result = await fetch(`${process.env.PUBLIC_URL}/externalconfig.json`);
        let json = await result.json();
        return json;
    }
}
