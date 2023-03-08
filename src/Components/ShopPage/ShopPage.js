import React, {useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './ShopPage.css';
import Products from '../../Util/Products';
import Product from './Product/Product';







export default function ShopPage(props) {


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
function isInArray(value, array) {
  if (value === "") {return true}
  console.log("checking if "+ value + " is in "+array);
  return array.indexOf(value) > -1;
}

  return (
    <div className="ShopPageComponent">
      <script src="vanilla-tilt.js"></script>
      <div className="filter-buttons-container">
        <motion.div key="filterbuttonmen"    variants={filterButton1} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsMen   ${props.sort === "men"?"activeSort":""}`}   onClick={() => props.handleSortChange("men")}  ><p>Men</p></motion.div>
        <motion.div key="filterbuttonwomen"  variants={filterButton2} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsWomen ${props.sort === "women"?"activeSort":""}`} onClick={() => props.handleSortChange("women")}><p>Women</p></motion.div>
        <motion.div key="filterbuttonenby"   variants={filterButton3} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsEnby  ${props.sort === "enby"?"activeSort":""}`}  onClick={() => props.handleSortChange("enby")} ><p>Neutral</p></motion.div>
      </div>
      <div className="product-list-container">
        <AnimatePresence>
        {
          Products.map((product) => {
            return isInArray(props.sort, product.gender)&&<motion.div key={`Product ${product.id}`} layout initial={{ opacity: 0, y: "200vh"}} animate={{opacity: 1, y:0, transition: {duration: 1} }} exit={{ opacity: 0 }} ><Product product={product} key={product.id} sort={props.sort} /></motion.div>
          })
        }
        </AnimatePresence>
      </div>
  </div>
)
}

