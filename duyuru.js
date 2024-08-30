document.getElementById('announcementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;

    fetch('http://localhost:3000/index.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, content })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Başarıyla gönderildi:', data);
        // Kullanıcıya bildirim veya formu temizle
    })
    .catch(error => {
        console.error('Gönderme sırasında hata oluştu:', error);
        // Hata mesajını kullanıcıya göstermek için uygun bir yer ekleyin
    });
});
