import { AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';


function Welcome() {

    //const history = useHistory();

  const handleLogin = () => {
    

    // Redirect to the desired page after login
    window.location.href='/auth';
  };
    return (
        <div className="min-h-[80vh] relative p-3 capitalize">
            <div className='absolute bottom-2 grid gap-4'>
                <Link to={'/feed'} className='text-gray-600 text-lg'>get started</Link>
                <div className='font-extrabold text-2xl flex flex-col gap-3'>
                    <div>Publish your</div>
                    <div>Passion in Your own way</div>
                    <div>For free</div>
                </div>
                <div className="flex items-center gap-2 my-6 justify-between w-[50%]">
                    <div className="h-[3px] w-[40px] rounded-full bg-gray-600" />
                    <div className="h-[3px] w-[40px] rounded-full bg-orange-600" />
                    <div className="h-[3px] w-[40px] rounded-full bg-blue-600 shadow-2xl" />
                </div>
                <div className=''>
                    <button className='rounded-full py-3 px-5 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center text-white' onClick={handleLogin}>Signin - Signup</button>
                </div>

                <div className="flex items-center gap-4 mt-5"><AiFillTwitterCircle size={50} color='#007cff'/><div>Say hi on twitter</div></div>
            </div>
        </div>
    );
}

export default Welcome;