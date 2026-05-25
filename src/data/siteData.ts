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
    detailedDescription: "Mejora tu movilidad, flexibilidad y control corporal con ejercicios guiados según tu nivel y condición física.",
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
    detailedDescription: "Desarrolla fuerza, masa muscular y técnica correcta usando máquinas, pesas y ejercicios guiados por nuestros instructores.",
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
    content: "Gimnasio Macará me ha motivado a entrenar con más constancia. El ambiente es bueno y los instructores ayudan durante el entrenamiento.",
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
    question: "¿Necesito experiencia previa para entrenar?",
    answer: "No. Puedes empezar desde tu nivel actual. Los instructores pueden orientarte para entrenar de forma progresiva, segura y con buena técnica.",
  },
  {
    question: "¿Qué debo llevar al gimnasio?",
    answer: "Te recomendamos llevar ropa cómoda, calzado deportivo, agua y una toalla personal.",
  },
  {
    question: "¿Puedo probar el gimnasio antes de inscribirme?",
    answer: "Sí. Puedes acercarte al gimnasio, conocer las instalaciones y consultar el plan que mejor se adapte a tu disponibilidad.",
  },
  {
    question: "¿El gimnasio cuenta con instructores?",
    answer: "Sí. Gimnasio Macará cuenta con 2 instructores que asesoran a los usuarios dentro del gimnasio.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "El gimnasio atiende desde las 4:30 AM. Los horarios pueden variar según el día, por eso recomendamos consultar la sección de contacto o escribir directamente al gimnasio.",
  },
  {
    question: "¿El gimnasio tiene sauna y baño turco?",
    answer: "Sí. Gimnasio Macará cuenta con área de sauna y baño turco para complementar la experiencia de entrenamiento.",
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
    story: "Entrenar en Gimnasio Macará me ayudó a ser más constante, mejorar mi técnica y organizar mejor mis rutinas de entrenamiento.",
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
    result: "Mejoró su condición física",
    story: "Con el acompañamiento de los instructores y el acceso a las zonas de fuerza y cardio, pudo avanzar progresivamente en su condición física.",
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
    name: "José Miguel Jumbo S.",
    role: "Instructor",
    specialization: "Entrenamiento funcional, hipertrofia y control de progreso",
    experience: "Instructor de Gimnasio Macará",
    bio: "Instructor orientado al entrenamiento funcional, hipertrofia, estética corporal y mejora de resultados mediante planificación, control de progreso y evaluación.",
    image: withBase("/instructores/entrenador_1.jpeg"),
    gallery: [
      withBase("/instructores/entrenador_1/entrenador_1_02.jpeg"),
      withBase("/instructores/entrenador_1/entrenador_1_03.jpeg"),
      withBase("/instructores/entrenador_1/entrenador_1_04.jpeg"),
      withBase("/instructores/entrenador_1/entrenador_1_05.jpeg"),
    ],
    certifications: [
      "Entrenamiento funcional",
      "Plan de entrenamiento funcional asociado a hipertrofia",
      "Test de fuerza asociado a hipertrofia",
      "Plan de entrenamiento en Drop-set asociado a hipertrofia",
      "Control de progreso",
      "Evaluación de resultados",
    ],
  },
  {
    name: "Willan Rios",
    role: "Instructor",
    specialization: "Estética corporal, fuerza y acondicionamiento físico",
    experience: "Instructor de Gimnasio Macará",
    bio: "Profesional orientado a la estética corporal y funcional, con enfoque en hipertrofia muscular, ganancia de fuerza, reducción de grasa corporal y acondicionamiento físico general.",
    image: withBase("/instructores/entrenador_2.jpeg"),
    gallery: [
      withBase("/instructores/entrenador_2/entrenador_2_01.jpeg"),
      withBase("/instructores/entrenador_2/entrenador_2_03.jpeg"),
      withBase("/instructores/entrenador_2/entrenador_2_04.jpeg"),
      withBase("/instructores/entrenador_2/entrenador_2_05.jpeg"),
    ],
    certifications: [
      "Certificación Internacional Strong Nation",
      "Hipertrofia muscular",
      "Ganancia de fuerza",
      "Mejora de la estética corporal",
      "Reducción de grasa corporal",
      "Acondicionamiento físico general",
    ],
  },
];

export const history = [
  {
    year: "Macará",
    title: "Gimnasio Macará",
    description: "Un espacio local dedicado al entrenamiento, la fuerza y el bienestar de la comunidad de Macará.",
  },
  {
    year: "3 pisos",
    title: "Tres pisos de entrenamiento",
    description: "Primera planta para tren superior, segunda planta para tren inferior y tercera planta para cardio con caminadoras y bicicletas.",
  },
  {
    year: "2",
    title: "Instructores",
    description: "Contamos con dos instructores que orientan a los usuarios en técnica, rutinas y uso correcto del equipamiento.",
  },
  {
    year: "Relax",
    title: "Sauna y baño turco",
    description: "Área de sauna y baño turco para complementar el entrenamiento, la recuperación y el bienestar.",
  },
];
export const paymentOptions = {
  methods: ["Efectivo", "Transferencia bancaria", "Consulta otros métodos en recepción"],
  plans: [
    { type: "Mensual", description: "Pago por 30 días de acceso al gimnasio" },
    { type: "Anual", description: "Pago por un año de entrenamiento" },
    { type: "Planes disponibles", description: "Consulta en recepción los planes por día, semana, quincena, mes, semestre o año" },
  ],
  guarantee: "Consulta en recepción las condiciones, vigencia y beneficios de cada plan",
  trial: "Consulta en recepción si existe alguna promoción disponible",
};

