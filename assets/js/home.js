//By default add habit form is hidden by clicking on it it change it visibility to visible 
//Then we are able to create the habit and it contains a cancel button to cancel the form.
const addHabitButton = document.getElementById('add-habit');
const habitForm = document.querySelector('.create-habit');
const cancelHabitButton = document.getElementById('cancel-habit');

addHabitButton.addEventListener('click', function () {
    habitForm.style.visibility = 'visible';
});

cancelHabitButton.addEventListener('click', function () {
    habitForm.style.visibility = 'hidden';
});

//This code is used to change the status of the habit to done,not done and pending
let days = document.getElementsByClassName('btn-change-status');
for(let i=0;i<days.length;i++){
    days[i].style.color="white";
    let icon = document.createElement('i');
    icon.classList.add('fa');
    let text = document.createElement('span');
    if(days[i].innerText=="no"){
        days[i].innerText="";
        icon.classList.add('fa-times');
        days[i].appendChild(icon);
        days[i].style.backgroundColor="rgb(242, 118, 109)";
    }else if(days[i].innerText=="yes"){
        days[i].innerText="";
        icon.classList.add('fa-check');
        days[i].appendChild(icon);
        days[i].style.backgroundColor="rgb(69, 204, 105)";
    }else{
        days[i].innerText="";
        icon.classList.add('fa-exclamation');
        days[i].appendChild(icon);
        days[i].style.backgroundColor="rgb(110, 117, 112)";
    }
    
    console.log(days[i]);
    
}
