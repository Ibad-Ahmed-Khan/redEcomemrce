import product1 from "../assets/RedStore_Img/images/product-1.jpg";
import product2 from "../assets/RedStore_Img/images/product-2.jpg";
import product3 from "../assets/RedStore_Img/images/product-3.jpg";
import product4 from "../assets/RedStore_Img/images/product-4.jpg";
import product5 from "../assets/RedStore_Img/images/product-5.jpg";
import product6 from "../assets/RedStore_Img/images/product-6.jpg";
import product7 from "../assets/RedStore_Img/images/product-7.jpg";
import product8 from "../assets/RedStore_Img/images/product-8.jpg";
import product9 from "../assets/RedStore_Img/images/product-9.jpg";
import product10 from "../assets/RedStore_Img/images/product-10.jpg";
import product11 from "../assets/RedStore_Img/images/product-11.jpg";
import product12 from "../assets/RedStore_Img/images/product-12.jpg";

import detailImg1 from "../assets/RedStore_Img/images/gallery-1.jpg";
import detailImg2 from "../assets/RedStore_Img/images/gallery-2.jpg";
import detailImg3 from "../assets/RedStore_Img/images/gallery-3.jpg";
import detailImg4 from "../assets/RedStore_Img/images/gallery-4.jpg";

const productList = [
  {
    id: 1,
    productImg: product1,
    detailImg1: detailImg1,
    detailImg2: detailImg2,
    detailImg3: detailImg3,
    detailImg4: detailImg4,
    productShortName: "Home/T-Shirt",
    productSize: [1, 2, 3, 4],
    productDetail:
      "This red printed T-shirt is made of high-quality cotton. Stylish and comfortable, perfect for casual wear.",
    productName: "Red Printed T-Shirt",
    productStarRating: 5,
    productPrice: "50.00",
    productAvailable: 3, // Quantity available
  },
  {
    id: 2,
    productImg: product2,
    detailImg1: product2,
    detailImg2:
      "https://rukminim2.flixcart.com/image/832/832/kovsvbk0/shoe/f/f/u/4-13223326-hrx-by-hrithik-roshan-black-original-imag38jzhgz8rpdy.jpeg?q=70&crop=false",
    detailImg3:
      "https://rukminim2.flixcart.com/image/832/832/kovsvbk0/shoe/8/w/p/4-13223326-hrx-by-hrithik-roshan-black-original-imag38jz8qnfhapu.jpeg?q=70&crop=false",
    detailImg4:
      "https://rukminim2.flixcart.com/image/832/832/kovsvbk0/shoe/t/f/r/4-13223326-hrx-by-hrithik-roshan-black-original-imag38jzq2phqwjh.jpeg?q=70&crop=false",
    productShortName: "Home/Shoes",
    productSize: [7, 8, 9, 10],
    productDetail:
      "HRX Sport Shoes offer comfort and style, perfect for running and workouts.",
    productName: "Hrx Sport Shoes",
    productStarRating: 4,
    productPrice: "75.00",
    productAvailable: 5, // Quantity available
  },
  {
    id: 3,
    productImg:
      "https://www.ndure.com/cdn/shop/products/2_8e923467-f214-41b8-bec1-3c1257a73ed1.jpg?v=1629796769&width=493",
    detailImg1:
      "https://www.ndure.com/cdn/shop/products/1_bf9a277c-fe56-454c-8a7c-820d93253fd7.jpg?v=1629796769&width=493",
    detailImg2:
      "https://www.ndure.com/cdn/shop/products/2_8e923467-f214-41b8-bec1-3c1257a73ed1.jpg?v=1629796769&width=493",
    detailImg3:
      "https://www.ndure.com/cdn/shop/products/4_1be959e7-cd2f-4726-baae-79514e2ee382.jpg?v=1629796769&width=493",
    detailImg4:
      "https://www.ndure.com/cdn/shop/products/1400-x-1400_1370771f-b344-4719-a9f1-cde58e50e99c.jpg?v=1629796769&width=493",
    productShortName: "Home/Pant",
    productSize: [32, 34, 36, 38],
    productDetail:
      "Gray Track Pant made with breathable fabric, ideal for sports or lounging.",
    productName: "Gray Track Pant",
    productStarRating: 3,
    productPrice: "60.00",
    productAvailable: 3, // Quantity available
  },
  {
    id: 4,
    productImg: product4,
    detailImg1: product4,
    detailImg2:
      "https://m.media-amazon.com/images/I/81Va1Iwf7ZL._AC_SX342_.jpg",
    detailImg3:
      "https://m.media-amazon.com/images/I/81X8Y10gmuL._AC_SX342_.jpg",
    detailImg4:
      "https://m.media-amazon.com/images/I/91F34-xrewL._AC_SX342_.jpg",
    productShortName: "Home/Shirt",
    productSize: ["S", "M", "L", "XL"],
    productDetail:
      "Blue Printed Shirt with a modern design, perfect for office or casual wear.",
    productName: "Blue Printed Shirt",
    productStarRating: 5,
    productPrice: "120.00",
    productAvailable: 6, // Quantity available
  },
  {
    id: 5,
    productImg: product5,
    detailImg1: product5,
    detailImg2: "https://example.com/puma-shoes-detail-2.jpg",
    detailImg3: "https://example.com/puma-shoes-detail-3.jpg",
    detailImg4: "https://example.com/puma-shoes-detail-4.jpg",
    productShortName: "Home/Shoes",
    productSize: [7, 8, 9, 10],
    productDetail:
      "Puma Gray Sports Shoes designed for comfort and durability during your workout.",
    productName: "Puma Gray Sports Shoes",
    productStarRating: 4,
    productPrice: "55.00",
    productAvailable: 8, // Quantity available
  },
  {
    id: 6,
    productImg: product6,
    detailImg1: product6,
    detailImg2: "https://example.com/blackshirt-detail-2.jpg",
    detailImg3: "https://example.com/blackshirt-detail-3.jpg",
    detailImg4: "https://example.com/blackshirt-detail-4.jpg",
    productShortName: "Home/T-Shirt",
    productSize: ["S", "M", "L", "XL"],
    productDetail:
      "Black Printed Puma Shirt, stylish and comfortable for casual wear.",
    productName: "Black Printed Puma Shirt",
    productStarRating: 4,
    productPrice: "20.00",
    productAvailable: 15, // Quantity available
  },
  {
    id: 7,
    productImg: product7,
    detailImg1: product7,
    detailImg2: "https://example.com/socks-detail-2.jpg",
    detailImg3: "https://example.com/socks-detail-3.jpg",
    detailImg4: "https://example.com/socks-detail-4.jpg",
    productShortName: "Home/Socks",
    productSize: ["One Size"],
    productDetail:
      "HRX 3 Socks Set, providing comfort and style for everyday use.",
    productName: "HRX 3 Socks Set",
    productStarRating: 5,
    productPrice: "45.00",
    productAvailable: 12, // Quantity available
  },
  {
    id: 8,
    productImg: product8,
    detailImg1: product8,
    detailImg2: "https://example.com/watch-detail-2.jpg",
    detailImg3: "https://example.com/watch-detail-3.jpg",
    detailImg4: "https://example.com/watch-detail-4.jpg",
    productShortName: "Home/Watch",
    productSize: ["One Size"],
    productDetail:
      "Black Fasel Watch with a sleek design, perfect for formal or casual wear.",
    productName: "Black Fasel Watch",
    productStarRating: 4,
    productPrice: "30.00",
    productAvailable: 7, // Quantity available
  },
  {
    id: 9,
    productImg: product9,
    detailImg1: product9,
    detailImg2: "https://example.com/sportwatch-detail-2.jpg",
    detailImg3: "https://example.com/sportwatch-detail-3.jpg",
    detailImg4: "https://example.com/sportwatch-detail-4.jpg",
    productShortName: "Home/Watch",
    productSize: ["One Size"],
    productDetail:
      "Black Sports Watch, durable and designed for outdoor activities.",
    productName: "Black Sports Watch",
    productStarRating: 5,
    productPrice: "80.00",
    productAvailable: 4, // Quantity available
  },
  {
    id: 10,
    productImg: product10,
    detailImg1: product10,
    detailImg2: "https://example.com/hrxshoes-detail-2.jpg",
    detailImg3: "https://example.com/hrxshoes-detail-3.jpg",
    detailImg4: "https://example.com/hrxshoes-detail-4.jpg",
    productShortName: "Home/Shoes",
    productSize: [7, 8, 9, 10],
    productDetail:
      "Black HRX Shoes providing support and comfort during daily activities.",
    productName: "Black HRX Shoes",
    productStarRating: 4,
    productPrice: "50.00",
    productAvailable: 9, // Quantity available
  },
  {
    id: 11,
    productImg: product11,
    detailImg1: product11,
    detailImg2: "https://example.com/nikeshoes-detail-2.jpg",
    detailImg3: "https://example.com/nikeshoes-detail-3.jpg",
    detailImg4: "https://example.com/nikeshoes-detail-4.jpg",
    productShortName: "Home/Shoes",
    productSize: [7, 8, 9, 10],
    productDetail:
      "Gray Nike Shoes with a modern design, offering both style and comfort.",
    productName: "Gray Nike Shoes",
    productStarRating: 5,
    productPrice: "40.00",
    productAvailable: 4, // Quantity available
  },
  {
    id: 12,
    productImg: product12,
    detailImg1: product12,
    detailImg2: "https://example.com/trackpant-detail-2.jpg",
    detailImg3: "https://example.com/trackpant-detail-3.jpg",
    detailImg4: "https://example.com/trackpant-detail-4.jpg",
    productShortName: "Home/Pant",
    productSize: [32, 34, 36, 38],
    productDetail:
      "HRX Black Track Pant, designed for comfort and flexibility.",
    productName: "HRX Black Track Pant",
    productStarRating: 4,
    productPrice: "55.00",
    productAvailable: 3, // Quantity available
  },
];

export default productList;
