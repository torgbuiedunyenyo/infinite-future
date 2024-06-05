"use client";

import { BiHelpCircle } from "react-icons/bi";
import { Button,Modal } from "flowbite-react";
import { useState } from "react";

const Title =  ()=>{
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <div className="flex flex-row justify-center items-center mb-6 space-x-6">
         <h1 className="text-6xl font-bold  text-center capitalize">Infinite Future</h1>
         <button onClick={() => setOpenModal(true)}>
         <BiHelpCircle className="h-8 w-8"/>
         </button>
        

         <Modal show={openModal} size={'2xl'} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-4">
            <p className="text-base leading-relaxed text-gray-500 ">
           {` This is a fun little experiment looking at generative UI. When you enter a topic, the app generates text, an associated image, and also all of the HTML and CSS for the styling of the content. Sometimes this really matches the content and feels quite magic, other times it is annoying and feels like you are trying to read a story on MySpace. Sometimes it breaks the page entirely, although we’ve tried to avoid that.`}
            </p>
            <p className="text-base leading-relaxed text-gray-500 ">
            {` Although this is just a quick, silly widget, it gestures at something more interesting. Since AI models can generate code on the fly, it means in a couple of years, we won’t have static websites or software. We’ll expect websites to be created from scratch for our every interaction with them, tailored to our context and use case. We’ll expect software UX to change and learn and shift depending on our usage, getting better as we use it and it learns what works best for us.`}
            </p>
            <p className="text-base leading-relaxed text-gray-500 ">
            Note: it is quite slow to use, as it generates the text, image, HTML, and CSS sequentially. Thanks for your patience.
            </p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
        </div>
    )
}

export default Title