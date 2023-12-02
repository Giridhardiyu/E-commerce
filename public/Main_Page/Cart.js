let prod_cart1 = document.getElementById("prod_cart");


fetch("http://localhost:3000/cart/")
  .then(res => res.json())
  .then(json => {
    json.data.map(data => {
        console.log(data)
        prod_cart1.append(products_catag(data.product, data.quantity, data._id))
        
    })

  })

  function products_catag({productImage, productName, productPrice, productDescription}, quantity, _id){
    let tot_pri = productPrice * quantity;
    const productContainer = document.createElement("tr");
    console.log(_id);
    productContainer.innerHTML = 
    `
    <td><a type="button" class="modify_button" onclick="delete_pro_cart(event)"><i class='bx bx-x-circle' id="${_id}"></i></a></td>
    <td><img src="${productImage}" alt=""></td>
    <td>${productName}</td>
    <td>₹${productPrice}</td>
    <td><input type="number" value="${quantity}"></td>
    <td>₹${tot_pri}</td>
    `;
    return productContainer

}

function delete_pro_cart(event){
  const id1 = event.target.id;
  console.log(event.target.id);
  fetch(`http://localhost:3000/cart/${id1}`, {
      method: 'DELETE'
  }).then(data => alert("Product removed successfully!!!"))
    .catch(error => console.log(error))
}

let prod_total = document.getElementById("sub-tot");
let prod_total1 = document.getElementById("sub-tot1");
fetch("http://localhost:3000/cart/total")
.then(res => res.json())
.then(json => {
  prod_total.innerHTML = "₹" + json.total;
  prod_total1.innerHTML = "₹" + json.total;
})
