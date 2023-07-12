import { useRef,useState } from "react";

import {Swiper,SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Title from "./title";
import Content from "./content";

function Location({data,page,nav,datas}){

    const [location,setLocation] = useState(datas[0]);

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
            <div className="locations">
                <div ref={mainpagel} className="locationsleft">
                    <div>
                    <Title txt={data.title} />
                    <Content txt={data.content} />
                    </div>
                </div>
                <div ref={mainpager} className="locationsright">
                    <div className="locationsboxs">
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
                        autoplay={true}
                        modules={[Pagination,Navigation]}
                        className='mySwiper'
                        style={{
                            width:"100%",
                            paddingBottom:"60px"
                        }}
                    >
                        {datas.map((item, i) => (
                        <SwiperSlide key={i}>
                        <div className="locationsbox">
                            <img src={item.img[0]} alt="" />
                            <div className="lb">
                                <div className="lbtitle">{item.title}</div>
                                <div className="lbdetail">{item.content}</div>
                                <div className="lbcontact">{item.phone}</div>
                                <button onClick={() => {setLocation(item); gpopups(); }}>Read More</button>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    </div>
                </div>
                <div ref={gpopup} className='gpopup'>
                    <div className='gpopuptitle'>{location.title}</div>
                    <div className='close gpopupbody' onClick={closepopup}><i class="fa-solid fa-xmark"></i></div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={true}
                        navigation={true}
                        modules={[Pagination,Navigation]}
                        className='mySwiper'
                        style={{
                            height: "300px",
                            width: "calc(100%)",
                            padding: "0px 0 45px 0",
                            marginTop: "125px",
                        }}
                    >
                        {location.img.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="gpopuptxt">{location.content}</div>
                    <div className="gpopupcontact">{location.contact}</div>
                </div>
                <div ref={blur} className='blur'></div>
            </div>
    );
}
export default Location;