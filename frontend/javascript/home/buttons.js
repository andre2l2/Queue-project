export const buttonScrollDown = (element) => {
    if (typeof element !== 'string') 
        throw new Error('element buttonScrollDown is not a string');
    
    let count = 1;
    const button = document.querySelector(element);
    button.addEventListener('click', () => {
        window.location.href = "#about";

        count++;
        if (count % 2 === 0) {
            button.style = 'transform: rotate(180deg)';
            window.location.href = "#about";
        } else {
            button.style = 'transform: rotate(0deg)';  
            window.location.href = "#home";
        } 
    })
}

export const buttonPageTo = ({ element, to }) => {
    if (typeof element !== 'string') throw new Error('element buttonPageTo is not a string');
    if (typeof to !== 'string') throw new Error('to buttonPageTo is not a string');
    
    const button = document.querySelector(element);
    button.addEventListener('click', () => {
        window.location.href = to;
    })
}