import React from 'react';

const OurMethodsToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-caser-navy mb-6 text-center">Our Methods & Tools</h1>

          <p className="text-gray-700 mb-8">
            Our commitment to cutting-edge research is reflected in the advanced tools we employ. We use a suite of technologies to ensure our work is efficient, accurate, and impactful.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>1. SurveyCTO, KoBo, ODK, Survey Master</strong></h2>
              <p className="text-gray-700 mb-4">
                We rely on these advanced digital platforms for all our data collection needs. Unlike traditional paper-based methods, these tools offer:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Real-time Monitoring:</span>
                  <span className="ml-2">We can view incoming data as it is collected, allowing for immediate quality checks and supervision.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Offline Functionality:</span>
                  <span className="ml-2">Our teams can collect data in remote areas with no internet connectivity, with data syncing automatically once connected.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Built-in Validation:</span>
                  <span className="ml-2">These tools allow us to build complex skip logic, validation rules, and automated checks directly into the survey instrument, minimizing errors at the source.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>2. Statistical Software: STATA, SPSS, R, Python, Power BI</strong></h2>
              <p className="text-gray-700 mb-4">
                Our analytical expertise is powered by a diverse range of statistical software.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">STATA & SPSS:</span>
                  <span className="ml-2">We use these for traditional statistical analysis, including regressions, hypothesis testing, and descriptive statistics. They are the gold standard for social science research.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">R & Python:</span>
                  <span className="ml-2">These are our go-to tools for advanced analytics. They allow for custom scripting, machine learning, and data cleaning at scale, giving us flexibility and power.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Power BI:</span>
                  <span className="ml-2">We use this for creating interactive, dynamic data visualization dashboards. This allows stakeholders to explore the data for themselves, making our findings more accessible and engaging.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>3. Qualitative Tools: MAXQDA, NVivo</strong></h2>
              <p className="text-gray-700 mb-4">
                We use specialized software to analyze qualitative data, ensuring a systematic and rigorous approach.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Systematic Coding:</span>
                  <span className="ml-2">These tools help us systematically code and categorize large volumes of qualitative data from interviews and focus groups.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Thematic Analysis:</span>
                  <span className="ml-2">We use them to identify recurring themes and patterns, which helps us draw robust conclusions from qualitative narratives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Mixed-Methods Integration:</span>
                  <span className="ml-2">These tools allow us to integrate qualitative findings with our quantitative data, providing a holistic view.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>4. GIS/Remote Sensing: ArcGIS, QGIS, ERDAS Imagine</strong></h2>
              <p className="text-gray-700 mb-4">
                We leverage geospatial technology to add a crucial spatial dimension to our research.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">ArcGIS & QGIS:</span>
                  <span className="ml-2">We use these for mapping, spatial analysis, and creating professional-grade maps. This helps us visualize relationships between data points and their geographic location.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">ERDAS Imagine:</span>
                  <span className="ml-2">We use this software for processing and analyzing satellite imagery, allowing us to conduct studies on land use, climate change, and environmental degradation.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>5. AI Tools: Agentic AI, Workflow Automation, Data Visualization Dashboards</strong></h2>
              <p className="text-gray-700 mb-4">
                We are at the forefront of using AI to enhance our research capabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Agentic AI:</span>
                  <span className="ml-2">We develop custom AI agents to automate specific tasks, such as analyzing open-text responses or identifying anomalies in large datasets.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Workflow Automation:</span>
                  <span className="ml-2">We use automation scripts to streamline our data pipelines from collection to cleaning and reporting, reducing human error and increasing efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Data Visualization Dashboards:</span>
                  <span className="ml-2">We use AI to create more intuitive and predictive dashboards that can forecast trends and offer dynamic insights.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMethodsToolsPage;