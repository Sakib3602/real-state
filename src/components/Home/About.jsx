
import 'animate.css';
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
        document.title = "DREAM_TULIP | About Us"
      },[])
    return (
        <div className='pt-32 w-[90%] h-[850px]  m-auto'>
            <h1 className='text-center text-[30px] lg:text-[50px] font-[600] border-b'>About Us</h1>

            <div className='w-full lg:w-[80%] m-auto mt-5'>
            <h1 className='text-center text-[16px] lg:text-[20px]'>Welcome to DREAM-TULIP, where unparalleled elegance meets exceptional service. With a commitment to excellence, we specialize in curating bespoke experiences for discerning clients. Trust us to elevate your real estate journey with sophistication, integrity, and a touch of luxury.</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-7 gap-6 m-auto'>
                <div className='text-center space-y-3 '>
                    <img className='w-[400px] h-[400px] rounded-full' src="https://i.ibb.co/KXwYmm6/pamela-buenrostro-1-Ko-i-ILtr-PI-unsplash.jpg" alt="" />
                    <h1 className='text-[30px] text-blue-600 font-[700] '>Bill Gates</h1>
                    <h1 className='text-yellow-800 font-[500]'>COO</h1>
                </div>
                <div className='text-center space-y-3'>
                    <img className='w-[400px] h-[400px] rounded-full' src="https://i.ibb.co/X77R1QV/lucas-law-WJSM6lga-N2c-unsplash.jpgg" alt="" />
                    <h1 className='text-[30px] text-blue-600 font-[700]'>Elon Maski</h1>
                    <h1 className='text-yellow-800 font-[500]'>CEO</h1>
                </div>
                <div className='text-center space-y-3'>
                    <img className='w-[400px] h-[400px] rounded-full' src="https://i.ibb.co/M623CPk/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg" alt="" />
                    <h1 className='text-[30px] text-blue-600 font-[700]'>AlizaBeth</h1>
                    <h1 className='text-yellow-800 font-[500]'>PPA</h1>
                </div>
               

            </div>





        </div>
    );
};

export default About;