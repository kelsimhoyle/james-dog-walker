import React, { Fragment } from 'react'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { Popover, Transition } from '@headlessui/react'
import { FaPaw } from "@react-icons/all-files/fa/FaPaw";

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'

const Header = ({ siteTitle, pages }) => (
  <Popover>
    {({ open }) => (
      <>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-10">
          <nav
            className="relative flex items-center justify-between h-full "
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">James the Dog Walker</span>
                  <StaticImage src="../images/James.png" height="100" />

                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MdMenu className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {pages.map((item) => (
              <Link key={item.name} to={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </Link>
            ))}
              {
                isLoggedIn() && (
                  <p
                    onClick={
                      () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
                    }
                    style={styles.link}
                  >Sign Out</p>
                )
              }
            </div>
          </nav>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            static
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                <FaPaw className="text-4xl text-green-400" />

                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <MdClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                 {pages.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))} 
              </div>
             

            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>

  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={styles.headerTitle}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  // {
  //   isLoggedIn() && (
  //     <p
  //       onClick={
  //         () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
  //       }
  //       style={styles.link}
  //     >Sign Out</p>
  //   )
  // }
  //   </div>
  // </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline'
  }
}

export default Header
