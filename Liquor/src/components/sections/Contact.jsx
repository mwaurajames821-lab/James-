import React from 'react'
import SectionWrapper from '../common/SectionWrapper'
import Button from '../common/Button'

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">Let's build something great</h2>
        <p className="mt-3 text-neutral-600">Tell us about your product and goals — we'll reply within 2 business days with a tailored plan.</p>
        <form className="mt-8 grid grid-cols-1 gap-4">
          <input aria-label="Your name" className="px-4 py-3 border rounded-md" placeholder="Your name" />
          <input aria-label="Your email" className="px-4 py-3 border rounded-md" placeholder="Email address" />
          <textarea aria-label="Project details" className="px-4 py-3 border rounded-md" rows="5" placeholder="Tell us about your project"></textarea>
          <div className="flex justify-center">
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default React.memo(Contact)
