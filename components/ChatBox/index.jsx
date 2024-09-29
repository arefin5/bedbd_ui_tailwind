'use client'
import Icon from "../Icon.jsx"
import sampleProfilePhoto from '/public/dummy/sample-profile-photo.jpg'
import Image from "next/image"
import { Ellipsis, MoveDiagonal, X, MessageCircleMore, MapPin, Link, SmilePlus, SendHorizonal } from "lucide-react"
import emojiIcon from '/public/icons/emoji.svg'
import { useState } from "react"


export default function ChatBox() {
    const [showChatBox, setShowChatBox] = useState(false)

  return (
    <div className='w-max fixed right-6 bottom-6 bg-secondary-400 rounded-full '>
        {/* border-secondary-50 */}
        {
            showChatBox && 
                <div className=" absolute bg-white rounded-xl right-3/4 bottom-3/4 w-80 h-auto drop-shadow-xl shadow-xl ">
                    
                    {/* Header  */}
                    <div className=" w-full rounded-t-xl relative border-b-1 border-neutral-100  shadow  ">
                        <div className="flex justify-between items-center py-4 px-4 ">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-primary-400 text-sm font-medium ">Samia R</h3>
                                    <p className="text-xs font-medium text-neutral-500">Active now</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <button className="text-neutral-500 hover:text-neutral-800">
                                    <Ellipsis className="icon" name="ellipsis" size={24} />
                                </button>
                                
                                <button className="text-neutral-500 hover:text-neutral-800">
                                    <MoveDiagonal className="icon" name="move-diagonal" size={24} />
                                </button>

                                <button className="text-neutral-500 hover:text-neutral-800">
                                    <X onClick={()=>setShowChatBox(false)} className="icon" name="x" size={24} />
                                </button>
                            </div>
                        </div>
                        {/* <div className="w-full h-0.5 relative bg-neutral-300"/> */}
                    </div>

                    <div className="px-4 py-4 ">
                        
                        {/* Chat List  */}
                        <div className=" h-[268px] w-full space-y-4 overflow-y-auto overscroll-none">

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>


                            <div className="flex gap-3 items-center">
                                <div className="rounded-full overflow-hidden h-10 w-10 relative">
                                    <Image src={sampleProfilePhoto} fill />
                                </div>
                                <div>
                                    <h3 className="text-neutral-800 text-sm font-medium">Samia R<span className="text-neutral-400 text-xs ml-2">.8:24 AM</span></h3>
                                    <p className="text-sm font-medium text-neutral-500">Hello</p>
                                </div>
                            </div>

                        </div>

                        {/* Message sending section  */}
                        {/* input box  */}
                        <textarea className="min-h-18 w-full bg-neutral-100 rounded-lg my-3 px-3 py-2 focus:outline-none " rows="3" />
                        
                        {/* Action box */}
                        <div className=" w-full flex items-center justify-between border-t-1">
                            <div className="gap-6 flex   py-auto">
                                <button className="rounded-full p-1 hover:bg-neutral-100">
                                    <MapPin size={24} className="icon" />
                                </button>

                                <button className="rounded-full p-1 hover:bg-neutral-100">
                                    <Link size={24} className="icon" />
                                </button>

                                <button className="rounded-full p-1 hover:bg-neutral-100">
                                    <SmilePlus size={24} className="icon" />
                                </button>
                            </div>

                            <button className="rounded-full p-1 hover:bg-neutral-100">
                                <SendHorizonal size={24} className="icon"/>
                            </button>
                        </div>
                    </div>

                </div>
        }
        <button className="p-3" onClick={()=>setShowChatBox(value=> !value)}>
            <MessageCircleMore name="message-circle-more" className="icon " size={48} color="#ffffff"/>
        </button>
        {/* <MessagesSquare color="#ffffff" /> */}
    </div>
  )
}
