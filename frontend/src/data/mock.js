export const ASSETS = {
    logo: 'https://customer-assets.emergentagent.com/job_physics-kills/artifacts/7mzydd5s_logo-2.png',
    mascot: 'https://customer-assets.emergentagent.com/job_d3be9da0-135c-416e-b71e-d6b42e14fe50/artifacts/nlaflgpa_mascot.png',
    heroVideo: 'https://customer-assets.emergentagent.com/job_d3be9da0-135c-416e-b71e-d6b42e14fe50/artifacts/5hinlooh_3194277-hd_1920_1080_30fps.mp4',
  };
  
  export const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Videos', path: '/videos' },
    { label: 'Notes', path: '/notes' },
    { label: 'Infographics', path: '/infographics' },
    { label: 'Contact', path: '/contact' },
  ];
  
  export const VIDEOS = [
    {
      id: 'v1',
      title: 'Newton\'s Laws of Motion',
      description: 'Understanding the three fundamental laws that govern motion in classical mechanics.',
      topic: 'Mechanics',
      classLevel: '11',
      instagramUrl: 'https://www.instagram.com/reel/example1',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop',
      flashCards: [
        { id: 'fc1', type: 'formula', front: 'Newton\'s Second Law', back: 'F = ma\nForce equals mass times acceleration' },
        { id: 'fc2', type: 'concept', front: 'What is Inertia?', back: 'The tendency of an object to resist changes in its state of motion.' },
        { id: 'fc3', type: 'definition', front: 'Define Momentum', back: 'p = mv\nThe product of mass and velocity of an object.' },
      ],
    },
    {
      id: 'v2',
      title: 'Electromagnetic Induction',
      description: 'How changing magnetic fields create electric currents — Faraday\'s groundbreaking discovery.',
      topic: 'Electromagnetism',
      classLevel: '12',
      instagramUrl: 'https://www.instagram.com/reel/example2',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop',
      flashCards: [
        { id: 'fc4', type: 'formula', front: 'Faraday\'s Law', back: 'EMF = -dΦ/dt\nInduced EMF equals negative rate of change of magnetic flux' },
        { id: 'fc5', type: 'concept', front: 'Lenz\'s Law', back: 'The induced current flows in a direction that opposes the change producing it.' },
      ],
    },
    {
      id: 'v3',
      title: 'Wave Optics',
      description: 'Interference, diffraction, and polarization — the wave nature of light explained.',
      topic: 'Optics',
      classLevel: '12',
      instagramUrl: 'https://www.instagram.com/reel/example3',
      thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=400&fit=crop',
      flashCards: [
        { id: 'fc6', type: 'formula', front: 'Young\'s Double Slit', back: 'y = nλD/d\nFringe width depends on wavelength, distance, and slit separation' },
        { id: 'fc7', type: 'definition', front: 'What is Diffraction?', back: 'The bending of waves around obstacles or through openings.' },
      ],
    },
    {
      id: 'v4',
      title: 'Thermodynamics Basics',
      description: 'The laws that govern heat, energy, and the arrow of time.',
      topic: 'Thermodynamics',
      classLevel: '11',
      instagramUrl: 'https://www.instagram.com/reel/example4',
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop',
      flashCards: [
        { id: 'fc8', type: 'formula', front: 'First Law of Thermodynamics', back: 'ΔU = Q - W\nChange in internal energy = Heat added - Work done' },
        { id: 'fc9', type: 'concept', front: 'Entropy', back: 'A measure of disorder in a system. It always increases in isolated systems.' },
      ],
    },
    {
      id: 'v5',
      title: 'Rotational Mechanics',
      description: 'Torque, angular momentum, and the physics of spinning objects.',
      topic: 'Mechanics',
      classLevel: '11',
      instagramUrl: 'https://www.instagram.com/reel/example5',
      thumbnail: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=400&fit=crop',
      flashCards: [
        { id: 'fc10', type: 'formula', front: 'Torque', back: 'τ = r × F\nTorque is the cross product of position vector and force' },
      ],
    },
    {
      id: 'v6',
      title: 'Modern Physics: Photoelectric Effect',
      description: 'Einstein\'s revolutionary explanation of light as particles.',
      topic: 'Modern Physics',
      classLevel: '12',
      instagramUrl: 'https://www.instagram.com/reel/example6',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop',
      flashCards: [
        { id: 'fc11', type: 'formula', front: 'Photoelectric Equation', back: 'KE_max = hf - φ\nMax KE = Planck constant × frequency - work function' },
      ],
    },
  ];
  
  export const INFOGRAPHICS = [
    {
      id: 'ig1',
      title: 'Forces & Motion Cheat Sheet',
      topic: 'Mechanics',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=800&fit=crop',
      downloadUrl: '#',
    },
    {
      id: 'ig2',
      title: 'Electromagnetic Spectrum',
      topic: 'Electromagnetism',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=800&fit=crop',
      downloadUrl: '#',
    },
    {
      id: 'ig3',
      title: 'Thermodynamics Laws Visual',
      topic: 'Thermodynamics',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=800&fit=crop',
      downloadUrl: '#',
    },
    {
      id: 'ig4',
      title: 'Wave Properties Diagram',
      topic: 'Optics',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=800&fit=crop',
      downloadUrl: '#',
    },
    {
      id: 'ig5',
      title: 'Quantum Physics Timeline',
      topic: 'Modern Physics',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop',
      downloadUrl: '#',
    },
  ];
  
  export const NOTES = [
    {
      id: 'n1',
      title: 'Laws of Motion — Complete Notes',
      topic: 'Mechanics',
      classLevel: '11',
      summary: 'Comprehensive notes covering all three laws of motion, free body diagrams, friction, and numerical problems.',
      chapters: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Friction', 'Numerical Problems'],
      content: 'Newton\'s First Law states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. This is also known as the law of inertia.\n\nNewton\'s Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. Mathematically, F = ma.\n\nNewton\'s Third Law states that for every action, there is an equal and opposite reaction. When one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body.',
      downloadUrl: '#',
    },
    {
      id: 'n2',
      title: 'Electrostatics — Full Chapter',
      topic: 'Electromagnetism',
      classLevel: '12',
      summary: 'Complete study material on electric charges, Coulomb\'s law, electric fields, and Gauss\'s theorem.',
      chapters: ['Electric Charges', 'Coulomb\'s Law', 'Electric Field', 'Gauss\'s Theorem', 'Electric Potential'],
      content: 'Electric charge is a fundamental property of matter. There are two types of charges: positive and negative. Like charges repel and unlike charges attract.\n\nCoulomb\'s Law: The force between two point charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them. F = kq₁q₂/r²\n\nThe electric field is defined as the force per unit positive charge at a point. E = F/q₀',
      downloadUrl: '#',
    },
    {
      id: 'n3',
      title: 'Wave Optics — Detailed Notes',
      topic: 'Optics',
      classLevel: '12',
      summary: 'In-depth notes on wave nature of light, interference, diffraction, and polarization.',
      chapters: ['Huygens Principle', 'Interference', 'Young\'s Experiment', 'Diffraction', 'Polarization'],
      content: 'Huygens\' Principle: Every point on a wavefront acts as a source of secondary wavelets. The new wavefront is the tangent to these secondary wavelets.\n\nInterference occurs when two coherent light waves superpose. Constructive interference leads to bright fringes and destructive interference leads to dark fringes.\n\nIn Young\'s double slit experiment, the fringe width β = λD/d where λ is wavelength, D is distance to screen, and d is slit separation.',
      downloadUrl: '#',
    },
    {
      id: 'n4',
      title: 'Gravitation — Complete Guide',
      topic: 'Mechanics',
      classLevel: '11',
      summary: 'Detailed notes on universal gravitation, Kepler\'s laws, orbital mechanics, and escape velocity.',
      chapters: ['Newton\'s Law of Gravitation', 'Kepler\'s Laws', 'Gravitational Potential', 'Satellites', 'Escape Velocity'],
      content: 'Newton\'s Law of Universal Gravitation: Every object in the universe attracts every other object with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.\n\nF = Gm₁m₂/r²\n\nKepler\'s Laws describe the motion of planets around the Sun. The first law states that planets orbit in ellipses with the Sun at one focus.',
      downloadUrl: '#',
    },
  ];
  
  export const TOPICS = ['All', 'Mechanics', 'Electromagnetism', 'Optics', 'Thermodynamics', 'Modern Physics'];
  export const CLASS_LEVELS = ['All', '11', '12'];
  