/**
 * AJAX
 * AJAX = Asynchronous JavaScript and XML.
 * AJAX atau Asynchronous JavaScript and XML adalah teknik yang digunakan
 * untuk membuat website yang dinamis.
 * Artinya website mampu mengupdate dan menampilkan
 * data baru dari server tanpa perlu melakukan reload.
 * 
 * Pada Praktikum ini, kita akan menggunakan AJAX Jquery
 */

//Fungsi AJAX Jquery untuk meload isi file
$(function () {
    $("#nama").load("test.txt");
});

/**
 * Berikut merupakan fungsi untuk fetch data dari internet menggunakan AJAX Jquery
 * Kita menggunakan https://jsonplaceholder.typicode.com/photos sebagai urlnya,
 * Silahkan dibuka dulu agar paham
 */
$(function () {
    let url = "https://jsonplaceholder.typicode.com/photos";
    //Mengambil button untuk fetch data
    //Boleh hilangkan line 26 dan 46 jika ingin data langsung terload saat membuka browser
    $("#getPost").on("click", function () {
        //Memanggil Jquert AJAX
        $.ajax({
            //Memanggil variabel url
            url: url,
            //Menggunakan GET Request
            type: 'GET',
            //Jika Sukses
            success: function (data) {
                let data_html = '';
                //Looping data (Ambil satu persatu data)
                $.each(data, function (i, item) {
                    //Mengkonversi hasil loop tadi ke HTML
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '" alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'
                });

                //Memasukkan hasil loop tadi ke div dengan id #data_hasil_dari_internet
                $("#data_hasil_dari_internet").html(data_html);
            },
            //Jika error
            error: function (error) {
                //Tampilkan console log
                console.log(error);
            }
        });
    });
});