import React from 'react'
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <section className="relative overflow-hidden py-10">
      <hr/>
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-4  text-base font-medium">The Tailwind CSS Component library</p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
            <hr/>
          </div>
          
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Features
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Pricing
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Affiliate Program
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Press Kit
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Account
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Help
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Customer Support
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Terms &amp; Conditions
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Licensing
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;