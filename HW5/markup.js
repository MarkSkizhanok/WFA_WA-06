var acc = document.getElementById('accordionExample');

var card = document.createElement('div');
$(card).attr("class", "card");
$(acc).append(card);

var cardheader = document.createElement('div');
$(cardheader).attr("class", "card-header");
$(card).append(cardheader);

var buttonCreate = document.createElement('button');
$(buttonCreate).attr({
    "id": "pcbutton",
    "class": "btn btn-link",
    "type": "button",
    "data-toggle": "collapse",
    "data-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne"
});
$(buttonCreate).html('Create');
$(cardheader).append(buttonCreate);


collapse = document.createElement('div');
$(collapse).attr({
    id: 'collapseOne',
    class: 'collapse show',
    'aria-labelledby': 'headingOne',
    'data-parent': '#accordionExample'
});
$(card).append(collapse);


var cardBody = document.createElement('div');
$(cardBody).attr("class", "card-body");
$(collapse).append(cardBody);


var form = document.createElement('form');
$(form).attr("id", "createform");
$(cardBody).append(form);


var formGroup = document.createElement('div');
$(formGroup).attr("class", "form-group");
$(form).append(formGroup);


var label = document.createElement('label');
$(label).attr("for", "cselect");
$(label).html('Class:');
$(formGroup).append(label);


var select = document.createElement('select');
$(select).attr({
    "id": "cselect",
    "class": "form-control"
});


var option = document.createElement('option');
$(option).attr("value", "csultrabook");
$(option).html('Ultrabook');
$(select).append(option);

option = document.createElement('option');
$(option).attr("value", "csserver");
$(option).html('Server');
$(select).append(option);

$(formGroup).append(select);


formGroup = document.createElement('div');
formGroup.setAttribute('class', 'form-group');
form.appendChild(formGroup);


label = document.createElement('label');
label.setAttribute('for', 'cmanufacturer');
label.innerHTML = 'Manufacturer:';
formGroup.appendChild(label);


var input = document.createElement('input');
input.setAttribute('id', 'cmanufacturer');
input.setAttribute('type', 'text');
input.setAttribute('class', 'form-control');
input.setAttribute('aria-describedby', 'emailHelp');
input.setAttribute('placeholder', 'Enter manufacturer name');
formGroup.appendChild(input);


formGroup = document.createElement('div');
formGroup.setAttribute('class', 'form-group');
form.appendChild(formGroup);


label = document.createElement('label');
label.setAttribute('for', 'ccoreNumber');
label.innerHTML = 'Cores number:';
formGroup.appendChild(label);


input = document.createElement('input');
input.setAttribute('id', 'ccoreNumber');
input.setAttribute('type', 'number');
input.setAttribute('class', 'form-control');
input.setAttribute('min', '1');
input.setAttribute('placeholder', 'Enter number of cores');
formGroup.appendChild(input);


formGroup = document.createElement('div');
formGroup.setAttribute('class', 'form-group');
form.appendChild(formGroup);


label = document.createElement('label');
label.setAttribute('for', 'cramSize');
label.innerHTML = 'RAM size:';
formGroup.appendChild(label);


input = document.createElement('input');
input.setAttribute('id', 'cramSize');
input.setAttribute('type', 'number');
input.setAttribute('class', 'form-control');
input.setAttribute('min', '1');
input.setAttribute('placeholder', 'Enter size of RAM memory');
formGroup.appendChild(input);


formGroup = document.createElement('div');
formGroup.setAttribute('class', 'form-group');
form.appendChild(formGroup);


label = document.createElement('label');
label.setAttribute('for', 'chddSize');
label.innerHTML = 'HDD size:';
formGroup.appendChild(label);


input = document.createElement('input');
input.setAttribute('id', 'chddSize');
input.setAttribute('type', 'number');
input.setAttribute('class', 'form-control');
input.setAttribute('step', '.1');
input.setAttribute('min', '1');
input.setAttribute('placeholder', 'Enter size of HDD memory');
formGroup.appendChild(input);


formGroup = document.createElement('div');
formGroup.setAttribute('class', 'form-group');
form.appendChild(formGroup);


label = document.createElement('label');
label.setAttribute('id', 'lblcvariable');
label.setAttribute('for', 'cvariable');
label.innerHTML = 'Hyper-Threading technology:';
formGroup.appendChild(label);


input = document.createElement('input');
input.setAttribute('id', 'cvariable');
input.setAttribute('type', 'number');
input.setAttribute('class', 'form-control');
input.setAttribute('step', '.1');
input.setAttribute('min', '1');
input.setAttribute('placeholder', 'Enter Hyper-Threading technology');
formGroup.appendChild(input);


var button = document.createElement('button');
button.setAttribute('id', 'cbutton');
button.setAttribute('class', 'btn btn-primary');
button.setAttribute('type', 'submit');
button.innerHTML = "Submit";
form.appendChild(button);