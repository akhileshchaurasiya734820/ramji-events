import whyRamjiDining from '../assets/why_ramji_dining.png'
import weddingReception from '../assets/wedding_reception.png'
import sweetSixteen from '../assets/sweet_sixteen.png'
import mehraWedding from '../assets/mehra_wedding.png'
import infosysSummit from '../assets/infosys_summit.png'
import weddingMandap from '../assets/wedding_mandap.png'

export const venuesList = [
  {
    title: "The Imperial Durbar Hall",
    type: "INDOOR",
    capacity: 1200,
    capacityText: "1200 guests",
    location: "New Delhi",
    image: whyRamjiDining,
    tags: ["AV Setup", "Catering Kitchen", "Valet Parking", "Luxury Decor"]
  },
  {
    title: "Lakeview Gardens & Pavilion",
    type: "OUTDOOR",
    capacity: 800,
    capacityText: "800 guests",
    location: "Udaipur",
    image: weddingReception,
    tags: ["Lake Views", "Generator Backup", "Open Stage", "Ample Parking"]
  },
  {
    title: "The Sapphire Banquet",
    type: "INDOOR",
    capacity: 500,
    capacityText: "500 guests",
    location: "Mumbai",
    image: sweetSixteen,
    tags: ["Sea Facing", "Private Bar", "Dance Floor", "Valet Service"]
  },
  {
    title: "Amber Fort Terrace",
    type: "HERITAGE",
    capacity: 300,
    capacityText: "300 guests",
    location: "Jaipur",
    image: mehraWedding,
    tags: ["Heritage Monument", "Night Lighting", "Exclusive Access", "Royal Entry"]
  },
  {
    title: "The Grand Ballroom",
    type: "INDOOR",
    capacity: 2000,
    capacityText: "2000 guests",
    location: "Hyderabad",
    image: infosysSummit,
    tags: ["Multiple Halls", "In-house Catering", "Luxury Suites", "Pro Sound"]
  },
  {
    title: "Coastal Retreat Resort",
    type: "RESORT",
    capacity: 400,
    capacityText: "400 guests",
    location: "Goa",
    image: weddingMandap,
    tags: ["Beach Access", "Pool Area", "Sunset Views", "Spa & Wellness"]
  }
];
