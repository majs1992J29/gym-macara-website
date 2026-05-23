const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string) => {
  if (path === "/") {
    return `${base}/`;
  }

  return `${base}${path}`;
};

export const siteData = {
  name: "Gimnasio Macará",
  tagline: "Entrena fuerte. Vive mejor.",
  description: "Tu espacio de entrenamiento, fuerza y bienestar en Macará.",
  address: "Calle 22 de Septiembre y Calle Macará, Macará, Loja, Ecuador",
  phone: "+593 96 870 4627",
  email: "info@gimnasiomacara.com",
  mapsUrl:
    "https://www.google.com/maps?vet=10CAAQoqAOahcKEwjgmZ2unc2UAxUAAAAAHQAAAAAQBg..i&client=firefox-b-d&fvr=1&pvq=Cg0vZy8xMWNzYmZuZGNjIgkKA2d5bRACGAM&lqi=CgpneW0gbWFjYXJhSOvi6Kbhq4CACFoSEAAYABgBIgpneW0gbWFjYXJhkgERZ3ltbmFzdGljc19jZW50ZXI&cs=1&um=1&ie=UTF-8&fb=1&gl=ec&sa=X&ftid=0x903503168cfd9ddf:0xda29222d2bd58df1",
  social: {
    facebook: "https://www.facebook.com/GymMacara/",
    instagram: "https://www.instagram.com/gym_macara/",
    tiktok: "https://www.tiktok.com/@gym.macara",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "tiktok", icon: "ri-tiktok-fill", label: "TikTok" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Dirección",
    content: siteData.address,
    link: siteData.mapsUrl,
  },
  {
    icon: "ri-phone-line",
    title: "Teléfono",
    content: siteData.phone,
    link: `tel:${siteData.phone.replace(/\s/g, "")}`, 
  },
  {
    icon: "ri-mail-line",
    title: "Correo",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "Horario",
    content: [
      "Lunes: 4:30 AM - 10:00 PM",
      "Martes: 4:30 AM - 10:00 PM",
      "Miércoles: 4:30 AM - 9:00 PM",
      "Jueves: 4:30 AM - 10:00 PM",
      "Viernes: 4:30 AM - 10:00 PM",
      "Sábado: 6:00 AM - 1:00 PM",
      "Domingo: Cerrado",
    ],
    link: null,
  },
];

export const navigation = [
  { name: "Inicio", href: withBase("/") },
  { name: "Nosotros", href: withBase("/about") },
  { name: "Clases", href: withBase("/classes") },
  { name: "Planes", href: withBase("/pricing") },
  { name: "Contacto", href: withBase("/contact") },
];

export const features = [
  {
    title: "Horario amplio",
    description: "Entrena desde temprano y adapta tu rutina a tu día.",
    icon: "ri-time-line",
  },
  {
    title: "Entrenadores e instructores",
    description: "Recibe asesoramiento técnico dentro del gimnasio para entrenar con mejor técnica, seguridad y constancia.",
    icon: "ri-user-star-line",
  },
  {
    title: "Equipamiento completo",
    description: "Máquinas, pesas y zonas de entrenamiento para fuerza, cardio y acondicionamiento físico.",
    icon: "ri-settings-3-line",
  },
  {
    title: "Rutinas y acompañamiento",
    description: "Apoyo para organizar tus entrenamientos según tu nivel, objetivo y condición física.",
    icon: "ri-clipboard-line",
  },
  {
    title: "Bienestar integral",
    description: "Entrena fuerza, resistencia y salud en un ambiente motivador.",
    icon: "ri-heart-pulse-line",
  },
  {
    title: "Comunidad fitness",
    description: "Forma parte de una comunidad activa en Macará comprometida con la salud y el bienestar.",
    icon: "ri-community-line",
  },
];

