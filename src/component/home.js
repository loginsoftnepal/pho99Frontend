import Title from "./title";
import Content from "./content";
import Button from "./button";
import { useEffect, useRef } from "react";
import Menubox from './menubox';
import MenuPhoto from "./menuPhoto";

function Home({addClicked, setAddClicked, data, menudata, page,nav,fnc,fnc1, fnc2}){

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

    useEffect(() => {
        if(addClicked) {
         setAddClicked(false)
         gpopups();
        }
    }, [addClicked])

      const linkfnc1 = () => {
        window.open('https://foodmandu.com/Restaurant/Details/845', '_blank', 'noreferrer');
      };
    
      const linkfnc2 = () => {
        window.open('https://foodmandu.com/Restaurant/Details/324', '_blank', 'noreferrer');
      };

    return(
        <>
            <div className="home">
                <div ref={mainpagel} className="homeleft">
                    <div>
                    <Title txt={data.title} />
                    <Content txt={data.content} />
                    <Button txt={data.button} fnc={gpopups} />
                    </div>
                </div>
                <div ref={mainpager} className="homeright">
                    <div className="imageborder">
                        <img src={data.img} alt="" />
                    </div>
                </div>
            </div>

              <div ref={gpopup} className='gpopup'>
                    <div className='gpopuptitle'>Our Menu</div>
                    <div className='close' onClick={closepopup}><i class="fa-solid fa-xmark"></i></div>

                    <div className='popupomb'>
                        <div className='omenuboxs'>
                        <div className='pdes'>
                            <div className='pde'>Pick Up</div>
                            <div className='pde'>Delivery</div>
                            <div className='pde'>Eat In</div>
                        </div>
                        <div className='direct'>Please, directly call us at : </div>
                        <div className='directt'>Boudha : <span>9825996858</span></div>
                        <div className='directt'>Lazimpat : <span>9825996858</span></div>
                        <div className='directt'>Jhamshikhel : <span>9825996858</span></div>
                        <div className='note'>Note : For foodmandu delivery please click on the following links.</div>
                        <div className='notelinks'>
                            <div className='notelink' onClick={fnc1}>Boudha</div>
                            <div className='notelink' onClick={fnc2}>Thadhodhunga</div>
                        </div>
                        <MenuPhoto />
                        <div className='omenuboxstitle'>Fresh Vietnamese Summer Rolls</div>
                        <div className='omenuboxscontent'>Consist of fresh veges, herbs & rice noodles wrapped in rice papers (served w/ homemade hoisin sauce).</div>
                        <div className='omenuboximgs'>
                            <img src={menudata[2].img} alt='' />
                            <img src={menudata[3].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i <= 10) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Salads</div>
                        <div className='omenuboxscontent'>All salads are cleaned with safe, drinkable water.</div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[13].img} alt='' />
                            <img src={menudata[16].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 10) && (i <= 17) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Vietnamese Barbeques</div>
                        <div className='omenuboxscontent'>Marinated in delicious homemade lemongrass, fresh herbs and ginger sauce.</div>
                        <div className='omenuboximgs'>
                            <img src={menudata[20].img} alt='' />
                            <img src={menudata[21].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 17) && (i <= 27) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Specials Vietnamese Summer Dishes</div>
                        <div className='omenuboxscontent'>Rice noodles blended in fresh salads, crushed peanuts, spring rolls w/ your choice of BBQ meat, seafood or deep fried tofu served w/ homemade sweet & sour pickle.</div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[28].img} alt='' />
                            <img src={menudata[29].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 27) && (i <= 32) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Mutton Specialties</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[33].img} alt='' />
                            <img src={menudata[34].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 32) && (i <= 35) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Pho (Vietnamese Noodle Soup)</div>
                        <div className='omenuboxscontent'>Pho is one of the most popular noodle soups in Vietnam. It consists of chicken or vegetable broth, rice noodles topped with green onions, cilantro, bean sprouts served with homemade hoisin sauce, fresh chili and lemon.</div>
                        <div className='omenuboximgs'>
                            <img src={menudata[36].img} alt='' />
                            <img src={menudata[37].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 35) && (i <= 43) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Glass Noodle Soup</div>
                        <div className='omenuboxscontent'>Glass noodles soup also a popular dish in Vietnam that is prepared with chicken or vegetable broth, topped with green onion, cilantro, bean sprouts served with hoisin sauce, fresh chili and lemon.</div>
                        <div className='omenuboximgs'>
                            <img src={menudata[46].img} alt='' />
                            <img src={menudata[45].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 43) && (i <= 48) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Stir Fried Seasonal Vegetables Served w/ Steamed Rice</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[50].img} alt='' />
                            <img src={menudata[52].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 48) && (i <= 52) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Stir Fried Rice Noodle</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[53].img} alt='' />
                            <img src={menudata[54].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 52) && (i <= 56) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Vietnamese Stews Served w/ Steamed Rice/ Noodle</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[57].img} alt='' />
                            <img src={menudata[58].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 56) && (i <= 62) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Vietnamese Curries</div>
                        <div className='omenuboxscontent'>Prepared in coconut milk and served with steamed rice/ noodle.</div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[63].img} alt='' />
                            <img src={menudata[64].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 62) && (i <= 67) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Vietnamese Grilled Dishes Served with Steamed Rice</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[68].img} alt='' />
                            <img src={menudata[69].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 67) && (i <= 72) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Stir Fried Dishes Served w/ Steamed Rice</div>
                        <div className='omenuboxscontent'></div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[75].img} alt='' />
                            <img src={menudata[77].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 72) && (i <= 80) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Special Chili Snacks</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[81].img} alt='' />
                            <img src={menudata[82].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 80) && (i <= 86) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Fried Rice Dishes</div>
                        <div className='omenuboxscontent'></div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[87].img} alt='' />
                            <img src={menudata[89].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 86) && (i <= 90) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Basa Fish Served with Steamed Rice</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[93].img} alt='' />
                            <img src={menudata[92].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 90) && (i <= 95) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Sweet and Sour w/ Steamed Rice</div>
                        <div className='omenuboxscontent'>Prepared with homemade sweet & sour sauce with vegetables servedw/ steamed rice</div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[98].img} alt='' />
                            <img src={menudata[99].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 95) && (i <= 100) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Sweet and Sour Soups served w/ Steamed Rice</div>
                        <div className='omenuboxscontent'>Prepared with sweet & sour soup, served steamed white rice</div>
                        {/* <div className='omenuboximgs'>
                            <img src={menudata[101].img} alt='' />
                            <img src={menudata[102].img} alt='' />
                        </div> */}
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 100) && (i <= 105) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Desserts</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[108].img} alt='' />
                            <img src={menudata[111].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 105) && (i <= 111) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        <div className='omenuboxstitle'>Drinks</div>
                        <div className='omenuboxscontent'></div>
                        <div className='omenuboximgs'>
                            <img src={menudata[112].img} alt='' />
                            <img src={menudata[113].img} alt='' />
                        </div>
                        {menudata.map((ite, i) => (
                            <>
                            {
                                (i > 111) && (i <= 124) && (
                                    <div className="menubox" key={i}>
                                        <Menubox content={ite} />
                                    </div>
                                ) 
                            }
                            </>
                        ))}
                        </div>
                    </div>
                </div>
                <div ref={blur} className='blur'></div>
        </>
    );
}
export default Home;