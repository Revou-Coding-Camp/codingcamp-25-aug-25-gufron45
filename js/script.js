menyapa ()

function menyapa() {
    let nama = prompt("Tolong Masukkan Nama Anda : ");
   document.getElementById("nama").innerHTML = nama;
}

function validasiform() {
    let nama = document.getElementById("nama-pengunjung").value;
    let nomor = document.getElementById("nomor-pengunjung").value;
    let email = document.getElementById("email-pengunjung").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "") {
        alert("Nama kamu siapaaa???");
        return;
    }
    if (nomor === "") {
        alert("Aku boleh tau nomormu gak?");
        return;
    }
    if (email === "") {
        alert("Isi emailnya dongggg");
        return;
    }
    if (pesan === "") {
        alert("Kok gak ngasih pesan? kamu marah yaa?");
        return;
    }

    // Tampilkan hasil ke kotak samping form
    document.getElementById("hasil").innerHTML = `
        <b>Nama:</b> ${nama}<br>
        <b>Nomor HP:</b> ${nomor}<br>
        <b>Email:</b> ${email}<br>
        <b>Pesan:</b> ${pesan}
    `;
}

// fungsi klik profil hero
function klikProfil() {
    document.getElementById("profil-guy").innerHTML = `
        <h3>Guy Gardner</h3>
        <p>Guy Gardner adalah seorang anggota Justice Gang yang dikenal dengan sikapnya yang keras kepala dan berani. Dia memiliki kekuatan super, termasuk kemampuan terbang, kekuatan fisik yang luar biasa, dan kemampuan untuk memanipulasi energi. Guy juga dikenal karena kepribadiannya yang unik dan sering kali bertindak sebagai karakter yang humoris dalam tim.</p>
    `;
}