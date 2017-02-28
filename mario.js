function printPyramid(height) {
    var number = 0;
    var block = "##";
    while(number < height){
        console.log(block)
        block += "#";
        number += 1;
    }
}

var x = prompt("Enter a Height");
printPyramid(x);

}
