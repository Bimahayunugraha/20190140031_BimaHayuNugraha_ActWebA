/**
 * Kode Vanilla Javascript(Javascript Murni) untuk Menambahkan Value
 * Pada Elemen HTML
 */
document.getElementById("nama").innerHTML = "Bima Hayu Nugraha";

/**
 * Kode Jquery untuk Menambahkan Value
 * Pada Element HTML
 */
$("#nim").html("20190140031");

/**
 * Jquery menggunakan selector sama seperti css
 * . untuk class
 * # untuk id
 * Kita dapat menuliskan tag html bikin ingin memilih berdasarkan tag
 * misal : <button></button> maka tinggal tulis button
 * dalam kode berikut, kita akan menampilkan console.log saat document ready
 */
$(function () {
  console.log("Hello, Welcome");
});

//Kode Jquery untuk Menyembunyikan Elemen
$("#hide").on("click", function () {
  $("#nama").hide();
});

//Kode Jquery untuk Menampilkan Kembali Elemen
$("#show").on("click", function () {
  $("#nama").show();
});

//Coba ini
$("#toggle").on("click", function () {
  $("#nama").toggle();
});

//Kode Jquery untuk Fade In Elemen HTML
$("#fadeIn").on("click", function () {
  $("#tanggal").fadeIn();
});

//Kode Jquery untuk Fade Out Elemen HTML
$("#fadeOut").on("click", function () {
  $("#tanggal").fadeOut();
});

//Coba ini
$("#fadeToggle").on("click", function () {
  $("#tanggal").fadeToggle();
});

//Kode Jquery untuk Slide Up Elemen HTML
$("#slideUp").on("click", function () {
  $("#img").slideUp();
});

//Kode Jquery untuk Slide Down Elemen HTML
$("#slideDown").on("click", function () {
  $("#img").slideDown();
});

//Coba ini
$("#slideToggle").on("click", function () {
  $("#img").slideToggle();
});
