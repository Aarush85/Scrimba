let home_points = 0;
let guest_points = 0;

let home_point_el = document.getElementById("home-points");
let guest_point_el = document.getElementById("guest-points");

function addOneHome() {
    home_points += 1;
    home_point_el.textContent = home_points;
}

function addTwoHome(){
    home_points += 2;
    home_point_el.textContent = home_points;
}

function addThreeHome(){
    home_points += 3;
    home_point_el.textContent = home_points;
}


function addOneGuest() {
    guest_points += 1;
    guest_point_el.textContent = guest_points;
}



function addTwoGuest(){
    guest_points += 2;
    guest_point_el.textContent = guest_points;
}   



function addThreeGuest(){  
    guest_points += 3;
    guest_point_el.textContent = guest_points;
}


function resetGame(){
    home_points = 0;
    guest_points = 0;
    home_point_el.textContent = home_points;
    guest_point_el.textContent = guest_points;
}