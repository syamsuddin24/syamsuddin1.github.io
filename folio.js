// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Terima kasih atas pesan Anda, ' + name + '! Kami akan menghubungi Anda segera.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Silakan isi semua bidang.');
    }
});
