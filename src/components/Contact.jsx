import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
            📬 Contact Information
          </h2>
          <ul className="space-y-4 text-gray-800 dark:text-gray-200">
            <li>
              <strong>Email:</strong>{' '}
              <Link href="mailto:youremail@example.com" className="text-indigo-600 underline">
                hasibobydullah001@gmail.com
              </Link>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <Link href="tel:+880123456789" className="text-indigo-600 underline">
                +880 1234 567 89
              </Link>
            </li>
            <li>
              <strong>WhatsApp:</strong>{' '}
              <Link
                href="https://wa.me/880123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                +880 1234 567 89
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-6">
            Send Me a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;