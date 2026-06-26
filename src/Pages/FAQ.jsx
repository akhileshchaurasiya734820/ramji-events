import { useState } from 'react'
import heroImg from '../assets/hero.png'

export default function FAQ({ navigateTo }) {
  const [activeTab, setActiveTab] = useState('GENERAL')
  const [openFaqId, setOpenFaqId] = useState(null)

  const faqData = {
    GENERAL: [
      {
        id: 'g1',
        q: 'Can you work within a fixed budget?',
        a: 'Yes, we work with various budgets. During our initial consultation, we will discuss your budget parameters and build a custom proposal that maximizes value without compromising quality.'
      },
      {
        id: 'g2',
        q: 'Do you provide catering services directly?',
        a: 'Yes! In addition to event planning, we have an in-house, award-winning catering division ("Ramji Catering") that specializes in authentic multi-cuisine dining.'
      },
      {
        id: 'g3',
        q: 'What areas do you serve?',
        a: 'We are based in Noida/Ghaziabad (Delhi NCR) but provide pan-India services across 15+ cities, as well as destination event planning in selected international locations.'
      },
      {
        id: 'g4',
        q: 'How is payment structured for your services?',
        a: 'Typically, we require a 25% booking deposit to secure the date. Another 50% is due 30 days prior to the event, and the remaining 25% is settled on the event day.'
      }
    ],
    WEDDINGS: [
      {
        id: 'w1',
        q: 'How early should I book Ramji Events for my wedding?',
        a: 'We recommend booking 6 to 9 months in advance, especially for weddings during peak seasons (October to March), to ensure availability of key venues and vendors.'
      },
      {
        id: 'w2',
        q: 'Do you handle destination weddings outside India?',
        a: 'Yes, we manage destination weddings across popular spots in India (Udaipur, Goa, Jaipur) and international destinations like Thailand, UAE, and Bali.'
      },
      {
        id: 'w3',
        q: 'What is included in a full-service wedding package?',
        a: 'Our full-service package covers venue selection, catering, thematic decor, entertainment, photography/videography coordination, guest logistics, invitations, and day-of management.'
      }
    ],
    CORPORATE: [
      {
        id: 'co1',
        q: 'What types of corporate events do you manage?',
        a: 'We manage conferences, product launches, award ceremonies, annual galas, leadership summits, team-building retreats, and exhibition stalls.'
      },
      {
        id: 'co2',
        q: 'Can you coordinate AV production and stage setups?',
        a: 'Yes, we provide full technical support including high-end AV production, LED walls, stage rigging, sound engineering, and live-streaming setups.'
      }
    ],
    CATERING: [
      {
        id: 'ca1',
        q: 'Do you offer catering-only packages without full event planning?',
        a: 'Absolutely! You can hire "Ramji Catering" independently for any event, gathering, or wedding reception, even if you are not using our event planning services.'
      },
      {
        id: 'ca2',
        q: 'Can we customize the food menu and schedule a tasting session?',
        a: 'Yes, we offer fully customizable menus across Indian, Continental, Oriental, and traditional cuisines. We arrange food tasting sessions for up to 4 guests after booking.'
      }
    ],
    PRICING: [
      {
        id: 'p1',
        q: 'Do you charge a flat fee or a percentage of the total budget?',
        a: 'We offer both models depending on the event scope. For standard planning, we charge a fixed coordination fee. For grand destination weddings, we may charge a percentage of the vendor spend.'
      },
      {
        id: 'p2',
        q: 'Are there any hidden charges in your quotes?',
        a: 'No, we believe in 100% transparency. Every cost item, vendor fee, and tax is detailed in our budget proposal, and any changes are approved by you in advance.'
      }
    ],
    VENUES: [
      {
        id: 'v1',
        q: 'Do you help with venue scouting and booking?',
        a: 'Yes, we have corporate partnerships with top-tier hotels, banquet halls, lawns, and resorts. We help you scout, negotiate rates, and book the perfect venue.'
      }
    ]
  }

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
    setOpenFaqId(null)
  }

  const tabs = ['GENERAL', 'WEDDINGS', 'CORPORATE', 'CATERING', 'PRICING', 'VENUES']

  return (
    <div className="services-page quote-page faq-page">
      {/* Header Banner */}
      <div className="services-header-banner quote-header-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="services-header-overlay"></div>
        
        {/* Back Button */}
        <button className="wizard-back-home-btn" onClick={() => navigateTo('home')}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Home</span>
        </button>

        <div className="services-header-content">
          <div className="breadcrumbs">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>HOME</span>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-active">FAQ</span>
          </div>
          <span className="services-subtitle">FAQ</span>
          <h1 className="services-title">Your Questions, Answered</h1>
          <p className="services-lead">
            Everything you need to know before you start planning your event with us.
          </p>
        </div>
      </div>

      {/* Tabs and Accordion Section */}
      <div className="faq-main-container">
        {/* Tab Buttons */}
        <div className="faq-tab-buttons-container">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`faq-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqData[activeTab].map(item => {
            const isOpen = openFaqId === item.id
            return (
              <div key={item.id} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                <button className="faq-accordion-header" onClick={() => toggleFaq(item.id)}>
                  <span className="faq-accordion-question">{item.q}</span>
                  <span className="faq-accordion-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-accordion-content-wrapper">
                  <div className="faq-accordion-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Still Have Questions CTA */}
      <div className="faq-cta-section">
        <div className="faq-cta-card">
          <h2 className="faq-cta-title">STILL HAVE QUESTIONS?</h2>
          <p className="faq-cta-desc">
            Our team is available Monday–Saturday, 9am–7pm. We usually respond within 2 hours.
          </p>
          <div className="faq-cta-actions">
            <button className="btn-filled faq-cta-btn" onClick={() => navigateTo('contact')}>CONTACT US</button>
            <button className="btn-outline faq-cta-btn" onClick={() => navigateTo('book-consultation')}>BOOK CONSULTATION</button>
          </div>
        </div>
      </div>
    </div>
  )
}
