window.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var search_value = params.get('search');
    // console.log(categoryName);

    let prod_catalogue = document.getElementById("prod_catag");

    fetch(`http://localhost:3000/products/?$or[0][productName]=${search_value}&$or[1][productCategory]=${search_value}`)
    .then(res => res.json())
    .then(json => {
        if (json.status === 'success' && json.length != 0) {
            console.log(json);
            json.data.products.map(products => {
            prod_catalogue.append(products_catag(products));
          });
        } else if(json.status === 'success' && json.length == 0) {
          alert("No products found");
          window.location.href = "index.html";
        }
      })
    .catch(error => {
        console.log(error);
    })


    function products_catag({productImage, productName, productPrice, productDescription, _id}){
        const productContainer = document.createElement("div");
        productContainer.classList.add("prod");
        productContainer.innerHTML = 
        `
        <div class="prod_image">
            <img src="${productImage}" alt="Samsung galaxy S23 ultra" height="200px" width="200px">
        </div>
        <div class="prod_content">
            <div class="prod_name">
                <h2>${productName}</h2>
            </div>
            <div class="prod_rating">
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
            </div>
            <div class="prod-price">
                <h1>₹${productPrice}</h1>
            </div>
            <div class="prod_discr">
                <p>${productDescription}</p>
            </div>
            <div class="prod_deliv">
                <p><i class='bx bx-check'></i>Get it by Sat, 28</p>
            </div>
        </div>
        `;
        return productContainer
    
    }
    
})

document.getElementById('priceRanges').addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
      const minPrice = event.target.dataset.min;
      const maxPrice = event.target.dataset.max;
      const rangeText = event.target.innerHTML;

      var params = new URLSearchParams(window.location.search);
      var search_value = params.get('search');
      
      window.location.href = 'filter.html?search=' + encodeURIComponent(search_value) + '&h=' + encodeURIComponent(minPrice) + '&l=' + encodeURIComponent(maxPrice);
    }
  });
  
function ascending(){
    let prod_catalogue = document.getElementById("prod_catag");
    prod_catalogue.innerHTML = "";
    
    var params = new URLSearchParams(window.location.search);
    var search_value = params.get('search');
    
    fetch(`http://localhost:3000/products/?$or[0][productName]=${search_value}&$or[1][productCategory]=${search_value}&sort=productPrice`)
    .then(res => res.json())
    .then(json => {
        if (json.status === 'success' && json.length != 0) {
            console.log(json);
            json.data.products.map(products => {
            prod_catalogue.append(products_catag(products));
          });
        } else if(json.status === 'success' && json.length == 0) {
          alert("No products found");
          window.location.href = "index.html";
        }
      })
    .catch(error => {
        console.log(error);
    })


    function products_catag({productImage, productName, productPrice, productDescription, _id}){
        const productContainer = document.createElement("div");
        productContainer.classList.add("prod");
        productContainer.innerHTML = 
        `
        <div class="prod_image">
            <img src="${productImage}" alt="Samsung galaxy S23 ultra" height="200px" width="200px">
        </div>
        <div class="prod_content">
            <div class="prod_name">
                <h2>${productName}</h2>
            </div>
            <div class="prod_rating">
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
            </div>
            <div class="prod-price">
                <h1>₹${productPrice}</h1>
            </div>
            <div class="prod_discr">
                <p>${productDescription}</p>
            </div>
            <div class="prod_deliv">
                <p><i class='bx bx-check'></i>Get it by Sat, 28</p>
            </div>
        </div>
        `;
        return productContainer
    
    }


}

function descending(){
    let prod_catalogue = document.getElementById("prod_catag");
    prod_catalogue.innerHTML = "";
    
    var params = new URLSearchParams(window.location.search);
    var search_value = params.get('search');
    
    fetch(`http://localhost:3000/products/?$or[0][productName]=${search_value}&$or[1][productCategory]=${search_value}&sort=-productPrice`)
    .then(res => res.json())
    .then(json => {
        if (json.status === 'success' && json.length != 0) {
            console.log(json);
            json.data.products.map(products => {
            prod_catalogue.append(products_catag(products));
          });
        } else if(json.status === 'success' && json.length == 0) {
          alert("No products found");
          window.location.href = "index.html";
        }
      })
    .catch(error => {
        console.log(error);
    })


    function products_catag({productImage, productName, productPrice, productDescription, _id}){
        const productContainer = document.createElement("div");
        productContainer.classList.add("prod");
        productContainer.innerHTML = 
        `
        <div class="prod_image">
            <img src="${productImage}" alt="Samsung galaxy S23 ultra" height="200px" width="200px">
        </div>
        <div class="prod_content">
            <div class="prod_name">
                <h2>${productName}</h2>
            </div>
            <div class="prod_rating">
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
            </div>
            <div class="prod-price">
                <h1>₹${productPrice}</h1>
            </div>
            <div class="prod_discr">
                <p>${productDescription}</p>
            </div>
            <div class="prod_deliv">
                <p><i class='bx bx-check'></i>Get it by Sat, 28</p>
            </div>
        </div>
        `;
        return productContainer
    
    }


}


document.getElementById('pri_but').addEventListener('click', function(event) {
    event.preventDefault();
    const minPrice = document.getElementById("min_pri").value;
    const maxPrice = document.getElementById("max_pri").value;
    var params = new URLSearchParams(window.location.search);
    var search_value = params.get('search');
      
    window.location.href = 'filter.html?search=' + encodeURIComponent(search_value) + '&h=' + encodeURIComponent(minPrice) + '&l=' + encodeURIComponent(maxPrice);

  });