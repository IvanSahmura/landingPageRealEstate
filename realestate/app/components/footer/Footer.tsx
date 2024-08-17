import FooterList from "./footerList"


function Footer() {
  return (
    <footer className="text-sm mt-16">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between pt-16 pb-8">
            {/* Estate */}
            <FooterList>
                <h3 className="font-bold">ESTATE ASELI</h3>
                <p>55676 Loraine Fields <br /> Port Lorenzaland</p>
                <p>+1 (910) 397-3832</p>
                <p>Email </p>
            </FooterList>
            
            {/* Company */}
            <FooterList>
                <h3 className="font-bold">COMPANY</h3>
            </FooterList>
            {/* Services */}
            <FooterList>
                <h3 className="font-bold">SERVICES</h3>
            </FooterList>
            {/* Resources */}
            <FooterList>
                <h3 className="font-bold">RESOURCES</h3>
            </FooterList>

            {/* Affiliates */}
            <FooterList>
                <h3 className="font-bold">Affiliates</h3>
            </FooterList>
            </div>
    </footer>
)
}

export default Footer