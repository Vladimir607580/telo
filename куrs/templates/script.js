function showModal(lectureId) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    // Добавляем текст лекций
    switch (lectureId) {
        case 'lecture1':
            modalContent.innerHTML = `
                <h2>Лекция 1: Основы Тренировок</h2>
                <p>В этой лекции мы рассмотрим основные принципы тренировок...</p>
                <p>1. Основной принцип любой тренировки — это регулярность. Независимо от ваших целей...</p>
                <p>2. Комплексный подход. Необходимо прорабатывать все группы мышц для того...</p>
                <p>3. Важно уделять внимание технике выполнения упражнений...</p>
                <p>4. Следите за прогрессом: важно записывать свои результаты...</p>
                <p>5. Правильное восстановление: это может включать в себя как активный отдых...</p>
                <p>6. Важно помнить про баланс: не перегружайте себя, дайте организму...</p>
                <p>7. Комплексное питание и употребление достаточного количества воды...</p>
                <p>8. Важность восстановления: сон и отдых являются неотъемлемой частью...</p>
                <p>9. Постоянное обучение: не стойте на месте, развивайтесь, учитесь новым...</p>
                <p>10. Индивидуальный подход: учитывайте особенности вашего организма...</p>
                <p>11. Восстановительные тренировки. Они помогают быстрее восстановить силы...</p>
                <p>12. Следите за техникой выполнения упражнений, чтобы избежать травм...</p>
                <p>13. Сочетайте силовые тренировки с кардионагрузками для лучшего результата...</p>
                <p>14. Тренируйтесь с удовольствием: выберите те виды активности, которые вам нравятся...</p>
                <p>15. Мотивация: стремитесь к своим целям с позитивным настроем...</p>
            `;
            break;
        case 'lecture2':
            modalContent.innerHTML = `
                <h2>Лекция 2: Питание для Построения Тела</h2>
                <p>Эта лекция посвящена правильному питанию для построения тела...</p>
                <p>1. Баланс макроэлементов: белки, жиры и углеводы должны быть...</p>
                <p>2. Витамины и минералы: микроэлементы играют ключевую роль...</p>
                <p>3. Гидратация: вода — это основа всех обменных процессов...</p>
                <p>4. Важно учитывать количество потребляемых калорий...</p>
                <p>5. Регулярное питание: регулярные приемы пищи помогут поддерживать...</p>
                <p>6. Углеводы — это основной источник энергии, однако следует избегать...</p>
                <p>7. Витамины и минералы: играют ключевую роль в восстановлении...</p>
                <p>8. Важно включать в рацион достаточное количество белков...</p>
                <p>9. Не забывайте о жирных кислотах, таких как Омега-3...</p>
                <p>10. Придерживайтесь правила "здоровая пища": избегайте...</p>
                <p>11. Помните о важности питьевого режима...</p>
                <p>12. Витамины и минералы: играют важную роль в метаболических процессах...</p>
                <p>13. Важность сбалансированного питания для поддержания здоровья...</p>
            `;
            break;
        case 'lecture3':
            modalContent.innerHTML = `
                <h2>Лекция 3: Подсчет Калорий</h2>
                <p>Научитесь правильно подсчитывать калории...</p>
                <p>1. Подсчет калорий — это эффективный способ...</p>
                <p>2. Энергетический баланс — ключевой фактор...</p>
                <p>3. Учет базового обмена веществ — основа для определения...</p>
                <p>4. Важно следить за качеством потребляемой пищи...</p>
                <p>5. Придерживайтесь сбалансированной диеты, включающей...</p>
                <p>6. Используйте мобильные приложения для подсчета калорий...</p>
                <p>7. Не забывайте о важности белков в рационе...</p>
                <p>8. Избегайте жестких диет, которые могут навредить...</p>
                <p>9. Постоянный контроль и оценка результатов помогут...</p>
                <p>10. Не забывайте о важности микроэлементов...</p>
            `;
            break;
        case 'lecture4':
            modalContent.innerHTML = `
                <h2>Лекция 4: Восстановление после Тренировок</h2>
                <p>Восстановление — важная часть тренировочного процесса...</p>
                <p>1. Важно обеспечить полноценный сон для восстановления...</p>
                <p>2. Активное восстановление — включайте легкие упражнения...</p>
                <p>3. Использование массажных техник может ускорить восстановление...</p>
                <p>4. Обратите внимание на правильное питание после тренировки...</p>
                <p>5. Гидратация играет ключевую роль в процессе восстановления...</p>
                <p>6. Используйте контрастные души для улучшения циркуляции...</p>
                <p>7. Важно следить за уровнем стресса, так как он может влиять...</p>
                <p>8. Постепенное восстановление нагрузки после интенсивных тренировок...</p>
            `;
            break;
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Закрыть модальное окно при клике за его пределами
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}