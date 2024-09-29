import Icon from '/components/Icon'
import CheckBox from './CheckBox'

export default function page() {

const termsandCondition = [
    {
        id:0,
        description: 'Lorem ipsum dolor sit amet consectetur. Sit vitae semper nam amet integer. Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.',
    },
    {
        id:1,
        description: 'Fermentum ornare vulputate condimentum massa quis. Sit mi nisl hac orci dolor proin scelerisque lacus. Augue pellentesque sed ornare sit.',
    },
    {
        id:2,
        description: 'Vitae enim sit facilisis nunc. Nec hendrerit risus risus venenatis vitae eu et malesuada. Id egestas tortor at mollis fermentum netus.'

    }

]




    return (
        <div className='modal-background'>
            <div className='pt-14 pb-24 sm:px-24 px-16 bg-secondary-50 w-screen max-w-3.5xl | absolute-center rounded-2xl'>
                <h3 className='registration-form-title mb-12' >Terms & Conditions</h3>

                <ul className='w-full max-w-xl numbered-items relative-x-center grid gap-y-3'>
                    {
                        termsandCondition.map(
                            item=> <li>{item['description']}</li>)
                    }
                </ul>
                <form >
                    <CheckBox id="custom-checkbox" label="I agree with the terms and conditions" />
                    <button className='btn btn-primary mt-8'>Continue</button>
                </form>

                <Icon name='arrow-left' className='text-neutral-600 cursor-pointer absolute top-8 left-8'/>

            </div>
        </div>
        
      )
}
