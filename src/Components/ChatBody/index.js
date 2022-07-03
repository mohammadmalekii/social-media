import useRightClickMenu from "../../hooks/useRightClickMenu";
import ContextMenu from '../ContextMenu';
import Message from '../Message'

const ChatBody = ({ receiver }) => {
    const { x, y, showMenu } = useRightClickMenu();
    return (

        <div className="overflow-y-scroll h-4/5">
            <ContextMenu x={x} y={y} showMenu={showMenu} />
            {receiver ? (
                <Message receiver={receiver} />
            ) :
            (
                <div className="flex h-full justify-center items-center text-gray-400">
                    <p>.یکی را برای برای گفت و گو انتخاب کنید</p>
                </div>
            )
            }
        </div>

    )
}

export default ChatBody