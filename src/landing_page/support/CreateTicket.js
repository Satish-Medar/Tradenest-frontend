import React from "react";

const topics = [
  {
    title: "Account opening",
    links: [
      "Online account opening",
      "Offline account opening",
      "Company, Partnership and HUF",
      "NRI account opening",
      "Charges at Zerodha",
      "Getting started",
    ],
  },
  {
    title: "Trading and markets",
    links: [
      "Margins and leverages",
      "Order types",
      "Contract notes",
      "Market timings",
      "Kite user manual",
      "Corporate actions",
    ],
  },
  {
    title: "Funds and banking",
    links: [
      "Add funds",
      "Withdraw funds",
      "Bank account changes",
      "Pledge and margin",
      "DP charges",
      "Account statements",
    ],
  },
  {
    title: "Portfolio and reports",
    links: [
      "Holdings and positions",
      "Portfolio analytics",
      "Tax reports",
      "P&L reports",
      "Console overview",
      "Corporate actions",
    ],
  },
  {
    title: "Tech and APIs",
    links: [
      "Kite Connect overview",
      "API documentation",
      "Webhooks",
      "Sandbox access",
      "Rate limits",
      "Integration help",
    ],
  },
  {
    title: "Account security",
    links: [
      "2FA setup",
      "Device management",
      "Account recovery",
      "Report phishing",
      "Password reset",
      "Trusted devices",
    ],
  },
];

const faqs = [
  {
    q: "How do I add funds to my account?",
    a: "You can add funds via UPI, net banking, or bank transfer from the funds page.",
  },
  {
    q: "Where can I download contract notes?",
    a: "Contract notes are available in Console under Reports.",
  },
  {
    q: "How do I activate F&O?",
    a: "Submit the segment activation request in Console after completing required declarations.",
  },
  {
    q: "How do I reset my password?",
    a: "Use the Forgot password option on the login page to reset.",
  },
];

function CreateTicket() {
  return (
    <div className="container support-section">
      <div className="row">
        <div className="col-12">
          <h2 className="fs-2 mb-4">Create a ticket</h2>
          <p className="text-muted">
            Pick a topic below and we will route your request to the right team.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {topics.map((topic) => (
          <div className="col-12 col-md-6 col-lg-4" key={topic.title}>
            <div className="support-card">
              <h5>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                {topic.title}
              </h5>
              <ul className="support-list">
                {topic.links.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 mt-4">
        <div className="col-12 col-lg-7">
          <h3 className="fs-4 mb-3">Frequently asked questions</h3>
          <div className="support-faq">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q}>
                <p className="faq-q">{item.q}</p>
                <p className="text-muted mb-0">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="support-contact">
            <h3 className="fs-4 mb-3">Contact us</h3>
            <p className="text-muted">
              Reach us with a ticket for faster resolution.
            </p>
            <div className="support-contact-list">
              <div>
                <span>Email</span>
                <p className="text-muted">satishmedar5@gmail.com</p>
              </div>
              <div>
                <span>Phone</span>
                <p className="text-muted">+91 7204113614</p>
              </div>
              <div>
                <span>Hours</span>
                <p className="text-muted">Mon–Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
            <button className="btn btn-primary mt-2">Submit a ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
