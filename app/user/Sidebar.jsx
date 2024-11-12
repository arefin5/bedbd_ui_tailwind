
"use client";
import Link from 'next/link'; // Ensure you import Link if you intend to use it
import Icon from "/components/Icon";

export default function Sidebar({ user }) {
  // console.log("user", user);

  return (
    <div className="h-[712px] w-[314px] absolute left-0">
      <div className="bg-secondary-50 h-full rounded-b-lg px-4 pt-28 drop-shadow-sm shadow-sm">
        <h1 className="text-3xl font-semibold text-neutral-800 text-center mb-12">
          {user.fname && user.lname  || "Please set your name"}
        </h1>
        <h1 className="text-neutral-500 text-2xl font-semibold mb-6">
          Verified information
        </h1>
        <p className="text-neutral-500 font-medium text-base mb-4">
          Mobile Number:{" "}
          {user?.phone ? (
            <>
              {user.phone}
              <span className="ml-2">
                {user.isPhoneVerified ? (
                  <Icon name="badge-check" className="icon inline" />
                ) : (
                  "Verify now"
                )}
              </span>
            </>
          ) : (
            <Link href="/add-phone">
              <a className="text-primary-500">Add Your Phone</a>
            </Link>
          )}
        </p>
        <p className="text-neutral-500 font-medium text-base mb-4">
         Email :{" "}
          {user?.email ? (
            <>
              {user.email}
              <span className="ml-2">
                {user.isEmailVerified ? (
                  <Icon name="badge-check" className="icon inline" />
                ) : (
                  "Verify now"
                )}
              </span>
            </>
          ) : (
            <Link href="/email">
              <a className="text-primary-500">Add Your Email</a>
            </Link>
          )}
        </p>
       <Link href="/registration/start">
       <h1 className="text-neutral-500 text-2xl font-semibold mb-6">
          Verify your identity
        </h1>
       </Link>
        <p className="text-neutral-500 text-base font-normal mb-12">
          Before you book or host on bedbd, you’ll need to complete this step.
        </p>

        <button className="btn btn-secondary rounded-full">Get Verified</button>
      </div>
    </div>
  );
}
