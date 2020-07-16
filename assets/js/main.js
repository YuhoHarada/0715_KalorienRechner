let height = document.getElementById("height")
let age = document.getElementById("age")
let width = document.getElementById("width")
let female = document.getElementById("female")
let staker = document.getElementById("staker")
let GrundKcal = document.getElementById("GrundKcal")
let GrundkJ = document.getElementById("GrundkJ")
let GesamtKcal = document.getElementById("GesamtKcal")
let GesamtkJ = document.getElementById("GesamtkJ")
let Kcal

function KalorienRechnung() {
    if (female.checked == true) {
        // female
        Kcal = 655.1 + (9.6 * width.value) + (1.8 * height.value) - (4.7 * age.value)
    } else {
        // male
        Kcal = 664.7 + (13.7 * width.value) + (5 * height.value) - (6.8 * age.value)
    }
    GrundKcal.innerHTML = Math.floor(Kcal)
    GrundkJ.innerHTML = Math.floor(Kcal * 4.184)
    if (staker.selectedIndex == 0) {
        Kcal *= 0.95
    } else if (staker.selectedIndex == 1) {
        Kcal *= 1.2
    } else if (staker.selectedIndex == 2) {
        Kcal *= 1.5
    } else if (staker.selectedIndex == 3) {
        Kcal *= 1.7
    } else if (staker.selectedIndex == 4) {
        Kcal *= 1.9
    } else if (staker.selectedIndex == 5) {
        Kcal *= 2.2
    }
    GesamtKcal.innerHTML = Math.floor(Kcal)
    GesamtkJ.innerHTML = Math.floor(Kcal * 4.184)
}
