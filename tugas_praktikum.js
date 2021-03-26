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

function clock(){
  function animation(span) {
    span.className = "turn";
    setTimeout(function() {
      span.className = "";
    }, 700);
  }
  
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

