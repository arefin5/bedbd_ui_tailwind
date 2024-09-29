import Google from './Google'
import Apple from './Apple'
import Facebook from './Facebook'


export default function SocialLogin() {
  return (
    <div className='w-full max-w-lg mt-5 | relative-x-center '>
        <div className='w-full relative  custom-bg-line-300 '>
            <h3 className='text-neutral-300 bg-white text-xs font-semibold px-4 ml-8 w-fit '>Or Continue With</h3>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-7' >
            <Google/>
            <Facebook/>
            {/* <Apple/> */}
        </div>
    </div>
  )
}
