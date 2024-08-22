let inputElements = document.querySelectorAll('input');
inputElements = Array.from(inputElements);


inputElements.forEach((input) => {
    let focused = false;
    input.addEventListener('click' , (e) => {
        focused = true;
        
        if(focused && e.target.value == ''){
            e.target.style.borderColor = 'red';
        }
    })
})


