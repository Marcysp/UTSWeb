// js untuk slide atas
var a=-100;
setInterval(function(){
    if (a!=0) {
        slide = document.getElementById('slide');
        slide.style="margin-left:"+a+"%;transition: 1s ease-in;";
        if (a== -300) {
           a=0;
        }else{
           a=a+-100;
        }
          return a;
      
    }else{
        slide = document.getElementById('slide');
        slide.style="margin-left:"+a+"%;";
        if (a== -300) {
            a=0;
        }else{
            a=a+-100;
        }
        return a;
    }
      
}, 9000);

// js untuk form
var nama = document.getElementById('nama').value;
var email = document.getElementById('nama').value;
var pesan = document.getElementById('pesan').value;
var link = "<a href='uts1.html'>Edit</a>";

        function validateForm() {
            if (nama =="") {
                alert('Nama harus diisi');
                return false;
            }
            if (email=="") {
                alert('Email harus diisi');
                return false;
            }
            if (pesan == "") {
                alert('pesan  harus diisi');
                return false;
            }
        }