//funcion que busca en una cadena si posee o no los caracteres de otra - devuelve un booleano

const cadenaEncontrada = (cadena,caracteres)=>{
    let encontradas = 0;
    for(let i = 0; i < cadena.length ; i++)
    if(caracteres.indexOf(cadena[i])>=0){
        encontradas++};
    return encontradas == caracteres.length;
}


/**
 * SOLUCION:
 * 1. chequeo del largo de la subcadena cuántos caracteres hay desde el centro de la misma hacia ambos lados. 
 *    En este caso hay 1 de cada lado.
 * 2. loop por la subcadena, para obtener cada caracter por separado
 * 3. loop sobre la cadena a analizar
 * 4. si el caracter de la cadena coincide con la letra de la subcadena por la que estamos loopeando,
 *    obtenemos un substring que incluye desde ese caracter, el largo hacia la derecha y el largo hacia la izquierda, 
 *    obteniendo grupos de a 3 caracteres (el lago de la subcadena)
 * 5. si al ejecutar la funcion "cadena encontrada", analizando el substring y la subcadena original da true, el contador suma 1
 * 
 */
const solucion = (cadena, subcadena)=>{
    let contador = 0;
    let largoSubCadena = Math.trunc(subcadena.length/2);
    

    for (let i=0; i<subcadena.length; i++){
        let letra = subcadena[i];
        
        for (let j=0;j<cadena.length;j++){
            if(cadena[i]===letra){
                let cadenaPosible = cadena.substring(j-largoSubCadena,(j+largoSubCadena)+1);

                if (cadenaEncontrada(cadenaPosible,subcadena)){
                    contador ++;
                }
            }
        }
    }
    return contador;
}
