import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-sm">
                    <h3 className="text-lg font-bold">HandsOn</h3>
                    <p className="text-gray-400 mt-2">
                        Join us in making a difference by contributing to
                        self-driven community initiatives. Together, we can
                        create lasting impact!
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
                    <ul>
                        <li>
                            <a
                                href="/about"
                                className="text-gray-400 hover:text-white"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-gray-400 hover:text-white"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/volunteer"
                                className="text-gray-400 hover:text-white"
                            >
                                Volunteer
                            </a>
                        </li>
                        <li>
                            <a
                                href="/terms"
                                className="text-gray-400 hover:text-white"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="https://facebook.com/HandsOn"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/HandsOn"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/HandsOn"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-400 mt-6">
                <p>© 2025 HandsOn. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
