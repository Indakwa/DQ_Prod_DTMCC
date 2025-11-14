import liftImage from "../images/lift.jpeg";

export function BenefitsSection() {
  const benefits = [{
    label: 'Growth',
    description: "DWS gives you a space that helps you work better, connect faster, and scale with confidence."
  }, {
    label: 'Workflow',
    description: "DWS is designed to streamline how you collaborate, meet, and get things done."
  }, {
    label: 'Smart',
    description: "DWS blends a modern workspace with smart, simple systems to help you operate efficiently."
  }];
  return <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefits That Go Beyond a Desk
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At our coworking space, you're not just renting a desk—you're
            gaining access to resources, people, and opportunities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="rounded-3xl overflow-hidden h-[550px]">
            <img src={liftImage} alt="Team meeting in coworking space" className="w-full h-full object-cover" />
          </div>

          {/* Right - Benefits */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Work Smarter in Inspiring Spaces
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => <div key={index} className="flex gap-4 items-start">
                  <span className="px-4 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium whitespace-nowrap">
                    {benefit.label}
                  </span>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}