document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('url-input');
    const checkBtn = document.getElementById('check-btn');
    const serviceButtons = document.getElementById('service-buttons');
    const ripService = document.getElementById('rip-service');
    const cityService = document.getElementById('city-service');
    
    let currentUrl = '';
    
    // Проверка ссылки
    checkBtn.addEventListener('click', function() {
        currentUrl = urlInput.value.trim();
        
        if (!currentUrl) {
            alert('Пожалуйста, введите ссылку');
            return;
        }
        
        // Автоматически добавляем http:// если отсутствует
        if (!currentUrl.startsWith('http://') && !currentUrl.startsWith('https://')) {
            currentUrl = 'https://' + currentUrl;
            urlInput.value = currentUrl;
        }
        
        // Показываем кнопки сервисов
        serviceButtons.style.display = 'block';
    });
    
    // Обработчик для rip.linkvertise.lol
    ripService.addEventListener('click', function(e) {
        e.preventDefault();
        if (!currentUrl) return;
        
        const encodedUrl = encodeURIComponent(currentUrl);
        window.location.href = `https://rip.linkvertise.lol/bypass?url=${encodedUrl}`;
    });
    
    // Обработчик для bypass.city
    cityService.addEventListener('click', function(e) {
        e.preventDefault();
        if (!currentUrl) return;
        
        const encodedUrl = encodeURIComponent(currentUrl);
        window.location.href = `https://bypass.city/bypass?bypass=${encodedUrl}`;
    });
});
