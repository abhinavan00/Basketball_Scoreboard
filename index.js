let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById('home-team-score')
let guestEl = document.getElementById('guest-team-score')

function homeTeamAddOne() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function homeTeamAddTwo() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function homeTeamAddThree() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

function guestTeamAddOne() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function guestTeamAddTwo() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function guestTeamAddThree() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}

function newGame() {
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}