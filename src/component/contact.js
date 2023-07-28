import { useRef,useState } from "react";

import Title from "./title";
import { server } from "../fetch";

function Contact({data, page,nav, datas}){

    const mainpagel = useRef();
    const mainpager = useRef();
    const message = useRef();

    const [formValue, setFormValue] = useState({uname:'', email:'', message:''});

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]:value});
    };

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        const allInputvalue = { uname: formValue.uname, email: formValue.email, message: formValue.message};
        
        let res = await fetch(`${server}/contact-message/email`,{
            method: "POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(allInputvalue),
        });

        setFormValue({uname:'', email:'', message:''});

        message.current.style.backgroundColor = "green";
        message.current.style.boxShadow = "2px 2px 8px green";
        message.current.style.left = "20px";
        setTimeout(() => {
            message.current.style.left = "-290px";
        }, 2000);
    };
    return(
        <div className="contact">
            <div ref={mainpagel} className="contactleft">
                <div style={{width:"100%"}}>
                <Title txt={data.title} />
                
                <div className="cl">
					<div className="cls">
					    <div className="fhead">E-MAIL:</div>
                        {datas.map((dat, i) => {

					    return <div key={i} className="ftitle">{dat.email}</div>
                        })}
					</div>
					<div className="cls">
					    <div className="fhead">Telephone:</div>
                        {datas.map((dat, i) => {
					     return <div key={i} className="ftitle">{dat.phone}</div>
                        })}
					</div>
				</div>
               
                <div className="ficon">
                    <a href="https://www.facebook.com/pho99therestaurant"><i className="fa-brands fa-facebook"></i></a>
					<i className="fa-brands fa-instagram"></i>
					{/* <i className="fa-brands fa-twitter"></i> */}
					{/* <i className="fa-brands fa-linkedin"></i> */}
				</div>
                </div>
            </div>
            <div ref={mainpager} className="contactright">
				<div>
                    <form onSubmit={handleSubmit}>
                        <input className="inputss" name="uname" type="text" value={formValue.uname} onChange={handleInput} placeholder="Name" required />
                        <br></br>
                        <input className="inputss" name="email" type="email" value={formValue.email} onChange={handleInput} placeholder="Email" required />
                        <br></br>
                        <input className="inputss" name="message" type="text" value={formValue.message} onChange={handleInput} placeholder="Message" required />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
                <div ref={message} className='vacancymessage'>
                    Mail Sent
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            <div className="fby">&#169;Copyright 2023 all right reserved | Designed by <span>Login</span></div>
        </div>
    );
}
export default Contact;