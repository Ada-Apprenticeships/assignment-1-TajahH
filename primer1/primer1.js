function temperatureConversion(temperature, fromScale, toScale){
 const validScales = ["C", "F", "K", "c", "f", "k"]

    // Helper functions
    function toFahrenheit(C){
        let fahrenheit = (C * 9 / 5) + 32
        return fahrenheit; 
    }    
    
    function toCelsius(F){
        let celsius = (F - 32) * 5 / 9
        return celsius;
    }
    
    function kToCelsius(K){
        let celsius = K - 273.15
        return celsius;
    }
    
    function kToFahrenheit(K){
        let fahrenheit = (K - 273.15) * 9 / 5 + 32
        return fahrenheit;
    }

    function cToKelvin(C){
        let kelvin = C + 273.15
        return kelvin;
    }
    function fToKelvin(F){
        let kelvin = (F - 32) * 5 / 9 + 273.15
        return kelvin;
    }

// TODO: Validate the input:
//        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
//        - Convert the temperature to a number.
//        - Normalise fromScale and toScale to uppercase.
//        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".
    
    temperature = parseFloat(temperature);
    

    if (temperature == null | undefined | isNaN(temperature)) {
        throw new Error("Invalid temperature input")
    } else {

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();
    }

    if (!validScales.includes(fromScale) || !validScales.includes(toScale)){
        throw new Error("Invalid conversion type or input scale")
    } else if (fromScale == "C" && toScale == "F"){
       temperature = toFahrenheit(temperature)
    } else if (fromScale == "F" && toScale == "C"){
       temperature = toCelsius(temperature)
    } else if (fromScale == "K" && toScale == "C"){
        temperature = kToCelsius(temperature)
    } else if (fromScale == "K" && toScale == "F"){
        temperature = kToFahrenheit(temperature)
    } else if (fromScale == "C" && toScale == "K"){
        temperature = cToKelvin(temperature)
    } else if (fromScale == "F"  && toScale == "K"){
        temperature = fToKelvin(temperature)
    }
    


// TODO: Define helper functions for the conversions:
//        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
//        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.


    
//        
// TODO: Implement the conversion logic:
//        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
//        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
//        - Use the helper functions to perform the actual conversions.

    return temperature
}

let temperature = "abc"
temperature = parseFloat(temperature);
console.log(temperature)

export default temperatureConversion;




