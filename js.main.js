function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Lập Nguyễn vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/33311127_447127455731502_4709842135858282496_n.jpg?_nc_cat=0&oh=d68f9d98e06396d8d2ab408bfe9ebbdb&oe=5B7FEA92",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Việt Anh ? ", 
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "aibiet") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó ", 
  text: "Việt Anh muốn nhận quà gì nào ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Việt Anh muốn quà gì....? " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho Việt Anh trong 10s nữa hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ Lập Nguyễn ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

