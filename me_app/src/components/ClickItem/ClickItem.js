import React from "react";
import "./ClickItem.css";

const ClickItem = props => {
    return (
        <div role="img" aria-label="click member" className="click-member" 
        style={{backgroundImage: "url(" + props.image+ ")"}}
        onClick={()=>props.guess(props.id)}>
        </div>
    );
}

export default ClickItem;

// <div role="img" aria-label="click item" class="click-item" 
//style="background-image: url(&quot;/assets/images/jessica.png&quot;);"></div>


//href="%PUBLIC_URL%/manifest.json"