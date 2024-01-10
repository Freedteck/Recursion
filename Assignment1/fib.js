function fib(n) {
    const result = []
    for(i = 0; i<n; i++){
        if (i <=1) {
            result.push(i)
        }
        else {
            result.push(result[(i - 2)] + result[(i - 1)])
        }
        
    }
    return result
}