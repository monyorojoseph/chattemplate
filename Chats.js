import React, { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'

const Chats = () => {
    const [chat, setChat] = useState("")
    const chats = [{"type": "sent", "msg": "heyy"}, 
    {"type": "reply", "msg": "hey, supp?"}, {"type": "sent", "msg": "you good ?"}, 
    {"type": "reply", "msg": "yeah, what do you want ..."}, {"type": "sent", "msg": "huh ! idk"},
    {"type": "sent", "msg": "hahahaha"}, {"type": "reply", "msg": "fuck off !!"} ]

    const chatOnKeyUpHandler = (e)=> {
        e.key === "Enter" && document.querySelector(".submit-chat").click()
    }

    const chatOnChangeHandler = (e)=> {
        setChat(e.target.value)
    }

    const chatSubmitHandler = (e)=> {
        // setChats(...chats, chat)
        const content = document.createElement("li")
        content.classList.add("my-1", "py-1", "opacity-75", "rounded-2", "bg-success", "px-3")
        content.innerText = chat
        document.querySelector(".chats").append(content)
        const chats = document.querySelector(".chats")
        chats.scrollTop = chats.scrollHeight;
        setChat("")
    }

    const listClassName = (type) => type == "reply" ? "rounded-2 bg-danger opacity-75 my-1 px-3 py-1" : "rounded-2 bg-success my-1 opacity-75 py-1 px-3"

  return (
    <div className="col-md-10 bg-light">
        <div className='border-bottom border-2 text-muted py-1 d-flex flex-row justify-content-between align-items-start'>
            <h6 className="fw-bold ps-4">Loice Anne</h6>
            <HiDotsVertical className='fs-5 fw-bold' />
        </div>
        
        <div className="chats-container my-1">
        <ul className='overflow-auto chats py-1 text-light'>
            {chats.map((chat, id)=><li key={id} className={listClassName(chat.type)} >{chat.msg}</li>)}
        </ul>
        </div>

        <div className="chats-input d-flex flex-row align-items-center my-1">
            <input onKeyUp={chatOnKeyUpHandler} onChange={chatOnChangeHandler} value={chat} className="overflow-auto form-control form-control-sm rounded-0" placeholder='say hi, to your friend ...' type="text" name="chat" id="chat" />
            <input onClick={chatSubmitHandler} className="btn btn-sm btn-primary rounded-0 submit-chat opacity-75" type="button" value="send" />
        </div>

    </div>
  )
}

export default Chats