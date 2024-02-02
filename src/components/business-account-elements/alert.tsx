'use client'
import { useState } from "react"

import { Verified } from "@mui/icons-material"
import Image from "next/image"
interface AlertProps {
    content: string,
}

export const Alert:React.FC<AlertProps> = (props) => {
    const [showAlert, setShowAlert] = useState(true)

    return (
        <>
            {showAlert ? (
                <div
                    className="flex flex-row text-gray-300 px-6 py-4 border-0 rounded relative mb-4 "
                >
                    <span className="text-xl inline-block mr-1 align-middle">
                        {/* <Verified color="primary" /> */}
                        <Image src={"/report/init/Shield-DoneVerifiedIcon.svg"} alt="" width={40} height={40} />
                    </span>

                    <span className="inline-block align-middle ml-5 mr-8">
                        {props.content}
                    </span>

                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    )
}