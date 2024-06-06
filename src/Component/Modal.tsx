import React from 'react'
type ModalProps = {
    isOpen:boolean
    setIsModal: () => void
}

function Modal(props:ModalProps) {
    const modalStatus = props.isOpen
    const CloseModal = (e:any) => {
        if(e.target.id == "modal")
            props.setIsModal()
    }
    if(props.isOpen)
        return null
    else
     return (
    <div id="modal" className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={CloseModal}>
        <div className='bg-white bg-opacity-25 h-1/3 w-1/3'>
            <form>
                <input></input>
            <button onClick={()=>props.setIsModal()}>Close</button>
            </form>
            <button onClick={()=>props.setIsModal()}>Close</button>
        </div>
    </div>
  )
}

export default Modal
