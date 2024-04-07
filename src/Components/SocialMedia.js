import Card from "./Card";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function SocialMedia(){
    return(
        <Card className="flex md:justify-start sm:justify-center">
            <p><TiSocialDribbble className="text-2xl mr-3"/></p>
            <p><TiSocialTwitter className="text-2xl mr-4"/></p>
            <p><FaFacebookSquare className="text-xl mr-4"/></p>
            <p><FaInstagram className="text-xl mr-4"/></p>
            <p><FaPinterest className="text-lg"/></p>
        </Card>
    );
}

export default SocialMedia;