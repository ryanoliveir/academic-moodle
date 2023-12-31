import { maskDate, formatData } from "@/utils/helper"
interface InfoCardProps {
    name: string
    birth_date: Date
}

const InfoCard = ({ name, birth_date}: InfoCardProps) => {
    return (
    <div className="flex flex-col gap-3 mt-10 mb-14 w-full">
        <div className="flex flex-col text-start  rounded p-4 shadow-[7px_5px_5px_0px_rgba(0,0,0,0.3)]">
            <span className="text-gray-400 text-sm mb-3">Nome</span>
            <span>{name}</span>   
        </div>
        <div  className="flex flex-col text-start rounded p-4 shadow-[7px_5px_5px_0px_rgba(0,0,0,0.3)]">
            <span className="text-gray-400 text-sm mb-3">Data de nascimento</span>
            {formatData( maskDate(birth_date))}    
        </div>
    </div>)
}


export default InfoCard;


