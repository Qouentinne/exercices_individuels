// Logique : je rencontre un caractère, je compte combien de fois il se répète et j'enregiste l'information "nb_répétition caractère"

const initStr = "aggg28433oooookllm"

let audiocodeur = (initStr) => {
    let initArr = initStr.split('');
    let cutArr = stringCutter(initArr);
    let finalStr = finalizer(cutArr);

    return finalStr
}

let stringCutter = (initArr) => {
    let i=0;
    let finArr = [];
    let currBlock = [initArr[0]];
    while (i<initArr.length){
        if (initArr[i+1] === initArr[i]){
            currBlock.push(initArr[i+1])
        } else {
            finArr.push(currBlock);
            currBlock = [initArr[i+1]];
        }
        i++;
    }
    return finArr
}

let finalizer = (arr) => {
    let finalArr = []
    arr.forEach(element => {
        finalArr.push(element.length);
        finalArr.push(element[0]);
    });
    return finalArr.join('')
} 

let suiteConway = (initStr, n) => {
    let currStr = initStr;
    for (let i = 0; i < n; i++) {
        console.log(currStr)
        currStr = audiocodeur(currStr)        
    }
    return currStr
}

console.log(suiteConway('ab', 5))