const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    title: document.querySelector('h1')
}


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const swatchColor = {
    interwalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true;
        this.interwalId = setInterval(() => {
            const color = colors[randomIntegerFromInterval(0, 5)];
            refs.bodyEl.style.backgroundColor = `${color}`;
            refs.title.textContent=`${color}`
        }, 1000);
    },
    stop() {
        clearInterval(this.interwalId);
        this.isActive = false;

    }
}


const randomIntegerFromInterval = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', () => {
    swatchColor.start();
})


refs.stopBtn.addEventListener('click', () => {
    swatchColor.stop();
})