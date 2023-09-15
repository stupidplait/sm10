'use strict';

let word = 'github';

let anchor = document.createElement('a');
anchor.className = 'github';
anchor.setAttribute('href', 'https://github.com/stupidplait/sm10');

for (let i = 0; i < word.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = word[i];
    span.style.cssText = `
        animation-name: jumpingLetter;
        animation-duration: .8s;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-delay: ${i * 0.2}s;
        animation-iteration-count: infinite;
    `;
    anchor.append(span);
}

document.body.append(anchor);