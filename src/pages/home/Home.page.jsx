import { MdBolt } from 'react-icons/md'

import {
    motion
    /*useScroll, useTransform*/
} from 'framer-motion';
import Search from '../../components/common/Search';
import { useRef, useState } from 'react';

const gnImg = ['/IMG_3132.JPG', '/IMG_3130.JPG', '/earthmap.png', '/sit.png', '/IMG_3134.JPG']

const categories = ['For You', 'Top stories', 'AI', 'Entertainment', 'Finance', 'Government']

const timePosted = ['Resent', 'All', 'Today', 'this week', 'Last 6 Month', 'This Year']
function Home() {


    const [postedDate, setPostedDate] = useState('resent');
    const [category, setCategory] = useState('resent');


    function getSummarizedText(params) {
        console.log(params)

    }

    let myRef = useRef(null)

    const activeCat = 'border bg-blue-500 text-white';
    const activeTime ='bg-green-700 text-white'

    return (
        <div className=" gap-4 px-2 md:px-20 py-10 items-center  w-[95%] md:w-[85%] m-auto " ref={myRef}>
            <div className="w-full flex flex-col items-start gap-6 text-center">
                <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 flex items-center'>Newz <MdBolt color="Green" size={30} />Flash</div>
                <div className='capitalize text-gray-600 my-1'>
                    just another tech news website.
                </div>
                <div className='flex overflow-x-scroll gap-4 w-full no-scrollbar'>
                    
                    {
                        categories.map((e, i) => (
                            <button key={i} className={`capitalize whitespace-nowrap py-1 px-4 rounded-full border bg-blue-200 text-gray-400 ${category === e.toLocaleLowerCase() && activeCat}`} onClick={()=>setCategory(e.toLocaleLowerCase())}>{e}</button>
                        ))
                    }
                </div>
                <div className='flex overflow-x-scroll gap-4 w-full no-scrollbar'>
                    
                    {
                        timePosted.map((e, i) => (
                            <button key={i} className={`capitalize whitespace-nowrap font-extralight py-1 px-4 rounded-full border text-gray-400 bg-gray-100 ${postedDate === e.toLocaleLowerCase() && activeTime}`} onClick={() =>setPostedDate(e.toLocaleLowerCase())} >{e}</button>
                        ))
                    }
                </div>
                <Search getSummarizedText={getSummarizedText} />
            </div>

            <div className='flex my-6 rounded-full bg-[#0e0e0ec2] text-white w-fit'>
                <div className='capitalize border-r-2 border-r-white py-2 px-5 '>{ category.toUpperCase() }</div>

                <div className='capitalize py-2 px-5 '>{postedDate.toUpperCase()}</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full '>

                {
                    gnImg.map((e, i) => (
                        <motion.a href={`/post/${i}`}
                            initial={{ scale: 0, }}
                            whileInView={{ scale: 1, }}
                            className='w-full rounded-2xl shadow-my' key={i + e}>
                            <div className='relative w-full rounded-2xl   h-[350px]'>
                                <div className='bg-gray-400 object-contain w-full h-full rounded-t-2xl fixedBg' style={{ backgroundImage: `url(${e})`, backgroundPosition: 'top', }} />
                                <div className='absolute bottom-0 gradient'>
                                    <div className='p-2 bg-[#121312] font-bold w-fit rounded-lg m-2 text-white'>Entertainment</div>
                                    <div className='text-white font-bold text-2xl line-clamp-3 p-2'>Is AI taking Designers job?
                                        open ai just released the latest DELL-E model
                                        capable of wonderful things
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center  pt-5 bg-white px-3 pb-2 rounded-b-2xl'>
                                <img src='/IMG_3132.JPG' className='rounded-full h-10 w-10 box-border' />
                                <div>
                                    <div className='font-bold capitalize'>Joseph akanbi</div>
                                    <div className='capitalize text-gray-500'>Jul 20, 22 comments 2min read</div>
                                </div>
                            </div>
                        </motion.a>
                    ))
                }

            </div>

            <div className='flex  my-10 rounded-full bg-[#3b4fe7] text-white w-fit m-auto'>
                <motion.button className='capitalize border-r-2 border-r-white py-2 px-5 '>Home</motion.button>
                <motion.button className='capitalize border-r-2 border-r-white py-2 px-5 '>Prev</motion.button>
                <motion.button className='capitalize py-2 px-5 '>Next</motion.button>
            </div>
        </div>

    );
}

export default Home;

