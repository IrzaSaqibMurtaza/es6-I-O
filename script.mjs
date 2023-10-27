function doConvert(event) {
    event.preventDefault();
    
    console.log("Function is running");

    let celsius = document.querySelector("#celsiusInput").value;
    
    console.log(celsius);
    
    let fahrenheit = (celsius * 9/5) + 32;
    
    console.log(fahrenheit);
    
    let resultMessage =
        `The temperature ${celsius} &deg;C is equivalent to ${fahrenheit.toFixed(2)} &deg;F`;
    
    document.querySelector("#resultWindow").innerHTML = resultMessage;
}