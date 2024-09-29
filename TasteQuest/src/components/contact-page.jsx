import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, ClockIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order in real-time through our app or website. Simply log in to your account and go to the 'My Orders' section."
    },
    {
      question: "What if I receive the wrong order?",
      answer: "If you receive an incorrect order, please contact our customer support immediately. We'll arrange for the correct order to be delivered to you as soon as possible."
    },
    {
      question: "How do I cancel my order?",
      answer: "You can cancel your order within 5 minutes of placing it through the app or website. After this time, please contact our customer support for assistance."
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#fc8019]">Contact Us</h1>
        <div className="lg:flex lg:space-x-8">
          {/* Contact Form */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <form className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fc8019]" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fc8019]" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <select id="subject" name="subject" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fc8019]">
                  <option value="">Select a subject</option>
                  <option value="order-issue">Order Issue</option>
                  <option value="account-problem">Account Problem</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="order-number" className="block text-sm font-medium mb-1">Order Number (Optional)</label>
                <input type="text" id="order-number" name="order-number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fc8019]" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fc8019]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#fc8019] text-white font-bold py-2 px-4 rounded-md hover:bg-[#e67211] transition duration-300">Submit</button>
            </form>
          </div>

          {/* Contact Information and FAQs */}
          <div className="lg:w-1/2">
            <div className="bg-[#ffeee1] rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#fc8019]">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center"><PhoneIcon className="mr-2 text-[#fc8019]" /> +1 (555) 123-4567</p>
                <p className="flex items-center"><MailIcon className="mr-2 text-[#fc8019]" /> support@fooddelivery.com</p>
                <p className="flex items-center"><MapPinIcon className="mr-2 text-[#fc8019]" /> 123 Delivery St, Foodville, FD 12345</p>
                <div className="flex items-center">
                  <ClockIcon className="mr-2 text-[#fc8019]" />
                  <div>
                    <p className="font-semibold">Customer Support Hours:</p>
                    <p>Monday - Friday: 9AM - 9PM</p>
                    <p>Saturday - Sunday: 10AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#fc8019]">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      {expandedFaq === index ? (
                        <ChevronUpIcon className="w-5 h-5 text-[#fc8019]" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-[#fc8019]" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">We aim to respond to all inquiries within 24 hours.</p>
          <p className="text-sm text-gray-600 mt-2">
            By contacting us, you agree to our{' '}
            <a href="/privacy-policy" className="text-[#fc8019] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}