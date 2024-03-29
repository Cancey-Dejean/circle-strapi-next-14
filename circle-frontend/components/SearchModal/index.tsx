"use client"
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "react-aria-components"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"

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
                  <Form className="max-w-[600px] mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-stretch gap-4">
                      <div className="flex-1 h-full">
                        <TextField name="email" type="email" isRequired>
                          <Label className="sr-only">Search</Label>

                          <div className="h-full">
                            <Input
                              type="text"
                              placeholder="Search"
                              className="input-field min-h-[54px] px-4 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  rounded-full ring-1 ring-inset ring-gray-600"
                            />
                          </div>
                          <FieldError className="input-field-error" />
                        </TextField>
                      </div>

                      <div>
                        <Button
                          type="submit"
                          className="btn-base btn-prime header-cta"
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
