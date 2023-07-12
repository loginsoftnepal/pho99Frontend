import Button from "./button";

function Vacancybox({content,fnc}){
    return(
        <div className="vacancybox">
            <div className="vbtitle">{content.title}</div>
            <div className="vblocation"><ion-icon name="location-outline"></ion-icon> {content.location}</div>
            <div className="vbsubtitle">{content.subtitle}</div>
            <div className="vbsalary">Salary : {content.salary}</div>
            <div className="vbsalary vbcontact">Contact No. : {content.contact}</div>
            {
                (content.type == "Part-time") && (
                    <div className="vbtype" style={{backgroundColor: "orange"}}>{content.type}</div>
                ) || 
                (content.type == "Full-time") && 
                (
                    <div className="vbtype" style={{backgroundColor: "green"}}>{content.type}</div>
                ) ||
                (
                    <div className="vbtype" style={{backgroundColor: "var(--main-color)"}}>{content.type}</div>
                )
            }
            <Button txt="Apply Now" fnc={fnc} />
        </div>
    );
}
export default Vacancybox;