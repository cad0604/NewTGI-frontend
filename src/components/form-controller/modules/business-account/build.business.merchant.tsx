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
    subTitle: "BUSINESS MERCHANT ACCOUNT",
}

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/business-account/address.png",
    content: "DOING MORE TO YOUR BUSINESS",
}

const records = {
    title: "Required:",
    method: "Edit",
    invidualRecords: [
        {
            title: "My Merchant Card Processor",
            icon: "",
            contents: [
                {
                    recordName: "",
                    iconName: "edit",
                },
            ]
        },
    ]
}

const contentBlogCardLeft = {
    picture: "/business-account/estho.png",
    title: "MERCHANT ACCOUNT",
    content: "A Merchant accounts allows your business to accept credit cards and debit cards. Statistically customers will spend more if they can purchase by card. Merchant processing under your business name alse increases your finance options.",
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

export const BuildBusinessMerchant = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-max text-gray-700" content="DO YOU HAVE A BUSINESS MERCHANT ACCOUNT?" />
                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        {/* Bolg section */}
                        <div className="flex w-[95%] my-12">
                            <BlogCardLeft content={contentBlogCardLeft} />
                        </div>


                        {/* edit your details */}
                        <div className="flex flex-col w-[85%]">
                            <EditableContentRecord records={records} />
                        </div>

                        {/* save buttong */}
                        <div className="flex w-52 my-12 ml-80">
                            <Button placeholder="save the address" color="success" >SAVE</Button>
                        </div>

                        {/* Resuouces importante */}
                        <div className="flex w-full my-12 ">
                            <ImportantInformation information={informationResuorce} />
                        </div>

                        {/* Website cards */}
                        <div className="flex flex-row w-full my-14">
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