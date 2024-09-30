
import Icon from 'components/Icon'

export default function page() {
  return (
    <div className='max-w-sm space-y-12 '>
        <div className='space-y-4'>
            <h3 className='text-neutral-500 font-semibold  text-2xl'>Manage your account data</h3>
            <p className='text-sm pr-12 text-neutral-500'>You can make a request to download or delete your data from bedbd.</p>
        </div>
        <div className=' relative'>
            <h3 className='text-neutral-500 font-semibold text-lg'>Request your data</h3>
            <button className='absolute top-1 right-12 '><Icon name='arrow-right' className='icon '  size={24}/></button>

            <p className='text-sm pr-12  mt-4'>We’ll create a file for you to download your personal data</p>
        </div>

        <div className='relative'>
            <button className='absolute top-1 right-12 '><Icon name='arrow-right' className='icon '  size={24}/></button>

            <h3 className='text-neutral-500 font-semibold text-lg'>Delete your account</h3>
            <p className='text-sm pr-12 mt-4'>Ths will permanently delete your account & your data.</p>
        </div>
    </div>
  )
}