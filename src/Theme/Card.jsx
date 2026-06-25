import React from 'react'

export default function Card({ title, desc, icon, link, onClick }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{desc}</p>
      <a href={link} className="service-card-link" onClick={onClick}>
        Learn More &gt;
      </a>
    </div>
  )
}
