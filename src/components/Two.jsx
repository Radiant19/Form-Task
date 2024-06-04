import { useRef, useState } from "react"
import Input from "./Input";
import Thre from "./Thre";


export default function Two() {

    const [gonext, setgonenext] = useState(false);
    const email = useRef();
    const phoneno = useRef();
    const country = useRef();
    const address = useRef();

    function handlesave() {
        const enteredemail = email.current.value;
        const enteredphoneno = phoneno.current.value;
        const enteredcountry = country.current.value;
        const enteredaddress = address.current.value;
        setgonenext(true)

    }
    return (
        <>
            {gonext === true ? <Thre /> :
                <div className="w-[600] ml-[200px] mt-[100px] border-2 px-5 mr-[100px] ">
                    <div className="flex flex-col">
                        <p className=" my-4 font-mono text-lg">Step 2 of 3</p>
                        <div className="flex flex-col gap-1 bg-blue-200 ">
                            <h3 className="text-3xl text-black font-bold pl-3">Insured Information</h3>
                            <p className="text-lg pl-3">please complete the information</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-[500px] gap-2">
                        <Input label="Email" type="text" ref={email} />
                        <Input label="Phone Number" type="number" ref={phoneno} />
                    </div>
                    <div className="flex flex-row w-[500px] gap-2">
                        <Input label="Country" type="text" ref={country} />
                        <Input label="Address" isTextarea ref={address} />
                    </div>
                    <div className=" w-full  flex justify-end mb-2">
                        <button onClick={handlesave}
                            className=" px-6 py-2 rounded-md  bg-blue-800 text-stone-50 hover:bg-stone-950 mt-5 ml-4">
                            Next</button>
                    </div>
                </div>}
        </>
    )
}