function matrix(curR, curC, r0, c0) {
    function arrPush(r, c, array) {
        if (r >= 0 && r < curentR && c >= 0 && c < curentC) {
            array.push([r, c])
        }
    }
    let curentR = curR
    let curentC = curC
    let r = r0
    let c = c0
    let prohod = 1
    let arr = []
    while (curentR * curentC > arr.length) {
        for (let i = 0; i < prohod; i++) { //left			
            arrPush(r, c, arr)
            c++
        }
        for (let i = 0; i < prohod; i++) { //bot							
            arrPush(r, c, arr)
            r++
        }
        prohod++
        for (let i = 0; i < prohod; i++) { //right			
            arrPush(r, c, arr)
            c--
        }
        for (let i = 0; i < prohod; i++) { //top							
            arrPush(r, c, arr)
            r--
        }
        prohod++
    }
    return arr
}
matrix(5, 6, 1, 4)