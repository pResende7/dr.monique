  function sendwhatsapp(){
   var phonenumber = "+5569984213393";

   var name = document.querySelector(".name").value;
   var email = document.querySelector(".email").value;
   var country = document.querySelector(".country").value;
   var message = document.querySelector(".message").value;

   var url = "https://wa.me/" + phonenumber + "?text="
   +"*Nome :* "+name+"%0a"
   +"*CPF :* "+email+"%0a"
   +"*Clínica:* "+country+"%0a"
   +"*Messagem :* "+message
   +"%0a%0a"
   +"Essa é uma mensagem enviada diretamente do site";

   window.open(url, target="_blank").focus();
}