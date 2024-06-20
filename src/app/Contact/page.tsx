import React from "react";

const Contact = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Contact Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Contact Details
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            <strong>Organizing Secretary:</strong>
            <br />
            Dr. R. Kalirajan (+91 91505 36567)
            <br />
            Dr. B. Gowramma (+91 94421 11172)
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            <strong>Enquiry & Registration Committee:</strong>
            <br />
            Operant Pharmacy Federation (+91 94609-71652)
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Contact Form
          </h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-light p-2 rounded-md hover:bg-secondary transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Our Location
          </h2>
          <div className="flex justify-center mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.490983208213!2d76.69538641531514!3d11.411236891851387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a9468ea909%3A0x2d67c252db4ea5df!2sJSS%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1623278749595!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
