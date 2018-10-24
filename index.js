let rect = require('./rectangle');

function solveRect(l,b){
    console.log(`Resolviendo el rectangulo con l = ${l} y b = ${b}`);

    rect(l,b, (err, rectangle) => {
        if (err) { 
            console.log(`ERROR: ${err.message}`)
        }else{ 
            console.log(`El rectangulo con dimenciones l = ${l} y  b = ${b} tiene un 
                        area a = ${rectangle.area()} y un perimetro p = ${rectangle.perimeter()}`);
        }
    })
}

solveRect(1,2);