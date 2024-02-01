"use client";
// @ts-ignore
import React from "react";
import { MonitorReportForm } from "@/components/business-account-elements/monitor.report.form";
import { LineAxis } from "@mui/icons-material";
import { SubHeader } from "@/components/business-account-elements/sub.header";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { Input } from "@mui/material";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { SubFooter } from "@/components/footer/footer";
import { SubFormFooter } from "@/components/business-account-elements/sub.form.footer";

const headerContent = {
    step: "STPE1",
    title: "Fundability Foundation",
    subTitle: "CREATE A BUSINESS NAME",
}

const videoConten = {
    title: "Watch Video Transcript:",
    videoUrl: "/business-account/Rectangle 115.png",
    content: "BUSINESS CREDIBILITY",
}

const information = {
    title: "INFO",
    content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
    color: "green",
}

const informationResuorce = {
    title: "RESOURCES",
    content: "There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name! There is a lot that goes into a name!There is a lot that goes into a name!There is a lot that goes into a name!",
    color: "blue",
}

const footerContent = {
    content: "Return To Business Credit Builder",
    previous: false,
    next: true,
}
interface Option {
    label: string;
}
export const BuildBusinessCredit = () => {
    return (
        <>
            <div className="flex flex-row w-[80%] ml-[10%] mt-10 justify-center border-2 border-blue-400 p-6 rounded-2xl">

                <div className="flex flex-col w-[76%] justify-start mt-6">
                    <SubHeader content={headerContent} />
                    <div className="flex flex-col w-full px-2 justify-center items-center content-center mt-6">
                        <ArrowLineText type="flex flex-col w-max text-gray-700" content="DO YOU HAVE A BUSINESS NAME?" />
                        {/* Vidio card */}
                        <div className="flex flex-row w-full">
                            <div className="flex w-[50%] justify-start">
                                <VideoCard videoContent={videoConten} />
                            </div>
                            <div className="flex w-[50%] justify-end">
                                <VideoCard videoContent={videoConten} />
                            </div>
                        </div>

                        {/* import data */}
                        <div className="flex w-full my-12">
                            <ImportantInformation information={information} />
                        </div>

                        {/* line string */}
                        <div className="flex w-full my-12 justify-center">
                            <ArrowLineText type="flex flex-col w-max text-gray-500" content="ENTER BUSINESS NAME?" />
                        </div>
                        <Input placeholder="" defaultValue={"Type your business name here"} className="flex w-[80%] my-8 text-gray-500" aria-hidden />
                        {/* general cards */}
                        <div className="flex flex-row w-full mt-12">
                            <div className="flex w-[50%] justify-center">
                                <GeneralCard icon="/business-account/search.svg" content="Search secretary of state records" />
                            </div>
                            <div className="flex w-[50%] justify-center">
                                <GeneralCard icon="/business-account/Card.svg" content="View Finance restricted industries" />
                            </div>
                        </div>

                        {/* Resuouces importante */}
                        <div className="flex w-full my-12">
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
