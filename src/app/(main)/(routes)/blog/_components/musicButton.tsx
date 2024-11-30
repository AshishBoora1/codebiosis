"use client";
import { AudioLines, Pause } from 'lucide-react';
import React, { useState, useRef } from 'react';

interface MusicButtonProps {
    musicLink: string;
}
const MusicButton = ({ musicLink}: MusicButtonProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleToggle = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="switchParent">
        <div className={"switch"} onClick={handleToggle}>
            <div className={`${isPlaying ? "relative float-left translate-y-[38%] ml-4 transition-all duration-300":" hidden transition-all duration-300"}`}>Pause</div>
            <div className={`${"slider"} ${isPlaying ? "playing" : "stopped"}`}>
                {isPlaying ? <Pause className='w-6 h-6 '/>  : <AudioLines className='w-6 h-6 '/>}
            </div>
            <div className={`${!isPlaying ? "relative float-right translate-y-[38%] mr-4 transition-all duration-300":" hidden transition-all duration-300"}`}>Listen</div>
            <audio ref={audioRef} src={musicLink} />
        </div>
        </div>
    );
};

export default MusicButton;
