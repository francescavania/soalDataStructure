// Task 1:
// Buat sebuah function dengan aturan paramaternya sebagai berikut : 
 
// Harus array
// Value dari array harus integer / number
 
// Jika
//       paramater tidak memenuhi kriteria , tampilkan pesan error berupa alert
// Else 
//      Return invert value dari array.
 
// Contoh 
// nama_Function([1,2,3,4,5])
// Expected output :
// [-1,-2,-3,-4,-5]

function nama_Function(arr) {
    let bool=true;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number'){
            arr[i] *= -1
        }else{
            bool = false
            break;
        }
    }
    bool==true?console.log(arr):alert("ada yg bukan int");
}

nama_Function([1,2,3,4,5])