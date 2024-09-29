import ToggleButton from "/components/ToggleButton"

export default function page() {
  return (
    <div className='max-w-sm'>
        <h3 className='text-neutral-500 font-semibold  text-2xl'>Activity sharing</h3>
        <p className='text-sm pr-12 text-neutral-600 mt-4'>Decide how your profile & activity are shown to others.</p>
        <h3 className='text-neutral-500 font-semibold text-lg mt-2'>Include my profile & listing in search engines</h3>
        <p className='text-sm pr-12 mt-4 mb-6'>
          We’ll create a file for you to download your personal data
        </p>
        <ToggleButton/>
        
        <h3 className='text-neutral-500 font-semibold text-2xl mt-14'>Data sharing</h3>
        <p className='text-sm pr-12 mt-4'>Decide how your data is used for bedbd research.</p>
        <h3 className='text-neutral-500 font-semibold text-lg  mt-4'>Use my first name & profile photo to help fight discrimination</h3>
        <p className='text-sm pr-12 mt-2 mb-6'>
          Leaving this on means that you’re helping us further studies to help identify and prevent discrimination from happening on bedbd. Learn more
        </p>
        <ToggleButton/>
    </div>
  )
}