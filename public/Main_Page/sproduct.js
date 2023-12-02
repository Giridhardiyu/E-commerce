window.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var prod_id = params.get('id');
    
    fetch(`http://localhost:3000/products/${prod_id}`)
    .then(res => res.json())
    .then(json => {
        if(json.status === 'success'){
            product_det(json.data.product);
        }
    })
    .catch(error => {
        console.log(error);
    })

    function product_det({productImage, productName, productPrice, productDescription, _id}){
        document.getElementById("MainImg").src = productImage;
        let smalImg = document.getElementsByClassName("small-img");
        smalImg[0].src = productImage;
        smalImg[1].src = productImage;
        smalImg[2].src = productImage;
        smalImg[3].src = productImage;
        document.getElementById("pro_title").innerHTML = productName;
        document.getElementById("pro_price").innerHTML = "₹" + productPrice;
        document.getElementById("pro_desc").innerHTML = productDescription
    }
})