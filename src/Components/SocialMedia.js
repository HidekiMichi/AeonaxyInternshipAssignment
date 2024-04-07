import Card from "./Card";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function SocialMedia(){
    return(
        <Card className="flex md:justify-start sm:justify-center">
            <a ><TiSocialDribbble className="text-2xl mr-3"/></a>
            <a ><TiSocialTwitter className="text-2xl mr-4"/></a>
            <a ><FaFacebookSquare className="text-xl mr-4"/></a>
            <a ><FaInstagram className="text-xl mr-4"/></a>
            <a ><FaPinterest className="text-lg"/></a>
        </Card>
    );
}

export default SocialMedia;