export const classes = [
  {
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn",
    detailedDescription: "Push your limits with our high-intensity interval training. This class alternates between intense bursts of activity and fixed periods of rest, maximizing calorie burn and improving cardiovascular fitness. Perfect for those looking to torch calories and build endurance.",
    duration: "45 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Burn up to 600 calories", "Improve cardiovascular health", "Build endurance", "Time-efficient workout"],
    trainer: "Mike Chen",
    whatToExpect: "Dynamic movements, short rest periods, high energy atmosphere",
  },
  {
    name: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental wellness",
    detailedDescription: "Find your inner peace while improving flexibility and strength. Our yoga classes combine traditional poses with modern techniques to enhance balance, reduce stress, and increase mobility. Suitable for all levels, from beginners to advanced practitioners.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    benefits: ["Increase flexibility", "Reduce stress", "Improve balance", "Enhance mental clarity"],
    trainer: "Sarah Johnson",
    whatToExpect: "Gentle stretches, breathing exercises, meditation, peaceful environment",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase strength with guided workouts",
    detailedDescription: "Build lean muscle and increase your strength with our comprehensive strength training program. Our expert trainers guide you through proper form and technique using free weights, machines, and bodyweight exercises. Perfect for building a strong, toned physique.",
    duration: "60 min",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["Build muscle mass", "Increase strength", "Improve bone density", "Boost metabolism"],
    trainer: "John Smith",
    whatToExpect: "Progressive weight training, form correction, personalized guidance",
  },
  {
    name: "Cardio Blast",
    description: "Heart-pumping cardio session to boost your endurance",
    detailedDescription: "Get your heart pumping with our high-energy cardio class. Combining various cardio exercises including running, jumping, and dance movements, this class will boost your endurance, improve heart health, and help you shed those extra pounds.",
    duration: "45 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Improve heart health", "Burn calories", "Boost endurance", "Increase energy levels"],
    trainer: "Mike Chen",
    whatToExpect: "Energetic music, varied movements, supportive group atmosphere",
  },
  {
    name: "Pilates",
    description: "Core strengthening and body alignment exercises",
    detailedDescription: "Strengthen your core and improve your posture with our Pilates classes. Focus on controlled movements that target deep core muscles, improve alignment, and enhance overall body awareness. Great for rehabilitation and building long, lean muscles.",
    duration: "50 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    benefits: ["Strengthen core", "Improve posture", "Enhance flexibility", "Reduce back pain"],
    trainer: "Sarah Johnson",
    whatToExpect: "Controlled movements, focus on form, mind-body connection",
  },
  {
    name: "CrossFit",
    description: "Functional movements performed at high intensity",
    detailedDescription: "Experience the ultimate functional fitness challenge with our CrossFit classes. Combining weightlifting, gymnastics, and cardio, each workout is different and designed to push you to new limits. Build strength, endurance, and mental toughness.",
    duration: "60 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Build functional strength", "Improve all-around fitness", "Challenge yourself", "Join a community"],
    trainer: "John Smith",
    whatToExpect: "Varied workouts, high intensity, supportive community, measurable progress",
  },
];

