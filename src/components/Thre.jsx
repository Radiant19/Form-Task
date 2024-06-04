import { useRef } from "react"
import Input from "./Input";

export default function Thre() {


    const vehicle1 = useRef();
    const number1 = useRef();
    const vehicle2 = useRef();
    const number2 = useRef();
    const chassis1= useRef();
    const chassis2  = useRef();
    const type1 = useRef();
    const type2 = useRef('')
    function handlesave() {
        const vehicle1 = vehicle1.current.value;
        const number1 = number1.current.value;
        const vehicle2 = vehicle2.current.value;
        const number2 = number2.current.value;
        const chassis1 = chassis1.current.value;
        const chassis2 = chassis2.current.value;
        const type1 = type1.current.value;
        const type2 = type2.current.value;

    }
    return (

    <div className="w-[600] ml-[200px] mt-[100px] border-2 px-5 mr-[100px]" >
            <div className="flex flex-col">
                <p className=" my-4 font-mono text-lg">Step 3 of 3</p>
                <div className="flex flex-col gap-1 bg-blue-200 ">
                    <h3 className="text-3xl text-black font-bold pl-3">Insured Information</h3>
                    <p className="text-lg pl-3 ">please complete the information</p>
                </div>
            </div>
            <div className="flex flex-row w-[500px] gap-2">
                <Input label="Vehicle 1" type="text" ref={vehicle1} />
                <Input label="Vehicle No " type="number" ref={number1} />
            </div>
            <div className="flex flex-row w-[500px] gap-2">
                <Input label="Chassis No" type="text" ref={chassis1} />
                <Input label="Type " type="number" ref={type1} />
            </div>
            <div className="flex flex-row w-[500px] gap-2">

                <Input label="Vehicle 2" type="text" ref={vehicle2} />
                <Input label="Vehicle No" type="number" ref={number2} />
            </div>
            <div className="flex flex-row w-[500px] gap-2">
                <Input label="Chassis No" type="text" ref={chassis2} />
                <Input label="Type " type="number" ref={type2} />
            </div>
            <div className="w-full  flex justify-end mb-2">
                <button onClick={handlesave}
                    className=" px-6 py-2 rounded-md bg-blue-800 text-stone-50 hover:bg-stone-950 mt-5 ml-4">
                    Done</button>
            </div></div>





    )
}