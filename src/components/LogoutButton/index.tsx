import { MdOutlineLogout } from 'react-icons/md';


interface LogoutButtonProps {
    handleClick: () => void;
  }

const LogoutButton = ({handleClick} : LogoutButtonProps) => {
// const LogoutButton = () => {

    // function handleClick() {
    //     onClick
    // }

    return (
        <>
            <div 
                className="flex rounded font-medium hover:text-green-500 cursor-pointer"
                onClick={handleClick}
            >
                <MdOutlineLogout size="25" />
                <span className="ml-1">Sair</span>
            </div>
        </>
    )
}

export default LogoutButton;