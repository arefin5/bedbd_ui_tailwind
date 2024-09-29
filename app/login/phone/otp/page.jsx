

export default function page() {
    return (
        <div className='modal-background'>
            <div className='pt-19 pb-20 sm:pb-24 px-14 sm:px-24 bg-white max-w-lg | absolute-center rounded-10px'>

                <div className="flex flex-col items-center gap-y-7 max-w-lg">
                    <h3 className='text-sm leading-6 font-medium text-neutral-600  '>
                        Enter 6-digit verification code
                    </h3>

                    <div className="flex gap-3">
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-0" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1)"
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-1" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1)"
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-2" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1)"
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-3" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1)"
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-4" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1)"
                        />
                        <input className="w-11 h-14 py-3.5 px-4 border border-neutral-500 rounded" 
                            type="text" 
                            name="otp-5" 
                            maxLength="1" 
                            inputmode="numeric" 
                            pattern="[0-9]*" 
                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1)"
                        />
                    </div>

                    <button className=" btn max-w-48 btn-primary">Submit</button>

                    <div className="text-sm font-normal text-center">
                        {`Didn't receive your code? `}<span className="text-primary-400 font-medium">resent</span>
                        <div  className="border border-primary-400 w-8 h-8 mt-2 rounded-full m-auto py-2 text-center text-xs font-medium">
                            1:59
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
      )
}
