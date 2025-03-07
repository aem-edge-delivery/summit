import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'final-completion-image';
      else div.className = 'final-completion-body';
    });
    ul.append(li);
  });
  //ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}


/* Append Form */
console.log("Final Completion Form");
let fcForm = document.createElement("div");
fcForm.setAttribute("class", "fc-container");
fcForm.innerHTML =  '<form class="fc-form">'+

            '<div class="btn-group btn-group-toggle" data-toggle="buttons">'+
              '<label class="btn radio-select active">'+ 
                '<input type="checkbox" name="fc-checkbox" autocomplete="off" value="Plan & Create" disabled="disabled" checked="checked" />'+
                '<span>Plan & Create</span>'+
              '</label>'+
              '<label class="btn radio-select active">'+
                '<input type="checkbox" name="em-checkbox" autocomplete="off" value="Engage & Measure" disabled="disabled" checked="checked" />'+
                '<span>Engage & Measure</span>'+
              '</label>'+
            '</div>'+

            '<div class="fc-subheading form-subheading">Grab your exclusive B2B giveaway!</div>'+

            '<a class="form-button fcbtn">Finish</a>'+
          '</form>';

document.getElementsByClassName("final-completion")[0].getElementsByTagName("p")[0].parentElement.appendChild(fcForm);


// Trigger form submit on button click
let fcBTN = document.getElementsByClassName("fcbtn")[0];

fcBTN.onclick = async function() {
  console.log("fcBTN btn clicked");
  redirectTo();
}

// Redirect to next page
function redirectTo() {
  //let radioSelect = document.querySelector('input[name="fc"]:checked').value;
  window.location = window.location.origin;
}