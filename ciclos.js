console.log("Punto 1. Sumatoria de numeros positivos.")
let numero =1 , suma = 0, cantidad = 0
while(numero > 0){
    numero =+ prompt("Ingrese un numero mayor a cero. 0 para salir  ")
    suma += numero
    cantidad ++
}

console.log(`La suma total de los ${cantidad-1} numeros es: ${suma} `)



console.log("Punto 2. Numeros aleatorios(1-10)")
let numero2 = 1
while (numero2 != 0){
    numero2 = Math.floor(Math.random()*(10))
    console.log(numero2)
}



console.log("Punto 3. Numeros aleatorios(1-100)")
for(let i=0;i<=20;i++)
    console.log(Math.floor(Math.random()*(100-1)+1))



console.log("Punto 4. Numeros  impares hasta n")
let numero4 =+prompt ("Ingrese un numero entero positivo:  ")
for(let i = 0; i<=numero4;i++){
    if(i%2 != 0)
        console.log(i)
}    




console.log("Punto 5. Peso de las personas")
let cantidadPersonas = 20
let ninos = 0,jovenes = 0,adultos = 0 ,viejos = 0
let pninos = 0 ,pjovenes = 0, padultos = 0, pviejos = 0
for(let i=0;i<cantidadPersonas;i++){
    let edad =+ prompt(`Ingrese la edad de la persona ${i+1}`)
    let peso =+ prompt(`Ingrese el peso de la persona ${i+1}`)
    if (edad>=0 && edad <=12){
        ninos++
        pninos += peso
    }
    else if (edad>=13 && edad <=29){
        jovenes++
        pjovenes += peso
    }
    else if (edad>=30 && edad <=59){
        adultos++
        padultos += peso
    }
    else if (edad>=60){
        viejos++
        pviejos+=peso
    }
}
if(ninos>0)
    pninos/= ninos
if(jovenes>0)
    pjovenes/= jovenes
if(adultos>0)
    padultos/= adultos
if(viejos>0)
    pviejos/= viejos

console.log(`Promedio de peso de niños:  ${pninos}\nPromedio de peso de jovenes:  ${pjovenes}\nPromedio de peso de adultos:  ${padultos}\nPromedio de peso de viejos:  ${pviejos}\n `)






console.log("Punto 6")

for(let i = 0; i<5;i++){
    console.log(`1.${i+1}.1 -  1.${i+1}.2   -   1.${i+1}.3   -   1.${i+1}.4`)
}






console.log("Punto 7")

let animal =+prompt("Ingrese el animal que va a estudiar:  (1)Elefante   (2)Jirafa   (3)Chimpance  ")
let categoria1 = 0,categoria2 = 0,categoria3 = 0
if(animal == 1){
    for(let i=0;i<20;i++){
        let edad =+ prompt("Edad del elefante:    ")
        if(edad== 0 || edad==1)
            categoria1 ++
        else if(edad > 1 && edad<=3)
            categoria2 ++
        else if(edad>3)
            categoria3 ++
    }
    console.log(`Porcentaje de elefantes de 0 a 1 año: ${categoria1*100/20}%\nPorcentaje de elefantes de 1 a 3 años: ${categoria2*100/20}%\nPorcentaje de elefantes mayor a 3 años: ${categoria3*100/20}%`)
}
else if(animal == 2){
    for(let i=0;i<15;i++){
        let edad =+prompt("Edad de la jirafa:    ")
        if(edad== 0 || edad==1)
            categoria1 += 1
        else if(edad > 1 && edad<=3)
            categoria2 += 1
        else if(edad>3)
            categoria3 += 1
    }
    console.log(`Porcentaje de jirafas de 0 a 1 año: ${categoria1*100/15}%\nPorcentaje de jirafas de 1 a 3 años: ${categoria2*100/15}%\nPorcentaje de jirafas mayor a 3 años: ${categoria3*100/15}%`)}
else if(animal == 3){
    for(let i=0;i<40;i++){
        edad =+prompt("Edad del chimpance:    ")
        if(edad== 0 || edad==1)
            categoria1 += 1
        else if(edad > 1 && edad<=3)
            categoria2 += 1
        else if(edad>3)
            categoria3 += 1
        }
    console.log(`Porcentaje de chimpance de 0 a 1 año: ${categoria1*100/40}%\nPorcentaje de chimpance de 1 a 3 años: ${categoria2*100/40}%\nPorcentaje de chimpance mayor a 3 años: ${categoria3*100/40}%`)
}




console.log("Punto 8")
let N =+prompt("Ingrese cantidad de vendedores:  "),
sueldoBase =+prompt("Ingrese sueldo base:  "),
ventasSemana = 3,
comision = 0.1
for(let i=0;i<=N;i++){
    let venta = 0
    for(let j=0;j<=ventasSemana;j++)
        venta +=+prompt(`Ingrese el monto de la venta ${j+1} generada en la semana por el vendedor ${i+1}:  `)
    console.log(`El vendedor ${i+1} obtiene por comision $${venta*comision} y en total su salario es de $${sueldoBase + venta*comision}`)
}



console.log("Punto 9")
let salario = 950000,
comisionPorAuto = 170000,
aumentoPorVenta = 0.05,
ventas = 0,
N2 =+prompt("Cantidad de autos vendidos:  ")
for(let i=0;i<N2;i++)
    ventas +=+prompt(`Valor del auto ${i+1}:     `)
console.log(`El vendedor recibe un salario de ${salario + (N2*comisionPorAuto) + (ventas*aumentoPorVenta)}`)



console.log("Punto 10")
let nombre = prompt("Nombre del estudiante:  ")
nota1 = 0, nota2 = 0
for(let i=0;i<5;i++){
    let notaNueva =+prompt(`Ingrese nota ${i+1}`)
    if(i<2){
        if(notaNueva>5 || notaNueva<0){
            alert(`Error. Nota fuera de rango`)
            i--
        }else
            nota1+= notaNueva
    }else if(notaNueva>5 || notaNueva<0){
            alert(`Error. Nota fuera de rango`)
            i--
    }else
            nota2+= notaNueva
}
let notaFinal = (nota1)/2*0.4 + (nota2)/3*0.6
console.log(`Nota final de ${nombre} es ${notaFinal}`)
