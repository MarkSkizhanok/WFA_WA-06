
function onSelect(ev) {
    ev.preventDefault();

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            document.getElementById("lblcvariable").innerHTML = "Discrete Graphics Card";
            break;
        case "Ultrabook":
            document.getElementById("lblcvariable").innerHTML = "Hyper-Threading technology";
            break;
    }
}

function onCreate(ev) {
    ev.preventDefault();

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            var data = JSON.stringify({
                "manufacturer": String(document.getElementById("cmanufacturer").value),
                "coreNumber": String(document.getElementById("ccoreNumber").value),
                "ramSize": String(document.getElementById("cramSize").value),
                "hddSize": String(document.getElementById("chddSize").value),
                "discreteGraphicsCard": String(document.getElementById("cvariable").value)
            });
            break;
        case "Ultrabook":
            var data = JSON.stringify({
                "manufacturer": String(document.getElementById("cmanufacturer").value),
                "coreNumber": String(document.getElementById("ccoreNumber").value),
                "ramSize": String(document.getElementById("cramSize").value),
                "hddSize": String(document.getElementById("chddSize").value),
                "htt": String(document.getElementById("cvariable").value)
            });
            break;
    }

    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        }
    });

    switch (selVar) {
        case "Server":
            var link = "http://localhost:2403/servers";
            break;
        case "Ultrabook":
            var link = "http://localhost:2403/ultrabooks";
            break;
    }

    xhr.open("POST", link);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    console.log('allah');
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            result = JSON.parse(this.response);
            var resultTBody = document.createElement('tbody');
            result.map(function (nthcomputer) {
                resultTBody.appendChild(parsecomputerToTableRow(nthcomputer));
            });

            var table = document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('rTBody'));
            resultTBody.id = 'rTBody';
            console.log('success');
        }
    });

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            var link = "http://localhost:2403/servers";
            break;
        case "Ultrabook":
            var link = "http://localhost:2403/ultrabooks";
            break;
    }

    xhr.open("GET", link);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev) {

    ev.preventDefault();

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            document.getElementById("lbluvariable").innerHTML = "Discrete Graphics Card";
            break;
        case "Ultrabook":
            document.getElementById("lbluvariable").innerHTML = "Hyper-Threading technology";
            break;
    }

    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            result = JSON.parse(this.response);
            var ids = document.createElement('select');
            ids.className = 'form-control';
            result.map(function (nthcomputer) {
                var id = document.createElement('option');
                id.innerHTML = nthcomputer['id'];
                ids.appendChild(id);
            });
            var form = document.getElementById('uid').parentElement;
            form.replaceChild(ids, document.getElementById('uid'));
            ids.id = 'uid';
        }
    });

    switch (selVar) {
        case "Server":
            var link = "http://localhost:2403/servers";
            break;
        case "Ultrabook":
            var link = "http://localhost:2403/ultrabooks";
            break;
    }

    xhrids.open("GET", link);
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            var data = JSON.stringify({
                "manufacturer": String(document.getElementById("umanufacturer").value),
                "coreNumber": String(document.getElementById("ucoreNumber").value),
                "ramSize": String(document.getElementById("uramSize").value),
                "hddSize": String(document.getElementById("uhddSize").value),
                "discreteGraphicsCard": String(document.getElementById("uvariable").value)
            });
            break;
        case "Ultrabook":
            var data = JSON.stringify({
                "manufacturer": String(document.getElementById("umanufacturer").value),
                "coreNumber": String(document.getElementById("ucoreNumber").value),
                "ramSize": String(document.getElementById("uramSize").value),
                "hddSize": String(document.getElementById("uhddSize").value),
                "htt": String(document.getElementById("uvariable").value)
            });
            break;
    }

    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    switch (selVar) {
        case "Server":
            var link = "http://localhost:2403/servers/";
            break;
        case "Ultrabook":
            var link = "http://localhost:2403/ultrabooks/";
            break;
    }

    xhr.open("PUT", link + document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onPrepareDelete(ev) {

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            result = JSON.parse(this.response);
            var ids = document.createElement('select');
            ids.className = 'form-control';
            result.map(function (nthcomputer) {
                var id = document.createElement('option');
                id.innerHTML = nthcomputer['id'];
                ids.appendChild(id);
            });
            var form = document.getElementById('did').parentElement;
            form.replaceChild(ids, document.getElementById('did'));
            ids.id = 'did';
        }
    });

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            var link = "http://localhost:2403/servers";
            break;
        case "Ultrabook":
            var link = "http://localhost:2403/ultrabooks/";
            break;
    }

    xhrids.open("GET", link);
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            var link = "http://localhost:2403/servers/";
            break;
        case "Ultrabook":
            var link = "http://localhost:2403/ultrabooks/";
            break;
    }

    xhr.open("DELETE", link + document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parsecomputerToTableRow(computers) {
    var row = document.createElement('tr');

    id = document.createElement('th');
    id.innerText = computers['id'];
    row.appendChild(id);

    manufacturer = document.createElement('td');
    manufacturer.innerText = computers['manufacturer'];
    row.appendChild(manufacturer);

    coreNumber = document.createElement('td');
    coreNumber.innerText = computers['coreNumber'];
    row.appendChild(coreNumber);

    ramSize = document.createElement('td');
    ramSize.innerText = computers['ramSize'];
    row.appendChild(ramSize);

    hddSize = document.createElement('td');
    hddSize.innerText = computers['hddSize'];
    row.appendChild(hddSize);

    var select = document.getElementById("cselect");
    var selVar = select.options[select.selectedIndex].text;
    switch (selVar) {
        case "Server":
            document.getElementById("tblvar").innerHTML = "Discrete Graphics Card";

            discreteGraphicsCard = document.createElement('td');
            discreteGraphicsCard.innerText = computers['discreteGraphicsCard'];
            row.appendChild(discreteGraphicsCard);
            break;
        case "Ultrabook":
            document.getElementById("tblvar").innerHTML = "Hyper-Threading technology";

            htt = document.createElement('td');
            htt.innerText = computers['htt'];
            row.appendChild(htt);
            break;
    }

    return row;
}


(function () {

    document.getElementById('cselect').addEventListener(
        'change', onSelect
    );
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    document.getElementById('pdbutton').addEventListener(
        'click', onPrepareDelete
    );
    console.log('Handlers is set')
})()
