function htt_orion(){

setTimeout(function(){


swal({  

 title: "Anh nhận được một món quà !",   
text: "L_NoCtrlC vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/36510040_475569936220587_4119898403175923712_n.jpg?_nc_cat=0&oh=fd076b73dd6a7cec38913567322abc0b&oe=5BEF1BC3",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là V.Anh ? ", 
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
  text: "V.Anh muốn nhận quà gì nào ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "V.Anh muốn quà gì....? " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho Anh trong 10s nữa hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ L_NoCtrlC, Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

