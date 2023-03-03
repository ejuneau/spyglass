import './App.css';
import React, {useState} from 'react';

import model from './Assets/Images/Model.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {motion} from 'framer-motion';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import Header from './Header';
import './ShopPage.css';
import logo from './Assets/Images/Logo (White, slogan).png';





export default function ShopPage(props) {

  const header = {
    hidden: {
        height: 0,
        overflow: "hidden",
        transition: {
          delay: 0.3,
          duration: 0.2
        }
    },
    show: {
        height: "100vh",
        overflow: "visible",
        transition: {
          staggerChildren: 5,
          duration: 0.2,
          when: "beforeChildren"
        }
    }
}

const content = {
  hidden: {
    height: 0,
    overflow: "hidden",
    transition: {
      delay: 0.3,
      duration: 0.2
    }
},
show: {
    height: "100vh",
    overflow: "visible",
    transition: {
      staggerChildren: 0.5,
      duration: 0.2,
      when: "beforeChildren"
    }
}
}

  const [sort, setSort] = useState('');

  const handleSortChange = (sortBy) => {
    console.log(sortBy);
    if ( sort === sortBy ) {
      setSort('');
    } else {
      setSort(sortBy)
    }
  }

  const filterButton1 = {
    initial: {
      scale: 1,
      rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
      skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),
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

  const pageTransition = {
    hidden: {
      height: 0,
      transition: {
        duration: 1
      }
    },
    show: {
      height: "100vh",
      transition: {
        duration: 1
      }
    }
  }
  const filterButtonsContainer = {
    hidden: {
      opacity: 0,
      x: "-100vw",
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
      height: "100vh",
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
  return (
    <motion.div layout className="shopPage" key="shopPage" variants={pageTransition} initial={false} animate={props.showMenu?"hidden":"show"}>
      <div className="filter-buttons-container">
        <motion.div key="filterbuttonmen"   variants={filterButton1} whileHover="hover" initial="initial" className={`button filterButtons filterButtonsMen ${sort === "men"?"activeSort":""}`}     onClick={() => handleSortChange("men")}><p>Men</p></motion.div>
        <motion.div key="filterbuttonwomen" variants={filterButton2} whileHover="hover" initial="initial" className={`button filterButtons filterButtonsWomen ${sort === "women"?"activeSort":""}`} onClick={() => handleSortChange("women")}><p>Women</p></motion.div>
        <motion.div key="filterbuttonenby"  variants={filterButton3} whileHover="hover" initial="initial" className={`button filterButtons filterButtonsEnby ${sort === "enby"?"activeSort":""}`}   onClick={() => handleSortChange("enby")}><p>Neutral</p></motion.div>
      </div>
      <div className="product-list-container">
        
      </div>
  </motion.div>
)
}

