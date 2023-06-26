import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";

const fakeTxt =`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat eaque facilis, facere ex debitis voluptatum nesciunt ratione voluptate doloribus, provident impedit culpa aut animi, veniam magnam quo. Quam pariatur quos vero veniam voluptatibus labore mollitia amet exercitationem numquam? Accusantium cumque saepe asperiores alias magni dolore natus. Ab qui magnam amet laboriosam animi, ducimus sequi veritatis architecto vero sit distinctio doloribus mollitia, optio dolorum repellendus error voluptas. Modi rerum quae earum sequi aliquam dolore dolores quos quasi, laudantium voluptate eligendi totam ipsum, pariatur quibusdam perferendis at commodi! Ut, suscipit sed modi, officia provident corporis, soluta perferendis praesentium enim quis iure. Aut est dolorem inventore iusto quos, molestias sunt temporibus eligendi ex quaerat expedita, quam vitae officiis? Voluptatibus ipsa eaque blanditiis minus neque labore maiores rem quos vitae, animi dolore dolorem ratione eveniet nobis corporis odit doloribus, obcaecati hic, ipsam nesciunt iusto? Velit beatae fugiat sed impedit natus vel aliquid dicta est dolores ratione, corrupti esse molestias obcaecati doloribus accusantium adipisci enim culpa nam quo excepturi modi. Officia, est quos, quasi culpa delectus, unde commodi quae obcaecati excepturi nisi possimus. Adipisci, minus? Numquam cupiditate at quae id tempore sunt tempora, vel perspiciatis odio. Fugiat veniam animi nesciunt aut quis nihil a cupiditate eligendi ab obcaecati qui molestiae, voluptatem ipsum quibusdam nisi expedita? Assumenda animi earum ipsam quibusdam autem totam. Laborum sunt nobis quaerat praesentium, dolorum laudantium beatae numquam, omnis nam adipisci saepe? Ut exercitationem voluptatum, culpa blanditiis dolorem impedit animi deleniti error magnam minima at laboriosam, doloribus omnis veritatis natus. A corporis illo neque. Suscipit animi tempore id praesentium adipisci, ullam repudiandae vel assumenda voluptatibus! Quisquam neque ex cumque mollitia tenetur repellat obcaecati libero! Qui facilis eius ipsum at, libero perferendis repudiandae impedit ullam nam aspernatur cum mollitia? Vitae fuga cum aliquid dignissimos repudiandae facilis nisi soluta, sint vel repellendus iste numquam ad atque repellat aperiam ducimus commodi eaque odit delectus? Possimus, sed consequuntur? Vel consequuntur cupiditate molestiae soluta nihil adipisci dignissimos saepe ea, itaque veritatis dolorem facilis incidunt maxime repudiandae delectus accusantium modi exercitationem tenetur deleniti cumque culpa? Veritatis perferendis neque ipsa earum natus aliquam repellat officia in recusandae aperiam? Sed dicta voluptatum aliquam consectetur pariatur debitis at perferendis quisquam modi a, vitae tempore nobis velit enim quo quaerat possimus odio autem ea libero! Cumque non, impedit et itaque minus qui corrupti eos at reiciendis sit ipsam commodi illo consequuntur repellat repellendus quaerat inventore iure deserunt earum! Voluptatibus, odit vero.`

function Post() {
    return (
        <div className="gap-4 items-center  w-[100%] md:w-[85%] m-auto">
            <div className="h-[50svh] w-full px-2 relative">

                <div className='bg-gray-400 object-cover w-full h-full fixedBg absolute top-0 left-0' style={{ backgroundImage: `url(/sit.png)`, }} />
                <button className="absolute top-2 left-2 flex text-white items-center gap-1" onClick={()=>window.location.href = '/feed'}>
                    <BsFillArrowDownLeftCircleFill color='white' size={30} /><div>Go Back</div>
                </button>
                <div className='absolute bottom-0 pb-7 gradient left-0'>
                    <div className='p-2 bg-[#121312] font-bold w-fit rounded-lg m-2 text-white'>Entertainment</div>
                    <div className='text-white font-bold text-2xl  p-2'>Is AI taking Designers job?
                        open ai just released the latest DELL-E model
                        capable of wonderful things
                    </div>
                </div>
                <div className='absolute -bottom-[16%] flex gap-2 items-center  pt-5 bg-gray-200 px-3 pb-2 rounded-2xl w-[95%] shadow-my'>
                    <img src='/IMG_3132.JPG' className='rounded-full h-10 w-10 box-border' />
                    <div>
                        <div className='font-bold capitalize'>Joseph akanbi</div>
                        <div className='capitalize text-gray-500'>Jul 20, 22 comments 2min read</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 w-full mt-28 mb-4 justify-between">
                <div className="h-[3px] w-[40%] rounded-full bg-blue-600 shadow-2xl" />
                <div className="h-[3px] w-[30%] rounded-full bg-orange-600" />
                <div className="h-[3px] w-[20%] rounded-full bg-gray-600"/>
            </div>
            <div className="px-2">
                <h1 className="text-3xl font-bold mb-1">Intro</h1>
                <p>{fakeTxt}</p>
            </div>
        </div>
    );
}

export default Post;