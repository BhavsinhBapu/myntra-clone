import Link from "next/link";

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-[#0000000D_0px_4px_12px_0px] hidden lg:block">
            <div className="m-auto min-w-[980px] leading-[80px]">
                {/* Logo */}
                <div className="float-left ml-[2%] xl:ml-[4%]">
                    <a href="/" className="inline-block align-middle p-0 m-0 w-[53px] h-[36px] bg-[-462px_0px] bg-[url('/images/icons.png')] bg-[length:1404px_105px]"></a>
                </div>
                {/* Navigation Menu */}
                <nav className="block float-left leading-[80px] my-0 me-0 ms-[3.5%]">
                    <div className="inline-block float-left">
                        <div className="float-left border-0 text-center">
                            <div className="inline group">
                                <Link href="/shop/men" className="px-[17px] pt-0 pb-[28px] text-center text-sm tracking-[0.3px] text-[#282c3f] border-b-4 border-b-transparent transition-all duration-200 group-hover:duration-500 group-hover:ease-in ease-out font-bold uppercase group-hover:border-b-[#ee5f73]">
                                    Men
                                </Link>
                                <div className="fixed top-20 bottom-0 left-0 right-0 bg-[#0000004d] z-0 pointer-events-none invisible group-hover:visible">
                                    <div className="left-[50%] -ms-[570px] h-[440px] w-[1135px] z-[1px] invisible text-left opacity-0 absolute top-0 bg-white transition-all duration-300 ease-out shadow-[inset_0_0_8px_rgba(0,0,0,.1)] pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                        <div className="invisible opacity-0 overflow-auto w-[1110px] left-0 right-0 absolute my-0 mx-auto pt-0 pe-[10px] pb-[10px] ps-[15px] transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Topwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Blazers & Coats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Suits</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rain Jackets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Indian & Festive Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Kurtas & Kurta Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sherwanis</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Nehru Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Dhotis</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bottomwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jeans</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pents & Joggers</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Innerwear & sleepwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Briefs & Trunks</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Boxers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">vests</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sleepwear & Loungewear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Thermals</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Plus Size</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Footwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sneakers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sandals & Floaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Flip-Flops</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Socks</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Personal Care & Grooming</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sunglasses & Frames</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Watches</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sports & Active Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Sandals</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Active T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pants & Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets & Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Swimwear</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Smart Wearables</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Fitness Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Headphones</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Speakers</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Fashion Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Wallets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Belts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Perfumes & Body Mists</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Trimmers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Deodorants</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Ties, Cufflinks & Pocket Squares</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Accessory Gift Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Caps & Hats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Mufflers, Scarves & Gloves</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Phone Cases</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rings & Wristwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Helmets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bags & Backpacks</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#ee5f73] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Luggages & Trolleys</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="float-left border-0 text-center">
                            <div className="inline group">
                                <Link href="/shop/men" className="px-[17px] pt-0 pb-[28px] text-center text-sm tracking-[0.3px] text-[#282c3f] border-b-4 border-b-transparent transition-all duration-200 group-hover:duration-500 group-hover:ease-in ease-out font-bold uppercase group-hover:border-b-[#FB56C1]">
                                    Women
                                </Link>
                                <div className="fixed top-20 bottom-0 left-0 right-0 bg-[#0000004d] z-0 pointer-events-none invisible group-hover:visible">
                                    <div className="left-[50%] -ms-[570px] h-[440px] w-[1135px] z-[1px] invisible text-left opacity-0 absolute top-0 bg-white transition-all duration-300 ease-out shadow-[inset_0_0_8px_rgba(0,0,0,.1)] pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                        <div className="invisible opacity-0 overflow-auto w-[1110px] left-0 right-0 absolute my-0 mx-auto pt-0 pe-[10px] pb-[10px] ps-[15px] transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Topwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Blazers & Coats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Suits</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rain Jackets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Indian & Festive Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Kurtas & Kurta Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sherwanis</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Nehru Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Dhotis</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bottomwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jeans</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pents & Joggers</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Innerwear & sleepwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Briefs & Trunks</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Boxers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">vests</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sleepwear & Loungewear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Thermals</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Plus Size</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Footwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sneakers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sandals & Floaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Flip-Flops</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Socks</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Personal Care & Grooming</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sunglasses & Frames</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Watches</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sports & Active Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Sandals</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Active T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pants & Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets & Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Swimwear</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Smart Wearables</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Fitness Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Headphones</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Speakers</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Fashion Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Wallets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Belts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Perfumes & Body Mists</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Trimmers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Deodorants</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Ties, Cufflinks & Pocket Squares</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Accessory Gift Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Caps & Hats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Mufflers, Scarves & Gloves</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Phone Cases</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rings & Wristwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Helmets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bags & Backpacks</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#FB56C1] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Luggages & Trolleys</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="float-left border-0 text-center">
                            <div className="inline group">
                                <Link href="/shop/men" className="px-[17px] pt-0 pb-[28px] text-center text-sm tracking-[0.3px] text-[#282c3f] border-b-4 border-b-transparent transition-all duration-200 group-hover:duration-500 group-hover:ease-in ease-out font-bold uppercase group-hover:border-b-[#F26A10]">
                                    Kids
                                </Link>
                                <div className="fixed top-20 bottom-0 left-0 right-0 bg-[#0000004d] z-0 pointer-events-none invisible group-hover:visible">
                                    <div className="left-[50%] -ms-[570px] h-[440px] w-[1135px] z-[1px] invisible text-left opacity-0 absolute top-0 bg-white transition-all duration-300 ease-out shadow-[inset_0_0_8px_rgba(0,0,0,.1)] pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                        <div className="invisible opacity-0 overflow-auto w-[1110px] left-0 right-0 absolute my-0 mx-auto pt-0 pe-[10px] pb-[10px] ps-[15px] transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Topwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Blazers & Coats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Suits</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rain Jackets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Indian & Festive Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Kurtas & Kurta Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sherwanis</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Nehru Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Dhotis</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bottomwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jeans</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pents & Joggers</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Innerwear & sleepwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Briefs & Trunks</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Boxers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">vests</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sleepwear & Loungewear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Thermals</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Plus Size</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Footwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sneakers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sandals & Floaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Flip-Flops</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Socks</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Personal Care & Grooming</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sunglasses & Frames</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Watches</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sports & Active Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Sandals</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Active T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pants & Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets & Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Swimwear</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Smart Wearables</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Fitness Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Headphones</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Speakers</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Fashion Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Wallets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Belts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Perfumes & Body Mists</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Trimmers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Deodorants</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Ties, Cufflinks & Pocket Squares</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Accessory Gift Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Caps & Hats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Mufflers, Scarves & Gloves</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Phone Cases</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rings & Wristwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Helmets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bags & Backpacks</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F26A10] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Luggages & Trolleys</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="float-left border-0 text-center">
                            <div className="inline group">
                                <Link href="/shop/men" className="px-[17px] pt-0 pb-[28px] text-center text-sm tracking-[0.3px] text-[#282c3f] border-b-4 border-b-transparent transition-all duration-200 group-hover:duration-500 group-hover:ease-in ease-out font-bold uppercase group-hover:border-b-[#F2C210]">
                                    Home & Living
                                </Link>
                                <div className="fixed top-20 bottom-0 left-0 right-0 bg-[#0000004d] z-0 pointer-events-none invisible group-hover:visible">
                                    <div className="left-[50%] -ms-[570px] h-[440px] w-[1135px] z-[1px] invisible text-left opacity-0 absolute top-0 bg-white transition-all duration-300 ease-out shadow-[inset_0_0_8px_rgba(0,0,0,.1)] pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                        <div className="invisible opacity-0 overflow-auto w-[1110px] left-0 right-0 absolute my-0 mx-auto pt-0 pe-[10px] pb-[10px] ps-[15px] transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Topwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Blazers & Coats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Suits</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rain Jackets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Indian & Festive Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Kurtas & Kurta Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sherwanis</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Nehru Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Dhotis</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bottomwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jeans</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pents & Joggers</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Innerwear & sleepwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Briefs & Trunks</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Boxers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">vests</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sleepwear & Loungewear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Thermals</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Plus Size</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Footwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sneakers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sandals & Floaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Flip-Flops</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Socks</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Personal Care & Grooming</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sunglasses & Frames</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Watches</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sports & Active Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Sandals</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Active T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pants & Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets & Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Swimwear</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Smart Wearables</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Fitness Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Headphones</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Speakers</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Fashion Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Wallets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Belts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Perfumes & Body Mists</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Trimmers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Deodorants</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Ties, Cufflinks & Pocket Squares</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Accessory Gift Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Caps & Hats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Mufflers, Scarves & Gloves</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Phone Cases</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rings & Wristwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Helmets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bags & Backpacks</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#F2C210] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Luggages & Trolleys</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="float-left border-0 text-center">
                            <div className="inline group">
                                <Link href="/shop/men" className="px-[17px] pt-0 pb-[28px] text-center text-sm tracking-[0.3px] text-[#282c3f] border-b-4 border-b-transparent transition-all duration-200 group-hover:duration-500 group-hover:ease-in ease-out font-bold uppercase group-hover:border-b-[#0DB7AF]">
                                    Beauty
                                </Link>
                                <div className="fixed top-20 bottom-0 left-0 right-0 bg-[#0000004d] z-0 pointer-events-none invisible group-hover:visible">
                                    <div className="left-[50%] -ms-[570px] h-[440px] w-[1135px] z-[1px] invisible text-left opacity-0 absolute top-0 bg-white transition-all duration-300 ease-out shadow-[inset_0_0_8px_rgba(0,0,0,.1)] pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                        <div className="invisible opacity-0 overflow-auto w-[1110px] left-0 right-0 absolute my-0 mx-auto pt-0 pe-[10px] pb-[10px] ps-[15px] transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:delay-150">
                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Topwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sweaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Blazers & Coats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Suits</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rain Jackets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Indian & Festive Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Kurtas & Kurta Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sherwanis</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Nehru Jackets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Dhotis</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bottomwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jeans</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Trousers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pents & Joggers</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Innerwear & sleepwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Briefs & Trunks</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Boxers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">vests</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sleepwear & Loungewear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Thermals</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Plus Size</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Footwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Casual Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Formal Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sneakers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sandals & Floaters</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Flip-Flops</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Socks</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Personal Care & Grooming</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sunglasses & Frames</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Watches</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1 bg-[#f5f5f666]">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Sports & Active Wear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Shoes</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Sandals</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Active T-Shirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Track Pants & Shorts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Jackets & Sweatshirts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Sports Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Swimwear</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Smart Wearables</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Fitness Gadgets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Headphones</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Speakers</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="float-left block relative h-[436px] pt-1">
                                                <ul className="block relative float-left w-[216px] m-0 p-0">
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Fashion Accessories</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Wallets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Belts</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Perfumes & Body Mists</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Trimmers</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Deodorants</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Ties, Cufflinks & Pocket Squares</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Accessory Gift Sets</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Caps & Hats</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Mufflers, Scarves & Gloves</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Phone Cases</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Rings & Wristwear</Link>
                                                    </li>
                                                    <li className="ps-[25px]">
                                                        <Link href="/men-tshirts" className="text-[#283c3f] !leading-[23px] font-normal block text-sm hover:font-bold hover:outline-0">Helmets</Link>
                                                    </li>

                                                    <div className="w-[140px] h-[1px] mt-3 me-0 mb-0 ms-[25px] bg-[#eaeaec]"></div>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Bags & Backpacks</Link>
                                                    </li>

                                                    <li className="ps-[25px]">
                                                        <Link href="/men-topwear" className="text-[#0DB7AF] block text-sm capitalize pt-3 pb-[2px] px-0 whitespace-nowrap text-ellipsis overflow-hidden leading-[25px] font-bold">Luggages & Trolleys</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Actions */}
                <div className="float-right flex leading-[0px] h-10 mt-5 me-[30px] mb-0 ms-[10px]">
                    <div className="relative h-[60px] my-0 ms-[15px] me-5">
                        <div className="py-0 ps-[17px] pe-3 relative flex h-10">
                            <span className="mt-[10px] mx-0 mb-0 absolute bottom-[13px] left-[5px] block h-6 w-6 bg-[-298px_-56px] bg-[url('/images/icons.png')] bg-[length:1404px_105px]"></span>
                            <span className="text-black absolute bottom-1 left-[1px] text-[12px] font-bold inline-block pt-[10px] leading-[6px]">Profile</span>
                        </div>
                    </div>
                    <Link href="/wishlist" className="my-0 ms-[10px] me-[55px] flex relative text-[#282c3f] bg-transparent">
                        <span className="left-[13px] mt-2 mb-0 mx-0 absolute bottom-[14px] w-[17px] h-[22px] bg-[-315px_-187px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block text-[#282c3f]"></span>
                        <span className="text-black absolute bottom-1 left-[1px] text-[12px] font-bold inline-block pt-[10px] leading-[6px]">Wishlist</span>
                    </Link>
                    <Link href="/checkout/cart" className="my-0 ms-[15px] me-[55px] flex relative text-[#282c3f] bg-transparent">
                        <span className="left-[-1px] mt-2 mb-0 mx-0 absolute bottom-[14px] w-[22px] h-[22px] bg-[-341px_-56px] bg-[url('/images/icons.png')] bg-[length:1404px_105px] inline-block text-[#282c3f]"></span>
                        <span className="bg-[#f16565] whitespace-nowrap text-center leading-[18px] py-0 px-[6px] h-[18px] absolute rounded-full text-[12px] text-white left-[13px] top-[-2px] font-bold">5</span>
                        <span className="text-black absolute bottom-1 left-[1px] text-[12px] font-bold inline-block pt-[10px] leading-[6px]">Bag</span>
                    </Link>
                </div>
                {/* Searchbar */}
                <div className="w-[150px] desktop-query lg:w-[200px] xl:w-[400px] 2xl:w-[32%] float-right leading-[0px] relative my-5 ms-10 me-2 xl:me-5 transition-all duration-200 ease-in">
                    <input className="peer inline-block float-left text-sm h-5 leading-6 text-[#696e79] box-content p-2.5 pt-2 px-2.5 m-0 outline-none border border-[#f5f5f6] rounded-r-md border-l-0 bg-[#f5f5f6] w-[95%] focus:border-[#eaeaec] focus:bg-white" placeholder="Search for products, brands and more" />
                    <Link href="" className="box-content inline-block h-7 w-10 text-center pt-2 pb-0.5 px-0 bg-[#f5f5f6] border border-[#f5f5f6] border-r-0 rounded-l-md absolute left-[-41px] no-underline text-[#282c3f] peer-focus:border-[#eaeaec] peer-focus:bg-white">
                        <span className="transform scale-[0.7] inline-block w-[21px] h-[21px] bg-no-repeat bg-[-754px_0px] bg-[url('/images/icons.png')] bg-[length:1404px_105px]"></span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
