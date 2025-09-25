import { Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-300 max-w-xl mb-4">Interested in working together? Send a message — I usually reply within a few days.</p>

            <form className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
              <input className="md:col-span-2 rounded-md p-3 bg-gray-800 border border-gray-700 placeholder:text-gray-500" placeholder="Your message" />
              <input className="rounded-md p-3 bg-gray-800 border border-gray-700 placeholder:text-gray-500" placeholder="Email" />
              <div className="md:col-span-3 flex gap-3 mt-2">
                <button type="submit" className="rounded-md px-5 py-3 bg-pink-200 text-black font-semibold">Send message</button>
                <a href="#" className="inline-flex items-center gap-2 rounded-md px-4 py-3 border border-gray-700">
                  <Mail size={16} /> <span className="text-sm">Email</span>
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-md px-4 py-3 border border-gray-700">
                  <Linkedin size={16} /> <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </form>
          </section>
    )
}