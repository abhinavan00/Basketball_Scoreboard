let score = 0;

let homeEl = document.getElementById('home-team-score')
let guestEl = document.getElementById('guest-team-score')

function homeTeamAddOne() {
    score += 1;
    homeEl.textContent = score;
}

function homeTeamAddTwo() {
    score += 2;
    homeEl.textContent = score;
}

function homeTeamAddThree() {
    score += 3;
    homeEl.textContent = score;
}

function guestTeamAddOne() {
    score += 1;
    guestEl.textContent = score;
}

function guestTeamAddTwo() {
    score += 2;
    guestEl.textContent = score;
}

function guestTeamAddThree() {
    score += 3;
    guestEl.textContent = score;
}

function newGame() {
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    score = 0;
}