import Image from "next/image"

interface BlogCardProps {
    content: {
        picture: string,
        title: string,
        content: string,
    }
}

export const BlogCardRight: React.FC<BlogCardProps> = (props) => {
    return (
        <>

            <div className="flex w-full">
                <div className="flex flex-row border-2 rounded-lg overflow-hidden mb-4 shadow-sm h-60 relative">
                    <div className="flex flex-col p-4 static">
                        <strong className=" inline-block mb-2 text-blue-500">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-gray-600">Nov 12</div>
                        <p className=" mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="flex col-auto divide-none divide-x">
                        <Image src={"/business-account/image illustration for business address.png"} objectFit="contain" alt="ssa" width={300} height={250} />
                    </div>
                </div>
            </div>

        </>
    )
}

export const BlogCardLeftTest: React.FC<BlogCardProps> = (props) => {
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-row border-2 rounded-lg overflow-hidden mb-4 shadow-sm h-60 relative">
                    <div className="flex col-auto divide-none divide-x">
                        <Image src={"/business-account/image illustration for business address.png"} objectFit="contain" alt="ssa" width={400} height={350} />
                    </div>
                    <div className="flex flex-col p-4 static justify-center content-center items-center">
                        <strong className=" inline-block mb-2 text-blue-500">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-gray-600">Nov 12</div>
                        <p className=" mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export const BlogCardLeft: React.FC<BlogCardProps> = (props) => {
    return (
        <>
            <div className="flex w-full">
                <div className="flex flex-row border-2 rounded-lg overflow-hidden mb-4 shadow-sm py-16 relative">
                    <div className="flex w-[40%] justify-center content-center items-center">
                        <Image src={"/business-account/image illustration for business address.png"} objectFit="contain" alt="ssa" width={600} height={450} />
                    </div>
                    <div className="flex flex-col p-4 w-[60%] justify-center content-center items-center">
                        <strong className="mb-2 text-blue-500">{props.content.title}</strong>
                        <p >{props.content.content}</p>
                    </div>
                </div>
            </div>

        </>
    )
}