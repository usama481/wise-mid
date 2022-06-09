function primecheck(){
    
    let pnum = parseInt(document.getElementById("pnum").value)
    let isPrime = true;
    if (pnum === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (pnum > 1) {
        for (let i = 2; i < pnum; i++) {
            if (pnum % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(pnum + " is a prime number");
        } else {
            console.log(pnum + " is not a prime number");
        }
    }
}