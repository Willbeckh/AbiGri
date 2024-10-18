"use client";

import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema } from "@/utils/validation/bookingForm";
import {
  HiUser,
  HiCalendar,
  HiPhone,
  HiAtSymbol,
  HiUserGroup,
} from "react-icons/hi";

const BookingForm = () => {
  // init useForm hook with zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookingFormSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitForm = (data: any) => {
    console.log("Form data: ", data);
    reset();
  };

  return (
    <div>
      <h1 className="font-semibold text-center text-xl text-gray-700 border-b-2 border-button mb-2 pb-4">
        Book Farm Demostration Tour
      </h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 gap-y-1 p-4">
          {/* name */}
          <div>
            <label htmlFor="name" className=" form-control">
              <div className="join flex ">
                <div className="join-item content-center bg-base-300 px-1">
                  <HiUser size={20} className="" />
                </div>

                <input
                  type="text"
                  id="name"
                  className="input input-bordered input-sm join-item"
                  {...register("name")}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="label">
                <span className="text-red-500 label-text-alt">
                  {errors.name && errors.name.message?.toString()}
                </span>
              </div>
            </label>
          </div>

          {/* email input */}
          <div>
            <label htmlFor="email" className="form-control">
              <div className="flex join">
                <div className="join-item content-center bg-base-300 px-1">
                  <HiAtSymbol size={20} className="" />
                </div>

                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="email@example.com"
                  required
                  className="input input-sm input-bordered join-item"
                />
              </div>

              <div className="label">
                <span className="text-red-500 text-xs label-text-alt">
                  {errors.email && errors.email.message?.toString()}
                </span>
              </div>
            </label>
          </div>

          {/* phone */}
          <div>
            <label htmlFor="phone" className="">
              <div className="join">
                <div className="join-item content-center bg-base-300 px-1">
                  <HiPhone size={20} className="" />
                </div>
                <input
                  id="phone"
                  {...(register("phone"))}
                  placeholder="phone number"
                  className="input input-bordered input-sm join-item"
                />
              </div>
            </label>
            <div className="label">
              <span className="text-red-500 label-text-alt text-xs">
                {errors.phone && errors.phone.message?.toString()}
              </span>
            </div>
          </div>

          {/* guests */}
          <div>
            <label htmlFor="guest" className="">
              <div className="join">
                <div className="join-item content-center bg-base-300 px-1">
                  <HiUserGroup size={20} className="" />
                </div>
                <input
                  id="guest"
                  type="number"
                  {...register("numberOfGuests", { valueAsNumber: true })}
                  placeholder="Guest number"
                  className="input input-bordered input-sm join-item"
                />
              </div>
            </label>
            <div className="label">
              <span className="text-red-500 label-text-alt text-xs">
                {errors.numberOfGuests &&
                  errors.numberOfGuests.message?.toString()}
              </span>
            </div>
          </div>

          {/* date */}
          <label htmlFor="date" className="cursor-pointer">
            <div className="join">
              <div className="join-item content-center bg-base-300 px-1">
                <HiCalendar size={20} className="" />
              </div>
              <input
                type="date"
                id="date"
                {...register("date")}
                className="input input-sm input-bordered join-item"
              />
            </div>
            <div className="label">
              <span className="text-red-500 label-text-alt text-xs">
                {errors.date && errors.date.message?.toString()}
              </span>
            </div>
          </label>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            text="Book Tour"
            className="btn-md btn-block  bg-button hover:btn-outline hover:btn-success"
          />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
