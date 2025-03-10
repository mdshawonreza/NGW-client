import { useState } from "react";

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1580px] md:px-24 lg:px-8 lg:py-20 pt-96 flex justify-center items-center min-h-[100vh]">

            <section id="contact" className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
                <h1 className="bg-[#F26B24] text-white text-xl font-bold py-3 px-4 shadow-md">CONTACT</h1>
                <p className="mt-4 text-gray-600">
                    Yoda soon you will call me master Governor Tarkin. A new hope Boba Fett bantha forest moon.
                    Tusken raider Master Yoda do or do not never tell me the odds.
                </p>
                <button
                    className="w-full bg-[#F26B24] text-white py-3 mt-4 shadow-md hover:shadow-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Close Form" : "Open Form"}
                </button>
                {isOpen && (
                    <form className="mt-4 space-y-4">
                        <div className="relative">
                            <label className="absolute left-3 top-3 text-white bg-[#F26B24] px-2" htmlFor="contact_name">NAME</label>
                            <input
                                type="text"
                                id="contact_name"
                                className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                            />
                        </div>
                        <div className="relative">
                            <label className="absolute left-3 top-3 text-white bg-[#F26B24] px-2" htmlFor="contact_email">EMAIL</label>
                            <input
                                type="email"
                                id="contact_email"
                                className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                            />
                        </div>
                        <div className="relative">
                            <label className="absolute left-3 top-3 text-white bg-[#F26B24] px-2" htmlFor="contact_subject">SUBJECT</label>
                            <input
                                type="text"
                                id="contact_subject"
                                className="w-full border border-gray-300 p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                            />
                        </div>
                        <div>
                            <textarea
                                id="contact_message"
                                rows="4"
                                placeholder="Your message..."
                                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-red-300"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-[#F26B24] text-white px-6 py-3 shadow-md hover:shadow-none">
                                ENVOYER
                            </button>
                        </div>
                    </form>
                )}
            </section>
        </div>
    );
}
