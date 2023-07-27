// eslint-disable-next-line react/prop-types
export default function FormHero({text, header}) {
    
    return (
        <div className="flex flex-col gap-4">
            <div className=" text-3xl font-bold text-gray-700">
                {header}
                
            </div>
            <div className="">
             {text}
            </div>
        </div>
        
    )
  }
  

/***
 * 
 * 
 * 
 * 
 * 
 */