import React from 'react';
import { Sun, Zap, Shield, Activity, ArrowDownUp, Grid3x3 } from 'lucide-react';

export default function OnGridSolarSystem() {
  const components = [
    {
      icon: <Grid3x3 className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Panels",
      description: "Solar panels are the most visible part of the solar system. They're installed on the rooftop, facing the South direction. When sunlight falls on these panels, they absorb that sunlight and convert it into electricity.",
      note: "Solar electricity directly from the panels is DC power. Since homes require alternating current (AC), a solar inverter is needed to convert direct current into AC."
    },
    {
      icon: <Zap className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Inverter",
      description: "Without a solar inverter, the entire solar system would have been an impractical model. The solar inverter converts DC into AC.",
      note: "This conversion is essential because that's the only way to convert electricity generated from an on-grid solar system into a usable form (AC) that can run household appliances."
    },
    {
      icon: <Shield className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Module Mounting Structures",
      description: "These are the pillars that support solar panels. They must be of a standard grade so that they can withstand heavy winds during storms and cyclones and hold the weight of the solar panels for 25 years (that's the life of a solar system).",
      features: [
        "Withstand wind speeds as high as 170 kmph",
        "Prevent rusting for years because they have a high-density galvanized iron (HDGI) coating of 80 microns to withstand corrosion."
      ]
    },
    {
      icon: <Activity className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Solar Accessories",
      description: "They might not sound that important in the entire setup, but solar accessories are as important as a panel, an inverter, or a mounting structure.",
      accessories: [
        {
          name: "AC and DC cables",
          desc: "They are required for wiring solar panels and connecting different parts to make the entire solar grid functional."
        },
        {
          name: "DC combiner boxes",
          desc: "A DC combiner box works like an isolation box. All the cables carrying DC current from the panels are isolated in this box. DC power coming from the panels can be as high as 1,000 volts, even more. It's dangerous (potentially lethal); hence, a DC combiner box is required. This box feeds the DC current into the solar inverter and the solar inverter produces alternating current."
        },
        {
          name: "AC combiner boxes",
          desc: "The AC power from the solar inverter is fed into an AC combiner box (all cables carrying the AC current from multiple inverters are combined in this box)."
        },
        {
          name: "Earthing strips and wires",
          desc: "Once the entire on-grid solar system is set up, earthing is done using earthing strips and wires."
        }
      ]
    },
    {
      icon: <ArrowDownUp className="w-5 h-5 md:w-8 md:h-8" />,
      title: "Bi-directional Meter",
      description: "Also known as a net meter, the bi-directional meter is basically designed to keep a track of electricity supplied to the grid and electricity imported from the grid.",
      note: "An on-grid solar system will not become functional until and unless the regular meter is replaced with a bidirectional meter."
    }
  ];

  const workingSteps = [
    {
      title: "Solar Energy Capture and DC Power Generation",
      content: "Solar panels, composed of photovoltaic (PV) cells, absorb photons from sunlight and free electrons within the cell's semiconductor material. This movement of electrons generates a direct current (DC). The total DC output depends on factors such as panel efficiency, sunlight intensity, and shading. Needless to say, higher irradiance yields more current."
    },
    {
      title: "DC-to-AC Conversion via the Solar Inverter",
      content: "The inverter is the heart of your solar system. It takes the panel-generated DC and inverts it into alternating current (AC), matching the frequency (50 Hz in India) and voltage of the local grid. Modern inverters also perform maximum power point tracking (MPPT) to continually adjust voltage/current inputs, extracting the highest possible power from your panels."
    },
    {
      title: "Bidirectional Meter Integration",
      content: "Once converted to grid-compliant AC, the electricity flows through a bi-directional (net) meter. This meter precisely records both incoming units drawn from the grid and outgoing units exported from your solar system, ensuring you're billed only for the net energy you consume."
    },
    {
      title: "Household Consumption of Solar-Generated AC",
      content: "During the day, your home's appliances, such as lights, fans, fridges, air conditioners, and electronics, draw AC power directly from the inverter output. Because solar power is typically the first source used, it reduces or altogether replaces the need to import electricity from the grid."
    },
    {
      title: "Exporting Excess Solar Power",
      content: "If your panels produce more electricity than your household consumes at any moment, the surplus AC automatically travels back through the bi-directional meter into the grid. Your meter records these exported units, which may earn you financial credit or feed-in benefits under your local net-metering policy."
    },
    {
      title: "Importing Grid Power When Needed",
      content: "After sunset or during low-sunlight periods when it's cloudy, the bi-directional meter switches to import mode if your solar output drops below your home's demand. It draws the shortfall from the grid, using up any previously accrued credits first, so your appliances continue running seamlessly without interruption."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 md:py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <div className="flex items-center gap-2 md:gap-3">
            <Sun className="w-7 h-7 md:w-10 md:h-10" />
            <div>
              <h1 className="text-xl md:text-3xl font-bold">Aditya Solar Energy</h1>
              <p className="text-blue-100 text-xs md:text-sm">Powering Your Future with Clean Energy</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-12">
        {/* Introduction */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">What is an On-grid Solar System?</h2>
          <div className="bg-white rounded-xl shadow-md p-4 md:p-8 border-l-4 border-blue-600">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
              An on-grid solar system (grid-tied) connects directly to the utility grid through a bi-directional meter (net meter). Most Indian homes with a reliable grid connection choose on-grid solar since this system is powerful enough to support all household energy requirements.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The on-grid solar system is a careful compilation of many components, listed below, arranged together to convert sunlight into electricity:
            </p>
            <ul className="mt-3 md:mt-4 space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Solar Panels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A solar inverter</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Solar module mounting structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A bi-directional meter</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Solar accessories (AC and DC cables, AC and DC combiner boxes, conduit trays, lightning arrester, MC4 connectors)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Did You Know Box */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl shadow-md p-4 md:p-6 mb-8 md:mb-16 border-l-4 border-amber-500">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">Did you know?</h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            When maintained properly, an on-grid solar system can last for 25 years. Contrary to popular belief, cleaning your panels with sprinklers can actually damage them. To keep your system operating at its peak efficiency, be sure to sign up for professional after-sales services.
          </p>
        </div>

        {/* Components Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-8">What Are the On-Grid Solar System Components?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            Here's a breakdown of how every single component in an on-grid solar system comes together to power your home.
          </p>
          
          <div className="space-y-4 md:space-y-8">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-100 p-2 md:p-4 rounded-lg text-blue-600 flex-shrink-0">
                    {component.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{index + 1}. {component.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">{component.description}</p>
                    
                    {component.note && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 rounded">
                        <p className="text-xs md:text-sm font-semibold text-blue-900">Did you know?</p>
                        <p className="text-xs md:text-base text-gray-700 mt-1">{component.note}</p>
                      </div>
                    )}
                    
                    {component.features && (
                      <div className="mt-3 md:mt-4">
                        <p className="text-sm md:text-base font-semibold text-gray-800 mb-2">The best solar module mounting structures are prefabricated in precision labs. They're coated with hot-dip galvanizing on steel to make them rust-proof.</p>
                        <p className="text-sm md:text-base text-gray-700 mb-2">For instance, SolarSquare's Intelligent WindPro Mount™ 2.0 mounting structure, which is IIT-Bombay approved, can:</p>
                        <ul className="space-y-2">
                          {component.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span className="text-xs md:text-base text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {component.accessories && (
                      <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                        <p className="text-sm md:text-base font-semibold text-gray-800">Let's see how!</p>
                        {component.accessories.map((acc, idx) => (
                          <div key={idx} className="pl-3 md:pl-4 border-l-2 border-gray-200">
                            <p className="text-sm md:text-base font-semibold text-gray-800">{acc.name}:</p>
                            <p className="text-xs md:text-base text-gray-700">{acc.desc}</p>
                          </div>
                        ))}
                        <p className="text-xs md:text-sm text-gray-600 italic mt-3 md:mt-4">
                          Please note: all the DC cable connections are made using MC4 connectors.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Net Metering Benefits */}
        <section className="mb-8 md:mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md p-4 md:p-8 border-l-4 border-green-600">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">How Net Metering Helps</h3>
            <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
              The net meter helps the discom track the power generated by the solar system, the power consumed, the power supplied to the grid, and the power imported.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
              At the end of every month, when the electricity bill is generated, the readings from the bidirectional meter give an account of:
            </p>
            <ul className="space-y-2 mb-4 md:mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-sm md:text-base text-gray-700">How many units were supplied to the grid</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-sm md:text-base text-gray-700">How many units were taken from the grid</span>
              </li>
            </ul>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-green-700">If you supply more units to the grid than you consumed:</span> Those units will be deducted from your bill. It will reduce the bill further.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold text-blue-700">If you use extra units from the grid:</span> Those units would be added to your bill in addition to what your solar plant generated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">How Does an On-grid Solar System Work?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-8">
            Now you've seen how multiple on-grid solar system components come together, it makes sense to break down the process of sunlight getting converted into electricity.
          </p>
          <p className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-8">Here's how an on-grid solar system works:</p>
          
          <div className="space-y-4 md:space-y-6">
            {workingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8 mt-8 md:mt-16">
        <div className="max-w-7xl mx-auto px-3 md:px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Sun className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-lg md:text-xl font-bold">Aditya Solar Energy</p>
          </div>
          <p className="text-sm md:text-base text-gray-400">Empowering homes with sustainable solar solutions</p>
        </div>
      </footer>
    </div>
  );
}