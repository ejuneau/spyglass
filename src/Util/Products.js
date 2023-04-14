import action1 from '../Assets/Images/ShopPage/ProductPhotos/1/action.png';
import front1 from '../Assets/Images/ShopPage/ProductPhotos/1/front.png';
import productFront1 from '../Assets/Images/ShopPage/ProductPhotos/1/ProductPageFront.png';
import productBack1 from '../Assets/Images/ShopPage/ProductPhotos/1/ProductPageBack.png';
import productAction1 from '../Assets/Images/ShopPage/ProductPhotos/1/ProductPageAction.png';
import thumbnailFront1 from '../Assets/Images/ShopPage/ProductPhotos/1/thumbnails/front.png';
import thumbnailAction1 from '../Assets/Images/ShopPage/ProductPhotos/1/thumbnails/action.png';


import action2 from '../Assets/Images/ShopPage/ProductPhotos/2/action.png';
import front2 from '../Assets/Images/ShopPage/ProductPhotos/2/front.png';
import productFront2 from '../Assets/Images/ShopPage/ProductPhotos/2/ProductPageFront.png';
import productBack2 from '../Assets/Images/ShopPage/ProductPhotos/2/ProductPageBack.png';
import productAction2 from '../Assets/Images/ShopPage/ProductPhotos/2/ProductPageAction.png';
import thumbnailFront2 from '../Assets/Images/ShopPage/ProductPhotos/2/thumbnails/front.png';
import thumbnailAction2 from '../Assets/Images/ShopPage/ProductPhotos/2/thumbnails/action.png';

import action3 from '../Assets/Images/ShopPage/ProductPhotos/3/action.png';
import front3 from '../Assets/Images/ShopPage/ProductPhotos/3/front.png';
import productFront3 from '../Assets/Images/ShopPage/ProductPhotos/3/ProductPageFront.png';
import productBack3 from '../Assets/Images/ShopPage/ProductPhotos/3/ProductPageBack.png';
import productAction3 from '../Assets/Images/ShopPage/ProductPhotos/3/ProductPageAction.png';
import thumbnailFront3 from '../Assets/Images/ShopPage/ProductPhotos/3/thumbnails/front.png';
import thumbnailAction3 from '../Assets/Images/ShopPage/ProductPhotos/3/thumbnails/action.png';

import action4 from '../Assets/Images/ShopPage/ProductPhotos/4/action.png';
import front4 from '../Assets/Images/ShopPage/ProductPhotos/4/front.png';
import transparent from '../Assets/Images/ShopPage/transparent.png';
import productFront4 from '../Assets/Images/ShopPage/ProductPhotos/4/ProductPageFront.png';
import productBack4 from '../Assets/Images/ShopPage/ProductPhotos/4/ProductPageBack.png';
import productAction4 from '../Assets/Images/ShopPage/ProductPhotos/4/ProductPageAction.png';
import thumbnailFront4 from '../Assets/Images/ShopPage/ProductPhotos/4/thumbnails/front.png';
import thumbnailAction4 from '../Assets/Images/ShopPage/ProductPhotos/4/thumbnails/action.png';

import action5 from '../Assets/Images/ShopPage/ProductPhotos/5/action.png';
import front5 from '../Assets/Images/ShopPage/ProductPhotos/5/front.png';
import leopardPrint from '../Assets/Images/ShopPage/leopardPrint.png';
import productFront5 from '../Assets/Images/ShopPage/ProductPhotos/5/ProductPageFront.png';
import productBack5 from '../Assets/Images/ShopPage/ProductPhotos/5/ProductPageBack.png';
import productAction5 from '../Assets/Images/ShopPage/ProductPhotos/5/ProductPageAction.png';
import thumbnailFront5 from '../Assets/Images/ShopPage/ProductPhotos/5/thumbnails/front.png';
import thumbnailAction5 from '../Assets/Images/ShopPage/ProductPhotos/5/thumbnails/action.png';

import action6 from '../Assets/Images/ShopPage/ProductPhotos/6/action.png';
import front6 from '../Assets/Images/ShopPage/ProductPhotos/6/front.png';
import productFront6 from '../Assets/Images/ShopPage/ProductPhotos/6/ProductPageFront.png';
import productBack6 from '../Assets/Images/ShopPage/ProductPhotos/6/ProductPageBack.png';
import productAction6 from '../Assets/Images/ShopPage/ProductPhotos/6/ProductPageAction.png';
import thumbnailFront6 from '../Assets/Images/ShopPage/ProductPhotos/6/thumbnails/front.png';
import thumbnailAction6 from '../Assets/Images/ShopPage/ProductPhotos/6/thumbnails/action.png';

import action7 from '../Assets/Images/ShopPage/ProductPhotos/7/action.png';
import front7 from '../Assets/Images/ShopPage/ProductPhotos/7/front.png';
import productFront7 from '../Assets/Images/ShopPage/ProductPhotos/7/ProductPageFront.png';
import productBack7 from '../Assets/Images/ShopPage/ProductPhotos/7/ProductPageBack.png';
import productAction7 from '../Assets/Images/ShopPage/ProductPhotos/7/ProductPageAction.png';
import thumbnailFront7 from '../Assets/Images/ShopPage/ProductPhotos/7/thumbnails/front.png';
import thumbnailAction7 from '../Assets/Images/ShopPage/ProductPhotos/7/thumbnails/action.png';

