// Task 2:
// Buat sebuah function dengan aturan paramaternya sebagai berikut : 
 
// Harus array
// Value dari array harus integer / number
// 5 value pertama positif 5 value terakhir negatif
 
// Jika
//       paramater tidak memenuhi kriteria , tampilkan pesan error berupa alert
// Else 
//      Jika
//           parameter positif kalikan value value tersebut
 
//      Else
//          Jumlah semua bilangan negatif
 
// Lalu return kedua value yang sudah di olah kedalam array
 
 
 
// Contoh 
// nama_Function([1,2,3,4,5, -1,-2,-3,-4,-5])
// Expected output :
// [120, -15]

function nama_Function(arr) {
    let bool=true,temp=[1,0]
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number' ){
            Math.sign(arr[i])==1 || Math.sign(arr[i])==0 ? temp[0]*=arr[i]:temp[1]+=arr[i];
        }else{ 
            bool = false
            break;
        }
    }
    bool==true?console.log(temp):alert("ada yg bukan number");
}
nama_Function([1,2,3,4,5, -1,-2,-3,-4,-5])