
var gambarPilihanMenu=[document.getElementById("gambar1"),document.getElementById("gambar2"),document.getElementById("gambar3"),
document.getElementById("gambar4"),document.getElementById("gambar5")];
var nama=[document.getElementById("nama1"),document.getElementById("nama2"),document.getElementById("nama3"),
document.getElementById("nama4"),document.getElementById("nama5")];

var sectionMenuMuncul = document.getElementById("sectionMenuMuncul")

var diklikGambar=document.getElementById("diklikGambar");
var dikliknama=document.getElementById("onnama");

var harga = [document.getElementById("harga"),[12000,15000,9000,7000]];

// untuk fungsi ketika kita memilih salah satu menu
var index;
function klik(){
    diklikGambar.style.backgroundImage=gambarPilihanMenu[index].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[index].innerHTML",300);
    setTimeout("harga[0].innerHTML='Harga : Rp. '+ harga[1][index]+ ' ,00'",300); 
    sectionMenuMuncul.style.top="30vh" 
    }

    
function cetak(){
    var dikali = document.getElementById("dikali");
    var total = document.getElementById("total");

    total.innerHTML= "Total : Rp." + harga[1][index]*dikali.value +" ,00";
}

function hapus(){
 sectionMenuMuncul.style.top="100vh"
 total.innerHTML="Total : Rp.-"

}