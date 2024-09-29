import PropertyGalleryItem from '/components/PropertyGallery/PropertyGalleryItem'

export default function Wishlist() {
  return (

    <div className='relative'>
        <h3 className='text-3xl text-primary-400 font-medium mt-10 ml-6'>Wishlist</h3>
        <div className=' grid grid-cols-3 gap-6 pl-14 mt-6'>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
        </div>
    </div>
    
  )
}
