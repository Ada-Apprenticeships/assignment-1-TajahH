function temperatureConversion(temperature, fromScale, toScale){
 const validScales = ["C", "F", "K"];

    // Helper functions
    function cToFahrenheit(C){
        let fahrenheit = (C * 9 / 5) + 32
        return fahrenheit; 
    }    
    
    function fToCelsius(F){
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
    
temperature = parseFloat(temperature);
    
    if (temperature == null | undefined | isNaN(temperature)) {
        throw new Error("Invalid temperature input");
    } else {

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();

    }

    if (!validScales.includes(fromScale) || !validScales.includes(toScale)){
        throw new Error("Invalid conversion type or input scale")
    } else if (fromScale == "C" && toScale == "F"){
       temperature = cToFahrenheit(temperature);
    } else if (fromScale == "F" && toScale == "C"){
       temperature = fToCelsius(temperature);
    } else if (fromScale == "K" && toScale == "C"){
        temperature = kToCelsius(temperature);
    } else if (fromScale == "K" && toScale == "F"){
        temperature = kToFahrenheit(temperature);
    } else if (fromScale == "C" && toScale == "K"){
        temperature = cToKelvin(temperature);
    } else if (fromScale == "F"  && toScale == "K"){
        temperature = fToKelvin(temperature);
    }

    return temperature;
}

export default temperatureConversion;




