
function onCreate(ev) {
  ev.preventDefault();
 
 
  var data = JSON.stringify({
      "manufacturer": String(document.getElementById("cmanufacturer").value),
      "coreNumber": String(document.getElementById("ccoreNumber").value),
      "ramSize": String(document.getElementById("cramSize").value),
      "hddSize": String(document.getElementById("chddSize").value)
  });
  console.log(data);
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          alert(this.responseText);
          document.getElementById("createForm").dispatchEvent(new Event('submit'));
      } 
  });

  xhr.open("POST", "http://localhost:2403/computers");
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
          result=JSON.parse(this.response);
          var resultTBody=document.createElement('tbody');
          result.map(function(nthcomputer){
              resultTBody.appendChild(parsecomputerToTableRow(nthcomputer));
          });

          var table=document.getElementById('rTBody').parentElement;
          table.replaceChild(resultTBody,document.getElementById('rTBody'));
          resultTBody.id='rTBody';
          console.log('success');
      }
  });

  xhr.open("GET", "http://localhost:2403/computers");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}

function onPrepareUpdate(ev){

  ev.preventDefault();
  xhrids = new XMLHttpRequest();
  xhrids.withCredentials = true;

  xhrids.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          //console.log(this.response);
          result=JSON.parse(this.response);
          var ids=document.createElement('select');
          ids.className='form-control';
          result.map(function(nthcomputer){
              var id=document.createElement('option');
              id.innerHTML=nthcomputer['id'];
              ids.appendChild(id);
          });
          var form=document.getElementById('uid').parentElement;
          form.replaceChild(ids,document.getElementById('uid'));
          ids.id='uid';
      }
  });
  xhrids.open("GET", "http://localhost:2403/computers/");
  xhrids.setRequestHeader("Content-Type", "application/json");
  xhrids.send();
}

function onUpdate(ev) {
  ev.preventDefault();

 
  var data = JSON.stringify({
      "manufacturer": String(document.getElementById("umanufacturer").value),
      "coreNumber": String(document.getElementById("ucoreNumber").value),
      "ramSize": String(document.getElementById("uramSize").value),
      "hddSize": String(document.getElementById("uhddSize").value)
  });
  console.log(data);
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
      }
  });

  xhr.open("PUT", "http://localhost:2403/computers/"+document.getElementById("uid").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function onPrepareDelete(ev){

  ev.preventDefault();
  xhrids = new XMLHttpRequest();
  xhrids.withCredentials = true;

  xhrids.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          //console.log(this.response);
          result=JSON.parse(this.response);
          var ids=document.createElement('select');
          ids.className='form-control';
          result.map(function(nthcomputer){
              var id=document.createElement('option');
              id.innerHTML=nthcomputer['id'];
              ids.appendChild(id);
          });
          var form=document.getElementById('did').parentElement;
          form.replaceChild(ids,document.getElementById('did'));
          ids.id='did';
      }
  });
  xhrids.open("GET", "http://localhost:2403/computers/");
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

  xhr.open("DELETE", "http://localhost:2403/computers/"+document.getElementById("did").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
}

function parsecomputerToTableRow(computers){
  var row=document.createElement('tr');

  id=document.createElement('th');
  id.innerText=computers['id'];
  row.appendChild(id);

  manufacturer=document.createElement('td');
  manufacturer.innerText=computers['manufacturer'];
  row.appendChild(manufacturer);

  coreNumber=document.createElement('td');
  coreNumber.innerText=computers['coreNumber'];
  row.appendChild(coreNumber);
 
  ramSize=document.createElement('td');
  ramSize.innerText=computers['ramSize'];
  row.appendChild(ramSize);
  
  hddSize=document.createElement('td');
  hddSize.innerText=computers['hddSize'];
  row.appendChild(hddSize);

  return row;
}


(function () {

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