export const pricingPlans = [
  {
    name: "Día",
    price: "$3",
    period: "/ día",
    features: [
      "Acceso por un día",
      "Uso de las áreas de entrenamiento",
      "Ideal para probar el gimnasio",
      "Consulta condiciones en recepción",
    ],
    popular: false,
  },
  {
    name: "Semana",
    price: "$10",
    period: "/ semana",
    features: [
      "Acceso durante una semana",
      "Uso de máquinas, pesas y cardio",
      "Opción flexible para entrenar por pocos días",
      "Asesoramiento técnico en sala",
    ],
    popular: false,
  },
  {
    name: "Quincena",
    price: "$15",
    period: "/ 15 días",
    features: [
      "Acceso por quince días",
      "Uso de las instalaciones del gimnasio",
      "Entrenamiento de fuerza y cardio",
      "Acompañamiento de instructores",
    ],
    popular: false,
  },
  {
    name: "Mensual",
    price: "$25",
    period: "/ 30 días",
    features: [
      "Acceso por 30 días",
      "Uso de los tres pisos de entrenamiento",
      "Zona de tren superior, tren inferior y cardio",
      "Asesoramiento técnico en sala",
    ],
    popular: true,
  },
  {
    name: "Semestral",
    price: "$125",
    period: "/ 6 meses",
    features: [
      "Acceso por seis meses",
      "Ideal para entrenamiento constante",
      "Uso de áreas de entrenamiento y cardio",
      "Mejor opción para progreso a mediano plazo",
    ],
    popular: false,
  },
  {
    name: "Anual",
    price: "$250",
    period: "/ 1 año",
    features: [
      "Acceso por un año",
      "Plan ideal para disciplina y constancia",
      "Uso de las instalaciones disponibles",
      "Mejor valor para entrenamiento continuo",
    ],
    popular: false,
  },
];
export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "FitZone has completely transformed my fitness journey. The trainers are amazing and the community is so supportive!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Member for 1 year",
    content: "Gimnasio Macará cuenta con espacios amplios, buena atención y opciones para entrenar según tu disponibilidad.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Member for 6 months",
    content: "I love the variety of classes offered. The HIIT sessions are intense but so rewarding. Highly recommend!",
    rating: 5,
  },
];

export const facilities = [
  {
    title: "Primera planta: tren superior",
    description: "Zona orientada al entrenamiento de pecho, espalda, hombros, brazos y fuerza del tren superior.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Segunda planta: tren inferior",
    description: "Área para entrenamiento de piernas, glúteos y fortalecimiento del tren inferior.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Tercera planta: cardio",
    description: "Zona de caminadoras y bicicletas para mejorar resistencia, salud cardiovascular y condición física.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Sauna y baño turco",
    description: "Área de recuperación y relajación para complementar tu entrenamiento.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Asesoramiento en sala",
    description: "Dos instructores disponibles para orientar técnica, rutinas y uso correcto del equipamiento.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
  },
];
export const faqs = [
  {
    question: "Do I need to be fit to join?",
    answer: "Not at all! We welcome members of all fitness levels. Our trainers will help you start at your own pace and gradually build your strength and endurance.",
  },
  {
    question: "What should I bring to the gym?",
    answer: "Just bring a water bottle, towel, and comfortable workout clothes. We provide all equipment, lockers, and shower facilities.",
  },
  {
    question: "Can I try the gym before committing?",
    answer: "Yes! We offer a free 7-day trial pass so you can experience our facilities, classes, and community before making a commitment.",
  },
  {
    question: "Are personal trainers included?",
    answer: "Contamos con instructores que orientan a los usuarios dentro del gimnasio. Para asesoramiento más específico, consulta directamente en recepción.",
  },
  {
    question: "What are your operating hours?",
    answer: "Nuestro horario de atención varía según el día. Puedes revisar la sección de contacto o consultar directamente con el gimnasio.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have free parking available for all members. The parking lot is well-lit and secure.",
  },
];

