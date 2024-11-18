// console.log("Hello World!");




const div = document.querySelector("#mainContainer");




fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(res => {

    console.log(res);
    

    res.products.map(item => {

        div.innerHTML += `
        
        <div class="mainCards">
        <img src="${item.thumbnail}" alt="" width="150px" height="150px"> 
        <h5>Title: ${item.title}</h5>
        <h5>brand: ${item.brand || "NO BRAND"}</h5>
        <h5>category: ${item.category}</h5>
            <h5>Price : $${item.price}</h5>
        </div>
    
        `
    })
})
.catch(err => {
    console.log(err)
})