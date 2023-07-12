import Button from "./button";

function Menubox({content}){
    return(
        <>
            <img src={content.img} />
            <div className="mb">
                <div className="mbtitle">{content.name}</div>
                <div className="mbdetail">{content.content}</div>
                <div className="mbprice">Rs. {content.price}</div>
                {/* <Button txt="Order Now" /> */}
            </div>
        </>
    );
}
export default Menubox;