import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export const HomeTwoSection = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 px-10 py-4 ">
                <div className="border "></div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div>earning</div>
                        <div><Select>
                            <SelectTrigger>
                                <SelectValue placeholder="last 30 day" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>days</SelectLabel>
                                    <SelectItem value="apple">last 30 days</SelectItem>
                                    <SelectItem value="banana">last 90 days</SelectItem>
                                    <SelectItem value="blueberry">all time</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select></div>
                    </div>
                    <div>450$</div>
                </div>
            </div>
        </div>
    )
}