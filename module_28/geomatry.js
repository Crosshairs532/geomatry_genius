function tr() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(base) || isNaN(height)) {
        alert('enter a number')
        return;
    }
    else {
        const area = 0.5 * base * height;
        setresult('result', area);
    }
    const tt = document.getElementById('tt').innerText;
    list(tt);
}
function list(text) {
    const p = document.createElement('p');
    // const tt = document.getElementById(text).innerText;
    const entry = document.getElementById('List');
    // console.log();
    const count = entry.childElementCount;
    p.innerText = `${count + 1} ${text}`;
    p.classList.add('my-4', 'text-xl', 'w-[200px]', 'bg-red-400', 'rounded-sm');
    entry.appendChild(p);

}
function rec() {
    const base = parseFloat(document.getElementById('rbase').value);
    const height = parseFloat(document.getElementById('rheight').value);
    if (isNaN(base) || isNaN(height)) {
        alert('enter a number')
        return;
    }
    else {
        const area = base * height;
        setresult('rresult', area);
    }
    const rect = document.getElementById('rect').innerText;
    list(rect);
}
function pr() {
    const base = parseFloat(document.getElementById('pbase').value);
    const height = parseFloat(document.getElementById('pheight').value);
    if (isNaN(base) || isNaN(height)) {
        alert('enter a number')
        return;
    }
    else {
        const area = base * height;
        setresult('presult', area);
    }
    const paral = document.getElementById('paral').innerText;
    list(paral);

}

function setresult(id, value) {
    document.getElementById(id).innerText = value;

}

