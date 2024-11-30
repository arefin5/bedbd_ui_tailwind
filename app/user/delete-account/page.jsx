import Icon from "/components/Icon"


export default function page() {
  return (
    <div className='w-full h-full pt-16 pl-20 pr-4 '>
      <div className='relative'>
          <h3 className='text-primary-400 text-2xl font-semibold'>Privacy & Sharing</h3>
          <button className='absolute-y-center -left-10'>
              <Icon className='icon' name='arrow-left' size={24} />
          </button>
      </div>

        
    <div className='flex justify-between pt-12 w-full'>
      <div className="max-w-sm">
        <h1 className="text-2xl text-neutral-500 font-semibold mb-4">Delete Account</h1>
        <p className="text-neutral-600 text-sm font-normal mb-12">
            Before we get you a company of your data, we’ll just need you to answer a few questions.
        </p>
      
          <button
            type="submit"
            className="w-full btn btn-primary text-base font-medium"
          >
            Delete
          </button>
      </div>

      <div className='max-w-80 py-12 px-4 rounded-lg border border-neutral-300 h-max'>
          <h3 className='text-neutral-500 text-xl font-semibold'>Committed to privacy</h3>
          <p className='text-sm font-normal mt-4 '>bedbd is committed to keeping your data protected. See details in our Privacy Policy.</p>
      </div>
    </div>
</div>  
  )
}
