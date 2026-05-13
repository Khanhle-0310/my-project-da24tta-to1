const productList = [
    {
        id: "001",
        name: "Sữa Milo",
        price: "10.000 vnđ",
        img: "../assets/images/milo.jpg",
        description: "Sữa Milo là dòng thức uống dinh dưỡng nổi tiếng được nhiều người yêu thích nhờ hương vị socola đậm đà cùng công thức bổ sung năng lượng hiệu quả. Sản phẩm được sản xuất theo quy trình hiện đại, kết hợp giữa sữa và cacao nguyên chất giúp tạo nên vị thơm béo hấp dẫn, dễ uống và phù hợp với nhiều lứa tuổi. Milo cung cấp nguồn vitamin và khoáng chất thiết yếu như canxi, vitamin B, sắt và protein hỗ trợ phát triển thể chất, tăng cường sức khỏe xương khớp và duy trì nguồn năng lượng tích cực cho các hoạt động hằng ngày. Không chỉ là thức uống giải khát, Milo còn giúp cải thiện sự tỉnh táo và khả năng tập trung, đặc biệt thích hợp cho học sinh, sinh viên và người thường xuyên vận động. Với thiết kế tiện lợi, sản phẩm dễ dàng mang theo khi đi học, đi làm hoặc tham gia các hoạt động ngoài trời. Hương vị thơm ngon hòa quyện giữa vị ngọt nhẹ và socola nguyên chất tạo cảm giác thích thú ngay từ lần thưởng thức đầu tiên. Đây là lựa chọn lý tưởng cho những ai mong muốn bổ sung dinh dưỡng một cách nhanh chóng, tiện lợi nhưng vẫn đảm bảo chất lượng và hương vị tuyệt vời.",
        productLink: "detail.html"
    },

    {
        id: "002",
        name: "Sữa Ông Thọ",
        price: "25.000 vnđ",
        img: "../assets/images/ongtho.jpg",
        description: "Sữa Ông Thọ là thương hiệu sữa đặc truyền thống quen thuộc với nhiều thế hệ người Việt nhờ hương vị béo ngậy, thơm ngon và chất lượng ổn định. Sản phẩm được chế biến từ nguồn sữa chất lượng cao kết hợp cùng công nghệ sản xuất tiên tiến, tạo nên độ sánh mịn hấp dẫn và vị ngọt hài hòa đặc trưng. Sữa Ông Thọ thường được sử dụng để pha cà phê, làm bánh, chế biến món tráng miệng hoặc dùng trực tiếp với đá để tạo nên thức uống thơm ngon đầy năng lượng. Không chỉ mang lại hương vị đậm đà, sản phẩm còn cung cấp nguồn dinh dưỡng đáng kể với hàm lượng protein, chất béo và vitamin cần thiết cho cơ thể. Bao bì quen thuộc cùng hình ảnh đặc trưng đã trở thành biểu tượng gắn liền với ký ức tuổi thơ của nhiều người. Nhờ khả năng kết hợp linh hoạt với nhiều nguyên liệu khác nhau, Sữa Ông Thọ luôn là lựa chọn hàng đầu trong căn bếp gia đình Việt. Hương vị thơm béo đặc trưng giúp mọi món ăn trở nên hấp dẫn hơn, đồng thời mang lại cảm giác ngon miệng và giàu năng lượng cho người sử dụng.",
        productLink: "detail.html"
    },

    {
        id: "003",
        name: "Sữa Cô Gái Hà Lan",
        price: "20.000 vnđ",
        img: "../assets/images/halan.jpg",
        description: "Sữa Cô Gái Hà Lan là sản phẩm dinh dưỡng được nhiều gia đình tin dùng nhờ chất lượng cao cùng công thức giàu dưỡng chất thiết yếu cho cơ thể. Được sản xuất trên dây chuyền công nghệ hiện đại và kiểm định nghiêm ngặt, sản phẩm mang đến hương vị thơm ngon tự nhiên, dễ uống và phù hợp với nhiều đối tượng sử dụng. Sữa chứa hàm lượng canxi, vitamin D, protein cùng nhiều khoáng chất quan trọng giúp hỗ trợ phát triển chiều cao, tăng cường hệ miễn dịch và duy trì sức khỏe xương khớp. Hương vị thanh nhẹ kết hợp cùng độ béo vừa phải tạo cảm giác ngon miệng mà không gây ngán khi sử dụng thường xuyên. Đây là lựa chọn lý tưởng cho trẻ em đang trong giai đoạn phát triển, người trưởng thành cần bổ sung dinh dưỡng hoặc người lớn tuổi muốn chăm sóc sức khỏe toàn diện. Bao bì hiện đại, tiện lợi giúp dễ dàng mang theo và sử dụng ở bất kỳ đâu. Với uy tín thương hiệu lâu năm và chất lượng ổn định, Sữa Cô Gái Hà Lan không chỉ mang đến nguồn dinh dưỡng cần thiết mà còn góp phần xây dựng lối sống khỏe mạnh và năng động mỗi ngày.",
        productLink: "detail.html"
    },

    {
        id: "004",
        name: "Sữa Vinamilk",
        price: "15.000 vnđ",
        img: "../assets/images/vinamilk.jpg",
        description: "Sữa Vinamilk là thương hiệu sữa hàng đầu Việt Nam với chất lượng được khẳng định qua nhiều năm và được người tiêu dùng tin tưởng lựa chọn. Sản phẩm được sản xuất từ nguồn nguyên liệu tươi sạch kết hợp cùng quy trình công nghệ hiện đại nhằm đảm bảo giữ trọn giá trị dinh dưỡng và hương vị tự nhiên. Vinamilk cung cấp nhiều dưỡng chất quan trọng như protein, canxi, vitamin A, D và các khoáng chất cần thiết giúp tăng cường sức khỏe, hỗ trợ phát triển chiều cao và duy trì hệ miễn dịch khỏe mạnh. Hương vị thơm ngon, dễ uống cùng độ béo hài hòa phù hợp với cả trẻ nhỏ, người trưởng thành và người cao tuổi. Sản phẩm không chỉ giúp bổ sung năng lượng cho các hoạt động hằng ngày mà còn góp phần cải thiện chất lượng cuộc sống thông qua chế độ dinh dưỡng cân bằng. Thiết kế bao bì hiện đại, tiện lợi và đa dạng dung tích giúp người dùng dễ dàng lựa chọn theo nhu cầu sử dụng. Với uy tín thương hiệu lớn cùng cam kết chất lượng nghiêm ngặt, Sữa Vinamilk luôn là lựa chọn đáng tin cậy cho mọi gia đình Việt.",
        productLink: "detail.html"
    }
];

