/* eslint-disable react/prop-types */
import {    BsSearch } from 'react-icons/bs'

function Search({ getSummarizedText }) {


    function summarize(params) {
        return getSummarizedText(params)
    }
    return (
        <div className="row-span-1 border-2 border-[#e7e7e7] w-[100%] md:w-[70%] p-1 rounded-full flex items-center bg-white my-3 px-3 gap-2">
            <input placeholder="Search" className="bg-transparent w-full p-2 outline-none   border-r" type='url' required={true} />
            <button onClick={summarize} className='text-blue-600'>
                <BsSearch size={30}/>
            </button>
        </div>
    );
}

export default Search;