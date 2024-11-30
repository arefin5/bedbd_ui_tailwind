export default function PaymentFaied() {
  return (
    <div className='z-[9999] fixed top-0 left-0 w-full h-screen bg-white h-screen overscroll-y-none bg-opacity-50 bg-black backdrop-blur-sm'>
        <div className='bg-secondary-50 rounded-lg w-full max-w-[814px] h-full max-h-[640px] absolute-center drop-shadow-md'>
            <div className='max-w-[350px] absolute-center'>
                <div className='mx-auto w-[92px] h-[75px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="76" viewBox="0 0 92 76" fill="none">
                        <path d="M86.5976 75.9185H5.40229C1.16256 75.9185 -1.4243 71.2572 0.818778 67.6593L41.4165 2.54372C43.5311 -0.847908 48.469 -0.847908 50.5835 2.54372L91.1812 67.6593C93.4242 71.2572 90.8373 75.9185 86.5976 75.9185Z" fill="#E73F3C"/>
                        <path d="M45.9994 51.6164C44.2004 51.6164 42.7058 50.229 42.5721 48.4349L40.7416 23.8619C40.4965 16.8733 50.459 16.1211 51.2573 23.0785C51.2762 23.333 51.274 23.6143 51.2573 23.8619L49.4268 48.4349C49.2931 50.229 47.7985 51.6164 45.9994 51.6164Z" fill="white"/>
                        <path d="M46.004 66.1335C48.4058 66.1335 50.3529 64.1864 50.3529 61.7845C50.3529 59.3826 48.4058 57.4355 46.004 57.4355C43.6021 57.4355 41.655 59.3826 41.655 61.7845C41.655 64.1864 43.6021 66.1335 46.004 66.1335Z" fill="white"/>
                    </svg>
                </div>
                <h3 className='text-[#E73F3C] text-4xl font-semibold mt-6 text-center max-w-[348px]'> Payment Failed </h3>
                <p className='text-neutral-500 text-base font-medium mt-2 max-w-[348px]'>Your payment was cancelled by your bank or associated financial institution.</p>
                <button className='relative btn btn-secondary w-[290px] ml-[30px] mt-12'>Back to Home </button>
            </div>
        </div>
    </div>
  )
}
