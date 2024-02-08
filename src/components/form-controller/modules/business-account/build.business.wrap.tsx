"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";

const headerContent = {
    step: "STPE1",
    title: "Fundability Foundation",
    subTitle: "WRAP ALL",
}

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/business-account/address.png",
    content: "MAKE SURE YOU ALL LISTS RECORD ARE CORRECT",
}


const footerContent = {
    content: "Return To Business Credit Builder",
    previous: true,
    next: true,
    url: "/step1/monitor-report",
}

export const BuildBusinessWrap = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content="DO ALL BUSINESS RECORDS LIST THE CORRECT BUSINESS NAME, ADDRESS, OWNERSHOP AND CONTRACT INFORMATION?" />
                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        <div className="flex text-[5rem] text-green-400">TAHNK YOU!</div>
                        <div className="flex text-2xl text-blue-400 my-4">INFORMATION RECEIVED</div>
                        <div className="flex text-xl text-green-400 mb-12">You Can Success Fully Move To 2nd Step</div>

                        
                        {/* footer  */}
                        <SubFormFooter content={footerContent} />
                    </div>
                </div>
                <div className="flex w-[24%]">
                    <MonitorReportForm />
                </div>

            </div>

        </>
    );
};
