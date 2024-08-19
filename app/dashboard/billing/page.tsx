"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";

function Billing() {

  const handleSubscribe = () => {
    // Add your subscription code here
    console.log("Subscribed");
  };

  return (
    <div className=" bg-slate-100 px-4 py-8">
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Upgrade with Monthly Plan
          </h2>
          <p className="text-sm text-gray-500">
            Choose the monthly plan to access premium features
          </p>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 mx-auto gap-6 max-w-2xl max-sm:mx-auto mt-12">
          <div className="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 className="text-gray-800 text-lg mb-3">Free</h4>
            <h3 className="text-4xl font-semibold ">
              $0
              <sub className="text-gray-500 font-medium text-sm ml-1">
                / month
              </sub>
            </h3>

            <hr className="my-6 border-gray-300" />

            <div>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  10,000 Cedits/Month
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  20 Content Templates
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  Unlimited Download and Copy
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  1 Month of History
                </li>
              </ul>

              <Button
                variant="outline"
                type="button"
                className="w-full mt-6 px-4 py-2 text-sm tracking-wide"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="bg-white shadow rounded-3xl p-6 hover:scale-105 transition-all duration-300">
            <h4 className="text-gray-800 text-lg mb-3">Monthly</h4>
            <h3 className="text-4xl font-semibold ">
              $4.99
              <sub className="text-gray-500 font-medium text-sm ml-1">
                / month
              </sub>
            </h3>

            <hr className="my-6 border-gray-300" />

            <div>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  100,000 Credits/Month
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  50+ Content Templates
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  Unlimited Download and Copy
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  1 Year of History
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <CircleCheckIcon className="w-5 h-5 mr-3 fill-purple-100 text-purple-600" />
                  Premium Resume Builder
                </li>
              </ul>
              <Button
                onClick={() => handleSubscribe()}
                className="w-full mt-6 px-4 py-2 text-sm tracking-wide"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
