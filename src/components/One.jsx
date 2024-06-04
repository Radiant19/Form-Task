import Input from "./Input";
import { useRef } from "react"
import Two from "./Two";
import { useState } from "react";
export default function One() {

    const [gonext, setgonenext] = useState(false);

    const firstname = useRef();
    const surname = useRef();
    const cource = useRef();
    const field = useRef();

    function handlesave() {
        const enteredfirstname = firstname.current.value;
        const enteredlastname = surname.current.value;
        const enteredcource = cource.current.value;
        const enteredfield = field.current.value;
        console.log("done")
        setgonenext(true)
       
    }

    return (

        <>

            {gonext === true ? <Two /> :
                <div className="w-[600] ml-[200px] mt-[100px] border-2 px-5 mr-[100px]" >
                    <div className="flex flex-col">
                    <p className=" my-4 font-mono text-lg">Step 1 of 3</p>
                   
                    <div className="flex flex-col gap-1 bg-blue-200 ">
                    <h3 className="text-3xl text-black font-bold pl-3">Insured Information</h3>
                    <p className="my-1 pl-3  text-lg"> please complete the information</p>
                    </div>
                    </div>
                    <div className="flex flex-row w-[500px] gap-2">
                        <Input label="First Name" type="text" ref={firstname} />
                        <Input label="Last Name" type="text" ref={surname} />
                    </div>
                    <div className="flex flex-row w-[500px] gap-2">
                        <Input label="Cource" type="text" ref={cource} />
                        <Input label="Field" type="text" ref={field} />
                    </div>
                    <div  className="w-full  flex justify-end mb-2">
                        <button onClick={handlesave}
                            className=" px-6 py-2 rounded-md bg-blue-800 text-stone-50 hover:bg-stone-950 mt-5 ml-4  ">
                            Next</button>
                    </div></div>}

        </>


    )
}



