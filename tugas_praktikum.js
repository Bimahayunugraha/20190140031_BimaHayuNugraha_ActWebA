//Membuat function baru untuk menentukan tanggal
function baru() {
    //Menampilkan hari dengan string
    let a = new Date(); 
    let days = ["Minggu", "Senin", "Selasa","Rabu", "Kamis", "Jumat", "Sabtu"];
    document.getElementById('hari').innerHTML = days[a.getDay()]+",";

    //Menampilkan tanggal
    document.getElementById('tanggal').innerHTML = new Date().getDate();

    //Menampilkan bulan dengan string
    let b = new Date()
    let monts = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober","November", "Desember"];
    document.getElementById('bulan').innerHTML = monts[b.getMonth()];

    //Menampilkan tahun
    document.getElementById('tahun').innerHTML = + new Date().getFullYear()
    
}

//Membuat Function Jam dengan di dalamnya terdapat function menentukan jam dan function animasi
function clock(){
  //Function untuk animasi
  function animation(span) {
    span.className = "turn";
    setTimeout(function() {
      span.className = "";
    }, 700);
  }
  //Function untuk menentukan jam
  function jam() {
    setInterval(function() {
      let waktu = new Date();
      let jam = document.getElementById('jam');
      let hours = waktu.getHours();
      let minutes = waktu.getMinutes();
      let seconds = waktu.getSeconds();
  
      if (waktu.getHours() < 10) {
        hours = '0' + waktu.getHours();
      }
      if (waktu.getMinutes() < 10) {
          minutes = '0' + waktu.getMinutes();
      }
      if (waktu.getSeconds() < 10) {
        seconds = '0' + waktu.getSeconds();
      }
  
      jam.innerHTML =  '<span>'+hours+" : "+'</span>'
                     + '<span>'+minutes+"   : "+'</span>'
                     + '<span>'+seconds+'</span>';
     }, 1000);
  }
  jam();
  //Function untuk memulai animasinya
  function jam2() {
    let spans = jam2.getElementByTagName('span');
    animation(spans[2]);
    if (seconds == 0) animation(spans[1]);
    if (minutes == 0 && seconds == 0) animation(spans[0]);
  }
}


/* Console log untuk menampilkan keterangan console jika saat ingin masuk mode mobile dan ingin keluar mode mobile */
let mql = window.matchMedia("(max-width: 768px)");
mql.addListener(function(e){
  if(e.matches){
    console.log('Enter Mobile Mode');
  }
  else{
    console.log('Leave Mobile Mode');
  }
});

/* Console log untuk menampilkan keterangan console jika saat ingin masuk mode tablet dan ingin keluar mode tablet */
let tql = window.matchMedia("(min-width: 768px) and (max-width: 992px)");
tql.addListener(function(e){
  if(e.matches){
    console.log('Enter Tablet Mode');
  }
  else{
    console.log('Leave Tablet Mode');
  }
});

/* Console log untuk menampilkan keterangan console jika saat ingin masuk mode dekstop dan ingin keluar mode dekstop */
let dql = window.matchMedia("(min-width: 992px)");
dql.addListener(function(e){
  if(e.matches){
    console.log('Enter Dekstop Mode');
  }
  else{
    console.log('Leave Dekstop Mode');
  }
});


function validasi(){
  let emailaddress = document.forms["myform"]["emailaddress"].value;
  let password = document.forms["myform"]["password"].value;
  if( emailaddress== "admin123@gmail.com" && password == "123"){
    return true;
  }
  else{
    alert("Username atau password yang Anda masukan SALAH");
    return false;
  }
}