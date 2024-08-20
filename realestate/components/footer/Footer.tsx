import FooterList from "./footerList"


function Footer() {
  return (
    <footer className="text-sm mt-8">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between pt-16 pb-8">
            {/* Estate */}
            <FooterList>
                <h3 className="font-bold">ESTATE ASELI</h3>
                <p className="text-xs">55676 LORAINE FIELDS <br /> Port Lorenzaland</p>
                <p className="text-xs">+1 (910) 397-3832</p>
                <p className="text-xs">EMAIL US</p>
            </FooterList>
            
            {/* Company */}
            <FooterList>
                <h3 className="font-bold">COMPANY</h3>
                <ul className="text-xs space-y-3">
                    <li className="Flist"><a href="#">ABOUT US</a></li>
                    <li className="Flist"><a href="#">OFFICES</a></li>
                    <li className="Flist"><a href="#">MANAGEMENT TEAM</a></li>
                    <li className="Flist"><a href="#">CAREERS</a></li>
                    <li className="Flist"><a href="#">COMPANY NEWS</a></li>
                </ul>
            </FooterList>
            {/* Services */}
            <FooterList>
                <h3 className="font-bold">SERVICES</h3>
                <ul className="text-xs space-y-3">
                    <li className="Flist"><a href="#">DEVELOPMENT MARKETING</a></li>
                    <li className="Flist"><a href="#">COMMERCIAL</a></li>
                    <li className="Flist"><a href="#">RELOCATION</a></li>
                    <li className="Flist"><a href="#">SPORTS & ENTERTAINMENT</a></li>
                    <li className="Flist"><a href="#">BUILDING SPECIALIST</a></li>
                    <li className="Flist"><a href="#">MASTER TRUST & PROBATE</a></li>
                </ul>
            </FooterList>
            {/* Resources */}
            <FooterList>
                <h3 className="font-bold">RESOURCES</h3>
                <ul className="text-xs space-y-3">
                    <li className="Flist"><a href="#">NEIGHBORHOOD GUIDES</a></li>
                    <li className="Flist"><a href="#">SELLING / BUYING / RENTING GUIDES</a></li>
                    <li className="Flist"><a href="#">MARKET REPORTS</a></li>
                    <li className="Flist"><a href="#">RESEARCH REPORTS</a></li>
                    <li className="Flist"><a href="#">LIFESTYLES</a></li>
                    <li className="Flist"><a href="#">AGENT LOGIN</a></li>
                </ul>
            </FooterList>

            {/* Affiliates */}
            <FooterList>
                <h3 className="font-bold">Affiliates</h3>
                <ul className="text-xs space-y-3">
                    <li className="Flist"><a href="#">SIGMA SKIBIDI</a></li>
                    <li className="Flist"><a href="#">PROPERTY MANAGEMENT</a></li>
                </ul>
            </FooterList>

                            
            </div>
    </footer>
)
}

export default Footer