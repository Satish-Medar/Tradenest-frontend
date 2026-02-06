import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="border-top">
        <div className="container p-3">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 align-items-start g-4">
            <div className="col">
              <img
                src="/images/logo.svg"
                alt="Zerodha Logo"
                className="mt-4 mb-3 img-fluid"
                style={{ maxWidth: "160px" }}
              />
              <p className="mb-4 footer-copy">
                © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
              </p>
            </div>
            <div className="col links">
              <p className="fs-5 fw-medium">Account</p>
              <a href="#">Open demat account</a>
              <a href="#">Minor demat account</a>
              <a href="#">NRI demat account</a>
              <a href="#">Commodity</a>
              <a href="#">Dematerialisation</a>
              <a href="#">Fund transfer</a>
              <a href="#">MTF</a>
              <a href="#">Referral program</a>
            </div>

            <div className="col links">
              <p className="fs-5 fw-medium">Support</p>
              <a href="#">Contact us</a>
              <a href="#">Support portal</a>
              <a href="#">How to file a complaint?</a>
              <a href="#">Status of your complaints</a>
              <a href="#">Bulletin</a>
              <a href="#">Circular</a>
              <a href="#">Z-Connect blog</a>
              <a href="#">Downloads</a>
            </div>

            <div className="col links">
              <p className="fs-5 fw-medium">Company</p>
              <a href="#">About</a>
              <a href="#">Philosophy</a>
              <a href="#">Press & media</a>
              <a href="#">Careers</a>
              <a href="#">Zerodha Cares (CSR)</a>
              <a href="#">Zerodha.tech</a>
              <a href="#">Open source</a>
            </div>

            <div className="col links">
              <p className="fs-5 fw-medium">Quick links</p>
              <a href="#">Upcoming IPOs</a>
              <a href="#">Brokerage charges</a>
              <a href="#">Market holidays</a>
              <a href="#">Economic calendar</a>
              <a href="#">Calculators</a>
              <a href="#">Markets</a>
              <a href="#">Sectors</a>
            </div>
          </div>
          <div className="link mb-2">
            <p className="mt-5 footer-para muted">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              <a href="#"> complaints@zerodha.com </a>, for DP related to
              <a href="#"> dp@zerodha.com.</a> Please ensure you carefully read
              the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>
          </div>
          <div className="link mb-2">
            <p>
              Procedure to file a complaint on <a href="#"> SEBI SCORES: </a>
              Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
              Effective Communication, Speedy redressal of the grievances{" "}
            </p>
          </div>

          <div className="link mb-2">
            <p>
              <a href="#">
                {" "}
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </a>
            </p>
          </div>
          <div className="link mb-2">
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.{" "}
            </p>
          </div>

          <div className="link mb-2">
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
          </div>
          <div className="link mb-2">
            <p>
              {" "}
              India's largest broker based on networth as per NSE.
              <a href="#"> NSE broker factsheet</a>{" "}
            </p>
          </div>
          <div className="link mb-2">
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please<a href="#"> create a ticket here.</a>
            </p>
          </div>
          <div className="link mb-2">
            <p>
              {" "}
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
          </div>
          <div className="text-center footer-lastlinks">
            <a className="muted" href="#">NSE</a>
            <a href="#"> BSE</a>
            <a href="#">MCX</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Policies & procedures</a>
            <a href="#"> Privacy policy</a>
            <a href="#">Disclosure</a>
            <a href="#">For investor's attention</a>
            <a href="#">Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
