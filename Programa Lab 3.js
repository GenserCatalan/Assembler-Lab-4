// Función para convertir un número entero a binario de 8 bits
function decimalToBinary(decimal) {
    let binary = decimal.toString(2);
    while (binary.length < 8) {
        binary = "0" + binary;
    }
    return binary;
}

// Función para convertir un número binario de 8 bits a complemento a dos
function binaryToTwosComplement(binary) {
    if (binary.charAt(0) === "1") {
        let invertedBinary = "";
        for (let i = 0; i < binary.length; i++) {
            invertedBinary += (binary.charAt(i) === "0" ? "1" : "0");
        }
        let decimal = parseInt(invertedBinary, 2) + 1;
        return "-" + decimal;
    } else {
        return parseInt(binary, 2);
    }
}

// Función para convertir un número hexadecimal a decimal
function hexadecimalToDecimal(hex) {
    return parseInt(hex, 16);
}

// Función para convertir un número decimal a hexadecimal de 3 dígitos
function decimalToHexadecimal(decimal) {
    let hex = decimal.toString(16);
    while (hex.length < 3) {
        hex = "0" + hex;
    }
    return hex; 
}

// Función para manejar la entrada del usuario y mostrar los resultados
function main() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("1. Convertir número entero a binario de 8 bits");
    console.log("2. Convertir número binario de 8 bits a complemento a dos");
    console.log("3. Convertir número hexadecimal a decimal");
    console.log("4. Convertir número decimal a hexadecimal de 3 dígitos");

    readline.question("Seleccione una opción: ", (opcion) => {
        if (opcion === "1") {
            readline.question("Ingrese un número entero: ", (numeroDecimal) => {
                console.log("Número decimal:", numeroDecimal);
                console.log("Número binario de 8 bits:", decimalToBinary(numeroDecimal));
                readline.close();
            });
        } else if (opcion === "2") {
            readline.question("Ingrese un número binario de 8 bits: ", (numeroBinario) => {
                console.log("Número binario de 8 bits:", numeroBinario);
                console.log("Complemento a dos:", binaryToTwosComplement(numeroBinario));
                readline.close();
            });
        } else if (opcion === "3") {
            readline.question("Ingrese un número hexadecimal de 3 dígitos: ", (numeroHexadecimal) => {
                console.log("Número hexadecimal:", numeroHexadecimal);
                console.log("Número decimal:", hexadecimalToDecimal(numeroHexadecimal));
                readline.close();
            });
        } else if (opcion === "4") {
            readline.question("Ingrese un número decimal: ", (numeroDecimal) => {
                console.log("Número decimal:", numeroDecimal);
                console.log("Número hexadecimal de 3 dígitos:", decimalToHexadecimal(numeroDecimal));
                readline.close();
            });
        } else {
            console.log("Opción no válida");
            readline.close();
        }
    });
}

main();


