import Icon from "/components/Icon"

import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-secondary-400 text-white px-4 pt-12 w-fit xl:w-64 flex grid justify-between" >
        <ul className="space-y-6 ">
          <li className="hidden">
            <Icon name="circle-chevron-right" className="icon"/>
          </li>
          <Link
                href="/host">
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="layout-dashboard" className="icon" />
            <span className="hidden xl:block">Dashboard</span> 
          </li>
          </Link>
          <Link href="/host/profile">
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="user-cog" className="icon" /> 
            <span className="hidden xl:block">Profile </span> 
          </li>
          </Link>
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="mail" className="icon" />
            <span className="hidden xl:block">Message (2)</span> 
          </li>
          <Link href="/host/properties">

         
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="home" className="icon" /> 
            <span className="hidden xl:block">Property</span> 
          </li>
          </Link>
          <Link href="/">

          
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="arrow-right-left" className="icon" />
            <span className="hidden xl:block">Transaction</span> 
          </li>
          </Link>
          
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="settings" className="icon" /> 
            <span className="hidden xl:block">Setting</span> 
          </li>

          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="history" className="icon" /> 
            <span className="hidden xl:block">History</span> 
          </li>
        </ul>

        <span className="rounded-lg ml-auto mr-auto bg-white  bg-opacity-20 h-fit w-full text-center py-4">
          {`Russell Ahmed`}
        </span>

        <button className="mb-16 px-4 py-0 rounded-lg ml-auto mr-auto">
          <Icon name="log-out" className="icon text-white inline mr-2.5"/>
          <span className="">Log out</span>
        </button>
      </div>
  )
}
