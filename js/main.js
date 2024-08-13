function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Уведомление исчезает через 3 секунды
}

document.querySelector('#text-to-copy').addEventListener(
    'click',
    async (event) => {
        const code = event.target.innerText;
        await navigator.clipboard.writeText(code);
        showNotification();
    });

    

    

function randomCoins(){
    const container = document.getElementById("container");

    for (let i = 1; i <= 60; i++) {
        const img = document.createElement("img");
        img.src = "assets/img/coinUruru.png";
        img.className = "coin";
        img.id = `coin${i}`;

        // Случайное значение для top и left (от 0% до 90%)
        const topValue = Math.random() * 90;
        const leftValue = Math.random() * 90;

        img.style.position = "absolute";
        img.style.top = `${topValue}%`;
        img.style.left = `${leftValue}%`;

        // Случайный поворот изображения от -45 до 45 градусов
        const rotation = Math.floor(Math.random() * 91) - 45;
        img.style.transform = `rotate(${rotation}deg)`;

        container.appendChild(img);
    }
}

randomCoins();