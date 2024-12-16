interface Language{
    [key:string]:{
        text:string,
        code:string
    }
}
export const languages:Language={
    spanish:{
        text:"Español",
        code:"es"
    },
    english:{
        text:"English",
        code:"en"
    }
};