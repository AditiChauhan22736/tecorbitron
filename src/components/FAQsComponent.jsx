import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    { question: "What is the purpose of this website?", answer: "This website provides information about our services and solutions." },
    { question: "How can I contact customer support?", answer: "You can contact us through the contact form or by emailing support@example.com." },
    { question: "Is there a refund policy?", answer: "Yes, we offer a 30-day refund policy for purchases made through our website." },
    { question: "How do I sign up for an account?", answer: "You can sign up by clicking the 'Sign Up' button on the homepage." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and other major payment methods." },
    { question: "How can I track my order?", answer: "Once your order is shipped, we will provide a tracking number to track its status." },
    { question: "Can I change my order after placing it?", answer: "Unfortunately, once an order is placed, we cannot modify it." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries." },
    { question: "Are the products covered by a warranty?", answer: "Yes, all of our products come with a standard warranty." },
    { question: "What is your privacy policy?", answer: "Our privacy policy outlines how we collect and use your data. You can view it on our website." }
  ];

  return (
    <section className="bg-gray-100 font-[Poppins] py-12 md:py-16" data-scroll-section>
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Title and Subtitle */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-green-900 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-3xl sm:text-lg text-blue-900 font-bold mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Here are the answers to some of the most common questions we receive.
          If you have any other questions, feel free to reach out.
        </motion.p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="group bg-white shadow-md rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              {/* FAQ Question */}
              <motion.summary
                className="text-base sm:text-lg font-medium text-black cursor-pointer flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                {faq.question}
                <motion.span
                  className="text-xl text-black group-open:rotate-180 transition-transform duration-300"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </motion.summary>

              {/* FAQ Answer */}
              <motion.p
                className="mt-4 text-sm sm:text-base text-gray-600 hidden group-open:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
