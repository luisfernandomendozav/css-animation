const container = document.querySelector('.container');
    for (let i=0;i<=50;i++) {
        block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block)
    }
