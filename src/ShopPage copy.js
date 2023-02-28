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
    if ( sort === sortBy ) {
      setSort('');
    } else {
      setSort(sortBy)
    }
  }
  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  const pageTransition = {
    hidden: {
      opacity: 0,
      transition: {

      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {

        staggerChildren: 0.5,
        when: "beforeChildren"
      }
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
        repeat: "infinity",
        repeatType: "loop",
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
        repeat: "infinity",
        repeatType: "loop",
        duration: 0.2
      }
    }
  }
  const filterButton3 = {
    initialDiv: {
      scale: 1,
      rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
      skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),
    },
    initialP: {
      scale: 1,
      rotate: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
      skew: Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1),
    },
    hover: {
      scale: (Math.random() * (1.5-1.1) + 1.1),
      rotate: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
      skew: Math.ceil(Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1),
      transition: {
        repeat: "infinity",
        repeatType: "loop",
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
        repeat: "infinity",
        repeatType: "loop",
        duration: 0.2,
        
      }
    }
  }

  
  
    return (
      <>
        <motion.div variants={header} initial="hidden" animate={props.showMenu?"show":"hidden"} key="menu">
          <Menu cart={props.cart} handleMenuToggle={props.handleMenuToggle} showMenu={props.showMenu} />
        </motion.div>
        <motion.div variants={content} initial="show" animate={!props.showMenu?"show":"hidden"} key="content">
          <Header cart ={props.cart} handleMenuToggle={props.handleMenuToggle} showMenu={props.showMenu}/>
        
        <motion.div className="shoppage" key="shopPage" variants={pageTransition} initial="hidden" animate={props.showMenu?"hidden":"show"}>
          <main>
            <motion.div layout className="filterButtonsContainer">
              <motion.div key="filterbuttonmen" variants={filterButton1} initial="initial" whileHover="hover" animate layout className={`filterButtonBackground filterButtonBackgroundMen ${sort==="men"?"activeSort":""}`} ><motion.p variants={filterButton1} initial="initial" className="button filterButtons filterButtonsMen" onClick={() => handleSortChange("men")}>Men's</motion.p></motion.div>
              <motion.div key="filterbuttonwomen" variants={filterButton2} initial="initial" whileHover="hover" animate layout className={`filterButtonBackground filterButtonBackgroundWomen ${sort==="women"?"activeSort":""}`}><motion.p variants={filterButton2} initial="initial" className="button filterButtons filterButtonsWomen" onClick={() => handleSortChange("women")}>Women's</motion.p></motion.div>
              <motion.div key ="filterbuttonenby" variants={filterButton3} initial="initialDiv" whileHover="hover" animate layout className={`filterButtonBackground filterButtonBackgroundEnby ${sort==="enby"?"activeSort":""}`}><motion.p variants={filterButton3} initial="initialP" className ="button filterButtons filterButtonsEnbys" onClick={() => handleSortChange("enby")}>Neutral's</motion.p></motion.div>
              <motion.div key ="filterbuttonclear" variants={filterButton4} whileHover="hover" layout initial="hidden" animate={sort?props.showMenu?"hidden":"show":"hidden"} className="filterButtonBackground filterButtonBackgroundclear"><p className ="button filterButtons filterButtonsClear" onClick={() => handleSortChange("")}>clear</p></motion.div>
            </motion.div>
        </main>
      </motion.div>
      </motion.div>
      </>
    )
}

