import React, {useState } from 'react';
import {motion} from 'framer-motion';
import './ShopPage.css';
import { useSearchParams } from 'react-router-dom';






export default function ShopPage(props) {

  const [sort, setSort] = useState('');
  const handleSortChange = (sortBy) => {
    
    if ( sort === sortBy ) {
      setSort('');
      console.log("Active Sort: None");
    } else {
      setSort(sortBy);
      console.log("Active Sort: " + sortBy);
    }
  }

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

// const [searchParams] = useSearchParams;
// const sortParam = searchParams.get('sort'); 
// sortParam?setSort(sortParam):console.log("");

  return (
    // <motion.div layout className="shopPage" key="shopPage" variants={pageTransition} initial={false} animate={props.showMenu?"hidden":"show"}>
    <div className="ShopPageComponent">
      <div className="filter-buttons-container">
        <motion.div key="filterbuttonmen"    variants={filterButton1} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsMen   ${sort === "men"?"activeSort":""}`}   onClick={() => handleSortChange("men")}  ><p>Men</p></motion.div>
        <motion.div key="filterbuttonwomen"  variants={filterButton2} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsWomen ${sort === "women"?"activeSort":""}`} onClick={() => handleSortChange("women")}><p>Women</p></motion.div>
        <motion.div key="filterbuttonenby"   variants={filterButton3} initial="initial" whileHover="hover" className={`button filterButtons filterButtonsEnby  ${sort === "enby"?"activeSort":""}`}  onClick={() => handleSortChange("enby")} ><p>Neutral</p></motion.div>
      </div>
      <div className="product-list-container">
        {
          // products.map((product) => {
          //   return <Product id={product.id} />
          // })
        }
      </div>
  </div>
)
}