export const classSchedule = [
  { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
  { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
  { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
  { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
];

export const successStories = [
  {
    name: "Jessica Martinez",
    age: 32,
    duration: "8 months",
    result: "Lost 45 lbs",
    story: "I was skeptical at first, but FitZone changed my life. The supportive trainers and community kept me motivated. I've never felt better!",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    age: 28,
    duration: "6 months",
    result: "Gained 20 lbs muscle",
    story: "The strength training program and nutrition guidance helped me build the physique I always wanted. The trainers are true professionals.",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Lisa Anderson",
    age: 35,
    duration: "1 year",
    result: "Completed first marathon",
    story: "From never running to completing a marathon - FitZone's cardio programs and group classes gave me the endurance and confidence I needed.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "3", label: "Pisos de entrenamiento", icon: "ri-building-line" },
  { number: "2", label: "Instructores", icon: "ri-user-star-line" },
  { number: "$3", label: "Plan diario", icon: "ri-ticket-line" },
  { number: "$25", label: "Plan mensual", icon: "ri-calendar-line" },
  { number: "Sauna", label: "Y baño turco", icon: "ri-fire-line" },
  { number: "Cardio", label: "Caminadoras y bicicletas", icon: "ri-heart-pulse-line" },
];
export const fullSchedule = {
  monday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  tuesday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  wednesday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  thursday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  friday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  saturday: [
    { time: "8:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "10:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "11:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
  ],
  sunday: [
    { time: "9:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "10:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "11:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  ],
};

export const trainers = [
  {
    name: "John Smith",
    role: "Head Trainer",
    specialization: "Strength Training & Nutrition",
    experience: "10+ years",
    bio: "John is a certified strength and conditioning specialist with over a decade of experience helping athletes and fitness enthusiasts achieve their goals. He specializes in strength training, powerlifting, and nutrition coaching.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: ["CSCS", "NASM-CPT", "Nutrition Specialist"],
  },
  {
    name: "Sarah Johnson",
    role: "Yoga & Pilates Instructor",
    specialization: "Yoga, Pilates & Holistic Wellness",
    experience: "8+ years",
    bio: "Sarah is a certified yoga and Pilates instructor with extensive training in multiple yoga styles. She combines traditional practices with modern techniques to help members find balance, flexibility, and inner peace.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["RYT-500", "Pilates Certified", "Meditation Instructor"],
  },
  {
    name: "Mike Chen",
    role: "HIIT Specialist",
    specialization: "High-Intensity Training & Athletic Performance",
    experience: "7+ years",
    bio: "Mike is an expert in high-intensity interval training and athletic performance. His dynamic classes push members to new limits while maintaining safety and proper form. He's passionate about helping people discover their inner athlete.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["ACE-CPT", "HIIT Specialist", "Athletic Performance Coach"],
  },
  {
    name: "Emma Davis",
    role: "Cardio & Dance Instructor",
    specialization: "Cardio, Dance Fitness & Zumba",
    experience: "5+ years",
    bio: "Emma brings energy and fun to every class. With a background in dance and fitness, she creates engaging cardio workouts that make exercise enjoyable. Her classes are perfect for those who want to have fun while getting fit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    certifications: ["Zumba Certified", "Dance Fitness Instructor", "ACE-CPT"],
  },
  {
    name: "James Wilson",
    role: "CrossFit Coach",
    specialization: "CrossFit & Functional Movement",
    experience: "6+ years",
    bio: "James is a Level 2 CrossFit coach with a passion for functional fitness. He helps members build strength, improve mobility, and achieve their fitness goals through varied, high-intensity workouts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    certifications: ["CrossFit Level 2", "Functional Movement Specialist", "Olympic Lifting Coach"],
  },
];

export const history = [
  {
    year: "2009",
    title: "Founded",
    description: "FitZone Gym was founded with a vision to create an inclusive fitness community where everyone feels welcome.",
  },
  {
    year: "2012",
    title: "First Expansion",
    description: "Expanded facilities to include a dedicated group class studio and added 20+ new pieces of equipment.",
  },
  {
    year: "2015",
    title: "24/7 Access",
    description: "Fortalecemos el servicio con horarios amplios, tres pisos de entrenamiento, sauna, baño turco y acompañamiento de instructores.",
  },
  {
    year: "2018",
    title: "500 Members Milestone",
    description: "Reached 500 active members and expanded our trainer team to 20 certified professionals.",
  },
  {
    year: "2020",
    title: "Digital Integration",
    description: "Launched online class booking and virtual training options to adapt to changing needs.",
  },
  {
    year: "2024",
    title: "Award Winner",
    description: "Recognized as 'Best Gym 2024' by the local fitness community, celebrating 15 years of excellence.",
  },
];

export const paymentOptions = {
  methods: ["Credit/Debit Cards", "Bank Transfer", "PayPal", "Apple Pay", "Google Pay"],
  plans: [
    { type: "Monthly", description: "Pay month-to-month with no long-term commitment" },
    { type: "Annual", description: "Save 15% with annual payment - best value!" },
    { type: "Family Plan", description: "Special rates for families - contact us for details" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};

