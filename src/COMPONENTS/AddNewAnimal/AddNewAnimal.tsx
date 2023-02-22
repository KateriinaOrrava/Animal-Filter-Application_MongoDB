import { ReactNode, useState } from "react"
import ReactDOM from "react-dom";
import Modal from "./ADD NEW MODAL/AddNewModal";

interface PortalProps {
    children: ReactNode;
    target: HTMLElement;
  }
  
  const Portal: React.FC<PortalProps> = ({ children, target }) => {
    return ReactDOM.createPortal(children, target);
  };

const AddNewAnimal = () => {

    const [open, setOpen] = useState(false);


    return (
            <div>
                <button onClick={()=> {setOpen(true); console.log('clicked');
                }}> Add new animal</button>
                <Modal open={open} onClose={()=> setOpen(false)} />
                </div>
    )
}
export default AddNewAnimal;