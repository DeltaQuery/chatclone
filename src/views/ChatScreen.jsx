import React from "react"
import { ChatHeader } from "../components/ChatHeader"
import { ChatMessages } from "../components/ChatMessages"
import { ChatInput } from "../components/ChatInput"
import { checkSwipeToOpen } from "../utils/checkSwipe"
import { useSelector } from 'react-redux'

let touchStart
let touchEnd

export const ChatScreen = ({ openSidebar, setOpenSidebar }) => {
  const height = useSelector(state => state.ui.height)
  const defaultHeight = useSelector(state => state.ui.defaultHeight)
  const appH = defaultHeight || height

  const checkSwipe = () => {
    const boolean = checkSwipeToOpen(touchStart, touchEnd)
    boolean != undefined ? setOpenSidebar(boolean) : ""
  }

  return (
    <div
    className="chat"
    style={{height: appH}}
    onTouchStart={(e) => touchStart = [e.targetTouches[0].clientX, e.targetTouches[0].clientY]}
    onTouchMove={(e) => touchEnd = [e.changedTouches[0].clientX, e.targetTouches[0].clientY]}
    onTouchEnd={ checkSwipe }
    >
      <ChatHeader
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
      />

      <ChatMessages/>
 
      <ChatInput/>
    </div>
  )
}
