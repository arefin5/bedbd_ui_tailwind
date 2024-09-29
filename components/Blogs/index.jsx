import BlogItem from './BlogItem'

export default function Blogs() {
  return (
    <div className=' mx-auto my-20 px-6'>
        <h3 className="text-3xl font-semibold text-primary-400">Property Rental Guides & Tips</h3>
        <div className='mt-6 flex gap-x-6 overflow-scroll no-scrollbar'>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
        </div>    
        <div className='flex justify-center mt-10'>                
            <button className='btn-primary  font-semibold w-full rounded-full py-3 max-w-60 mt-4'>View All Blogs...</button>
        </div>    
    </div>  
  )
}
