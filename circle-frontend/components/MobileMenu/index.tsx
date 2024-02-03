"use client"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { mainMenu } from "@/data"
import Link from "next/link"
import SocialLinks from "../SocialLinks"
import "./MobileMenu.css"

type Props = {}

export default function MobileMenu({}: Props) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <div className="mobile-menu">
      <div className="hamburger">
        <button type="button" onClick={() => setOpenMobileMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <Transition.Root show={openMobileMenu} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 mobile-menu-body"
          onClose={setOpenMobileMenu}
        >
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden bg-black/60">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <div className="ml-auto flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpenMobileMenu(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Your content */}
                        <div className="h-full">
                          <ul className="flex flex-col justify-start mb-5">
                            {mainMenu.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href={item.url}
                                  className="animate-link !text-black text-4xl py-5 block"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
