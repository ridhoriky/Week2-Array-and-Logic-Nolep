// # Handling Data Array agar menghasilkan output yg baik | Part 1

// ## Soal 1
// ```js
/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/
// ```

//jawab
const dataHandling = (input) => {
  for (array of input) {
    const [id, nama, tempatLahir, tanggalLahir, hobi] = array;
    console.log(`Nomor ID: ${id}`);
    console.log(`Nama Lengkap: ${nama}`);
    console.log(`TTL: ${tempatLahir} ${tanggalLahir}`);
    console.log(`Hobi: ${hobi}`);
  }
};

dataHandling(input);

// ## Soal 2
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// ```js
let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  input[1] = "Roman Alamsyah Elsharawy";
  input[2] = "Provinsi Bandar Lampung";
  input.splice(4, 0, "Pria");
  input[5] = "SMA Internasional Metro";

  console.log(input);

  const bulanAngka = Number(input[3].slice(3, 5));
  console.log(
    new Date(2000, bulanAngka - 1).toLocaleString("id-ID", { month: "long" })
  );

  const value3 = input[3].split("/").reverse();
  [value3[1], value3[2]] = [value3[2], value3[1]];

  console.log(value3);

  const value4 = input[3].split("/").join("-");
  console.log(value4);

  const value5 = input[1];

  console.log(value5.slice(0, 15));
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
// ```
