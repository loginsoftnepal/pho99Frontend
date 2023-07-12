import { useRef,useState,useEffect } from 'react';

import {Swiper,SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Title from './title';
import Content from './content';
import Button from './button';

function Gallery({data,page,nav,datas}){

    const [image,setImage] = useState(0);

    const gpopup = useRef();
    const blur = useRef();
    const mainpagel = useRef();
    const mainpager = useRef();

    useEffect(() => {
        const swiperEl = document.querySelector('.mySwiper');
        swiperEl.swiper.slideTo(image);
    },[image]);

    // function changeimage({no}){
    //     const swiperEl = document.querySelector('.mySwiper');
    //     swiperEl.swiper.slideTo(no);
    // }

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
            <div className="gallery">
                <div ref={mainpagel} className="galleryleft">
                    <div>
                    <Title txt={data.title} />
                    <Content txt={data.content} />
                    <Button txt={data.button} fnc={gpopups} />
                    </div>
                </div>
                <div ref={mainpager} className="galleryright">
                    <div className='grimg'>
                        <div className='grid1'>
                            <div className='image' onClick={() => {setImage(0); gpopups(); }}>
                                <img src={datas[0].img} />
                            </div>
                            <div className='image' onClick={() => {setImage(1); gpopups(); }}>
                                <img src={datas[1].img} />
                            </div>
                        </div>
                        <div className='grid3'>
                            <div className='image' onClick={() => {setImage(2); gpopups(); }}>
                                <img src={datas[2].img} />
                            </div>
                            <div className='image' onClick={() => {setImage(3); gpopups(); }}>
                                <img src={datas[3].img} />
                            </div><div className='image' onClick={() => {setImage(4); gpopups(); }}>
                                <img src={datas[4].img} />
                            </div>
                        </div>
                        <div className='grid2'>
                            <div className='image' onClick={() => {setImage(5); gpopups(); }}>
                                <img src={datas[5].img} />
                            </div>
                            <div className='image' onClick={() => {setImage(6); gpopups(); }}>
                                <img src={datas[6].img} />
                            </div>
                        </div>
                    </div>
                </div>        
                <div ref={gpopup} className='gpopup'>
                    <div className='gpopuptitle'>Our Gallery</div>
                    <div className='close' onClick={closepopup}><i class="fa-solid fa-xmark"></i></div>
                    <div className='popupgrid'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination,Navigation]}
                            className='mySwiper'
                            style={{
                                height: "300px",
                                width: "calc(100%)",
                                padding: "0 0 40px 0"
                            }}
                        >
                        {datas.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item.img} />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                        <div className='popupgridimg'>
                            {datas.map((item, i) => (
                                <img src={item.img} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
                <div ref={blur} className='blur'></div>
            </div>
    );
}
export default Gallery;