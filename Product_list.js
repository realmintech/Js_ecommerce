const product = [
    {
        "id": 1,
        "product_name": "Classic kids Toy ",
        "product_img" : "images/kidbaby-84552__340.webp",
        "product_price": 4500
},
{
    "id": 2,
    "product_name": "Fur Horse ",
    "product_img" : "images/kidstoy3.jpg",
    "product_price": 2500
},
{
    "id": 3,
    "product_name": "Execlusive Toy  ",
    "product_img" : "images/kidstoy4.jpg",
    "product_price": 12000
},
{
    "id": 4,
    "product_name": "Bubble Up",
    "product_img" : "images/kidstoy5.jpg",
    "product_price": 10500
},
{
    "id": 5,
    "product_name": "TimberLand",
    "product_img" : "images/boot-7288667__340.jpg",
    "product_price": 9000
},
{
    "id": 6,
    "product_name": "Sport Sneakers",
    "product_img" : "images/boot2.jpg",
    "product_price": 6200
},
{
    "id": 7,
    "product_name": "Unisex Trainers",
    "product_img" : "images/boot3.jpg",
    "product_price": 12000
},
{
    "id": 8,
    "product_name": "Combo Sport Kit",
    "product_img" : "images/boot5.jpg",
    "product_price": 15100
},
{
    "id": 9,
    "product_name": "Winter Shoe And Glove",
    "product_img" : "images/winter-wear-6995740__340.webp",
    "product_price": 17890
},
{
    "id": 10,
    "product_name": "Complete Cold Kit",
    "product_img" : "images/winter.jpg",
    "product_price": 22679
},
{
    "id": 11,
    "product_name": "Cotton Cardigan",
    "product_img" : "images/winter2.jpg",
    "product_price": 7200
},
{
    "id": 12,
    "product_name": "Mother And Son Winter Kit",
    "product_img" : "images/winter2.jpg",
    "product_price": 19145
}
]



const categories = [...new Set(product.map((item)=>{return item}))]

document.getElementById("searchBar").addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.product_name.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});
    const displayItem = (items)=>{
        document.getElementById('container').innerHTML = items.map((item)=>{
            var {product_img,product_name,product_price} = item;
            return(
                `
                <div class='col-3'>
                    <div class="box" style="width:400px">
                        <div class='img-box'>
                        <img class="card-img-top" src=${product_img} style="width:100%">
                        </div>
                        <div class="bottom">
                            <h4 class="card-title">${product_name}</h4>
                            <p class="card-text">${product_price}</p>
                            <button class=" btn bg-danger text-white" style="font-size: 20px;" onclick=addup(this)>Add to cart</button>
                        </div>
                    </div> 
                </div>
                `
            )
        }).join('')
    };
    displayItem(categories);
