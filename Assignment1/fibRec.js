function fibRec(n) {
 
    if (n < 2) {
        return [0, 1]
    }
    let s = fibRec(n-1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s
}
console.log(fibRec(8))