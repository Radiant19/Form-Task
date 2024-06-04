

import { forwardRef } from "react";

const Input  = forwardRef(function Input({type,label,isTextarea,...props},ref){
    const classes = 
    'w-[300px] text-md p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
    return(
        <div className="block">
        <div className="flex flex-col py-2 gap-1 mt-8 mx-[100px] w-[500px]">
            <label className="text-sm uppercase  font-bold text-black block  ">
                {label}
            </label>
        {isTextarea ?
        <textarea className={classes} ref={ref}/>:
        <input className={classes} ref={ref} type={type} {...props} input={label} value={label}/>
        }
        </div>
        </div>
    )
    
})

export default Input;