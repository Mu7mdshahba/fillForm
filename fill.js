let username = document.getElementById("Customer");
const locat = document.getElementById("location");
let price = document.getElementById("price");
let offer = document.getElementById("offer");
let number = document.getElementById("number");
let submit = document.getElementById("submit");

let Mode = "creat";
let tmp;

// // creat Element

if (localStorage.product != null) {
  datapro = JSON.parse(localStorage.product);
} else {
  datapro = [];
}

function addGo() {
  let newpro = {
    username: username.value.toLowerCase(),
    locat: locat.value,
    price: price.value,
    offer: offer.value,
    number: number.value,
    submit: submit.value,
  };

  if (Mode === "creat") {
    if (newpro.count > 1) {
      for (let i = 0; i < newpro.count; i++) datapro.push(newpro);
    } else {
      datapro.push(newpro);
    }
  } else {
    datapro[tmp] = newpro;
    Mode = "creat";
    count.style.display = "block";
    submit.innerHTML = "Creat";
  }

  localStorage.setItem("product", JSON.stringify(datapro));
  clearData();
  showData();
  estImg;
}

// // clear data

// let delet = document.getElementsById('delete')
let srv;

function estImg() {
  let imgPlace = document.getElementById("cont-img");
  srv = `${imgPlace.src}`;
}

function clearData() {
  (username.value = ""),
    (locat.value = ""),
    (price.value = ""),
    (offer.value = ""),
    (number.value = "");
}

function showData() {
  let table = "";
  for (let i = 0; i < datapro.length; i++) {
    table += `
         <div class="indiv-box">
         <span id="numeric">#${i}</span>
            <div class="table">
                <ul id="main">
    <li>Customer</li>
    <li>location</li>
    <li>price</li>
    <li>offer</li>
    <li>number</li>
    <li>submit</li>
</ul>

                <ul id="gets"> 
                    <li>${datapro[i].username}</li>
                    <li>${datapro[i].locat}</li>
                    <li>${datapro[i].price}</li>
                    <li>${datapro[i].offer}</li>
                    <li>${datapro[i].number}</li>
                    <li><button onclick="delet(${i})" id="delete">delete</button></li>
                </ul>
                </table>

            </div>
            <div class="img-box">
                <p> This is personal picture</p>
              <div id="img">
            <img src=${srv} id="cont-img">
        </div>
            </div>
        </div>

`;
  }
  document.getElementById("cont").innerHTML = table;
}
showData();

// // delet element

function delet(i) {
  datapro.splice(i, 1);
  localStorage.product = JSON.stringify(datapro);
  showData();
}

// // delet all
function deletAll() {
  localStorage.clear();
  datapro.splice(0);
  showData();
}

// // // // Search // // // //

// function searchData(value) {
//     let table = "";
//     if (searchMode == "title") {
//         for (let i = 0; i < datapro.length; i++) {
//             if (datapro[i].title.includes(value)) {
//                 table += `
//                             <tr>
//                             <td>${datapro[i].username}</td>
//                             <td>${datapro[i].location}</td>
//                             <td>${datapro[i].price}</td>
//                             <td>${datapro[i].offer}</td>
//                             <td>${datapro[i].number}</td>
//                     </tr> `;
//             } else {
//                 for (let i = 0; i < datapro.length; i++) {
//                     if (datapro[i].email.includes(value)) {
//                         table += `
//                                     <tr>
//                                     <td>${datapro[i].username}</td>
//                                     <td>${datapro[i].l}</td>
//                                     <td>${datapro[i].Title}</td>
//                                     <td>${datapro[i].number}</td>
//                                     <td>${datapro[i].salary}</td>
//                                     <td>${datapro[i].email}</td>

//                             </tr> `;
//                     }
//                 }
//             }
//         }
//     }
//     document.getElementById("gets").innerHTML = table;
// }

////////////

// start Img Uploade

let fileBtn = document.getElementById("file-cho");
let label = document.getElementById("label");

label.onchange = function () {
  fileBtn.src = URL.createObjectURL(label.files[0]);
  imgPlace.src = URL.createObjectURL(label.files[0]);
};

console.log(fileBtn.value);
