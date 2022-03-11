let isValidDate = function(gDate){
    let arrDate = gDate.split("/")
    let d = parseInt(arrDate[0])
    let m = parseInt(arrDate[1])
    let y = parseInt(arrDate[2])
    if ((d<1 || d>31) || (m<1 || m>12) || (y<1000 || y>9999)){
        return false
    }
    if (m == 2 && d > 29){
        return false
    }
    if ((m == 4 || m==6 || m==9 || m==11) &&  d>30){
        return false
    }
    return true
}

function isPalindrome(gDate){
    //check valid date
    if (isValidDate(gDate)){
        const arr1 = gDate.match(/\d/g) //create an array w/ only numbers
        let arr2 = arr1.slice()
        arr2.reverse() //reverse array
        for (let i=0; i < arr1.length; i++){ // compare elements of arrays 1 by 1, comparing arrays directly does not work
            if(arr1[i] != arr2[i]){
                return false
            }
        }
        return true
    }
}

function formatLowNumbers(n){
    if (parseInt(n)<10){
        return "0"+n
    }
    return n
}

function dateToString(date){
    return formatLowNumbers(date.getDate().toString()) + "/" + formatLowNumbers((date.getMonth()+1).toString()) + "/" + date.getFullYear().toString()
} 

function stringToDate(date){
    dateArr=date.split("/")
    dateStr=dateArr[2]+"-"+dateArr[1]+"-"+dateArr[0]
    return new Date(dateStr)
}

function getNextPalindromes(x){
    let date = new Date()
    results = []
    let dateString=""
    while (results.length<x){
        dateString = dateToString(date)
        if(isPalindrome(dateString)) {
            results.push(dateString)
        }
    date.setDate(date.getDate()+1)
    }
    results.forEach(d => {
        console.log(d)
    });
}

function getNextPalindromes_(x){
    let today = new Date()
    let date = today.getFullYear()
    let results=[]
    while (results.length<x){
        let dateString = date.toString()
        let dateArray = dateString.split("")
        let copyArray = dateArray.slice()
        copyArray.reverse()
        let finArray = copyArray.concat(dateArray)
        let finDate = ""
        finDate = finArray[0] + finArray[1]+ "/" + finArray[2] + finArray[3] + "/" + finArray[4] + finArray[5] + finArray[6] + finArray[7]
        if(isPalindrome(finDate) && stringToDate(finDate) > today) {
            results.push(finDate)
        
        }
        date++
    }
    results.forEach(d => {
        console.log(d)
    });   
}
