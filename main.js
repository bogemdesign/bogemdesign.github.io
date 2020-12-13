hitungMundur('Dec', 30, 2020)






function hitungMundur(bulan, tgl, thn) {
  let deadline = new Date(`${bulan} ${tgl}, ${thn} 23:59:59`).getTime();
  let x = setInterval(hitung, 1000);

  function hitung() {
    let now = new Date().getTime();
    let t = deadline - now;
    let hari = Math.floor(t / (1000 * 60 * 60 * 24));
    let jam = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((t % (1000 * 60)) / 1000);

    document.querySelector('.hari').innerText = hari;
    document.querySelector('.jam').innerText = jam;
    document.querySelector('.menit').innerText = menit;
    document.querySelector('.detik').innerHTML = detik;
    console.log(detik)


    if (t < 0) {
      clearInterval(x);
      document.querySelector('.berhenti').innerHTML = "! Diskon Berakhir";
      document.querySelector('.hari').innerText = '0';
      document.querySelector('.jam').innerText = '0';
      document.querySelector('.menit').innerText = '0';
      document.querySelector('.detik').innerHTML = '0';

    }
  };
};

let label = document.querySelectorAll('.label');
label.forEach(function(e) {
  e.addEventListener('click', function() {

    e.nextElementSibling.classList.toggle('a');
    e.classList.toggle('a');


  });
});






//iscrol
backTop = document.querySelector(".back-top");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//close di mulai
function tutup(){
  let close = document.querySelectorAll('.close');
  close.forEach(function(b){
  
   b.parentElement.parentElement.style.transform='scale(0)';
  location.reload();
});
};

//close selesi
const permium = document.getElementById('buy')
permium.addEventListener('click', function() {

      const form = document.querySelector('.from-buy')
      form.style.transform='scale(1)';
const sumbitBuy= document.querySelector('.from-buy form button')

sumbitBuy.addEventListener('click', function(){
  let nama= document.getElementById('nama').value;
    let no= document.getElementById('no').value;
      let jenis= document.getElementById('jenis').value;
        let domain= document.getElementById('domain').value;
  let lokasi=window.location.href
  if(nama==''||domain==''){
    return alert('Bidang Tak boleh kosong')
  }
  else{
  return window.open(`https://wa.me/6282118391206$?text=*Order%20Landing%20Page%20Premium*%0A%0ANama%20:%20*${nama}*%0ANomor%20:%20*${no}*%0AKategori%20:%20*${jenis}*%0ADomain%20:%20*${domain}*%0A%0A%0APesan%20Ini%20Dikirim%20Dari%20${lokasi}`)
    location.reload();
  }
});
})

const kos=document.getElementById('kos')
kos.addEventListener('click', function(){
  
const form= document.querySelector('.from-kos')
form.style.transform='scale(1)';
const sumbitKos = document.querySelector('.from-kos form button')
sumbitKos.addEventListener('click', function() {
  let namak = document.getElementById('nama2').value;
  let pesan = document.getElementById('pesan').value;

  let lokasi = window.location.href
    if (namak == '' || pesan == '') {
      return alert('Bidang Tak boleh kosong')
    }
    else {
  return window.open(`https://wa.me/6282118391206$?text=*Konsultasi*%20%0ANama%20:%20*${namak}*%0APertanyaan%20:%20%0A*${pesan}*%0A%0A%0APesan%20Ini%20Dikirim%20Dari%20${lokasi}`)}
});
});