const Products = [
    {
        id: 1,
        name: "Mercury",
        sunglasses: true,
        gender: ["women", "enby"],
        price: 190.00,
        variants: [
            {
                frameColor: ["gold"],
                photos: {
                    front: front1,
                    action: action1
                },
                detailPhotos: {
                    front: productFront1,
                    back: productBack1,
                    action: productAction1,
                },
                thumbnailPhotos: {
                    front: thumbnailFront1,
                    action: thumbnailAction1,
                },
                description: "The Mercury is a sleek and stylish pair of aviator sunglasses that are perfect for any occasion. These sunglasses feature a classic design with a modern twist, including pearls at the ends of the temple tips, adding a touch of elegance and sophistication. The Mercury is the perfect accessory for those who want to look fashionable while protecting their eyes from the sun."
            }
        ],

    },
    {
        id: 2,
        name: "Lovestruck",
        sunglasses: true,
        gender: ["women"],
        price: 140.00,
        variants: [
            {
                frameColor: ["gold"],
                photos: {
                    front: front2,
                    action: action2
                },
                detailPhotos: {
                    front: productFront2,
                    back: productBack2,
                    action: productAction2,
                },
                thumbnailPhotos: {
                    front: thumbnailFront2,
                    action: thumbnailAction2,
                },
                description: "The Lovestruck sunglasses are the answer for those looking to add a touch of romance to their look. These sunglasses feature heart-shaped, slightly pinkened lenses that create a unique and stylish look. With its minimalist frame, The Lovestruck is ideal for any outdoor festival or a romantic date if you're feeling brave."
            }
        ],
    },
    {
        id: 3,
        name: "Blend",
        sunglasses: false,
        gender: ["enby", "men", "women"],
        price: 140.00,
        variants: [
            {
                frameColor: ["translucent", "brown"],
                photos: {
                    front: front3,
                    action: action3
                    },
                    detailPhotos: {
                        front: productFront3,
                        back: productBack3,
                        action: productAction3,
                    },
                    thumbnailPhotos: {
                        front: thumbnailFront3,
                        action: thumbnailAction3,
                    },
                description: "The Blend glasses are a stylish and versatile option for anyone looking for a gender-neutral frame. With a sleek and modern design, these frames feature a keyhole nose bridge that adds a touch of sophistication to your look. The Blend is perfect for those who want to blend style and functionality in one frame."
            }
        ],  
    },
    {
        id: 4,
        name: "Rascal",
        sunglasses: false,
        gender: ["enby", "women"],
        price: 140.00,
        variants: [
            {
                frameColor: ["translucent", "transparent"],
                photos: {
                    front: front4,
                    action: action4
                },
                detailPhotos: {
                    front: productFront4,
                    back: productBack4,
                    action: productAction4,
                },
                thumbnailPhotos: {
                    front: thumbnailFront4,
                    action: thumbnailAction4,
                },
                description: "Make a splash with the Rascal frames. Ideal for anyone looking to add a touch of playfulness to their look, these frames are available in transparent or leopard print variants. With a lightweight frame that's both durable and comfortable, they're perfect to wear all day while causing a ruckus.",
                circleColor: transparent
            },
            {
                frameColor: ["translucent", "leopard"],
                photos: {
                    front: front5,
                    action: action5
                },
                detailPhotos: {
                    front: productFront5,
                    back: productBack5,
                    action: productAction5,
                },
                thumbnailPhotos: {
                    front: thumbnailFront5,
                    action: thumbnailAction5,
                },
                description: "Make a splash with the Rascal frames. Ideal for anyone looking to add a touch of playfulness to their look, these frames are available in transparent or leopard print variants. With a lightweight frame that's both durable and comfortable, they're perfect to wear all day while causing a ruckus.",
                circleColor: leopardPrint
            }
        ],
        
    },
    {
        id: 5,
        name: "Fiend",
        sunglasses: true,
        gender: ["women"],
        price: 190.00,
        variants: [
            {
                frameColor: ["translucent", "pink"],
                photos: {
                    front: front6,
                    action: action6
                },
                detailPhotos: {
                    front: productFront6,
                    back: productBack6,
                    action: productAction6,
                },
                thumbnailPhotos: {
                    front: thumbnailFront6,
                    action: thumbnailAction6,
                },
                description: "The Fiend sunglasses are a bold and daring choice for anyone who wants to stand out from the crowd. With a chunky pink frame that wraps around the face of the wearer, these sunglasses create a unique and fashionable look. The lenses provide excellent UV protection, making them equally suited for lounging by the beach, or fetching a midnight snack."
            }
        ],
    },
    {
        id: 6,
        name: "Sucker",
        sunglasses: true,
        gender: ["women"],
        price: 190.00,
        variants: [
            {
                    frameColor: ["translucent", "pink"],
                    photos: {
                        front: front7,
                        action: action7
                    },
                    detailPhotos: {
                        front: productFront7,
                        back: productBack7,
                        action: productAction7,
                    },
                    thumbnailPhotos: {
                        front: thumbnailFront7,
                        action: thumbnailAction7,
                    },
                    description: "The Sucker sunglasses are a chic and sophisticated option for those who want to add a touch of glamour to their look. With a refined, slightly translucent pink frame, these sunglasses create a look that's sure to turn heads. The lenses provide excellent sun protection while maintaining a clear view, making them perfect for any outdoor activity.",
            }
        ],
    }
];
export default Products;