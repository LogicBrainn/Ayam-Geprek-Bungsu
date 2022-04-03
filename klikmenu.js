var menu=[document.getElementById("gambar1"),document.getElementById("gambar2"),document.getElementById("gambar3"),
document.getElementById("gambar4"),document.getElementById("gambar5")];


var nama=[document.getElementById("nama1"),document.getElementById("nama2"),document.getElementById("nama3"),
document.getElementById("nama4"),document.getElementById("nama5")];


var diklik=document.getElementById("onclick");

var dikliknama=document.getElementById("onnama");

var harga = document.getElementById("harga");
var hargaMenu=[12000,15000,9000,7000];

var index;
// untuk fungsi ketika di total
var total =document.getElementById("total")


function cetak(){
var dikali=document.getElementById("dikali").value;
total.innerHTML='Total : Rp. '+hargaMenu[index]*dikali+" ,00";
}

// untuk fungsi ketika kita memilih salah satu menu
function klik1(){
    total.innerHTML="";
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[0].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[0].innerHTML",300);
    setTimeout("harga.innerHTML='Harga : Rp. '+ hargaMenu[0]+ ' ,00'",300);
    index=0;
}
function klik2(){
    total.innerHTML="";
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[1].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[1].innerHTML",300);
    setTimeout("harga.innerHTML='Harga : Rp. '+ hargaMenu[1]+ ' ,00'",300);
    index=1;
}
function klik3(){
    total.innerHTML="";
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[2].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[2].innerHTML",300);
    setTimeout("harga.innerHTML='Harga : Rp. '+ hargaMenu[2]+ ' ,00'",300);
    index=2;
}
function klik4(){
    total.innerHTML="";
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[3].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[3].innerHTML",300);
    setTimeout("harga.innerHTML='Harga : Rp. '+ hargaMenu[3]+ ' ,00'",300);
    index=3;
}
function klik5(){
    total.innerHTML="";
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[4].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[4].innerHTML",300);
    setTimeout("harga.innerHTML='Harga : Rp. '+ hargaMenu[4]+ ' ,00'",300);
    index=4;
}
