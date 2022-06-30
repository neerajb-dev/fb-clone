import React from "react";
import "./StoryReel.css"
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.pexels.com/photos/6888598/pexels-photo-6888598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                title="Neeraj Bhardwaj"
            />
            <Story
                image="https://images.pexels.com/photos/4556783/pexels-photo-4556783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Mukul Parouh"
            />
            <Story
                image="https://images.pexels.com/photos/4218704/pexels-photo-4218704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSrc="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Rahul Khandait"
            />
            <Story
                image="https://images.pexels.com/photos/4559961/pexels-photo-4559961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSrc="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Rajesh Rao"
            />
            <Story
                image="https://images.pexels.com/photos/4276011/pexels-photo-4276011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                profileSrc="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Nishant Mishra"
            />
        </div>
    )
};

export default StoryReel;