document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    generateQRCode(url);
});

function generateQRCode(url) {
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = '';
    const qrCode = new QRCode(qrCodeContainer, {
        text: url,
        width: 128,
        height: 128,
    });
}
