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
import { SelectCard } from "@/components/cards/select.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";

const headerContent = {
    step: "STPE1",
    title: "Fundability Foundation",
    subTitle: "SET UP BUSINESS EIN#",
}

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/business-account/address.png",
    content: "BUSINESS EIN#",
}

const records = {
    title: "Your Details:",
    method: "Edit",
    invidualRecords: [
        {
            title: "EIN# Number:",
            icon: "",
            contents: [
                {
                    recordName: "82-3496580",
                    iconName: "edit",
                },
            ]
        },
    ]
}

const contentBlogCardLeft = {
    picture: "/business-account/estho.png",
    title: "APPLY FOR YOUR BUSINESS'S EIN#",
    content: "The United States requires all business entities to file for an EIN#. Like a social security number is to an individual an EIN# is to a business.",
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

export const BuildBusinessEin = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-[80%] text-center text-gray-700" content="DO YOU HAVE A BUSINESS EIN#" />
                        {/* Vidio card */}
                        <VideoCard videoContent={videoConten} />

                        {/* edit your details */}
                        <div className="flex flex-col w-[85%]">
                            <EditableContentRecord records={records} />
                        </div>
                        {/* import Select Card */}
                        <div className="flex my-8">
                            <DownloadCard />
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
                            <div className="flex w-[50%] justify-center">
                                <GotoWebsiteCard content="Varies" icon="/business-account/NorthOne.svg" />
                            </div>
                            <div className="flex w-[50%] justify-center">
                                <GotoWebsiteCard content="Varies" icon="/business-account/MyCorporation.svg" />
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
