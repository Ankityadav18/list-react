import styles from "./FoodInput.module.css"

function FoodInput({handleKeyDown}){

    // const onChangeHandle=(event)=>{
    //     console.log(event.target.value)

    // }
    return (
<input className={styles.input} type="text" placeholder="enter your food item "
onKeyDown={handleKeyDown}


/>
    )
}
export default FoodInput;