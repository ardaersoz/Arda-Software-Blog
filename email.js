// EmailJS SDK'nın yüklendiğinden emin olun
emailjs.init('d6FrprT_2CJnzcHk5'); // EmailJS kullanıcı ID'nizi buraya ekleyin

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderim davranışını engelle

    // Formu gönder
    emailjs.sendForm('service_6mqtyhb', 'template_zcwpzoq', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Mesajınız başarıyla gönderildi!');
        }, function(error) {
            console.log('Error:', error);
            alert('Mesaj gönderiminde bir hata oluştu.');
        });
});
