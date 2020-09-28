function credit() {
    let sum = document.getElementById('sum').value;
    let pr = document.getElementById('pr').value;
    let per = document.getElementById('per').value;

    let s = sum * pr/100 / ( 1 - (1 / Math.pow(1 + pr/100, per * 12)));

    document.getElementById('result').innerHTML = s;
}

document.getElementById('b').addEventListener('click', credit);

