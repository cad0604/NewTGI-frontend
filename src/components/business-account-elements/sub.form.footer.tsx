import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import { Button } from "@mui/material"
import { ArrowLeft2, ArrowRight2 } from "iconsax-react"
import { size } from "lodash"
import Link from "next/link"
import React from "react"

interface SubFormFooterProps {
    content: {
        content: string,
        previous: boolean,
        next: boolean,
    }
}

export const SubFormFooter: React.FC<SubFormFooterProps> = (props) => {
    return (
        <>
            <div className="flex flex-row w-full mt-8">
                <div className="flex w-full text-gray-400 ml-2 justify-start"><Link href={"#"} >{props.content.content}</Link></div>
                <div className="flex w-full justify-end mr-4">
                    {props.content.previous &&
                        <div className="flex w-36 mr-6">
                            <Button variant="outlined" startIcon={<ArrowLeft />} color="secondary">Back</Button>
                        </div>
                    }
                    {props.content.next &&
                        <div className="flex w-36">
                            <Button variant="outlined" endIcon={<ArrowRight />} color="success" size="small">Next</Button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}