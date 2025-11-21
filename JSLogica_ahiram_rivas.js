// 1.- Decideix si un número és múltiple de 3 o de 7

function exercici1(num) {
    if (num % 3 === 0) console.log(num + " es multiple de 3");
    if (num % 7 === 0) console.log(num + " es multiple de 7");
    if (num % 3 !== 0 && num % 7 !== 0) console.log(num + " no és multiple de 3 ni de 7");
}

exercici1(9)

// 2.- Donats dos enters (x, y), dir quins d’ells estan en el rang de 10 a 50 inclosos. Utilitza un operador ternari.

function exercici2(x, y) {
    let resultatX = (x >= 10 && x <= 50) ? "x està dins del rang" : "x està fora del rang";
    let resultatY = (y >= 10 && y <= 50) ? "y està dins del rang" : "y està fora del rang";
    console.log(resultatX);
    console.log(resultatY);
}

exercici2(20, 30)

// 3.- Donat un enter (x), mostra per pantalla la qualificació de l’examen:
//     - [0, 4,99] = Suspès
//     - [5, 5,99] = Suficient
//     - [6, 6,99] = Bé
//     - [7, 8.99] = Notable
//     - [9, 10] = Excel·lent

function exercici3(x) {
    if (x < 0 || x > 10) {
        console.log("Nota no vàlida");
        return;
    }

    if (x < 5) console.log("Suspès");
    else if (x < 6) console.log("Suficient");
    else if (x < 7) console.log("Bé");
    else if (x < 9) console.log("Notable");
    else console.log("Excel·lent");
}

exercici3(7)


// 4.- Modifica l’exercici 1, perquè mostri el text: és múltiple de 3, de 7 o de 3 i 7 utilitzant un switch.

function exercici4(num) {
    let resultat = "";

    switch (true) {
        case (num % 3 === 0 && num % 7 === 0):
            resultat = "És múltiple de 3 i 7";
            break;
        case (num % 3 === 0):
            resultat = "És múltiple de 3";
            break;
        case (num % 7 === 0):
            resultat = "És múltiple de 7";
            break;
        default:
            resultat = "No és múltiple de 3 ni de 7";
    }

    console.log(resultat);
}

exercici4(30)


//     5.- Donat un enter (x), troba el màxim número n tal que 1+2+3+...+n <= x
//     Exemple: si x=15, n seria 5 ( 1 + 2 +3 +4 +5 = 15)

function exercici5(x) {
    let suma = 0;
    let n = 0;

    while (suma + (n + 1) <= x) {
        n++;
        suma += n;
    }

    console.log("n =", n);
}

exercici5(20)


//     6.- Donat un String (x), sumar els caràcters que siguin números.

function exercici6(str) {
    let suma = 0;

    for (let c of str) {
        if (!isNaN(c) && c !== " ") {
            suma += Number(c);
        }
    }

    console.log("Suma:", suma);
}

exercici6("hola1234")

//     7.- Donat tres enters, ordena de major a menor.

function exercici7(a, b, c) {
    let nums = [a, b, c];
    nums.sort((x, y) => y - x);
    console.log(nums);
}

exercici7(15,8,44)

//     8.- Donat un enter (x), fes un bucle que digui des del 0 a x, quins són parells i quins senars.


//     9.- Realitza una funció que, utilitzant bucles, mostri per pantalla el següent patró:


//     10.- Utilitza un do..while per sumar els múltiples de 3 i 5 fins al número 1000.


//     11.- Modifica l’exercici 9 perquè només mostri les línies amb estrelles imparelles. Utilitza la sentència continue.


//     12.- Donat un enter de longitud par, intercanvia els dígits adjacents. Exemple: 123456 → 214365
