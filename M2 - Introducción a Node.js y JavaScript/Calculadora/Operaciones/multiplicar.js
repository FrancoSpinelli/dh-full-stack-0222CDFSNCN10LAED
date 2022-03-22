function multiplicar(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return 0;
    } else if (num1 == null || num2 == null){
        return 0;
    } else{
        return num1 * num2;
    }
}

module.exports = multiplicar;