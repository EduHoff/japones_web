export function randomNumber() {
    switch(Number(localStorage.getItem("category"))){
        case 1:
            return Math.floor(Math.random() * (46))   //0 até 45      
        case 2:
            return Math.floor(Math.random() * (25)) + 46    //46 até 70
        case 4:
            return Math.floor(Math.random() * (21)) + 71   //71 até 91
        case 3:
            return Math.floor(Math.random() * (71))   //0 até 70 
        case 5:
            let aux = Math.floor(Math.random() * (67)) //aux:0 até 66
            if(aux <= 45){
                return Math.floor(Math.random() * (46))   //0 até 45
            }else{
                return Math.floor(Math.random() * (21)) + 71   //71 até 91
            }        
        case 6:
            return Math.floor(Math.random() * (58)) + 46    //46 até 103
        case 7:
            return Math.floor(Math.random() * (104))   //0 até 103   
        default:
            return Math.floor(Math.random() * (46))   //0 até 45
    }
}