import styles from "./ButtonsContainer.module.css";
import React from "react";

const Buttonscontainer = ({onButtonClick}) =>{
    const buttonName = ['C' , '1' , '2' ,'+','3' ,'4','-','5','6','*','7','8','/','=','9','0','.'];
   
   return <>
        <div className={styles.buttonsContainer}>
            {buttonName.map((buttonName ,index) => <button 
            key={index}
            className={styles.button} 
            onClick={() => onButtonClick(buttonName)} >{buttonName}</button>
         )}
            
        </div>
        </>

}

export default Buttonscontainer;