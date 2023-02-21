const container = document.querySelector('.banner');
    for (let i=1;i<400;i++) {
        block = document.createElement('div');
        block.classList.add('blocks');
        block.style.animationDelay = `${i*0.05}s`;
        container.appendChild(block)
    }