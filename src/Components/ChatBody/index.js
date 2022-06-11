import useRightClickMenu from "../../hooks/useRightClickMenu";
import ContextMenu from '../ContextMenu';
import Message from '../Message'

const ChatBody = () => {
    const {x, y, showMenu} = useRightClickMenu();
    return (

        <div className="overflow-y-scroll h-4/5">
            <ContextMenu x={x} y={y} showMenu={showMenu} />
            <Message/>
        </div>
        
    )
}

export default ChatBody