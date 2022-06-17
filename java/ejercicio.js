let figuras = prompt("Escribe la figura que desees ejecutar : ")

let base;
let altura;
let radio;

switch(figuras){
    case "Rectángulo":
    case "Rectangulo":
    case "RECTÁNGULO":
    case "RECTANGULO":
    case "rectángulo":
    case "rectangulo":
        base = prompt("¿Cuánto es la base?")
        altura = prompt("¿Cuánto es la altura?")
        console.log(`El área del Rectángulo es ${base*altura}`)
        console.log(`El perímetro del Rectángulo es ${base*2+altura*2}`)
        document.write(`El área del Rectángulo es ${base*altura} y su perímetro es ${base*2+altura*2}`)
        break
    
    case "Triángulo": //Triángulo equilátero
    case "Triangulo":
    case "TRIÁNGULO":
    case "TRIANGULO":
    case "triángulo":
    case "triangulo":
        base = prompt("¿Cuánto es la base?")
        altura = prompt("¿Cuánto es la altura?")
        console.log(`El área del Triángulo es ${base*altura/2}`)
        console.log(`El perímetro del Triángulo es ${base*3}`)
        document.write(`El área del Triángulo es ${base*altura/2} y su perímetro es ${base*3}`)
        break

    case "Círculo":
    case "Circulo":
    case "CÍRCULO":
    case "CIRCULO":
    case "círculo":
    case "circulo":
        radio = prompt("¿Cuánto es el radio?")
        diametro = prompt("¿Cuánto es su diámetro?")
        console.log(`El área del Círculo es ${Math.PI*Math.pow(radio,2)}`)
        console.log(`El perímetro del Círculo es ${Math.PI*diametro}`)
        document.write(`El área del Círculo es ${Math.PI*Math.pow(radio,2)} y su perímetro es ${Math.PI*diametro}`)
        break

    case "Cuadrado":
    case "CUADRADO":
    case "cuadrado":
        lado = prompt("¿Cuánto es el lado?")
        console.log(`El área del Cuadrado es ${Math.pow(lado,2)}`)
        console.log(`El perímetro del Cuadrado es ${lado*4}`)
        document.write(`El área del Cuadrado es ${Math.pow(lado,2)} y su perímetro es ${lado*4}`)
        break
        
    
    case "Rombo":
    case "ROMBO":
    case "rombo":
        diagonal_menor = prompt("¿Cuánto es su Diagonal Menor?")
        diagonal_mayor = prompt("¿Cuánto es su Diagonal Mayor?")
        lado = prompt("¿Cuánto es su Lado?")
        console.log(`El área del Rombo es ${diagonal_menor*diagonal_mayor}`)
        console.log(`El perímetro del Rombo es ${lado*4}`)
        document.write(`El área del Rombo es ${diagonal_menor*diagonal_mayor} y su perímetro es ${lado*4}`)
        break

    case "Romboide":
    case "ROMBOIDE":
    case "romboide":
        base = prompt("¿Cuánto es tu base?")
        altura = prompt("¿Cuánto es tu altura?")
        console.log(`El área del Romboide es ${base*altura}`)
        console.log(`El perímetro del Romboide es ${base*2+altura*2}`)
        document.write(`El área del Romboide es ${base*altura} y su perímetro es ${base*2+altura*2}`)
        break
    
    case "Trapecio":
    case "TRAPECIO":
    case "trapecio":
        base_mayor = prompt("¿Cuánto es tu Base Mayor?")
        base_menor = prompt("¿Cuánto es tu Base Menor?")
        altura = prompt("¿Cuánto es tu altura?")
        console.log(`El área del Trapecio es ${altura*base_mayor*base_menor/2}`)
        document.write(`El área del Trapecio es ${altura*base_mayor*base_menor/2}`)
        break

    case "Pentágono":
    case "Pentagono":
    case "PENTÁGONO":
    case "PENTAGONO":
    case "pentágono":
    case "pentagono":
        lado = prompt("¿Cuánto es tu lado?")
        apotema = prompt("¿Cuánto es tu apotema?")
        console.log(`El área del Pentágono es ${apotema/2*lado*5}`)
        console.log(`El perímetro del Pentágono es ${lado*5}`)
        document.write(`El área del Pentágono es ${apotema/2*lado*5} y su perímetro es ${lado*5}`)
        break

    default: console.log("Esta figura no existe")
    document.write("Esta figura no existe");
}