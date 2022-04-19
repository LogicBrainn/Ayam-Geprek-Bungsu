
var teks = document.getElementById("teks");

    teks.innerHTML =""
    var isi=["No 1"," di"," Bantaeng"]
      setInterval(() => {
       
        if(teks.innerHTML==""){
            
            teks.innerHTML=teks.innerHTML+isi[0];
           
        }
        else if(teks.innerHTML==isi[0]) {
            teks.innerHTML=teks.innerHTML+isi[1];
          
        }
        else if(teks.innerHTML==isi[0]+isi[1]) {
            teks.innerHTML=teks.innerHTML+isi[2];
      
        }
         
        else if(teks.innerHTML==isi[0]+isi[1]+isi[2]) {
            teks.innerHTML="mantapp!!";
           
        }
        else if(teks.innerHTML=="mantapp!!") {
            teks.innerHTML="";
            
        }
         
      }, 1000); 
      
  
 
