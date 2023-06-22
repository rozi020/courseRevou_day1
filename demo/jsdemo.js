function peringatan(){
    let namaDepan = document.getElementById("nama-depan").value
    let namaBelakang = document.getElementById("nama-belakang").value
    alert(namaDepan + " " + namaBelakang);
}

function pertambahan(){
    let angkaPertama = document.getElementById("angka-pertama").value
    let angkaKedua = document.getElementById("angka-kedua").value
    let hasil = parseInt(angkaPertama) + parseInt(angkaKedua);

    alert(hasil);
}
