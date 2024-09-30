
export default function index() {
  return (
    <div className="container mx-auto px-6 my-20 ">
        <h3 className='text-primary-400 font-semibold text-3xl mb-6 w-full max-w-72 lg:max-w-lg '>Property Rental Guides & Tips</h3>
        <div className='md:flex flex-row-reverse justify-between  '>
            <div className="h-96 w-full max-w-md bg-neutral-200 aspect-[4/3] rounded-lg mt-0  md:-mt-24 lg:-mt-16"/>
            <div>
                <p className="text-neutral-300 font-normal text-base max-w-2xl text-wrap mb-12  mt-6 md:mt-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>     
                <div>
                    <button className="btn btn-tertiary text-neutral-600 w-fit py-0 font-bold">Ask A Question</button>
                    <button className="btn btn-tertiary text-neutral-600 w-fit py-0 ml-10 font-bold">Find a Property</button>     
                </div>
                <div className="flex gap-x-5 mt-6">
                    <button className="btn btn-secondary rounded-full max-w-60">Discover More</button>
                    <button className="btn btn-primary rounded-full max-w-60">View All Blogs</button>

                </div>
            </div>
        </div>        
    </div>
  )
}
