import { isEven, isOdd } from './basics.mjs'

/**
 * Schreibe eine Funktion, die ein Array von Zahlen so filtert, dass nur die
 * ungeraden Zahlen im Ergebnis enthalten sind.
 * 
 * Optional: Verwende deine Funktion isOdd aus den basics
 * 
 * @param {[int]} numbers //Aray von Zahlen
 * @returns {[int]} 
 */
export function filterOdd(numbers)//(numbers) sind meine Argumente, da können mehrere durch KOmmata getrennte Argumente drin stehen
 {
    return numbers,filter((numbers)=> numbers%2 !==0);
    //Alternative, wenn die isOdd Funktion bereits erstellt wurde
    return.numbers.filter(isOdd);
    //Alternative:
    let result = [];
    for (number of numbers) {
        if (number % 2 !== 0) // ! ist ein Nicht-Operator also das ist nicht gleich/ungleich das
        {
            result.push(numb)
        }
    }
    return result
}

/**
 * Schreibe eine Funktion, die ein Array von Zahlen so filtert, dass nur die
 * geraden Zahlen im Ergebnis enthalten sind.
 * 
 * Optional: Verwende deine Funktion isEven aus den basics
 * 
 * @param {[int]} numbers 
 * @returns {[int]} 
 */
export function filterEven(numbers) {

}

/**
 * Schreibe eine Funktion, die entweder eine einzelne Zahl oder ein Array von
 * Zahlen akzeptiert und als Ergebnis das Quadrat der Zahl bzw. ein Array mit
 * den Quadraten aller Zahlen zurück gibt.
 * 
 * @param {number|[number]} numbers 
 * @returns {number|[number]}
 */
export function square(numbers) {

    // ...
    Array.isArray(numbers)//true/false

    //Wenn numbers ein Array ist:
    //Quadriere jedes Element und sammel sie in einem neuen Array
    //Gib das neue Array als Ergebnis zurück

    //sonst:
    //Quadriere numbers und gib das Ergebnis zurück
    if (Array.isArray(numbers)) {
        return numbers.map(number => number * number);//map um jedes Element zu durchlaufen
    }
    else {
        return numbers * numbers
    }
}