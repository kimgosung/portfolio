import React, { useState } from "react";
import Chevron from "../../assets/Svg/Chevron";

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion = (props: AccordionProps) => {
    const [open, setOpen] = useState<boolean>(false);
    
    const contentLines = props.content.split('\n').map((line, index) => <li key={index} className="list-disc ml-5">{line}</li>);

    return (
        <div>
            <button 
                onClick={() => setOpen(!open)} 
                className="flex justify-between w-full bg-slate-50 rounded-xl cursor-pointer"
            >
                <span className="font-['GmarketSansBold'] text-xl">
                    {props.title}
                </span>
                <Chevron className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div 
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" 
                        : "grid-rows-[0fr] opacity-0"}`
                }
            >
                <div className="overflow-hidden">
                    <ul className="p-4 font-['GmarketSansLight'] whitespace-pre-line">{contentLines}</ul>
                </div>
            </div>
        </div>
    )
}

export default Accordion;
