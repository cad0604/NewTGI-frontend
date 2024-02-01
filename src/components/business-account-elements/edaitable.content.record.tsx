import { EditableContentRecordInvidual } from "./editable.content.record.invidual"

interface EditableContentRecordProps {
    records: {
        title: string,
        method: string,
        invidualRecords: {
            title: string,
            contents: {
                recordName: string,
                iconName: string,           //edit, arrow, date
            }[],
        }[],
    }

}

export const EditableContentRecord: React.FC<EditableContentRecordProps> = (props) => {
    return (
        <>
            <div className="flex flex-col w-full justify-center my-6 content-center items-center">
                {/* title */}
                {props.records.title !== "" &&
                    <div className="flex flex-row w-full">
                        <div className="flex w-[50%] justify-start text-xl">{props.records.title}</div>
                        <div className="flex w-full justify-end text-lg text-green-500">{props.records.method}</div>
                    </div>
                }
                {props.records.invidualRecords.map((invidualRecord) => {
                    return (
                        <EditableContentRecordInvidual invidualRecord={invidualRecord} />
                    )
                })}
                {/* content */}

            </div>
        </>
    )
}