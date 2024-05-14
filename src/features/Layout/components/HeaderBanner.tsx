import React from "react";
import Link from "next/link";
import { Button } from "@/blocks/components/Button";
import { HeaderBannerProps } from "../@types";

export const HeaderBanner = ({ title, content, image }: HeaderBannerProps) => {
  return (
    <div className="banner-wrapper">
      {/* league banner section */}
      <div className="flex flex-row w-full my-12 space-x-6">
        <div className="flex flex-row bg-piccolo rounded-xl text-broly">
          <div className="w-[333px] p-4 grid grid-cols content-center ">
            {/* this div will accept the banner title */}
            <h4 className="text-broly text-2xl">Play a Match</h4>
            {/* this paragrahp will contain the banner description */}
            <p className="text-base mt-5 mb-5">
              Your team does not have any next match. Join a competition and
              start winning prizes
            </p>
            {/* this button will accept the call to action link */}
            <Button className="w-1/2 text-xs bg-popo px-2 py-4">
              <Link href="/" className="">
                Join Pro Soccer League
              </Link>
            </Button>
          </div>

          {/* this will be replaced with the image prop */}
          <div className="relative">
            <img
              src="/banner1.svg"
              alt="banner-background"
              className="w-full"
            />
            <img
              src="/banner2.svg"
              alt="banner-hero"
              className="absolute top-0 left-0 bottom-0 w-full h-full mt-3 pt-4"
            />
          </div>
        </div>
      </div>

      {/* squad banner section */}
      <div className="flex flex-row w-full my-12 space-x-6">
        <div className="flex flex-row bg-piccolo rounded-xl text-broly">
          <Link href="/squad">
            <img
              src="/banner4.svg"
              alt="banner-background"
              className="w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};