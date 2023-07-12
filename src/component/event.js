import { useRef,useState } from "react";

import {Swiper,SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Title from "./title";
import Content from "./content";

function Event({data,page,nav,datas}){

    const [event,setEvent] = useState(datas[0]);

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
            <div className="events">
                <div ref={mainpagel} className="eventsleft">
                    <div>
                    <Title txt={data.title} />
                    <Content txt={data.content} />
                    </div>
                </div>
                <div ref={mainpager} className="eventsright">
                    <div className="eventsboxs">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            850: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                          }}
                        navigation={true}
                        modules={[Pagination,Navigation]}
                        className='mySwiper'
                        style={{
                            width:"100%",
                            paddingBottom:"60px"
                        }}
                    >
                        {datas.map((item, i) => (
                            <SwiperSlide key={i}>
                            <div className="eventsbox">
                                <img src={item.img} />
                                <div className="eb">
                                    <div className="ebtime">
                                        <div className="ebt">
                                            <div className="ebthead">FROM</div>
                                            <div className="ebttitle">{item.from}</div>
                                        </div>
                                        <div className="ebt">
                                            <div className="ebthead">TO</div>
                                            <div className="ebttitle">{item.to}</div>
                                        </div>
                                    </div>
                                    <div className="ebtitle">{item.title}</div>
                                    <div className="ebdetail">{item.content}</div>
                                    <button onClick={() => {setEvent(item); gpopups(); }}>Read More</button>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </div>
                <div ref={gpopup} className='gpopup'>
                    <div className='gpopuptitle'>{event.title}</div>
                    <div className="gpopupe">
                        <div>
                            <div className="gpopupehead">FROM</div>
                            <div className="gpopupetitle">{event.from}</div>
                        </div>
                        <div>
                            <div className="gpopupehead">TO</div>
                            <div className="gpopupetitle">{event.to}</div>
                        </div>
                    </div>
                    <div className='close' onClick={closepopup}><i class="fa-solid fa-xmark"></i></div>
                    <div className="gpopupevents"> 
                        <img className="gpopupimg" src={datas[0].img} />
                        <div className="gpopuptxt">{event.content}</div>
                    </div>
                </div>
                <div ref={blur} className='blur'></div>
            </div>
    );
}
export default Event;