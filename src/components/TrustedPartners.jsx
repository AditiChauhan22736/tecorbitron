import React from "react";

const categories = [
  {
    title: "Technology",
    companies: [
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png?20170912170050",
        description: "Cloud Computing Services",
      },
      {
        name: "Meta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png?20230620122121",
        description: "Social Media & Virtual Reality",
      },
      {
        name: "Google",
        logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        description: "Search Engine & Digital Ads",
      },
    ],
  },
  {
    title: "Cloud",
    companies: [
      {
        name: "Microsoft Azure",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/150px-Microsoft_Azure.svg.png",
        description: "Cloud Computing Solutions",
      },
      {
        name: "IBM Cloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
        description: "AI & Cloud Services",
      },
      {
        name: "Salesforce",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png?20210504050649",
        description: "CRM & Cloud Platform",
      },
    ],
  },
  {
    title: "Finance",
    companies: [
      {
        name: "IDFC Bank",
        logo: "https://logowik.com/content/uploads/images/idfc-first-bank8846.jpg",
        description: "Digital Banking Services",
      },
      {
        name: "PayPal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png?20230314142951",
        description: "Payment Gateway Solutions",
      },
      {
        name: "Stripe",
        logo: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
        description: "Online Payment Processing",
      },
    ],
  },
  {
    title: "Marketing",
    companies: [
      {
        name: "Shopify Partners",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify-2.svg",
        description: "E-Commerce Solutions",
      },
      {
        name: "HubSpot",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/106px-HubSpot_Logo.svg.png?20190301002710",
        description: "Inbound Marketing Platform",
      },
      {
        name: "Adobe",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/512px-Adobe_Corporate_logo.svg.png",
        description: "Creative Cloud & Marketing Tools",
      },
    ],
  },
];

const TrustedPartners = () => {
  return (
    <section id="trusted-partners" className="bg-blue-950 font-[Poppins] py-12 px-6" data-scroll-section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold px-10 text-green-500">
            Our Trusted Partners
          </h3>
          <h4 className="text-4xl font-semibold px-10 text-white">
            Integration Across Platforms
          </h4>
          <p className="text-xl p-10 text-gray-400">
            Our trusted partners enable seamless integration across a variety of
            platforms, enhancing productivity and efficiency. From technology to
            finance, we collaborate with industry leaders to provide best-in-class
            solutions.
          </p>
          <button className="ml-10 bg-green-500 text-white px-10 py-2 rounded-lg hover:bg-green-600 transition">
            See All Integrations
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {category.companies.map((company, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center flex-col hover:shadow-lg transition"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 w-auto mb-2"
                    />
                    <p className="text-green-600 font-medium text-sm">
                      {company.name}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      {company.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
