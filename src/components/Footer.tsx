import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-light px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p>
            Email:{" "}
            <a href="mailto:info@conference.com" className="text-accent">
              info@conference.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="text-accent">
              +123 456 7890
            </a>
          </p>
          <p>
            Address:{" "}
            <span className="text-accent">
              123 Conference St, City, Country
            </span>
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-light hover:text-accent">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.325 1.325 1.325h11.525v-9.294h-3.123v-3.622h3.123v-2.67c0-3.1 1.893-4.787 4.656-4.787 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.505 0-1.796.716-1.796 1.764v2.309h3.59l-.467 3.622h-3.123v9.294h6.116c.733 0 1.325-.592 1.325-1.325v-21.351c0-.733-.592-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-light hover:text-accent">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.994 4.569c-.883.392-1.833.656-2.828.775 1.016-.608 1.794-1.572 2.163-2.723-.951.564-2.005.974-3.127 1.196-.897-.956-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.919 0 .385.044.76.127 1.121-4.088-.205-7.715-2.164-10.141-5.144-.424.725-.666 1.562-.666 2.456 0 1.696.865 3.191 2.182 4.065-.803-.026-1.56-.246-2.222-.614v.062c0 2.367 1.684 4.342 3.918 4.788-.411.111-.844.171-1.292.171-.316 0-.623-.03-.923-.086.623 1.945 2.432 3.36 4.575 3.398-1.675 1.313-3.786 2.096-6.078 2.096-.394 0-.785-.023-1.17-.067 2.166 1.389 4.738 2.202 7.507 2.202 9.007 0 13.934-7.459 13.934-13.934 0-.211 0-.422-.015-.632.959-.693 1.79-1.558 2.448-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="text-light hover:text-accent">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.004 0.227c-6.623 0-12.003 5.383-12.003 12.007 0 5.307 3.439 9.77 8.192 11.351.599.109.82-.263.82-.58 0-.286-.011-1.247-.017-2.265-3.337.727-4.042-1.616-4.042-1.616-.545-1.378-1.333-1.746-1.333-1.746-1.09-.746.084-.731.084-.731 1.202.085 1.833 1.234 1.833 1.234 1.07 1.835 2.805 1.305 3.492.998.108-.775.418-1.306.761-1.607-2.665-.304-5.466-1.335-5.466-5.931 0-1.31.469-2.382 1.235-3.222-.124-.303-.536-1.521.117-3.171 0 0 1.008-.321 3.303 1.229.957-.267 1.983-.401 3.005-.406 1.02.005 2.048.139 3.008.406 2.29-1.55 3.295-1.229 3.295-1.229.656 1.65.244 2.868.119 3.171.77.84 1.232 1.912 1.232 3.222 0 4.61-2.804 5.623-5.477 5.921.43.37.814 1.1.814 2.22 0 1.602-.015 2.898-.015 3.293 0 .321.217.696.825.579 4.757-1.581 8.195-6.044 8.195-11.351 0-6.624-5.38-12.007-12.003-12.007z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter Signup</h2>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="w-full bg-accent text-white p-2 rounded-md hover:bg-secondary transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Legal Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Legal</h2>
          <ul className="text-lg">
            <li>
              <a href="#" className="text-accent hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-accent hover:underline mt-2 block">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-accent hover:underline mt-2 block">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; 2024 Conference Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
