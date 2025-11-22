import React from 'react'
import SectionWrapper from '../common/SectionWrapper'

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">Our story</h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">Founded by practitioners who believe simplicity is a strategic advantage, Jasper Studio helps early-stage teams turn product intuition into validated designs. We focus on measurable outcomes: faster time-to-value, increased user satisfaction, and design systems that reduce future rework.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-left">
            <h3 className="font-semibold">Who we serve</h3>
            <p className="mt-2 text-sm text-neutral-600">Startups, small product teams, and creative agencies seeking pragmatic design leadership.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-left">
            <h3 className="font-semibold">Our approach</h3>
            <p className="mt-2 text-sm text-neutral-600">We combine research, rapid prototyping and design systems to ensure product decisions are both user-centered and business-aligned.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default React.memo(About)
