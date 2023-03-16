import React, {useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';
import './ShopPage.css';
import './ShopPageDesktop.css';
import Products from '../../Util/Products';
import Product from './Product/Product';
import {useSelector, useDispatch} from 'react-redux';
import { handleFilterChange } from '../../Util/filterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';








export default function ShopPage(props) {
  const [sortedProducts, setSortedProducts] = useState(Products);
  const [nameSort, setNameSort] = useState(undefined);
  const [priceSort, setPriceSort] = useState(undefined);
  const genderFilter = useSelector((state) => state.filter.gender)
  const dispatch = useDispatch();
  const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
const filterButton1 = {
  initial: {
    scale: 1,
    rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
    skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),
    transition: {
      duration: 0.2
    }
  },
  hover: {
    scale: (Math.random() * (1.5-1.1) + 1.1),
    rotate: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
    skew: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
    transition: {
      duration: 0.2
    }
  }
}
const filterButton2 = {
  initial: {
    scale: 1,
    rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
    skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),
    y: "-2.5vh"
  },
  hover: {
    scale: (Math.random() * (1.5-1.1) + 1.1),
    rotate: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
    skew: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
    transition: {
      duration: 0.2
    }
  }
}
const filterButton3 = {
  initial: {
    scale: 1,
    rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
    skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),
    y: "-5vh"
  },
  hover: {
    scale: (Math.random() * (1.5-1.1) + 1.1),
    rotate: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
    skew: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
    transition: {
      duration: 0.2
    }
  }
}
  const filterButton4 = {
    hidden: {
      scale: 1,
      rotate: 0,
      skew: 0,
      width: 0,
      display: "none",
      transition: {
        display: {
          delay: 0.2
        },
        width: {
          duration: 0.2
        }
      }
    },
    show: {
      width: "auto",
      rotate: 2,
      display: "inherit",
      transition: {
        width: {
          duration: 0.2
        },
        display: {
          delay: 0.2
        }
      }
    },
    hover: {
      scale: (Math.random() * (1.5-1.1) + 1.1),
      rotate: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
      skew: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
      transition: {
        duration: 0.2,
        
      }
    }
}

  const filterButtonsContainer = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
          duration: 0.,
          when: "afterChildren",
          staggerChildren: 0.05,
          height: {
              type: "spring",
              duration: 0.2
          }
      }
  },
  show: {
      opacity: 1,
      x:0,
      transition: {
          x: {
              delay: 0.25,
              duration: 0.2
          },
          height: {
              duration: 0.2
          },
          staggerChildren: 0.05,
          when: "beforeChildren",
          type: "linear"
          
      }
  }
}

// useEffect(()=>{console.log(sortedProducts)}, [sortedProducts])
function priceAsc(obj1, obj2) {
  if ( obj1.price  <  obj2.price ) { return -1 }
  if ( obj1.price  >  obj2.price ) { return  1 }
  if ( obj1.price === obj2.price ) { return  0 }
}
function priceDesc(obj1, obj2) {
  return priceAsc(obj2, obj1);
}
function AtoZ(obj1, obj2) {
  const name1 = obj1.name.toUpperCase()
  const name2 = obj2.name.toUpperCase()
  if ( name1  <  name2 ) { return -1 }
  if ( name1  >  name2 ) { return  1 }
  if ( name1 === name2 ) { return  0 }
}
function ZtoA(obj1, obj2) {
  return AtoZ(obj2, obj1);
}
const sortedProductsPriceAsc = [...Products.sort(priceAsc)];
const sortedProductsPriceDesc = [...Products.sort(priceDesc)];
const sortedProductsAtoZ = [...Products.sort(AtoZ)];
const sortedProductsZtoA = [...Products.sort(ZtoA)];
function isInArray(value, array) {
  if (value === "") {return true}
  return array.indexOf(value) > -1;
}
const animationVariants = {
  initial: {
    scaleX: 0,
    opaicty: 0,
    transition: {
      duration: 0.2
    }
  },
  animate: {
    scaleX: [1, -1, 1], 
    opacity: 1,
    transition: {
      duration: 0.25
    }
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
} 
const sortModes = [undefined, "asc", "desc"];
function clearRadio(group) {
  var ele = document.getElementsByName(group);
  for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
  setSortedProducts(Products);
  setPriceSort(undefined);
  setNameSort(undefined);
}
  return (
    <div className="ShopPageComponent">
      <div className="filter-buttons-container">
        <motion.div key="filterbuttonmen"    variants={filterButton1} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsMen   ${genderFilter === "men"?"activeSort":""}`}   onClick={() => dispatch(handleFilterChange("men"))}  ><p>Men</p></motion.div>
        <motion.div key="filterbuttonwomen"  variants={filterButton2} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsWomen ${genderFilter === "women"?"activeSort":""}`} onClick={() => dispatch(handleFilterChange("women"))}><p>Women</p></motion.div>
        <motion.div key="filterbuttonenby"   variants={filterButton3} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsEnby  ${genderFilter === "enby"?"activeSort":""}`}  onClick={() => dispatch(handleFilterChange("enby"))} ><p>Neutral</p></motion.div>
      </div>

      <div className="sortButtonsContainer">
        <form>
        <input type="radio" name="sort" value="priceAsc" id="priceAsc" onClick={()=>{setSortedProducts(priceSort==="asc"?sortedProductsPriceAsc:sortedProductsPriceDesc);setPriceSort(priceSort===undefined?"asc":priceSort==="asc"?"desc":"asc");setNameSort(undefined)}}/>
          <label htmlFor="priceAsc">Price {priceSort===undefined?<></>:priceSort==="asc"?<FontAwesomeIcon className="sortIcon" icon={solid('sort-up')} />:<FontAwesomeIcon className="sortIcon" icon={solid('sort-down')} />}</label>

        <input type="radio" name="sort" value="AtoZ" id="AtoZ"  onClick={()=>{setSortedProducts(nameSort==="asc"?sortedProductsPriceAsc:sortedProductsAtoZ);setNameSort(nameSort===undefined?"asc":nameSort==="asc"?"desc":"asc");setPriceSort(undefined)}} />
          <label htmlFor="AtoZ">Name {nameSort===undefined?<></>:nameSort==="asc"?<FontAwesomeIcon className="sortIcon" icon={solid('sort-up')} />:<FontAwesomeIcon className="sortIcon" icon={solid('sort-down')} />}</label>
      

        <button  onClick={()=>{clearRadio("sort")}} >clear sort</button>
          </form>
      </div>

      <div className="product-list-container" key="product-list-container">
        <AnimatePresence mode="popLayout">
        {
          sortedProducts.map((product) => {
            if (isInArray(genderFilter, product.gender))
            return (
             
            <motion.div 
            key={`Product ${product.id}`} 
            variants={animationVariants}
            layout 
            initial="initial" 
            animate="animate" 
            exit="exit" >

                <Product product={product} key={product.id} genderFilter={genderFilter} />

            </motion.div>
              
            )})
        }
         </AnimatePresence>
      </div>
      <div className="spacer"></div>
  </div>
)
}

