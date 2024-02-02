"use client"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { ButtonLink } from "../ButtonLink"

export default function SearchModal({ searchImg }: { searchImg: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Image
          src={searchImg || "/images/search.svg"}
          width={24}
          height={25}
          alt="Search button"
        />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-start sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -translate-y-4 sm:translate-y-0"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full  sm:p-6">
                  <form className="max-w-[600px] mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-stretch gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="search"
                          className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900 sr-only"
                        >
                          Search
                        </label>

                        <div className="h-full">
                          <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Your email"
                            className="input-field h-full px-4 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  rounded-full ring-1 ring-inset ring-gray-300"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <ButtonLink
                          as="button"
                          type="button"
                          size="medium"
                          onClick={() => setOpen(false)}
                          className="w-full sm:w-full"
                        >
                          Search
                        </ButtonLink>
                        {/* <button
                          type="button"
                          className="inline-flex w-full justify-center bg-[#1e8ba3] px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-full items-center"
                          onClick={() => setOpen(false)}
                        >
                          <Image
                            src={searchImg || "/images/search.svg"}
                            width={24}
                            height={25}
                            alt="Search button"
                          />
                        </button> */}
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
