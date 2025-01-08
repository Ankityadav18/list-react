
import Item from "../Component/Item";
function FoodItems({items}) {
   
   return (
    <>
     <ul className="list-group">
     {items.map((item) => 
        <Item  key={item} foodItem={item} handleBuyButton={()=>{
         console.log(`${item} bought`)
        }} ></Item>
)}


    </ul>
    </>
   
   )
}
export default FoodItems;