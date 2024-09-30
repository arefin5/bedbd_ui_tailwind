import Icon from "/components/Icon"
import CopyButton from './CopyButton'

export default function page() {

    return (
        <div className=" min-h-screen py-20 ">
          <div className="absolute-center w-screen ">

            <h2 className="text-secondary-400 text-5xl text-center font-semibold mb-2">Congratulation</h2>
            <h3 className='text-2xl font-normal text-neutral-500 text-center max-w-md ml-auto mr-auto '>Your property has listed successfully.</h3>

            <form className="w-full max-w-3xl ml-auto mr-auto mt-8 px-8 select-none">
                <h3>You can share it now.</h3>
                <div className="relative">
                    <input 
                        className='form-input' type="text"
                        id='property-url-input'
                        value='https://www.bedbd.com/property-12542012'
                        readOnly
                        />
                    <CopyButton inputId='property-url-input' />
                </div>

                <div className="flex gap-x-8 mt-14 max-w-xl ml-auto mr-auto">
                    <button className="btn btn-secondary  relative">
                        <Icon name='home' className="icon absolute-y-center left-8 "/> 
                        Back to Home
                    </button>
                    <button className="btn btn-primary ">
                        Show Property
                    </button>
                </div>
            </form>
          </div>
        </div>
      )
}