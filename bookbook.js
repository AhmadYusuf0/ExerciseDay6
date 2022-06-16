/*Try creating a function that has parameters name of book & quantity of the book as an object,
then display sentence if book can be purchased or not.*/


const book = [
    {
        tittle : "Buku Pertama",
        jumlah : 3
    },
    {
        tittle : "Buku Kedua",
        jumlah : 7
    },
    {
        tittle : "Buku Ketiga",
        jumlah : 0
    }
]

let titleJa = 0
let jumlahJa = 0

function tampil(){
    let titleArr = book[titleJa].tittle
    if(jumlahJa < book[titleJa].jumlah){
        console.log(`${titleArr} bisa dibeli`)
        jumlahJa += 1
    } else {
        console.log(`${titleArr} tidak bisa dibeli`)
        titleJa += 1    
        jumlahJa = 0
    }
}

setInterval(tampil, 1000);

/*const tittleBook = book[0].tittle
let tittleJumlah = book[0].jumlah


function tampil (tittle, jumlah){
      if (jumlah > 0) {
        console.log (`${tittle} bisa dibeli`);
    } else {
        console.log (`${tittle} tidak bisa dibeli`);
    }
}

tampil (tittleBook, tittleJumlah)*/