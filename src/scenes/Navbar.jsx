import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import LogoIcon from '../assets/x house logo.svg';
import { ReactComponent as MenuIcon } from '../assets/mobile menu.svg';
import { ReactComponent as CloseIcon } from '../assets/Close.svg';
import { ReactComponent as StayBtn} from '../assets/stay-updated.svg'
import { ReactComponent as LCBtn} from '../assets/learning-center-button.svg'


const Link = ({ page, selectedPage, setSelectedPage, externalLink }) => {
    const lowerCasePage = page.toLowerCase();

    if (externalLink) {
        return (
            <a
                className={`${
                selectedPage === lowerCasePage ? "text-[#F18E1A]" : "text-[#0B171B]"
                } hover:text-[#F18E1A] transition duration-500`}
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                {page}
            </a>
            );
    }
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? "text-[#F18E1A]" : "text-[#0B171B]"
            } hover:text-[#F18E1A] transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
        {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-yellow";

    return (
        <nav className="w-full fixed top-0 py-6 z-40">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <div className="flex items-center gap-2">
                <img src={LogoIcon} alt="X House Logo" className="h-5 w-auto" />
            </div>

            {isDesktop ? (
                <div className="font-averia flex items-center gap-8">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Research" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Join Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <a
                    href="https://learn.houseofx.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-averia px-6 py-3 bg-[#FF3939] text-[#0B171B] rounded-81xl font-bold hover:bg-[#F18E1A] transition duration-300"
                    >
                    Learning Center
                    </a>
                </div>
                ) : (
                <button
                    className="rounded-81xl bg-yellow p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <MenuIcon className="h-6 w-auto"/>
                </button>
                )}

            {!isDesktop && isMenuToggled && (
                <div className="fixed left-0 top-0 w-full h-full bg-[#BDD4EF] z-50">
                    <div className="absolute right-6 top-6">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <CloseIcon className="h-7 w-7"/>
                        </button>
                    </div>
                    
                    <div className="flex flex-col items-center justify-start h-full gap-6 font-averia text-xl"  style={{ paddingTop: '90px' }}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Research" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Join Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <div className="mt-8">
                            <StayBtn className="cursor-pointer mb-4 hover:opacity-80 transition duration-300" />
                            <a
                                href="https://learn.houseofx.co"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LCBtn className="hover:opacity-80 transition duration-300 " />
                            </a>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </nav>
    );
};

export default Navbar;