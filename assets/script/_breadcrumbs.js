// Реализация навигации "Хлебные крошки"
const breadcrumbContainer = document.querySelector('.breadcrumbs');
if (breadcrumbContainer) {
    breadcrumbContainer.innerHTML = '';
    const breadcrumbs = [
        { name: 'Главная', url: './1_page_home.html' },
        { name: 'Свитшоты', url: 'http://' },
        { name: 'Свитшот Sweet Shot', url: '' } // Последний элемент без URL
    ];

    breadcrumbs.forEach((crumb, index) => {
        if (crumb.url) {
            const link = document.createElement('a');
            link.href = crumb.url;
            link.textContent = crumb.name;
            breadcrumbContainer.appendChild(link);
        } else {
            const span = document.createElement('span');
            span.textContent = crumb.name;
            breadcrumbContainer.appendChild(span);
        }

        if (index < breadcrumbs.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = ' — ';
            breadcrumbContainer.appendChild(separator);
        }
    });
}