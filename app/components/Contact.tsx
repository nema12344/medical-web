export default function Contact(){
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-heading font-bold text-center">Get in touch</h3>
        <p className="text-center text-gray-600 mt-2">Have a project? Let’s chat.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="bg-primary-50/40 p-6 rounded-xl">
            <div className="mb-3">
              <label className="text-sm">Name</label>
              <input className="mt-1 block w-full rounded-md border-gray-200 p-2" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="text-sm">Email</label>
              <input className="mt-1 block w-full rounded-md border-gray-200 p-2" placeholder="you@company.com" />
            </div>
            <div className="mb-3">
              <label className="text-sm">Message</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-200 p-2" rows={4} placeholder="Tell us about the project"></textarea>
            </div>
            <button className="btn-accent px-4 py-2 rounded-md">Send message</button>
          </form>

          <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50">
            <h4 className="font-semibold">Contact details</h4>
            <p className="mt-3 text-gray-600">Email: hello@dispowell.example</p>
            <p className="mt-2 text-gray-600">Location: Remote / India</p>
            <div className="mt-6">
              <a href="#" className="text-sm underline">Privacy policy</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
