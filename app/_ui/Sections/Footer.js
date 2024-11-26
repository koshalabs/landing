import Divider from "../SectionElements/Divider";
import List from "../SectionElements/List";
import ListItem from "../SectionElements/ListItem";
import Logo from "../SectionElements/Logo";
import Paragraph from "../SectionElements/Paragraph";
import BoldSpan from "../SectionElements/BoldSpan";
import KoshaLink from "../SectionElements/KoshaLink";
import NavLink from "../SectionElements/NavLink";
import GetEarlyAccessButton from "../SectionElements/GetEarlyAccessButton";

export default function Footer() {
    return <footer className="mx-4 footerPhoneBreak:mx-10 mb-4 footerPhoneBreak:mb-10 pt-16 pb-8 footerPhoneBreal:pb-7 px-6 lg:px-10 bg-koshaBlack rounded-3xl">
        <div className="lg:px-10 footerPhoneBreak:flex gap-20">
            <div className="lg:flex md:gap-8 lg:gap-16 space-y-12 lg:space-y-0">
                <div className="flex flex-col gap-5 max-w-[310px] lg:max-w-[324px] items-center lg:items-start text-center mx-auto footerPhoneBreak:mx-0 lg:text-left">
                    <Logo type="white" />
                    <Paragraph type="white">
                        Be among the first to transform brand collaboration with Kosha — a platform that protects ownership, ensures transparency, and drives lasting revenue 
                        for all partners.
                    </Paragraph>
                </div>
                <List>
                    <ListItem>
                        <NavLink href="about">
                            Meet Kosha
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink href="why-kosha">
                            Why Kosha
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink href="how-it-works">
                            How it Works
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink href="partnership">
                            Partnership Model
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink href="faq">
                            FAQ
                        </NavLink>
                    </ListItem>
                </List>
            </div>
            <div className="hidden footerPhoneBreak:block">
                <Divider type="vertical" />
            </div>
            <div className="footerPhoneBreak:hidden my-12">
                <Divider type="horizontal" />
            </div>
            <div className="lg:mt-3 flex flex-col gap-5 items-center lg:items-start text-center lg:text-left justify-center lg:justify-start">
                <h2 className="font-medium text-[20px] lg:text-[32px] lg:leading-[38px] text-white">
                    Get early access
                </h2>
                <Paragraph type="white">
                    Be among the <BoldSpan>first</BoldSpan> to transform <BoldSpan>brand collaboration</BoldSpan> with <BoldSpan>Kosha</BoldSpan> 
                </Paragraph>
                <GetEarlyAccessButton type="small" />
            </div>
        </div>
        <div className="mt-12 lg:mt-[88px] space-y-5">
            <Divider type="horizontal" />
            <div className="flex footerPhoneBreak:justify-between items-center flex-col footerPhoneBreak:flex-row gap-6 footerPhoneBreak:gap-5">
                <p className="text-koshaLightGrey text-sm">
                    © All rights reserved
                </p>
                <div className="flex gap-5">
                    <KoshaLink href="https://moth-app-prod-qoyzv.ondigitalocean.app/terms-of-use">
                        Terms of Service
                    </KoshaLink>
                    <KoshaLink href="https://moth-app-prod-qoyzv.ondigitalocean.app/privacy-policy">
                        Privacy Policy
                    </KoshaLink>
                </div>
            </div> 
        </div>
    </footer>
}