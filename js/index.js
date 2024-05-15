// -------------------------------------------Assignment-10-JS -----------------------------

var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addBtn = document.getElementById("addBtn");
var tableBody = document.getElementById("tableBody");
var bookMarks;
var hidden = document.getElementById("editDiv");
hidden.style.display = "none";
if (localStorage.getItem("userBookMark")) {
  bookMarks = JSON.parse(localStorage.getItem("userBookMark"));
  displayData();
  // console.log(products);
} else {
  bookMarks = [];
}
// ----------------------------validName---------------------
var nameValid = /^[A-a-Z-z-_]{1,}$/;
// console.log(nameValid.test("m"));
function isNameValid() {
  if (nameValid.test(nameInput.value)) {
    return true;
  } else {
    return false;
  }
}
//----------------------------
// ----------------------------validUrl---------------------

var urlValid = /^(https:\/\/)?(www\.)?[A-a-Z-z-0-9_\.]{1,}\.[a-z]{3}$/;
// console.log(urlValid.test("www.google.com"));
function isUrlValid() {
  if (urlValid.test(urlInput.value)) {
    return true;
  } else {
    return false;
  }
}
// ----------------------------

// ----------------------------disabledBtnStart--------------------
nameInput.onkeyup = function () {
  if (isNameValid() && isUrlValid()) {
    addBtn.removeAttribute("disabled");
  } else {
    addBtn.setAttribute("disabled", "disabled");
  }
  // else{
  //   addBtn.disabled="true";
  // }
};
urlInput.onkeyup = function () {
  if (isNameValid() && isUrlValid()) {
    addBtn.removeAttribute("disabled");
  } else {
    addBtn.setAttribute("disabled", "disabled");
  }
  // else{
  //   addBtn.disabled="true";
  // }
};
// ----------------------------disabledBtnEnd--------------------

// addBtn.onclick=function(){
//   var bookMark={
//     name:nameInput.value,
//     url:urlInput.value
//   }
//   bookMarks.push(bookMark);
//   localStorage.setItem("userBookMark",JSON.stringify(bookMarks));
//   displayData();
//   hidden.style.display="flex";

//   // validateForm()
//   clear()
//   // console.log(bookMarks);
// }
addBtn.onclick = function () {
  if (isNameValid() && isUrlValid()) {
    var bookMark = {
      name: nameInput.value,
      url: urlInput.value,
    };
    bookMarks.push(bookMark);
    localStorage.setItem("userBookMark", JSON.stringify(bookMarks));
    displayData();
    clear();
  } else {
    hidden.style.display = "flex";
  }
};

function clear() {
  nameInput.value = "";
  urlInput.value = "";
}

function displayData() {
  var box = ``;
  for (var i = 0; i < bookMarks.length; i++) {
    box += `
   
    <tr>
      <td>${i + 1}</td>
      <td>${bookMarks[i].name}</td>
      <td>
      
    <a href="https://${
      bookMarks[i].url
    } " target="_blank" class="text-decoration-none text-white "> 
      
      <button   class="btn btn-info visit"><i class="fa-solid fa-eye pe-2"></i> Visit</button> 
      </a>
      
      </td>
      <td><button onclick="deleting(${i})" class="btn btn-info delete"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button> </td>
       </tr>
 
  
    `;
  }
  document.getElementById("tableBody").innerHTML = box;
}

function deleting(index) {
  console.log(index);
  bookMarks.splice(index, 1);
  localStorage.setItem("userBookMark", JSON.stringify(bookMarks));
  displayData();
}
function hideEdit() {
  hidden.style.display = "none";
}

// -------------------------------------------Assignment-10-JS End -----------------------------
