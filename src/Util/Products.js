import action1 from '../Assets/Images/ProductPhotos/1/action.JPEG';
import front1 from '../Assets/Images/ProductPhotos/1/front.JPEG';
import back1 from '../Assets/Images/ProductPhotos/1/back.JPEG';

import action2 from '../Assets/Images/ProductPhotos/2/action.jpeg';
import front2 from '../Assets/Images/ProductPhotos/2/front.JPEG';
import back2 from '../Assets/Images/ProductPhotos/2/back.JPEG';

import action3 from '../Assets/Images/ProductPhotos/3/action.JPEG';
import front3 from '../Assets/Images/ProductPhotos/3/front.JPEG';
import back3 from '../Assets/Images/ProductPhotos/3/back.JPEG';

import action4 from '../Assets/Images/ProductPhotos/4/action.JPEG';
import front4 from '../Assets/Images/ProductPhotos/4/front.JPEG';
import back4 from '../Assets/Images/ProductPhotos/4/back.JPEG';

import action5 from '../Assets/Images/ProductPhotos/5/action.JPEG';
import front5 from '../Assets/Images/ProductPhotos/5/front.JPEG';
import back5 from '../Assets/Images/ProductPhotos/5/back.JPEG';

import action6 from '../Assets/Images/ProductPhotos/6/action.JPEG';
import front6 from '../Assets/Images/ProductPhotos/6/front.JPEG';
import back6 from '../Assets/Images/ProductPhotos/6/back.JPEG';

import action7 from '../Assets/Images/ProductPhotos/7/action.JPEG';
import front7 from '../Assets/Images/ProductPhotos/7/front.JPEG';
import back7 from '../Assets/Images/ProductPhotos/7/back.JPEG';

const Products = [
    {
        id: 1,
        name: "PlaceHolders-1",
        sunglasses: true,
        gender: ["women", "enby"],
        variants: [],
        photos: {
            front: front1,
            back: back1,
            action: action1
        }
    },
    {
        id: 2,
        name: "PlaceHolders-2",
        sunglasses: true,
        gender: ["women"],
        variants: [],
        photos: {
            front: front2,
            back: back2,
            action: action2
        }
    },
    {
        id: 3,
        name: "PlaceHolders-3",
        sunglasses: false,
        gender: ["enby", "men", "women"],
        variants: [],
        photos: {
            front: front3,
            back: back3,
            action: action3
        }
    },
    {
        id: 4,
        name: "PlaceHolders-4",
        sunglasses: false,
        gender: ["enby", "women"],
        variants: [5],
        photos: {
            front: front4,
            back: back4,
            action: action4
        }
    },
    {
        id: 5,
        name: "PlaceHolders-5",
        sunglasses: false,
        gender: ["enby", "women"],
        variants: [4],
        photos: {
            front: front5,
            back: back5,
            action: action5
        }
    },
    {
        id: 6,
        name: "PlaceHolders-6",
        sunglasses: true,
        gender: ["women"],
        variants: [],
        photos: {
            front: front6,
            back: back6,
            action: action6
        }
    },
    {
        id: 7,
        name: "PlaceHolders-7",
        sunglasses: true,
        gender: ["women"],
        variants: [],
        photos: {
            front: front7,
            back: back7,
            action: action7
        }
    }
];
export default Products;