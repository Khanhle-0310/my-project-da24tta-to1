const productList = [
    {
        id: "001",
        name: "Sữa Ông Thọ",
        price: "25.000 vnđ",
        img: "../assets/images/ongtho.png",
        link: "https://www.vinamilk.com.vn/brands/%C3%B4ng%20th%E1%BB%8D?srsltid=AfmBOoo0Pm5peEqmkGDAvd12xvGw4at9frw8DKv0r1JQ8Y6Bp5_mjmVK"
    },
    {
        id: "002",
        name: "Sữa Cô Gái Hà Lan",
        price: "20.000 vnđ",
        img: "../assets/images/halan.jpg",
        link:"https://www.dutchlady.com.vn/san-pham/sua-tuoi-dutch-lady"
    }
];
function addProduct(product){
    const container = document.getElementById("product-list");

    const myDiv = document.createElement("div");
    myDiv.setAttribute("class","product-item");

    const myImage = document.createElement("div");
    myImage.setAttribute("class","product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    productImg.setAttribute("alt", product.name);

    myImage.appendChild(productImg);
    myDiv.appendChild(myImage);

    const myInfo = document.createElement("div");
    myInfo.setAttribute("class","product-info");

    const p1 = document.createElement("p");
    p1.appendChild(document.createTextNode(product.name));

    const p2 = document.createElement("p");
    p2.appendChild(document.createTextNode(product.price));

    const linkElement = document.createElement("a"); 
    linkElement.setAttribute("href", product.link);
    const linkText = document.createTextNode("Nhấn xem chi tiết"); 
    linkElement.appendChild(document.createTextNode("Nhấn để xem"));

    myInfo.appendChild(p1);
    myInfo.appendChild(p2);
    myInfo.appendChild(linkElement);
    myDiv.appendChild(myInfo);

    container.appendChild(myDiv);
}

function loadAllProduct(){
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    for(let i = 0; i < productList.length; i++){
        addProduct(productList[i]);
    }
}