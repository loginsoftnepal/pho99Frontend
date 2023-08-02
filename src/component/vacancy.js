import { useRef, useState } from 'react';
import '../App.css'
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Title from './title';
import Content from './content';
import Button from './button';
import Vacancybox from './vacancybox';
import { server } from '../fetch';

function Vacancy({data,page,nav,datas}){

    const [formValue, setFormValue] = useState({fname:'', lname:'', email:'', mobile:'', position:'Waiter'});

    const [file,setFile] = useState('');
    const resumeRef = useRef();

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]:value});
    }

    const handleFile = (e) => {
        const attach = e.target.files[0];
        const reader = new FileReader();
   
        reader.onload = (e) => {
         setFile({
           filename: attach.name,
           content: e.target.result.split(',')[1],
         });
        };
        reader.readAsDataURL(attach);
     }

    const handleSubmit = async(e) => {
        closepopup();
        
        e.preventDefault();
        const allInputvalue = { fname: formValue.fname, lname: formValue.lname, email: formValue.email, mobile: formValue.mobile, position: formValue.position, attachments: file};
        
        let res = await fetch(`${server}/vacancy/email`,{
            method: "POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(allInputvalue),
        });

        setFile('');
        setFormValue({fname:'', lname:'', email:'', mobile:'', position:''});
        
        message.current.style.backgroundColor = "green";
        message.current.style.boxShadow = "2px 2px 8px green";
        message.current.style.left = "20px";
        setTimeout(() => {
            message.current.style.left = "-290px";
        }, 2000);
    }
    
    const gpopup = useRef();
    const blur = useRef();
    const mainpagel = useRef();
    const mainpager = useRef();
    const message = useRef();

    const gpopups = () =>{
        gpopup.current.style.animation = "animm1 .5s forwards";
        page.current.style.overflowY = "hidden";
        nav.current.style.animation = "ani .5s linear forwards";
        blur.current.style.left = "0";
        setTimeout(() => {
            mainpagel.current.style.filter = "blur(5px)";
            mainpager.current.style.filter = "blur(5px)";
        }, 200);
    };

    const closepopup = () =>{
        blur.current.style.left = "100%";
        page.current.style.overflowY = "auto";
        setTimeout(() => {
            gpopup.current.style.animation = "animm2 .5s forwards";
            mainpagel.current.style.filter = "none";
            mainpager.current.style.filter = "none";
        }, 200);
        setTimeout(() => {
            nav.current.style.animation = "anim .5s linear forwards";
        }, 500);
    };

    return(
            <div className="vacancy">
                <div ref={mainpagel} className="vacancyleft">
                    <div className='content'>
                    <Title txt={data.title} />
                    <Content txt={data.content} />
                    <Button txt={data.button} fnc={gpopups} />
                    </div>
                </div>
                <div ref={mainpager} className="vacancyright">
                    <div className='vacancyboxs'>
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        // autoplay={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                          }}
                        navigation={true}
                        autoplay={true}
                        modules={[Pagination,Navigation]}
                        className='mySwiper'
                        style={{
                            width:"100%",
                            paddingBottom:"60px",
                        }}
                    >
                        {datas.map((item, i) => (
                            <SwiperSlide key={i}>
                                 <Vacancybox key={i} content={item} fnc={gpopups} />
                             </SwiperSlide>
                        ))}
                    </Swiper>
                                               
                    </div>
                </div>
                <div ref={gpopup} className='gpopup'>
                    <div className='gpopuptitle'>Job Application Form</div>
                    <div className='close' onClick={closepopup}><i class="fa-solid fa-xmark"></i></div>
                    <form className="vacancyform" onSubmit={handleSubmit}>
                        <div>
                            <div className='vffs'>
                                <div className='vff'>
                                    <label>First Name</label><br></br>
                                    <input className="inputss" name='fname' type="text" placeholder="" value = {formValue.fname} onChange = {handleInput} required />
                                </div>
                                <div className='vff'>
                                    <label>Last Name</label><br></br>
                                    <input className="inputss" name='lname' type="text" placeholder="" value = {formValue.lname} onChange = {handleInput} required />
                                </div>
                            </div>
                            <div className='vffs'>
                                <div className='vff'>
                                    <label>Email</label><br></br>
                                    <input className="inputss" name='email' type="email" placeholder="" value = {formValue.email} onChange = {handleInput} required />
                                </div>
                                <div className='vff'>
                                    <label>Mobile No.</label><br></br>
                                    <input className="inputss" name='mobile' type="number" placeholder="" value = {formValue.mobile} onChange = {handleInput} required />
                                </div>
                            </div>
                            <div className='vfff'>
                                <label>What position are you applying for?</label><br></br>
                                <select name='position' value={formValue.position} onChange = {handleInput} required>
                                    <option disabled>--select--</option>
                                   
                                    <option value="Brand Manager">Brand Manager</option>
                                     <option value="Marketing Officer">Marketing Officer</option>
                                      <option value="Accountant">Accountant</option>
                                       <option value="Cashier">Cashier</option>
                                        <option value="Chef">Chef</option>
                                         <option value="Head Cook">Head Cook</option>
                                          <option value="Cook">Cook</option>
                                           <option value="Assistant Cook">Assistant Cook</option>
                                            <option value="Waiter Captain">Waiter Captain</option>
                                             <option value="Jr. Waiter">Jr. Waiter</option>
                                              <option value="Waiter">Waiter</option>
                                              <option value="Security Guard">Security Guard</option>
                                               <option value="Dish Washer">Dish Washer</option>
                                               <option value="Cleaner">Cleaner</option>
                                </select>
                            </div>
                            <div className='vfff'>
                                <label>CV</label><br></br>
                                <input ref={resumeRef} type='file' name='cv' onChange = {(e) => handleFile(e)} accept='image/*' required />
                            </div>
                            <div className='vfff'>
                                <label>Job Description</label><br></br>
                                <ul>
                                    <li>Excellent communication and customer service skills.</li>
                                    <li>Teamwork and collaboration with staff members.</li>
                                    <li>Attention to detail in recipe preparation and presentation.</li>
                                    <li>Ability to work under pressure in a fast-paced kitchen.</li>
                                    <li>Understanding of food safety and sanitation guidelines.</li>
                                    <li>Knowledge of food and beverages, including dietary considerations.</li>
                                </ul>
                            </div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
                <div ref={blur} className='blur'></div>
                <div ref={message} className='vacancymessage'>
                    Mail Sent
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
    );
}
export default Vacancy;