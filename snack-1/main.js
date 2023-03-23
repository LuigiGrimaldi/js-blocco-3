// Snack 1
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.

const allCars = [
    { model: 'fiesta', aliment: 'diesel' },
    { model: 'fiesta', aliment: 'diesel' },
    { model: 'fiesta', aliment: 'elettrica' },
    { model: 'fiesta', aliment: 'metano' },
    { model: 'fiesta', aliment: 'metano' },
    { model: 'fiesta', aliment: 'diesel' },
    { model: 'fiesta', aliment: 'diesel' },
    { model: 'fiesta', aliment: 'benzina' },
    { model: 'fiesta', aliment: 'elettrica' },
    { model: 'fiesta', aliment: 'benzina' }
]


const alimDiesel = allCars.map((aliment) => {
    if(aliment == aliment.diesel){
        return true;
    }
        return false
})

console.log(alimDiesel);
    
