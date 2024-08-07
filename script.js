//Simple function to get the computer choice.
function computerChoice() {
    let answer = Math.floor((Math.random() * 3) + 1);
    return answer;
}

console.log(computerChoice());
