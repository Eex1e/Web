window.addEventListener('load', function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Время загрузки страницы: ' + loadTime + ' миллисекунд');

    var displayElement = document.getElementById('loadTimeDisplay');
    if (displayElement) {
        displayElement.innerText = 'Время загрузки страницы: ' + loadTime + ' миллисекунд';
    }
});

