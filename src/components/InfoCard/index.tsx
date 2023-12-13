import { maskDate } from "@/utils/helper"
interface InfoCardProps {
    name: string
    birth_date: Date
}

const InfoCard = ({ name, birth_date}: InfoCardProps) => {
    return (
    <>
        <div>
            {name}    
        </div>
        <div>
            {maskDate(birth_date)}    
        </div>
    </>)
}


export default InfoCard;


