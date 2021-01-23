// function expression to select elements
const selectElements = (s) => document.querySelector(s);

//open the menu on click 
selectElements('.open').addEventListener('click', () => {
    selectElements('.nav-list').classList.add('active');
});

//close the menu on click 
selectElements('.close').addEventListener('click', () => {
    selectElements('.nav-list').classList.remove('active');
});