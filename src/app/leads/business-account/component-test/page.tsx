import { BuildBusinessCredit } from "@/components/form-controller/modules/business-account/build.business.credit";
import { VideoCard } from "@/components/cards/video-card";
import { ImportantInformation } from "@/components/business-account-elements/important.imformation";
import { ArrowLineText } from "@/components/business-account-elements/arrow.line.text";
import { GeneralCard } from "@/components/cards/general.cad";
import { GotoWebsiteCard } from "@/components/cards/goto.website.card";
import { EditableContentRecordInvidual } from "@/components/business-account-elements/editable.content.record.invidual";
import { EditableContentRecord } from "@/components/business-account-elements/edaitable.content.record";
import { SelectCard } from "@/components/cards/select.card";
import { BlogCardRight, BlogCardLeft } from "@/components/cards/blog.card";
import { DownloadCard } from "@/components/business-account-elements/dwonload.card";

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

const invidualRecords = {
  title: "test",
  contents: [
    {
      recordName: "Mainga",
      iconName: "edit",
    },
    {
      recordName: "Mainga",
      iconName: "arrow",
    },
    {
      recordName: "Mainga",
      iconName: "date",
    },
  ]
}

const records = {
  title: "Ttile",
  method: "Make Edit",
  invidualRecords: [
    {
      title: "test",
      contents: [
            {
              recordName: "Mainga",
              iconName: "edit",
            },
            {
              recordName: "Mainga",
              iconName: "arrow",
            },
            {
              recordName: "Mainga",
              iconName: "date",
            },
          ]
      },
      {
        title: "test",
        contents: [
          {
            recordName: "Mainga",
            iconName: "edit",
          },
          {
            recordName: "Mainga",
            iconName: "arrow",
          },
          {
            recordName: "Mainga",
            iconName: "date",
          },
        ]
      },
      {
        title: "test",
        contents: [
          {
            recordName: "Mainga",
            iconName: "edit",
          },
          {
            recordName: "Mainga",
            iconName: "arrow",
          },
          {
            recordName: "Mainga",
            iconName: "date",
          },
        ]
      },
  ]
}

let selectCardProps = {
  content:{
    title: "Please indicate your response(Yes or No) for both of the following questionsbefore proceeding.",
    contents1: "Is the business address and ownership information accurate on your official documents? ",
    contents2: "Are the business address and ownership information accurate on your official documents? ",
  }
  
}

const contentBlogCardLeft = {
    picture: "",
    title:"FILE A BUSINESS ENTITY",
    content:"It’s important that you have a strong business foundation and it all starts with filing your business entity with your Secretary of State. Each state has a different filing and fee structure. Like a birth certificate is to an individual a business entity is the birth of a business.",
  }

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center content-center items-center">
        <VideoCard videoContent={videoConten} />
        <ImportantInformation information={information} />
        <ArrowLineText type="flex flex-col w-max text-gray-700" content="DO YOU HAVE A BUSINESS NAME?" />
        <GeneralCard icon="/business-account/search.svg" content="Search secretary of state records" />
        <GotoWebsiteCard content="Variable" icon="/business-account/MyCorporation svg.svg" />
        <EditableContentRecordInvidual invidualRecord={invidualRecords} />
        <EditableContentRecord records={records} />
        <SelectCard content={selectCardProps.content} />
        <DownloadCard />
        {/* <BlogCardRight /> */}
        <BlogCardLeft content={contentBlogCardLeft} />
        <div className="mt-10"></div>
      </div>

    </>
  )

}
