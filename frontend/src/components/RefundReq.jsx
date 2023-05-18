import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const RefundReq = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Requested_Date, setReqDate] = useState('');
  const [Package_name, setPackName] = useState('');
  const [BookingId, setBookID] = useState('');
  const [Additional_note, setAdditional] = useState('');

    


  const sentData = (e) => {
    e.preventDefault();

      
    const newRefund = {
      Name,
      Email,
      Requested_Date,
      Package_name,
      BookingId,
      Additional_note
    };

    Swal.fire({
      title: 'Do you want to Submit for refund?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't Submit`,
    }).then((result) => {
      if (result.isConfirmed) {
        if(!Name || !Email ||!Requested_Date ||  !Package_name || !BookingId || !Additional_note){
           Swal.fire('Error', 'Please fill all the required fields', 'error');
        }
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
       if (!emailRegex.test(newRefund.Email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email Format',
        text: 'Please enter a valid email address',
      });}
       else
       {axios
          .post('/refund/add', newRefund)
          .then(() => {
            Swal.fire('Refund has been successfully Saved!', '', 'success');
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message,
            });
          });}
        
      } else if (result.isDenied) {
        Swal.fire('Details are not saved', '', 'error');
      }
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 text-center text-3xl">
              Refund Request Form
            </h2>
           
            {/* name */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Your Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* email */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Your Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                     
                      }}
                      
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* reqested date */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="date"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                   Date
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="date"
                      name="date"
                      id="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setReqDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* package name */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="package_name"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Package Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="package_name"
                      id="package_name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Package name"
                      onChange={(e) => {
                        setPackName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* booking id */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="bookid"
                  className="block text-lg font-bold font-medium leading-6 text-gray-900"
                >
                  Booking ID
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="bookid"
                      id="bookid"
                      className="p-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Enter Booking ID"
                      onChange={(e) => {
                        setBookID(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* additional note */}{' '}
            <div className="col-span-full mt-10  gap-x-6 gap-y-8 sm:grid-cols-6">
              <label
                htmlFor="note"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Additional Note
              </label>
              <div className="mt-2">
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Additional note"
                  onChange={(e) => {
                    setAdditional(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="reset"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
          onClick={sentData}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};



export default RefundReq;