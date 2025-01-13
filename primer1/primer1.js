function temperatureConversion(temperature, fromScale, toScale){
// TODO: Validate the input:
//        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
//        - Convert the temperature to a number.
//        - Normalise fromScale and toScale to uppercase.
//        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".

    parseFloat(temperature);

    if (temperature == null | undefined | NaN) {
        throw new Error("Invalid temperature input")
    } else 

    fromScale.toUpperCase;
    toScale.toUpperCase;

    if (fromScale && toScale != "C" | "F" | "c" | "f"){
        throw new Error("Invalid conversion type or input scale")
    } else if (fromScale == "C"){

    }


// TODO: Define helper functions for the conversions:
//        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
//        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.

    function toFahrenheit(celsius){
        let fahrenheit = (celsius * 9 / 5) + 32
        return fahrenheit 
    }    

    function toCelsius(fahrenheit){
        let celsius = (fahrenheit - 32) * 5 / 9
        return celsius
    }

    
//        
// TODO: Implement the conversion logic:
//        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
//        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
//        - Use the helper functions to perform the actual conversions.


}



export default temperatureConversion;




