function convertFarhToCelsius(farh){
   let intFar = parseInt(farh)
   let celsius = ((intFar - 32) * 5/9);
   return celsius;
}
console.log(convertFarhToCelsius(30))

    function convertFarhToCelsius(farh) {
        let intFar = parseInt(farh);
            
        if (farh == 'NaN') {
        console.log("your input is not a number");

            
         }
         let celsius = ((intFar - 32) * 5/9);
         let fixedCelsius = celsius.toFixed(4);
            return fixedCelsius;
         }

   
   
         function checkYuGiOh(num) {
            for (let i = 0; i <=num; i++){
            if (i % 2 == 0) {
            return ('yu');
            } else if (i % 3 == 0) {
            return ('gi');
            } else if (i % 5 == 0) {
            return ('oh');
            } else if(i == 10){
             return ('yu-oh');
            } else if (i == 30){
             return ('yu-gi-oh');
            } else {
            return (i);
            }
            }
            }