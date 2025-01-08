import styles from "../Component/Item.module.css"

function Item({ foodItem ,handleBuyButton}) {
   // const handleBuyButtonClicked=(event)=>{
   //    console.log(event)
   //    console.log(`${foodItem}`)

   // }
   return (
      <>
         <li className={`${styles['ay-item']} list-group-item `}><span className={styles["ay-span"]}>{foodItem}</span>
         <button className={`${styles.button } btn btn-info`}
         onClick={handleBuyButton} // we are passing only the reference here.
         >Buy</button></li>
      </>
   )

}
export default Item;



// to keep the individual item.