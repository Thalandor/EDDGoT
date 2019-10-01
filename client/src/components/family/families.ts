export interface IFamily{
    picture: string,
    name: string,
    warcry: string,
    family: FamiliesEnum
}

export enum FamiliesEnum{
    LANNISTER, 
    STARK,
    TARGARYEN
}

export const Families: IFamily[] = [
    {
        picture: process.env.PUBLIC_URL + '/assets/animatedTywin.gif',
        name: "Lannister",
        warcry: "Hear me roar!",
        family: FamiliesEnum.LANNISTER
    },
    {
        picture: process.env.PUBLIC_URL + '/assets/animatedNed.gif',
        name: "Stark",
        warcry: "Winter is comming!",
        family: FamiliesEnum.STARK
    },
    {
        picture: process.env.PUBLIC_URL + '/assets/animatedDaenerys.gif',
        name: "Targaryen",
        warcry: "Fire and blood!",
        family: FamiliesEnum.TARGARYEN
    }

]