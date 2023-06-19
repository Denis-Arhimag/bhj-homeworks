const tooltips = document.querySelectorAll('.has-tooltip');

let activeTooltip = null;

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', event => {
        event.preventDefault();

        // Если уже есть активная подсказка скрываем ее
        if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
            activeTooltip =null;
        }

        // создаем новую подсказку
        const tooltipElement = document.createElement('div')
        tooltipElement.className = 'tooltip';
        tooltipElement.innerHTML = tooltip.title;

        // Получаем позицию и размеры элимента 
        const position = tooltip.getBoundingClientRect();

        // Устанавливаем позицию подсказки в соответствии с атрибутом data-position
        const dataPosition = tooltip.getAttribute('data-position');

    
        switch (dataPosition) {
            case 'top':
                tooltipElement.style.left = `${position.right}px`; 
                tooltipElement.style.top = `${position.top - tooltipElement.offsetHeight}px`
                break;
            case 'left':
                tooltipElement.style.left = `${position.left - tooltipElement.offsetWidth}px`
                tooltipElement.style.top = `${position.top}px`;
                break
            case 'right':
                tooltipElement.style.left = `${position.right}`;
                tooltipElement.style.top = `${position.bottom}`;
                break;
            case 'bottom':
                default:
                    tooltipElement.style.left = `${position.left}px`;
                    tooltipElement.style.top = `${position.bottom}px`;
                    break;
            }

            // Добавляем подсказку на страницу и отображаем ее
            document.body.appendChild(tooltipElement);
            tooltipElement.classList.add('tooltip_active');

            // Запоминаем активную подсказку
            activeTooltip = tooltipElement;
    })
})

// закрываем активную подсказку по клику в любое место на странице 
document.addEventListener('click', event => {
    if (activeTooltip && !event.target.classList.contains('has-tooltip')) {
        activeTooltip.classList.remove('tooltip_active');
        activeTooltip = null;
    }
})