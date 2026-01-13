import React from 'react';

const ClimateResearchArticlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-caser-navy mb-4 text-center">
            Pakistan's Climate Clock: A 60-Year Deep Dive into a Warming Nation
          </h1>
          <p className="text-gray-600 text-center mb-8">By Ayaz Haider Naqvi</p>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Climate change is often discussed in terms of global averages, but for Pakistan, the story is far more personal and localized. A detailed 60-year research study (1960–2020) by Ayaz Haider Naqvi, Shakeel Mahmood, and Muhammad Usman Faisal from Government College University, Lahore, has mapped out exactly how the nation's climate has shifted. Their findings suggest that Pakistan isn't just warming; it is facing a rapid acceleration of heat that threatens its very foundations.
            </p>

            <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>The Science: 135 "Ghost Stations" Mapping the Change</strong></h2>
            <p className="text-gray-700 mb-6">
              To get a precise picture of the country, the researchers didn't just rely on a few ground-based weather stations, which can be unevenly distributed. Instead, they used "multistage satellite data" from WorldClim, which provides high-resolution climate information down to 1-kilometer grid cells.
            </p>
            <p className="text-gray-700 mb-6">
              The team established 135 "hypothetical meteorological stations" at 1-degree intervals across the entire map of Pakistan. This allowed them to capture temperature trends even in remote areas without physical sensors, creating one of the most comprehensive temperature profiles of the country to date.
            </p>

            <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>The Heat is On: Breaking Down the Numbers</strong></h2>
            <p className="text-gray-700 mb-6">
              The data reveals a steady, "attention-seeking" climb in temperatures over the last six decades. On average, Pakistan's temperature has risen by 1.43°C since 1960. While that number might seem modest, it represents a massive shift in environmental energy.
            </p>
            <p className="text-gray-700 mb-6">
              Here is how the mercury has moved:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Mean Temperatures:</strong> Increased by 1.59°C.</li>
              <li><strong>Minimum (Nighttime) Temperatures:</strong> Rose by 1.55°C, jumping from 16.67°C in 1960 to 18.02°C in 2020.</li>
              <li><strong>Maximum (Daytime) Temperatures:</strong> Climbed by 1.15°C.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Notably, the study found that the first decade of the 21st century (2000–2010) was the hottest on record, showing the highest deviation from historical norms in the entire 60-year period.
            </p>

            <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>Regional Hotspots and Surprising Exceptions</strong></h2>
            <p className="text-gray-700 mb-6">
              The warming isn't uniform. The research identified specific regions that are bearing the brunt of the heat:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>The "Burn" Zones:</strong> Cities like Sibbi, Larkana, Sukkur, and Multan are seeing the most constant and significant increases in temperature.</li>
              <li><strong>The Northern Cooling:</strong> In a fascinating twist, some northern regions, specifically Hazara and Gilgit-Baltistan, have actually recorded a slight decrease in temperature since 1960.</li>
            </ul>

            <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>Seasonal Chaos: The "Spring/Summer" Surge</strong></h2>
            <p className="text-gray-700 mb-6">
              The most dramatic increases are occurring during the Spring and Summer seasons. This shift is a major "driving force" behind the unpredictable weather we now see, from immediate heatwaves to sudden, heavy monsoons.
            </p>
            <p className="text-gray-700 mb-6">
              The research highlights an alarming trend: the last three decades (1990–2020) have seen a much faster rate of warming than the thirty years that preceded them (1960–1990).
            </p>

            <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>The Domino Effect: Why This Data Matters</strong></h2>
            <p className="text-gray-700 mb-6">
              The study warns that these temperature shifts are the root cause of several looming crises for Pakistan:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Water Scarcity:</strong> Pakistan is already the 14th most water-stressed country in the world. Rising heat increases evaporation and disrupts the Indus River system that feeds our fields.</li>
              <li><strong>The "GLOF" Threat:</strong> Pakistan has more glaciers per square mile than anywhere else on Earth. Rapid melting is creating unstable glacial lakes that can burst without warning, wiping out entire downstream communities in "Glacial Lake Outburst Floods".</li>
              <li><strong>Agriculture & Food Security:</strong> With a population expected to exceed 380 million by 2050, Pakistan's reliance on climate-sensitive agriculture makes these temperature spikes a matter of national survival.</li>
            </ul>

            <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>The Path Forward</strong></h2>
            <p className="text-gray-700 mb-6">
              The researchers emphasize that their findings provide a vital "foundation" for policy. To combat this "environmental emergency," they recommend:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-caser-gold font-bold mr-2">•</span>
                <span>Developing more reliable adaptation frameworks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-caser-gold font-bold mr-2">•</span>
                <span>Scaling up afforestation and reforestation to stabilize slopes and regulate water flow.</span>
              </li>
              <li className="flex items-start">
                <span className="text-caser-gold font-bold mr-2">•</span>
                <span>Implementing early warning systems for floods and heatwaves.</span>
              </li>
            </ul>
            
            <p className="text-gray-700 mt-6">
              As this 60-year record shows, the climate is shifting beneath our feet. Understanding these trends isn't just an academic exercise; it's the first step in building a resilient future for Pakistan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateResearchArticlePage;