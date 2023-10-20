function toggleApartmentField() {
    var privateHouseCheckbox = document.getElementById("private-house");
    var apartmentField = document.getElementById("apartment");
    if (privateHouseCheckbox.checked) {
        apartmentField.disabled = true;
    } else {
        apartmentField.disabled = false;
    }
}

function submitForm() {
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    apartmentField = document.getElementById("apartment");
    var apartment = apartmentField.value;
    if (street == "" || house == "" || (apartmentField && apartmentField.disabled == false && apartment == "")) {
        alert("Заполните все поля!");
        return;
    }
    var streetType = street.substring(0, street.indexOf(" "));
    var houseNumber = parseInt(house);

    if (streetType == "ул") {
        if (houseNumber < 1 || houseNumber > 100) {
            alert("Неверный номер дома!");
            return;
        }
    } else if (streetType == "пр") {
        if (houseNumber < 1 || houseNumber > 1000) {
            alert("Неверный номер дома!");
            return;
        }
    } else if (streetType == "пер") {
        if (houseNumber < 1 || houseNumber > 30) {
            alert("Неверный номер дома!");
            return;
        }
    } else {
        alert("Неверный тип улицы!");
        return;
    }

    var outputForm = document.getElementById("output-form");
    var streetLabel;
        if (streetType == "ул") {
            streetLabel = "Улица";
        } else if (streetType == "пр") {
            streetLabel = "Проспект";
        } else if (streetType == "пер") {
            streetLabel = "Переулок";
        } else {
            alert("Неверный тип улицы!");
            return;
        }
    if (document.getElementById("private-house").checked) {
        outputForm.innerHTML = "<label>" + streetLabel + ":</label> " + street.substring(street.indexOf(" ") + 1) + "<br><br>" +
                                "<label>Дом:</label> " + house + "<br><br>" + "<label>Частный дом</label>";
    } else {
        
        outputForm.innerHTML = "<label>" + streetLabel + ":</label> " + street.substring(street.indexOf(" ") + 1) + "<br><br>" +
                                "<label>Дом:</label> " + house + "<br><br>" +
                                "<label>Квартира:</label> " + apartment + "<br><br>";
    }
}