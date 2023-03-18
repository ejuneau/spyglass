import action1 from '../Assets/Images/ProductPhotos/1/action.png';
import front1 from '../Assets/Images/ProductPhotos/1/front.png';
import back1 from '../Assets/Images/ProductPhotos/1/back.png';

import action2 from '../Assets/Images/ProductPhotos/2/action.png';
import front2 from '../Assets/Images/ProductPhotos/2/front.png';
import back2 from '../Assets/Images/ProductPhotos/2/back.png';

import action3 from '../Assets/Images/ProductPhotos/3/action.png';
import front3 from '../Assets/Images/ProductPhotos/3/front.png';
import back3 from '../Assets/Images/ProductPhotos/3/back.png';

import action4 from '../Assets/Images/ProductPhotos/4/action.png';
import front4 from '../Assets/Images/ProductPhotos/4/front.png';
import back4 from '../Assets/Images/ProductPhotos/4/back.png';
import transparent from '../Assets/Images/transparent.png';

import action5 from '../Assets/Images/ProductPhotos/5/action.png';
import front5 from '../Assets/Images/ProductPhotos/5/front.png';
import back5 from '../Assets/Images/ProductPhotos/5/back.png';
import leopardPrint from '../Assets/Images/leopardPrint.png';

import action6 from '../Assets/Images/ProductPhotos/6/action.png';
import front6 from '../Assets/Images/ProductPhotos/6/front.png';
import back6 from '../Assets/Images/ProductPhotos/6/back.png';

import action7 from '../Assets/Images/ProductPhotos/7/action.png';
import front7 from '../Assets/Images/ProductPhotos/7/front.png';
import back7 from '../Assets/Images/ProductPhotos/7/back.png';

const Products = [
    {
        id: 1,
        name: "Mercury",
        sunglasses: true,
        gender: ["women", "enby"],
        price: 290.00,
        variants: [
            {
                frameColor: ["gold"],
                photos: {
                    front: front1,
                    back: back1,
                    action: action1
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
                    back: back2,
                    action: action2
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
        price: 240.00,
        variants: [
            {
                frameColor: ["translucent", "brown"],
                photos: {
                    front: front3,
                    back: back3,
                    action: action3
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
                    back: back4,
                    action: action4
                },
                description: "Make a splash with the Rascal frames. Ideal for anyone looking to add a touch of playfulness to their look, these frames are available in transparent or leopard print variants. With a lightweight frame that's both durable and comfortable, they're perfect to wear all day while causing a ruckus.",
                circleColor: transparent
            },
            {
                frameColor: ["translucent", "leopard"],
                photos: {
                    front: front5,
                    back: back5,
                    action: action5
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
                    back: back6,
                    action: action6
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
                        back: back7,
                        action: action7
                    },
                    description: "The Sucker sunglasses are a chic and sophisticated option for those who want to add a touch of glamour to their look. With a refined, slightly translucent pink frame, these sunglasses create a look that's sure to turn heads. The lenses provide excellent sun protection while maintaining a clear view, making them perfect for any outdoor activity.",
            }
        ],
    }
];
export default Products;