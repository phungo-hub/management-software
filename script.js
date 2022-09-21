let productList = [];

function add(arr, word) {
    arr.push(word)
}

function addProduct() {
    let input = document.getElementById('input').value;
    let table = document.getElementById('table');
    let quantity = document.getElementById('quantity')
    add(productList, input)
    let i = 0;
    table.innerHTML += "<tr id='" + input + "'>" +
                            "<td>" + input + "</td>" +
                            "<td>" + "<button type='button' onclick='editProduct(this)' class='edit'>Edit</button>" +"</td>" +
                            "<td>" + "<button type='button' value='" + input + "' onclick='deleteProduct(this.value)' class='edit'>Delete</button>" +"</td>" +

                        "</tr>"
    quantity.innerHTML = "<th>" + productList.length + "items </th>";
    i += 1;
}

function editProduct(editBtn) {
    let productRow = editBtn.parentElement.previousSibling;
    let buttonVal = editBtn.parentElement.nextSibling.firstChild;
    let parentId = editBtn.parentElement.parentElement.id;
    console.log(parentId)
    let newProduct = prompt("Sửa sản phẩm");
    for (let i = 0; i < productList.length; i++) {
        if (productRow.innerHTML === productList[i]) {
            productList[i] = newProduct;
            buttonVal.value = newProduct;
            parentId = newProduct;
            console.log(parentId);
        }
    }
    productRow.innerHTML = newProduct;
}

function deleteProduct(val) {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i] === val) {
            document.getElementById(productList[i]).remove();
            productList.splice(i, 1);
        }
    }
}
