import React from 'react'
import Card from '../common/Card'
import SectionWrapper from '../common/SectionWrapper'
const features = [
  {
    title: 'Product Strategy',
    description: 'User-centered product discovery and prioritisation to ensure you build what matters most.',
    image: '/src/assets/images/feature1'
  },
  {
    title: 'Interaction Design',
    description: 'Micro-interactions and thoughtful transitions that bring interfaces to life.',
    image: '/src/assets/images/feature2'
  },
  {
    title: 'Design Systems',
    description: 'Scalable component libraries and guidelines for consistent product growth.',
    image: '/src/assets/images/feature3'
  }
]

const Features = () => {
  return (
    <SectionWrapper id="features">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">What we do</h2>
        <p className="mt-2 text-neutral-600">Services and capabilities tailored for lean teams and ambitious products.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <Card key={f.title} title={f.title} description={f.description} image={f.image} alt={f.title} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default React.memo(Features)
