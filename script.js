// Função para capturar uma foto da câmera
function capturePhoto() {
    const video = document.getElementById('cameraPreview');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Exibir a imagem capturada (apenas para fins de demonstração)
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<img src="' + imageData + '" alt="Imagem Capturada">';
}

// Verificar se a câmera está disponível
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
        const video = document.getElementById('cameraPreview');
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.error('Erro ao acessar a câmera: ', error);
    });

// Adicionar evento de clique ao botão de captura
document.getElementById('captureButton').addEventListener('click', function () {
    capturePhoto();
});
