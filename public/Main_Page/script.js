let products_12 = document.getElementById("product-container");

fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(json => {
    console.log(json)
    json.data.products.map(products => {
        // console.log(products.productName)
        products_12.append(products_catag(products));
    })
  })

  function products_catag({productImage, productName, productPrice, productDescription, _id}){
    const productContainer = document.createElement("div");
    productContainer.classList.add("prod");
    productContainer.addEventListener('click', function() {
      window.location.href = `sproduct.html?id=${_id}`;
  });
    productContainer.innerHTML = 
    `
    <img src="${productImage}" alt="">
                <div class="des">
                    <span>Adidas</span>
                    <h5>${productName}</h5>
                    <div class="star">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                    </div>
                    <h4>₹${productPrice}</h4>
                </div>
                <a href="#"><i class='bx bx-cart cart'></i></a>
    `;
    return productContainer

}