function addProduct_v2(product) {
    const container = document.getElementById("product-list");

    // Khung sản phẩm
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // Hình ảnh
    const myImage = document.createElement("div");
    myImage.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    productImg.setAttribute("alt", product.name);

    myImage.appendChild(productImg);
    myDiv.appendChild(myImage);

    // Thông tin sản phẩm
    const myInfo = document.createElement("div");
    myInfo.setAttribute("class", "product-info");

    const p1 = document.createElement("p");
    p1.appendChild(document.createTextNode(product.name));

    const p2 = document.createElement("p");
    p2.appendChild(document.createTextNode(product.price));

    const p3 = document.createElement("p");
    p3.appendChild(document.createTextNode(product.description));


    // Nút xem chi tiết
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Nhấn xem chi tiết");

    productLink.appendChild(productLinkText);
    productLink.setAttribute("class", "btn btn-info");
    productLink.setAttribute("href", product.productLink + "?id=" + product.id);
    // Thêm vào info
    myInfo.appendChild(p1);
    myInfo.appendChild(p2);
    myInfo.appendChild(productLink);

    // Thêm info vào div
    myDiv.appendChild(myInfo);

    // Thêm sản phẩm vào container
    container.appendChild(myDiv);
}

function loadAllProduct() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    for (let i = 0; i < productList.length; i++) {
        addProduct_v2(productList[i]);
    }
}

// Gọi hàm hiển thị sản phẩm
loadAllProduct();