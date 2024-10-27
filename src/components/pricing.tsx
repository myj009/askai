"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full}`}>
      <div
        className={`relative flex flex-col h-full p-6 rounded-2xl bg-background border ${
          props.popular
            ? "border-blue-600"
            : "border-slate-200 dark:border-slate-900"
        }  shadow shadow-slate-950/5`}
      >
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
              $
            </span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-slate-500 font-medium">/mo</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">
            {props.planDescription}
          </div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0"
          >
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
          Essential Features:
        </div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div className="container w-full flex flex-col gap-10 mt-40 px-2 md:px-6">
      <h4 className="text-3xl lg:text-5xl text-foreground lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium">
        Pricing
      </h4>
      {/* Pricing toggle */}
      <div className="flex gap-1 justify-center max-w-[14rem] m-auto">
        <Button
          onClick={() => {
            setIsAnnual(false);
          }}
          className={`${
            !isAnnual && "bg-blue-600 hover:bg-blue-600 text-white"
          }`}
        >
          Monthly
        </Button>
        <Button
          onClick={() => {
            setIsAnnual(true);
          }}
          className={`${
            isAnnual && "bg-blue-600 hover:bg-blue-600 text-white"
          }`}
        >
          Annually Save 20%
        </Button>
      </div>
      <div className="flex justify-center w-full">
        <div className="max-w-sm grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {/* Pricing tab 1 */}
          <PricingTab
            yearly={isAnnual}
            planName="Hobby"
            price={{ yearly: 0, monthly: 0 }}
            planDescription="For Individuals"
            features={[
              "AI chat access - 100 messages/day",
              "Image Genration - 5 images/day",
              "Small selection of pre-designed templates for image creation",
              "Standard-resolution images",
              "Email support with a 48-hour response time",
              "Access to user community forum for help and tips",
            ]}
          />

          {/* Pricing tab 2 */}
          <PricingTab
            yearly={isAnnual}
            popular={true}
            planName="Basic"
            price={{ yearly: 4, monthly: 5 }}
            planDescription="For Professionals"
            features={[
              "Everything in hobby",
              "Unlimited chat access",
              "Unlimited Image generation",
              "Video Generation - 5 clips/day",
              "Audio Generation - 5 tracks/day",
              "Access to all pre-designed templates for image, audio and video generation",
              "HD Resolution images and videos",
              "Email support with a 24-hour response time",
              "Access to private discord",
            ]}
          />

          {/* Pricing tab 3 */}
          <PricingTab
            yearly={isAnnual}
            planName="Pro"
            price={{ yearly: 8, monthly: 10 }}
            planDescription="For Enterprise"
            features={[
              "Everything in pro",
              "Unlimited chat access",
              "Unlimited Image generation",
              "Unlimited Video Generation",
              "Unlimited Audio Generation",
              "Access to latest reasoning model",
              "Access to all pre-designed templates for image, audio and video generation",
              "Ultra-HD Resolution images and videos",
              "Email support with a 8-hour response time",
              "Access to private discord",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
