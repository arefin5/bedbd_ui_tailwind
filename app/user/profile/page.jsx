import Icon from "/components/Icon"

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-10 pt-20 px-16 ">
      <div className="bg-secondary-50 p-6 rounded-xl drop-shadow-sm shadow-sm hover:drop-shadow-md">
        <Icon name="shield-check" className="icon mb-[10px]"/>
        <h3 className="text-neutral-600 font-semibold mb-[10px] text-xl ">Personal Info</h3>
        <p className="font-medium text-base text-neutral-600">Provide personal details and how we can reach you</p>
      </div>


      <div className="bg-secondary-50 p-6 rounded-xl drop-shadow-sm shadow-sm hover:drop-shadow-md">
        <Icon name="shield-check" className="icon mb-[10px]"/>
        <h3 className="text-neutral-600 font-semibold mb-[10px] text-xl ">Login & Security</h3>
        <p className="font-medium text-base text-neutral-600">Update your password and secure your account</p>
      </div>

      <div className="bg-secondary-50 p-6 rounded-xl drop-shadow-sm shadow-sm hover:drop-shadow-md">
        <Icon name="shield-check" className="icon mb-[10px]"/>
        <h3 className="text-neutral-600 font-semibold mb-[10px] text-xl ">Notification</h3>
        <p className="font-medium text-base text-neutral-600">Choose notification preferences and how you want to be contacted</p>
      </div>

      <div className="bg-secondary-50 p-6 rounded-xl drop-shadow-sm shadow-sm hover:drop-shadow-md">
        <Icon name="shield-check" className="icon mb-[10px]"/>
        <h3 className="text-neutral-600 font-semibold mb-[10px] text-xl ">Privacy & Sharing</h3>
        <p className="font-medium text-base text-neutral-600">Manage your personal data, connected service, and data sharing settings</p>
      </div>


      <div className="bg-secondary-50 p-6 rounded-xl drop-shadow-sm shadow-sm hover:drop-shadow-md">
        <Icon name="shield-check" className="icon mb-[10px]"/>
        <h3 className="text-neutral-600 font-semibold mb-[10px] text-xl ">Payment & Payouts</h3>
        <p className="font-medium text-base text-neutral-600">Review payments, payouts, coupons and gift cards</p>
      </div>

      <div className="bg-secondary-50 p-6 rounded-xl drop-shadow-sm shadow-sm hover:drop-shadow-md">
        <Icon name="shield-check" className="icon mb-[10px]"/>
        <h3 className="text-neutral-600 font-semibold mb-[10px] text-xl ">Referral credit & Coupon</h3>
        <p className="font-medium text-base text-neutral-600">You have &0 referral credits and coupon. Learn more.</p>
      </div>
    </div>
    
  )
}
