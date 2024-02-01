"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { CheckBox, LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Button, Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { BlogCardLeft } from "@/components/cards/blog.card";
import { GotoWebsiteThreeCard } from "@/components/cards/goto.website.three.card";

const headerContent = {
    step: "STPE1",
    title: "Fundability Foundation",
    subTitle: "SAVE YOUR BUSINESS ADDRESS",
}

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/business-account/address.png",
    content: "WHY A BUSINESS ADDRESS",
}

const records = {
    title: "Your Details:",
    method: "You Can Edit it",
    invidualRecords: [
        {
            title: "",
            contents: [
                {
                    recordName: "1900 Albany Ave",
                    iconName: "edit",
                },
                {
                    recordName: "1st Floor",
                    iconName: "edit",
                },
                {
                    recordName: "Brooklyn",
                    iconName: "edit",
                },
                {
                    recordName: "New Mexico",
                    iconName: "arrow",
                },
                {
                    recordName: "11210",
                    iconName: "edit",
                },
            ]
        },
    ]
}
const recordsType = {
    title: "Business Address Type:",
    method: "",
    invidualRecords: [
        {
            title: "",
            contents: [
                {
                    recordName: "Home",
                    iconName: "arrow",
                },
            ]
        },
    ]
}

const contentBlogCardLeft = {
    picture: "/business-account/estho.png",
    title:"ESTABLISH A BUSINESS ADDRESS",
    content:"It’s important for a business to have a business address.In order to have a strong business foundation, your business should use a physical business address. Most lenders prefer that you have a business address but, you can use your residential address.",
  }

const informationResuorce = {
    title: "RESOURCES",
    content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
    color: "blue",
}

const footerContent = {
    content: "Return To Business Credit Builder",
    previous: true,
    next: true,
}

export const BuildBusinessAddress = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-max text-gray-700" content="DO YOU HAVE A BUSINESS ADDRESS?" />
                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        {/* edit your details */}
                        <div className="flex flex-col w-[85%]">
                            <EditableContentRecord records={records} />
                            <EditableContentRecord records={recordsType} />
                        </div>
                        {/* acknowledge the following */}
                        <div className="flex flex-col w-[75%]">
                            <div className="flex ml-3 text-blue-gray-600 text-lg">
                                <p>I Acknwledge The Following:</p>
                            </div>
                            <div className="flex flex-row mt-4 text-gray-400">
                                <CheckBox color="primary" />
                                <div className="flex flex-col ml-2">
                                    <p>The business shouldn't use any type of PO Box as the physical business address. Lenders typically view this type of address as higher risk.</p>
                                    <p>The business shouldn't use any type of PO Box as the physical business address.</p>
                                    <p>The business shouldn't use any type of PO Box as the physical business address. </p>
                                </div>
                            </div>
                        </div>

                        {/* save buttong */}
                        <div className="flex w-52 mt-4">
                            <Button placeholder="save the address" color="success" >SAVE</Button>
                        </div>
                        {/* Bolg section */}
                        <div className="flex w-[80%] my-12">
                            <BlogCardLeft content={contentBlogCardLeft} />
                        </div>
                        
                       {/* Resuouces importante */}
                        <div className="flex w-full my-2">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row w-full mt-12">
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/business-account/Phone.svg" />
                            </div>
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/business-account/RingCentral.svg" />
                            </div>
                            <div className="flex w-[33%] justify-center">
                                <GotoWebsiteThreeCard content="Varies" icon="/business-account/MyCorporation.svg" />
                            </div>
                        </div>

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
