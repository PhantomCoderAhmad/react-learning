import '../index.css';
import style from '../custom.module.css';
function Styling(){
    return (
        <div>
            <h1>Component for Styling</h1>
            <p className="paragraph_style">Style type 1</p>
            <p style={{color:"red", background: "black"}}>Style type 2</p>
            <p className={style.success}>Style type 3</p>
        </div>
    )
}
export default Styling;