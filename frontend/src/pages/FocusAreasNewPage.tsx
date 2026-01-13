import React from 'react';

const FocusAreasNewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-caser-navy mb-6 text-center">Focus Areas</h1>

          <p className="text-gray-700 mb-6">
            At our organization, we believe that research is not just about collecting numbers, it is about uncovering truths, giving voice to communities, and informing the decisions that shape lives. Our work combines rigorous methodologies, innovative tools, and on-the-ground expertise to deliver research, surveys, and evaluations that make a real impact. From large-scale household surveys to cutting-edge AI-powered analytics, we bridge the gap between knowledge and action.
          </p>

          <p className="text-gray-700 mb-8">
            Below is a detailed outline of the scope of our work:
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>1. Survey Design & Implementation</strong></h2>
              <p className="text-gray-700 mb-4">
                Designing and implementing surveys is at the core of what we do. We build robust survey frameworks tailored to specific contexts and research needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Needs Assessment:</span>
                  <span className="ml-2">Before designing any survey, we conduct a thorough needs analysis, consulting stakeholders, policy priorities, and existing data gaps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Survey Frameworks:</span>
                  <span className="ml-2">Development of structured methodologies ensuring representativeness, cultural appropriateness, and ethical compliance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Pilot Testing:</span>
                  <span className="ml-2">Small-scale piloting to identify weaknesses in survey design, question clarity, and respondent understanding.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Implementation Plans:</span>
                  <span className="ml-2">End-to-end planning of logistics, timelines, and resources for effective roll-out.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>2. Quantitative and Qualitative Surveys</strong></h2>
              <p className="text-gray-700 mb-4">
                We combine numbers with narratives, ensuring depth and breadth in findings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Quantitative Surveys:</span>
                  <span className="ml-2">Structured questionnaires, large samples, and statistical representativeness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Qualitative Surveys:</span>
                  <span className="ml-2">In-depth interviews, focus groups, ethnographic approaches to capture community perceptions and lived realities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Mixed-Methods Approach:</span>
                  <span className="ml-2">Integrating both to offer nuanced understanding and evidence-based conclusions.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>3. Large-Scale Household, Education, Health, and Labor Force Surveys</strong></h2>
              <p className="text-gray-700 mb-4">
                Our expertise includes designing and executing nationwide and regional surveys in key development areas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Household Surveys:</span>
                  <span className="ml-2">Socio-economic profiling, income and expenditure patterns, living standards measurement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Education Surveys:</span>
                  <span className="ml-2">Enrollment trends, dropout factors, access to resources, and quality of learning outcomes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Health Surveys:</span>
                  <span className="ml-2">Maternal and child health indicators, immunization coverage, nutrition, access to healthcare facilities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Labor Force Surveys:</span>
                  <span className="ml-2">Employment/unemployment rates, skill mapping, migration trends, and wage analysis.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>4. Specialized Thematic Surveys (Climate, WASH, Governance, etc.)</strong></h2>
              <p className="text-gray-700 mb-4">
                We conduct tailored surveys that address pressing thematic issues:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Climate & Environment:</span>
                  <span className="ml-2">Community vulnerability assessments, adaptation strategies, and disaster preparedness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">WASH (Water, Sanitation, Hygiene):</span>
                  <span className="ml-2">Access to clean water, sanitation facilities, hygiene practices, and behavioral studies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Governance:</span>
                  <span className="ml-2">Citizen perception surveys on public services, transparency, accountability, and participation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Social Cohesion:</span>
                  <span className="ml-2">Surveys on inter-community relations, inclusivity, and conflict resolution.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>5. Monitoring, Evaluation, and Learning (MEL)</strong></h2>
              <p className="text-gray-700 mb-4">
                Our MEL frameworks ensure development projects are not only implemented but also deliver measurable impact.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Monitoring:</span>
                  <span className="ml-2">Ongoing data collection and tracking against indicators.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Evaluation:</span>
                  <span className="ml-2">Independent assessment of project outcomes and effectiveness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Learning:</span>
                  <span className="ml-2">Drawing lessons to inform current and future programming.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Adaptive Management:</span>
                  <span className="ml-2">Real-time adjustments to improve efficiency and impact.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>6. Third-Party Evaluations for Development Programs</strong></h2>
              <p className="text-gray-700 mb-4">
                We act as independent evaluators, providing unbiased assessments of donor-funded programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Credibility:</span>
                  <span className="ml-2">Our independence ensures objective results.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Compliance Checks:</span>
                  <span className="ml-2">Verifying that programs meet donor requirements, government regulations, and community needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Impact Measurement:</span>
                  <span className="ml-2">Determining how interventions translate into real-world improvements.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>7. Baseline, Midline, and Endline Assessments</strong></h2>
              <p className="text-gray-700 mb-4">
                We help organizations track their progress across the lifecycle of a project.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Baseline Surveys:</span>
                  <span className="ml-2">Establishing the initial conditions before interventions begin.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Midline Surveys:</span>
                  <span className="ml-2">Assessing progress mid-way, identifying course corrections.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Endline Surveys:</span>
                  <span className="ml-2">Measuring final results against objectives and indicators.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Comparative Analysis:</span>
                  <span className="ml-2">Linking baseline, midline, and endline findings for long-term impact assessment.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>8. Data Quality Assurance & Verification</strong></h2>
              <p className="text-gray-700 mb-4">
                Quality data is the backbone of credible research.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Spot-Checks & Audits:</span>
                  <span className="ml-2">Random back-checks and field visits to verify accuracy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Consistency Checks:</span>
                  <span className="ml-2">Automated tools to detect missing, inconsistent, or outlier data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Enumerator Supervision:</span>
                  <span className="ml-2">Close monitoring of data collectors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Technology-Enabled Verification:</span>
                  <span className="ml-2">GPS tracking, time stamps, and real-time dashboards.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>9. Policy-Oriented Research</strong></h2>
              <p className="text-gray-700 mb-4">
                Our research is designed to influence decision-making at policy levels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Evidence-Based Advocacy:</span>
                  <span className="ml-2">Turning research findings into actionable recommendations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Policy Dialogues:</span>
                  <span className="ml-2">Engaging government and stakeholders in evidence-sharing sessions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Think-Tank Role:</span>
                  <span className="ml-2">Producing knowledge resources that shape public debates and reforms.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>10. Actionable Insights for Policymakers</strong></h2>
              <p className="text-gray-700 mb-4">
                We move beyond data presentation by translating findings into practical insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Clear Recommendations:</span>
                  <span className="ml-2">Framing guidance that is realistic, context-specific, and implementable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Decision-Support Tools:</span>
                  <span className="ml-2">Infographics, policy briefs, and dashboards tailored for policymakers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Scenario Building:</span>
                  <span className="ml-2">Providing options for future planning, backed by evidence.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>11. Sectoral Research in Education, Health, Human Rights, Agriculture, etc.</strong></h2>
              <p className="text-gray-700 mb-4">
                We specialize in in-depth research across key development sectors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Education:</span>
                  <span className="ml-2">Learning outcomes, curriculum effectiveness, teacher performance, digital education.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Health:</span>
                  <span className="ml-2">Disease mapping, health financing, healthcare system strengthening.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Human Rights:</span>
                  <span className="ml-2">Gender equity, minority rights, access to justice.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Agriculture:</span>
                  <span className="ml-2">Food security, rural livelihoods, climate-smart farming.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>12. Research Reports, White Papers, and Policy Briefs</strong></h2>
              <p className="text-gray-700 mb-4">
                We produce professional publications that communicate findings to diverse audiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Research Reports:</span>
                  <span className="ml-2">Comprehensive documentation of methodologies, findings, and recommendations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">White Papers:</span>
                  <span className="ml-2">Thought-leadership documents to guide debates on pressing issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Policy Briefs:</span>
                  <span className="ml-2">Short, accessible summaries designed for policymakers and practitioners.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>13. Data Management & Analysis</strong></h2>
              <p className="text-gray-700 mb-4">
                We ensure robust systems for handling large and complex datasets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Secure Storage:</span>
                  <span className="ml-2">Cloud-based and local data management protocols.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Data Processing Pipelines:</span>
                  <span className="ml-2">From collection to analysis, ensuring efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Integration of Multiple Data Sources:</span>
                  <span className="ml-2">Household surveys, administrative records, big data.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>14. Data Collection Tools (SurveyCTO, ODK, KoBo, etc.)</strong></h2>
              <p className="text-gray-700 mb-4">
                We deploy state-of-the-art digital tools for data gathering.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">ODK/KoBoToolbox:</span>
                  <span className="ml-2">Mobile-based data collection platforms for offline use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">SurveyCTO:</span>
                  <span className="ml-2">Advanced tool for monitoring data quality during collection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Custom Dashboards:</span>
                  <span className="ml-2">Real-time data monitoring for stakeholders.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>15. Statistical Analysis (SPSS, STATA, Python, MAXQDA, PowerBI)</strong></h2>
              <p className="text-gray-700 mb-4">
                Our analysts apply a wide range of statistical and computational tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Descriptive Statistics:</span>
                  <span className="ml-2">Summarizing trends and distributions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Inferential Analysis:</span>
                  <span className="ml-2">Hypothesis testing, regressions, causal inference.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Qualitative Analysis:</span>
                  <span className="ml-2">Thematic coding using MAXQDA.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Data Visualization:</span>
                  <span className="ml-2">Dynamic dashboards using PowerBI.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>16. Data Cleaning, Entry, Validation, and Advanced Analytics</strong></h2>
              <p className="text-gray-700 mb-4">
                Raw data becomes usable only after rigorous processing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Data Entry Protocols:</span>
                  <span className="ml-2">Double entry, cross-validation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Cleaning:</span>
                  <span className="ml-2">Removing inconsistencies, duplicates, and errors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Validation:</span>
                  <span className="ml-2">Ensuring adherence to coding frameworks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Advanced Analytics:</span>
                  <span className="ml-2">Predictive modeling, simulations, and trend forecasting.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>17. Field Operations & Supervision</strong></h2>
              <p className="text-gray-700 mb-4">
                Strong field management ensures the credibility of our work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Enumerator Recruitment & Training:</span>
                  <span className="ml-2">Building capable field teams.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Supervision Frameworks:</span>
                  <span className="ml-2">Multi-tiered monitoring by team leads and supervisors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Auditing Systems:</span>
                  <span className="ml-2">Randomized quality checks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Field Safety Protocols:</span>
                  <span className="ml-2">Ensuring ethical and safe practices for both staff and communities.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>18. Nationwide Field Teams and Networks</strong></h2>
              <p className="text-gray-700 mb-4">
                Our reach extends across Pakistan.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Urban & Rural Coverage:</span>
                  <span className="ml-2">Teams positioned strategically for nationwide representation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Local Expertise:</span>
                  <span className="ml-2">Hiring from within communities to ensure cultural sensitivity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Rapid Deployment:</span>
                  <span className="ml-2">Ability to mobilize field teams quickly for urgent surveys.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>19. Enumerator Training, Supervision, and Auditing</strong></h2>
              <p className="text-gray-700 mb-4">
                We invest heavily in capacity building of field staff.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Training Modules:</span>
                  <span className="ml-2">Ethics, interviewing techniques, digital tools.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Supervision Plans:</span>
                  <span className="ml-2">Clear hierarchies to ensure accountability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Auditing Practices:</span>
                  <span className="ml-2">Independent checks to maintain integrity.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>20. GIS-Enabled Mapping and Data Visualization</strong></h2>
              <p className="text-gray-700 mb-4">
                We integrate spatial analysis into our work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Household Mapping:</span>
                  <span className="ml-2">Locating respondents for longitudinal tracking.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Service Mapping:</span>
                  <span className="ml-2">Visualizing availability of schools, hospitals, and infrastructure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Thematic Maps:</span>
                  <span className="ml-2">Showing poverty, climate risks, or migration patterns.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>21. Capacity Building & Training</strong></h2>
              <p className="text-gray-700 mb-4">
                We strengthen local capacity for sustainable research ecosystems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Workshops for NGOs/INGOs:</span>
                  <span className="ml-2">Practical training in survey design and data analysis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Government Partnerships:</span>
                  <span className="ml-2">Building capacity within state institutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Hands-On Learning:</span>
                  <span className="ml-2">On-the-job mentoring for young researchers.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>22. Training Local Teams in Research Methodology and Data Collection Tools</strong></h2>
              <p className="text-gray-700 mb-4">
                We ensure knowledge transfer to local teams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Survey Tools:</span>
                  <span className="ml-2">KoBo, ODK, SurveyCTO.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Ethical Practices:</span>
                  <span className="ml-2">Informed consent, confidentiality, data protection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Community Involvement:</span>
                  <span className="ml-2">Training community representatives for participatory research.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>23. Community Awareness Campaigns</strong></h2>
              <p className="text-gray-700 mb-4">
                We connect research with community empowerment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Awareness Drives:</span>
                  <span className="ml-2">Sharing findings with communities to promote behavior change.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Workshops & Dialogues:</span>
                  <span className="ml-2">Engaging local voices in interpreting results.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Feedback Loops:</span>
                  <span className="ml-2">Ensuring communities benefit from research insights.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>24. Specialized Training Workshops for NGOs/INGOs and Government Partners</strong></h2>
              <p className="text-gray-700 mb-4">
                We design custom trainings to strengthen institutional capacity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Survey Methodology Workshops:</span>
                  <span className="ml-2">Tailored for program staff.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Monitoring & Evaluation Training:</span>
                  <span className="ml-2">Practical sessions on indicators and frameworks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Data Analysis Bootcamps:</span>
                  <span className="ml-2">Training in SPSS, STATA, and visualization tools.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>25. GIS & Remote Sensing Services</strong></h2>
              <p className="text-gray-700 mb-4">
                We use geospatial technologies to enrich research.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Spatial Analysis:</span>
                  <span className="ml-2">Land-use mapping, urban planning, disaster risk analysis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Remote Sensing:</span>
                  <span className="ml-2">Using satellite imagery for environmental monitoring.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Integrating GIS with Surveys:</span>
                  <span className="ml-2">Linking household data with spatial variables.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>26. Spatial Analysis and Mapping for Development and Environment Projects</strong></h2>
              <p className="text-gray-700 mb-4">
                Our GIS services provide critical insights for planners.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Infrastructure Planning:</span>
                  <span className="ml-2">Identifying gaps in schools, clinics, and transport.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Environmental Studies:</span>
                  <span className="ml-2">Tracking deforestation, water stress, and urban sprawl.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Disaster Preparedness:</span>
                  <span className="ml-2">Hazard mapping for floods, droughts, and earthquakes.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>27. Land Use, Climate Change, and Urban Planning Assessments</strong></h2>
              <p className="text-gray-700 mb-4">
                We support sustainable development initiatives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Land Use Studies:</span>
                  <span className="ml-2">Agriculture patterns, housing, and commercial expansion.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Climate Change Research:</span>
                  <span className="ml-2">Vulnerability assessments and adaptation strategies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Urban Planning:</span>
                  <span className="ml-2">Evidence-based planning for inclusive cities.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>28. Data Visualization Using ArcGIS, QGIS, and Satellite Data</strong></h2>
              <p className="text-gray-700 mb-4">
                We present complex spatial data in clear, accessible formats.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">ArcGIS/QGIS Expertise:</span>
                  <span className="ml-2">High-resolution mapping and analysis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Satellite Data:</span>
                  <span className="ml-2">Visualizing environmental and climate change indicators.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Interactive Maps:</span>
                  <span className="ml-2">Dashboards for policymakers and communities.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>29. Technology-Driven Research</strong></h2>
              <p className="text-gray-700 mb-4">
                We embrace innovation to stay ahead.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">AI-Enabled Analysis:</span>
                  <span className="ml-2">Automating data processing and pattern detection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Digital Data Platforms:</span>
                  <span className="ml-2">Real-time dashboards for program managers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Tech-Community Engagement:</span>
                  <span className="ml-2">Using mobile apps and chatbots for data collection.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>30. AI-Powered Data Analysis</strong></h2>
              <p className="text-gray-700 mb-4">
                We integrate artificial intelligence to enhance accuracy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Machine Learning Models:</span>
                  <span className="ml-2">Predictive analysis for policy forecasting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Natural Language Processing (NLP):</span>
                  <span className="ml-2">Analyzing open-text survey responses.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Pattern Recognition:</span>
                  <span className="ml-2">Detecting anomalies and trends in big data.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>31. Development of Chatbots for Surveys and Real-Time Monitoring</strong></h2>
              <p className="text-gray-700 mb-4">
                We design chatbots that enhance reach and reduce cost.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Automated Surveys:</span>
                  <span className="ml-2">Collecting responses via WhatsApp, Messenger, or SMS.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Real-Time Monitoring:</span>
                  <span className="ml-2">Instant feedback loops from beneficiaries.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Cost-Effectiveness:</span>
                  <span className="ml-2">Reducing manpower requirements in certain contexts.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>32. Workflow Automation in Data Management</strong></h2>
              <p className="text-gray-700 mb-4">
                We streamline research processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Automated Pipelines:</span>
                  <span className="ml-2">From collection to cleaning to reporting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Error Reduction:</span>
                  <span className="ml-2">Minimizing human error through automation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Efficiency Gains:</span>
                  <span className="ml-2">Faster turnaround on reports and insights.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>33. Advocacy & Public Engagement</strong></h2>
              <p className="text-gray-700 mb-4">
                We believe research should drive change.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Evidence-Based Campaigns:</span>
                  <span className="ml-2">Using findings to raise awareness on social issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Community Engagement:</span>
                  <span className="ml-2">Sharing results in local languages and formats.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Policy Advocacy:</span>
                  <span className="ml-2">Strengthening the link between data and decision-making.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>34. Using Research Findings for Awareness Campaigns</strong></h2>
              <p className="text-gray-700 mb-4">
                We transform data into knowledge products.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Infographics & Storytelling:</span>
                  <span className="ml-2">Making research accessible to non-technical audiences.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Media Engagement:</span>
                  <span className="ml-2">Sharing results through press, TV, and radio.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Social Media Campaigns:</span>
                  <span className="ml-2">Driving engagement with key audiences.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-caser-navy mb-3"><strong>35. Creating Accessible Reports for Communities and Policymakers</strong></h2>
              <p className="text-gray-700 mb-4">
                Our reports ensure knowledge is shared widely and effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Simplified Language:</span>
                  <span className="ml-2">Writing reports that are easy to understand.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Localized Formats:</span>
                  <span className="ml-2">Translating findings into Urdu and regional languages.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-caser-gold font-bold mr-2">•</span>
                  <span className="text-caser-gold font-bold">Visual Presentations:</span>
                  <span className="ml-2">Using charts, visuals, and maps to highlight key findings.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-700">
                Through these diverse yet interconnected services, we deliver end-to-end research solutions—from fieldwork to data science, from grassroots engagement to policy influence. Our work ensures that every dataset tells a story, every survey amplifies a voice, and every report informs real change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusAreasNewPage;