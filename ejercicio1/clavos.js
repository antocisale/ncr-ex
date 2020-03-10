// arrays que se brindan, que indican las tablas y los clavos que se pueden o no usar
let inicio = [1,4,5,8]
let final = [4,5,9,10]
let clavos = [4,6,7,10,2]


// funcion para identificar si el largo del array de inicio de table coincide con el del final. De ser así, se obtiene el largo N
const contarTablas = (inicio,final)=>{
    if(inicio.length == final.length){
        return inicio.length;
    }
    throw "error en cantidad de tablas";
}

/**
 * SOLUCION:
 * 1. se crea un array de "tablas", donde se pusheará cada tabla con su inicio y su fin
 * 2. se hace un loop por la cantidad de clavos, y al mismo tiempo por el largo del array de tablas
 * 3. si el clavo es mayor o igual a la tabla de la posición 0, posición "inicio"; y también es menor
 *    o igual a la tabla de la posición 0, posición "final", el contador aumenta y esa tabla, 
 *    como ya fue clavada, se elimina del array de tablas.
 * 4. Si luego de hacer el loop quedan tablas sin clavar en el array "tablas", o sea que tablas tiene un largo mayor que 0,
 *    la función tirará el resultado -1
 * 5. En caso contrario, si el array de tablas está vacío, tirará el resultado del contador, indicando que
 *    todas las tablas fueron clavadas
 * 
 * 
 */
const solucion = (inicioTabla,finTabla,clavos,cantClavos = clavos.length, cantTablas=contarTablas(inicioTabla,finTabla))=>{
    let tablas = [];
    let contador = 0;

    for(let i=0;i<cantTablas; i++){
        tablas.push([inicioTabla[i],finTabla[i]])
    }
    
    for (let j=0;j<cantClavos;j++){
        for(let k=0;k<tablas.length;k++){
            if (clavos[j]>=tablas[0][0] && clavos[j]<=tablas[0][1]){
                contador ++;
                tablas.splice(0,1)
            }
        }
    }
    if (tablas.length>0){
        return -1
    }
    else{
        return contador;
    }
}

