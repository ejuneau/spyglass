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
                }
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
                }
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
                    }
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
                circleColor: transparent
            },
            {
                frameColor: ["translucent", "leopard"],
                photos: {
                    front: front5,
                    back: back5,
                    action: action5
                },
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
                }
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
                    }
            }
        ],
    }
];
export default Products;