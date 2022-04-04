var menu=[document.getElementById("gambar1"),document.getElementById("gambar2"),document.getElementById("gambar3"),
document.getElementById("gambar4"),document.getElementById("gambar5")];


var nama=[document.getElementById("nama1"),document.getElementById("nama2"),document.getElementById("nama3"),
document.getElementById("nama4"),document.getElementById("nama5")];


var diklik=document.getElementById("onclick");

var dikliknama=document.getElementById("onnama");

var harga = document.getElementById("harga");
var hargaMenu=[12000,15000,9000,7000];



// untuk tombol menghapus menu yang telah di klik
var hapus = document.getElementById("hapus");
// untuk fungsi ketika kita memilih salah satu menu
function isi(){
    total.innerHTML="";
    hapus.innerHTML="<a onclick='hilangkan()' style='background-color: rgb(154, 146, 146);padding: 1vh 4vh 2vh;font-size:4vh;'>x</a>";
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;";
    diklik.style.backgroundImage=menu[index].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[index].innerHTML",300);
    setTimeout("harga.innerHTML='Harga : Rp. '+ hargaMenu[index]+ ' ,00'",300);
   
}
var index;
function klik(){
    
    isi();
    munculkan()
    }
// untuk fungsi ketika di total
var munculDikali=document.getElementById("ditotal");
function munculkan(){
   setTimeout('munculDikali.innerHTML=\'<input id="dikali" type="number" placeholder="Mau pesan berapa?" style="background-color: white;"> <button type="button" onclick="cetak()" style="padding: 1vh 3vh;border-radius:20px ;">Klik</button> <h6 id="total"></h6>\'',300)
}
function cetak(){
    var total =document.getElementById("total");
    var dikali=document.getElementById("dikali").value;
 total.innerHTML='Total : Rp. '+hargaMenu[index]*dikali+" ,00";
}
function hilangkan(){
    document.getElementById("onclick").style="transition:.4s"
    document.getElementById("onnama").innerHTML=""
    document.getElementById("harga").innerHTML=""
    document.getElementById("ditotal").innerHTML='<h6 id="total"></h6>' 
    document.getElementById("hapus").innerHTML=""
}

