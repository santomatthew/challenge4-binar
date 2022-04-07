function createFilterBox() {
  craeteParentElement();

  let formGroup1 = document.getElementById("form-group1");
  let formGroup2 = document.getElementById("form-group2");
  let formGroup3 = document.getElementById("form-group3");
  let formGroup4 = document.getElementById("form-group4");
  let formGroup5 = document.getElementById("form-group5");

  let drivers = ["Pilih Tipe Driver", "Dengan Sopir", "Tanpa Sopir"];
  let options = [];
  drivers.forEach((a, b) => {
    let option = document.createElement("option");
    if (b > 0) {
      option.value = a;
    }
    option.text = a;
    options.push(option);
  });

  // definisikan isi form-group 1 disini ...
  let labelDriver = document.createElement("label");
  labelDriver.innerText = "Tipe Driver";

  let selectDriver = document.createElement("select");
  selectDriver.id = "select-driver";
  selectDriver.classList.add("form-control");
  formGroup1.append(labelDriver, selectDriver);
  selectDriver.append(...options);
  selectDriver.onfocus = showBackdrop;
  selectDriver.onblur = hideBackdrop;
  selectDriver.onchange = hideBackdrop;
  // definisikan isi form-group 2 disini ...
  let labelTanggal = document.createElement("label");
  labelTanggal.innerText = "Tanggal";

  let inputTanggal = document.createElement("input");
  inputTanggal.id = "input-tanggal";
  inputTanggal.type = "date";
  inputTanggal.classList.add("form-control");
  inputTanggal.onfocus = showBackdrop;
  inputTanggal.onblur = hideBackdrop;

  formGroup2.append(labelTanggal, inputTanggal);
  // definisikan isi form-group 3 disini ...

  let labelJemput = document.createElement("label");
  labelJemput.innerText = "Waktu Jemput/Ambil";

  let inputJemput = document.createElement("input");
  inputJemput.id = "input-jemput";
  inputJemput.type = "time";
  inputJemput.classList.add("form-control");
  inputJemput.onfocus = showBackdrop;
  inputJemput.onblur = hideBackdrop;

  formGroup3.append(labelJemput, inputJemput);
  // definisikan isi form-group 4 disini ...
  let labelPenumpang = document.createElement("label");
  labelPenumpang.innerText = "Jumlah Penumpang";

  let inputGroupPenumpang = document.createElement("div");
  inputGroupPenumpang.classList.add("input-group");

  let inputPenumpang = document.createElement("input");
  inputPenumpang.id = "input-penumpang";
  inputPenumpang.type = "number";
  inputPenumpang.classList.add("form-control");
  inputPenumpang.placeholder = "Jumlah Penumpang";
  inputPenumpang.onfocus = showBackdrop;
  inputPenumpang.onblur = hideBackdrop;

  let iconUserContainer = document.createElement("div");
  iconUserContainer.classList.add("input-group-append");

  inputGroupPenumpang.append(inputPenumpang, iconUserContainer);

  let iconUserWrapper = document.createElement("div");
  iconUserWrapper.classList.add("input-group-text", "bg-white");
  iconUserWrapper.style.padding = "10px";

  let iconUser = document.createElement("img");
  iconUser.src = "./images/pict/user-icon.svg";
  iconUserWrapper.append(iconUser);

  iconUserContainer.append(iconUserWrapper);

  formGroup4.append(labelPenumpang, inputGroupPenumpang);
  // definisikan isi form-group 5 disini ...
  let labelButton = document.createElement("label");
  labelButton.innerHTML = "&nbsp;";

  let buttonCari = document.createElement("button");
  buttonCari.id = "button-cari";
  buttonCari.type = "button";
  buttonCari.classList.add("btn", "btn-success", "col-sm-12");
  buttonCari.innerText = "Cari Mobil";
  buttonCari.onclick = onButtonClicked;

  formGroup5.append(labelButton, buttonCari);
}

async function onSearch(props) {
  let listcar = document.getElementById("list-car");
  listcar.innerHTML = "";
  let cars = await Binar.listCars();
  let arrCars = [];

  for (let i = 0; i < cars.length; i++) {
    if (
      cars[i].capacity >= props.passenger &&
      cars[i].withDriver == true &&
      cars[i].availableAt <= props.datetime
    ) {
      arrCars.push();
    }
  }
  listcar.innerHTML += arrCars.join("");
}

function rupiah(price) {
  let convertPrice = price.toString();
  let convertString = convertPrice.split("");
  let array = [];
  let temp = 3;

  for (let i = convertString.length - 1; i >= 0; i--) {
    temp -= 1;
    array.unshift(convertString[i]);
    if (temp == 0 && i != 0) {
      array.unshift(".");
      temp = 3;
    }
  }
  return array.join("");
}

createFilterBox();
