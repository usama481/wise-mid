function check(){
    let num = parseInt(document.getElementById("num-el").value)
    
    if (num%2==0) {
        document.write("even")
    } else {
        document.write("odd")
    }   
}
