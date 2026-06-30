import heroImg from '../assets/hero.png'
import mehraWedding from '../assets/mehra_wedding.png'
import whyRamjiDining from '../assets/why_ramji_dining.png'
import kapoorGala from '../assets/kapoor_gala.png'

export const videoConfig = {
  // Hero section background media type: 'video' | 'image'
  heroMediaType: 'image', 
  
  // Hero section video URL (local path)
  heroVideoUrl: '/hero_video.mp4',
  
  // Fallback image if video fails to load or is disabled
  heroFallbackImage: heroImg
};

export const videoReels = [
  {
    id: 1,
    title: 'Royal Mandap & Floral Decor Curation',
    description: 'A behind-the-scenes look at the fabrication of a stunning floral mandap in Udaipur.',
    videoUrl: 'https://raw.githubusercontent.com/arungop/akhiarya/master/assets/video/save_s.mp4',
    coverImage: mehraWedding,
    category: 'Weddings'
  },
  {
    id: 2,
    title: 'Gourmet Catering & Live Food Theater',
    description: 'Fine dining service and gourmet layouts created by our culinary artisans.',
    videoUrl: 'https://raw.githubusercontent.com/raghvandernathmishra-oss/birthday-surprise-repository/main/humnava_mere_short_30s.mp4',
    coverImage: whyRamjiDining,
    category: 'Catering'
  },
  {
    id: 3,
    title: 'Luxury Corporate Gala Entertainment',
    description: 'Choreographed light, sound, and staging for a grand scale summit.',
    videoUrl: 'https://completefixing.com/wp-content/uploads/2025/09/CFS-Content-for-Top-Apprenticeship-Employers-Event.mp4',
    coverImage: kapoorGala,
    category: 'Corporate'
  }
];
