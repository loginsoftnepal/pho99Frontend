import { useRef,useState } from "react";

import Title from "./title";
import Content from "./content";
import Button from "./button";

function About({data,page,nav,datas}){

    const [about,setAbout] = useState(datas[0]);

    const gpopup = useRef();
    const blur = useRef();
    const mainpagel = useRef();
    const mainpager = useRef();

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
    }

    return(
            <div className="about">
                <div ref={mainpagel} className="aboutleft">
                    <div>
                    <Title txt={data.title} />
                    <Content txt={data.content} />
                    <Button txt={data.button} fnc={gpopups} />
                    </div>
                </div>
                <div ref={mainpager} className="aboutright">
                    <div className="imageborder">
                        <img src={data.img} />
                    </div>
                </div>
                <div ref={gpopup} className='gpopup'>
                    <div className='gpopuptitle'>{about.title}</div>
                    <div className='close' onClick={closepopup}><i class="fa-solid fa-xmark"></i></div>
                    <div className="gpopupnews"> 
                        <img className="gpopupimg" src={about.img} style={{objectFit : "contain",paddingBottom:"20px",height:"fit-content",maxHeight:"250px"}} />
                        <div className="gpopuptxt">
                            &emsp;&emsp;&emsp;{about.content}
                        </div>
                    </div>
                </div>
                <div ref={blur} className='blur'></div>
            </div>
    );
}
export default About;