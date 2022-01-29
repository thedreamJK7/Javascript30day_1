const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button[type=submit]');
const element = document.querySelectorAll('.element');

checkbox.disabled = true;
submitBtn.disabled = true;

const selectColor = document.getElementById('SelectColor');

element.forEach(function(element) {
    const color = getColor();
    element.innerHTML = color;
    element.style.backgroundColor = color;
    selectColor.innerHTML = color;
});

function getColor() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; 6 > i; i++) {
        color += letter[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}

element.forEach(function(element) {
    element.addEventListener('click', ()=>{
        if(element.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true;
            submitBtn.disabled = false;
            alert("You are human!");
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success');
        }
        else {
            alert("Please verify you are human!");
            location.reload(true);
        }
    })
})