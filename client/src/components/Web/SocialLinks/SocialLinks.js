import React from "react";
import { ReactComponent as YoutubeIcon} from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon} from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon} from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedinIcon} from "../../../assets/img/svg/linkedin.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a 
            href=""
            className="youtube"
            target="_black"
            rel="noopener noreferrer"
            >
            <YoutubeIcon/>
            </a>
            <a 
            href=""
            className="twitter"
            target="_black"
            rel="noopener noreferrer"
            >
            <TwitterIcon/>
            </a>
            <a 
            href=""
            className="facebook"
            target="_black"
            rel="noopener noreferrer"
            >
            <FacebookIcon/>
            </a>
            <a 
            href=""
            className="linkedin"
            target="_black"
            rel="noopener noreferrer"
            >
            <LinkedinIcon/>
            </a>
        </div>
    )
}