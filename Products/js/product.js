let arrayData = [];
fetch("https://fakestoreapi.com/products/categories")
    .then(Response => Response.json())
    .then((data) => {
        let str = "";
        for (x in data) {
            str += `<div class="row1"><input type="checkbox" onclick="filterdata(event)" class="inputcheck" value="${data[x]}"><label>${data[x]}</label></div>`
        }
        document.getElementById("categories").innerHTML = str;
    })
const newDisplay = () => {
    fetch("https://fakestoreapi.com/products")
        .then(Response => Response.json())
        .then((data) => {
            arrayData = data;
            display(data);
        })
}
newDisplay();
function filterdata() {
    let arrayFilterData = [];
    let check = document.querySelectorAll(".inputcheck:checked");
    // for (i = 0; i < check.length; i++) {
    //     arrayFilterData.push(check);
    // }
    // const filter1 = arrayData.filter(value => {

    //     return arrayFilterData.includes(value.category)
    // })
    // display(filter1);


    if (check.length > 0) {
        for (let i = 0; i < check.length; i++) {
          arrayFilterData.push(check[i].defaultValue)
        }
    
        var myfilterData = arrayData.filter((value) => {
    
          return arrayFilterData.includes(value.category)
        });
    
        display(myfilterData);
    
      }
      else {
        display(arrayData);
      }
}

const display = (arrayData) => {
    let str = "";
    for (x of arrayData) {
        str += `<article class="product">
            <img src="${x.image}" class="product-img img" alt="" />
            <footer>
                <h5 class="product-name">${x.title}</h5>
                <span class="product-price">${x.price}</span>
            </footer>
        </article>`
    }
    document.getElementById("items").innerHTML = str;
}

