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
