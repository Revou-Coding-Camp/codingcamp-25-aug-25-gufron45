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
function klikProfil(element) {
    const hero = element.getAttribute('data-hero');
    let content = "";

    if (hero === "guy") {
        content = `<b>Guy Gardner</b><br>
    Pemimpin dari The Justice Gang.<br>
    Memiliki cincin Green Lantern yang memberikan kekuatan konstruksi cahaya menjadi benda fisik yang nyata.<br>
    Meskipun kadang terlihat arogan, Guy Gardner sangat setia pada teman-temannya dan selalu siap membela keadilan.`;
    } else if (hero === "terrific") {
        content = "<b>Mr Terrific</b><br>Genius dengan IQ tinggi dan kemampuan teknologi canggih. Ia adalah ahli strategi tim.";
    } else if (hero === "hawkgirl") {
        content = "<b>Hawkgirl</b><br>Pahlawan wanita tangguh dengan kekuatan terbang. Ahli dalam seni bela diri dan menggunakan senjata tajam.";
    } else if (hero === "metamorpho") {
        content = "<b>Metamorpho</b><br>Bisa berubah bentuk dan sangat fleksibel dalam bertarung. Bisa meniru segala jenis elemen dengan tubuhnya.";
    }

    document.getElementById("data-hero").innerHTML = content;
}