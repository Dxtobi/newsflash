import  {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firedb';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const PasswordReset = () => {
  const nav = useNavigate();
  const usersRef = collection(db, 'password');
  
  const [pass, changePassword] = useState('');
  const [check, set_changePassword] = useState('');
  const [old_pass, setPass] = useState([]);

  const addPass = async () => {
    if (old_pass.length === 0) {
      const done = await addDoc(usersRef, {
        pass: pass,
        dn: Date.now(),
      });
      if (done) {
        nav('/what-a-life');
      }
      return;
    } else if (pass !== '' && check === old_pass[old_pass.length - 1].pass) {
      const done = await addDoc(usersRef, {
        pass: pass,
        dn: Date.now(),
      });
      if (done) {
        nav('/mdb');
      }
      return;
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data1 = await getDocs(usersRef);
      const sortedArrayPass = data1.docs.map((doc) => ({ ...doc.data() }));
      const sortArrpASS = sortedArrayPass.sort(function (a, b) {
        return new Date(a.dn) - new Date(b.dn);
      });

      setPass(sortArrpASS);
    };

    getUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  md:w-1/2 w-[90%] m-auto">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Add your banner image here */}
        {/* <div className="banner-holder">
          <img src="/spnb.png" alt="" className="banner-img" />
        </div> */}
        {old_pass.length !== 0 && (
          <div className="mb-4">
            <div className="font-semibold mb-2">Old Password</div>
            <div className="v-input-wrap">
              <input
                name="passe"
                className="input"
                placeholder="Password"
                type="password"
                onChange={(e) => set_changePassword(e.target.value)}
                value={check}
                autoComplete="old-password"
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="font-semibold mb-2">New Password</div>
          <div className="v-input-wrap">
            <input
              name="passe"
              className="input"
              placeholder="Password"
              type="password"
              onChange={(e) => changePassword(e.target.value)}
              value={pass}
              autoComplete="new-password"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded"
            onClick={addPass}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
