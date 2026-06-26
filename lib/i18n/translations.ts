export type Language = "ca" | "es" | "en"

export const languages: { code: Language; label: string }[] = [
  { code: "ca", label: "CA" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
]

export const translations = {
  ca: {
    nav: {
      method: "Mètode",
      services: "Serveis",
      technicalOffice: "Oficina Tècnica",
      gallery: "Abans i Després",
      about: "Qui Som",
      contact: "Contacte",
      quote: "Pressupost",
    },
    hero: {
      title: "AQUÍ COMENÇA EL NOU",
      subtitle:
        "NOVUM: Gestió personalitzada i execució tècnica. Coordinem cada detall de la teva reforma perquè tu només gaudeixis del resultat.",
      ctaPrimary: "Pressupost sense compromís",
      ctaSecondary: "El nostre mètode",
    },
    method: {
      eyebrow: "El Nostre Mètode",
      title: "Servei Clau en Mà",
      subtitle:
        "Ens encarreguem de tot el procés de principi a fi. Tu només has de gaudir del resultat.",
      steps: [
        {
          title: "Gestió",
          description:
            "Tramitem tots els permisos i llicències necessaris. Ens encarreguem de la burocràcia perquè tu no t'hagis de preocupar.",
        },
        {
          title: "Supervisió",
          description:
            "Un cap d'obra dedicat supervisa cada fase del projecte, garantint qualitat i compliment de terminis.",
        },
        {
          title: "Finalització",
          description:
            "Neteja integral postobra inclosa. Lliurem el teu espai llest per viure, sense sorpreses ni extres.",
        },
      ],
    },
    services: {
      eyebrow: "Especialitats",
      title: "Els Nostres Serveis",
      subtitle: "Solucions integrals per a cada aspecte de la teva reforma.",
      items: [
        { title: "Electricitat", description: "Instal·lacions elèctriques completes i certificades.", image: "/images/service-electrical.png" },
        { title: "Lampisteria", description: "Instal·lacions d'aigua, sanejament.", image: "/images/service-plumbing.png" },
        { title: "Alumini", description: "Finestres, portes i tancaments d'alumini d'alta qualitat.", image: "/images/service-aluminium.jpg" },
        { title: "Fusteria", description: "Mobles a mida, armaris i fusteria d'interior.", image: "/images/service-carpentry.jpg" },
        { title: "Cuines", description: "Disseny i instal·lació de cuines completes.", image: "/images/service-interiors.jpg" },
        { title: "Paleta", description: "Treballem amb professionals experimentats del sector.", image: "/images/service-masonry.jpg" },
        { title: "Neteja", description: "Neteja professional de fi d'obra inclosa.", image: "/images/service-cleaning.jpg" },
      ],
    },
    technicalOffice: {
      eyebrow: "Suport Professional",
      title: "Oficina Tècnica",
      description:
        "Comptem amb una xarxa d'arquitectes i enginyers col·laboradors externs que garanteixen el compliment tècnic i legal de cada projecte. No som un estudi d'arquitectura, però treballem colze a colze amb els millors professionals.",
      features: [
        {
          title: "Arquitectes Externs",
          description:
            "Col·laborem amb arquitectes i enginyers col·legiats que supervisen i signen els projectes tècnics necessaris.",
        },
        {
          title: "Projectes Legalitzats",
          description:
            "Tots els projectes compleixen amb la normativa vigent. Gestionem llicències, permisos i certificats.",
        },
        {
          title: "Honoraris Transparents",
          description:
            "Els honoraris tècnics es pressuposten per separat, sense sorpreses ni costos ocults.",
        },
      ],
      stat: "Projectes with professional technical supervision",
    },
    projects: {
      eyebrow: "Tipus de Projecte",
      title: "Reformes per a Cada Espai",
      subtitle: "Solucions adaptades a la mida del teu habitatge. Consulta'ns per a més detalls i preus.",
      items: [
        {
          size: "50 m²",
          title: "Pis 50 m²",
          description: "Reforma integral ideal per a pisos petits i estudis. Aviat afegirem detalls i preus.",
        },
        {
          size: "80 m²",
          title: "Pis 80 m²",
          description: "Reforma completa per a habitatges mitjans. Aviat afegirem detalls i preus.",
        },
        {
          size: "100 m²",
          title: "Pis 100 m²",
          description: "Reforma integral per a habitatges amplis. Aviat afegirem detalls i preus.",
        },
      ],
      cta: "Demanar informació",
    },
    gallery: {
      eyebrow: "Els Nostres Treballs",
      title: "Abans i Després",
      subtitle: "Descobreix la transformació real dels nostres projectes de reforma.",
      before: "Abans",
      after: "Després",
      empty: "Aviat publicarem les nostres reformes aquí.",
      adminLink: "Gestionar galeria",
    },
    about: {
      eyebrow: "Sobre Nosaltres",
      title: "Qui Som",
      paragraphs: [
        "Darrere d'Elecfont AS23 hi ha un equip familiar i professional amb més de 10 anys d'experiència en instal·lacions d'electricitat, lampisteria i climatització. Durant tot aquest temps, el nostre major orgull ha estat la confiança i la satisfacció de qui ens tria dia a dia.",
        "Precisament per aquesta confiança, i per donar resposta a la demanda dels nostres clients que buscaven una solució completa per a les seves llars, vam fer el gran salt: vam crear NOVUM, el nostre departament exclusiu de reformes integrals.",
        "Hem sumat a l'equip nous professionals i col·laboradors apassionats pel detall i la construcció. Així, combinem l'experiència tècnica i la serietat que ens caracteritza a Elecfont AS23 amb la transparencia, el disseny i la gestió integral de reformes que ofereix NOVUM. Cuidem el teu projecte com si fos el nostre.",
      ],
      highlights: [
        "Més de 10 anys d'experiència en instal·lacions i reformes",
        "Equip propi de professionals qualificats",
        "Pressupostos tancats sense sorpreses",
        "Garantia de qualitat en materials i acabats",
        "Servei postobra inclòs",
      ],
    },
    contact: {
      eyebrow: "Contacte",
      title: "Fem el primer pas?",
      subtitle:
        "Explica'ns el teu projecte i et prepararem un pressupost personalitzat sense cap compromís.",
      location: "Ubicació",
      locationValue: "Badalona",
      phone: "Telèfon",
      email: "Correu electrònic",
      form: {
        name: "Nom",
        namePlaceholder: "El teu nom complet",
        phone: "Telèfon",
        email: "Correu electrònic",
        town: "Població",
        townPlaceholder: "La teva ciutat o poble",
        message: "Missatge",
        messagePlaceholder: "Explica'ns el teu projecte o idea",
        submit: "Demanar pressupost",
        submitting: "Enviant...",
        successTitle: "Missatge enviat!",
        successText: "Ens posarem en contacte amb tu molt aviat.",
        disclaimer:
          "La teva informació serà tractada amb total confidencialitat per a la valoració del teu pressupost.",
      },
    },
    footer: {
      tagline:
        "Reformes integrals amb garantia tècnica. La unió de l'enginyeria, l'arquitectura i l'execució d'obra impecable.",
      navTitle: "Navegació",
      contactTitle: "Contacte",
      rights: "Tots els drets reservats.",
      privacy: "Política de privacitat",
      legal: "Avís legal",
    },
  },
  es: {
    nav: {
      method: "Método",
      services: "Servicios",
      technicalOffice: "Oficina Técnica",
      gallery: "Antes y Después",
      about: "Quiénes Somos",
      contact: "Contacto",
      quote: "Presupuesto",
    },
    hero: {
      title: "AQUÍ EMPIEZA LO NUEVO",
      subtitle:
        "NOVUM: Gestión personalizada y ejecución técnica. Coordinamos cada detalle de tu reforma para que tú solo disfrutes del resultado.",
      ctaPrimary: "Presupuesto sin compromiso",
      ctaSecondary: "Nuestro Método",
    },
    method: {
      eyebrow: "Nuestro Método",
      title: "Servicio Llave en Mano",
      subtitle:
        "Nos encargamos de todo el proceso de principio a fin. Tú solo tienes que disfrutar del resultado.",
      steps: [
        {
          title: "Gestión",
          description:
            "Tramitamos todos los permisos y licencias necesarios. Nos encargamos de la burocracia para que tú no tengas que preocuparte.",
        },
        {
          title: "Supervisión",
          description:
            "Un jefe de obra dedicado supervisa cada fase del proyecto, garantizando calidad y cumplimiento de plazos.",
        },
        {
          title: "Finalización",
          description:
            "Limpieza integral post-obra incluida. Entregamos tu espacio listo para vivir, sin sorpresas ni extras.",
        },
      ],
    },
    services: {
      eyebrow: "Especialidades",
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para cada aspecto de tu reforma.",
      items: [
        { title: "Electricidad", description: "Instalaciones eléctricas completas y certificadas.", image: "/images/service-electrical.png" },
        { title: "Fontanería", description: "Instalaciones de agua, saneamiento.", image: "/images/service-plumbing.png" },
        { title: "Aluminio", description: "Ventanas, puertas y cerramientos de aluminio de alta calidad.", image: "/images/service-aluminium.jpg" },
        { title: "Carpintería", description: "Muebles a medida, armarios y carpintería de interior.", image: "/images/service-carpentry.jpg" },
        { title: "Cocinas", description: "Diseño e instalación de cocinas completas.", image: "/images/service-interiors.jpg" },
        { title: "Albañilería", description: "Trabajamos con profesionales experimentados en el sector.", image: "/images/service-masonry.jpg" },
        { title: "Limpieza", description: "Limpieza profesional de fin de obra incluida.", image: "/images/service-cleaning.jpg" },
      ],
    },
    technicalOffice: {
      eyebrow: "Respaldo Profesional",
      title: "Oficina Técnica",
      description:
        "Contamos con una red de arquitectos e ingenieros colaboradores externos que garantizan el cumplimiento técnico y legal de cada proyecto. No somos un estudio de arquitectura, pero trabajamos codo con codo con los mejores profesionales.",
      features: [
        {
          title: "Arquitectos Externos",
          description:
            "Colaboramos con arquitectos e ingenieros colegiados que supervisan y firman los proyectos técnicos necesarios.",
        },
        {
          title: "Proyectos Legalizados",
          description:
            "Todos los proyectos cumplen con la normativa vigente. Gestionamos licencias, permisos y certificados.",
        },
        {
          title: "Honorarios Transparentes",
          description:
            "Los honorarios técnicos se presupuestan por separado, sin sorpresas ni costes ocultos.",
        },
      ],
      stat: "Proyectos con supervisión técnica profesional",
    },
    projects: {
      eyebrow: "Tipo de Proyecto",
      title: "Reformas para Cada Espacio",
      subtitle: "Soluciones adaptadas al tamaño de tu vivienda. Consúltanos para más detalles y precios.",
      items: [
        {
          size: "50 m²",
          title: "Piso 50 m²",
          description: "Reforma integral ideal para pisos pequeños y estudios. Pronto añadiremos detalles y precios.",
        },
        {
          size: "80 m²",
          title: "Piso 80 m²",
          description: "Reforma completa para viviendas medianas. Pronto añadiremos detalles y precios.",
        },
        {
          size: "100 m²",
          title: "Piso 100 m²",
          description: "Reforma integral para viviendas amplias. Pronto añadiremos detalles y precios.",
        },
      ],
      cta: "Pedir información",
    },
    gallery: {
      eyebrow: "Nuestros Trabajos",
      title: "Antes y Después",
      subtitle: "Descubre la transformación real de nuestros proyectos de reforma.",
      before: "Antes",
      after: "Después",
      empty: "Pronto publicaremos nuestras reformas aquí.",
      adminLink: "Gestionar galería",
    },
    about: {
      eyebrow: "Sobre Nosotros",
      title: "Quiénes Somos",
      paragraphs: [
        "Detrás de Elecfont AS23 hay un equipo familiar y profesional con más de 10 años de experiencia en instalaciones de electricidad, fontanería y climatización. Durante todo este tiempo, nuestro mayor orgullo ha sido la la confianza y la satisfacción de quienes nos eligen día a día.",
        "Precisamente por esa confianza, y para dar respuesta a la demanda de nuestros clientes que buscaban una solución completa para sus viviendas, dimos el gran salto: creando NOVUM, nuestro departamento exclusivo de reformas integrales.",
        "Hemos sumado al equipo a nuevos profesionales y colaboradores apasionados por el detalle y la construcción. Así, combinamos la experiencia técnica y la seriedad que nos caracteriza en Elecfont AS23 con la frescura, el diseño y la gestión integral de reformas que ofrece NOVUM. Cuidamos de tu proyecto como si fuera nuestro.",
      ],
      highlights: [
        "Más de 10 años de experiencia en instalaciones y reformas",
        "Equipo propio de profesionales cualificados",
        "Presupuestos cerrados sin sorpresas",
        "Garantía de calidad en materiales y acabados",
        "Servicio post-obra incluido",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Damos el primer paso?",
      subtitle:
        "Cuéntanos tu proyecto y te prepararemos un presupuesto personalizado sin ningún compromiso.",
      location: "Ubicación",
      locationValue: "Badalona",
      phone: "Teléfono",
      email: "Email",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre completo",
        phone: "Teléfono",
        email: "Email",
        town: "Población",
        townPlaceholder: "Tu ciudad o pueblo",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos tu proyecto o idea",
        submit: "Solicitar presupuesto",
        submitting: "Enviando...",
        successTitle: "¡Mensaje enviado!",
        successText: "Nos pondremos en contacto contigo muy pronto.",
        disclaimer:
          "Tu información será tratada con total confidencialidad para la valoración de tu presupuesto.",
      },
    },
    footer: {
      tagline:
        "Reformas integrales con garantía técnica. La unión de la ingeniería, la arquitectura y la ejecución de obra impecable.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad",
      legal: "Aviso legal",
    },
  },
  en: {
    nav: {
      method: "Method",
      services: "Services",
      technicalOffice: "Technical Office",
      gallery: "Before & After",
      about: "About Us",
      contact: "Contact",
      quote: "Get a Quote",
    },
    hero: {
      title: "HERE BEGINS THE NEW",
      subtitle:
        "NOVUM: Personalized management and technical execution. We coordinate every detail of your renovation so you only enjoy the result.",
      ctaPrimary: "Free quote",
      ctaSecondary: "Our Method",
    },
    method: {
      eyebrow: "Our Method",
      title: "Turnkey Service",
      subtitle:
        "We handle the entire process from start to finish. All you have to do is enjoy the result.",
      steps: [
        {
          title: "Management",
          description:
            "We process all the necessary permits and licenses. We take care of the bureaucracy so you don't have to worry.",
        },
        {
          title: "Supervision",
          description:
            "A dedicated site manager oversees every phase of the project, ensuring quality and meeting deadlines.",
        },
        {
          title: "Completion",
          description:
            "Full post-construction cleaning included. We deliver your space ready to live in, with no surprises or extras.",
        },
      ],
    },
    services: {
      eyebrow: "Specialties",
      title: "Our Services",
      subtitle: "Comprehensive solutions for every aspect of your renovation.",
      items: [
        { title: "Electrical", description: "Complete, certified electrical installations.", image: "/images/service-electrical.png" },
        { title: "Plumbing", description: "Water, drainage installations.", image: "/images/service-plumbing.png" },
        { title: "Aluminium", description: "High-quality aluminium windows, doors and enclosures.", image: "/images/service-aluminium.jpg" },
        { title: "Carpentry", description: "Custom furniture, wardrobes and interior carpentry.", image: "/images/service-carpentry.jpg" },
        { title: "Kitchens", description: "Design and installation of complete kitchens.", image: "/images/service-interiors.jpg" },
        { title: "Masonry", description: "We work with experienced professionals in the sector.", image: "/images/service-masonry.jpg" },
        { title: "Cleaning", description: "Professional end-of-construction cleaning included.", image: "/images/service-cleaning.jpg" },
      ],
    },
    technicalOffice: {
      eyebrow: "Professional Backing",
      title: "Technical Office",
      description:
        "We have a network of external architect and engineer partners who guarantee the technical and legal compliance of every project. We are not an architecture studio, but we work side by side with the best professionals.",
      features: [
        {
          title: "External Architects",
          description:
            "We collaborate with registered architects and engineers who supervise and sign the necessary technical projects.",
        },
        {
          title: "Legalized Projects",
          description:
            "All projects comply with current regulations. We manage licenses, permits and certificates.",
        },
        {
          title: "Transparent Fees",
          description:
            "Technical fees are quoted separately, with no surprises or hidden costs.",
        },
      ],
      stat: "Projects with professional technical supervision",
    },
    projects: {
      eyebrow: "Project Type",
      title: "Renovations for Every Space",
      subtitle: "Solutions tailored to the size of your home. Contact us for more details and prices.",
      items: [
        {
          size: "50 m²",
          title: "50 m² Flat",
          description: "Full renovation ideal for small flats and studios. Details and prices coming soon.",
        },
        {
          size: "80 m²",
          title: "80 m² Flat",
          description: "Complete renovation for mid-sized homes. Details and prices coming soon.",
        },
        {
          size: "100 m²",
          title: "100 m² Flat",
          description: "Full renovation for spacious homes. Details and prices coming soon.",
        },
      ],
      cta: "Request information",
    },
    gallery: {
      eyebrow: "Our Work",
      title: "Before & After",
      subtitle: "Discover the real transformation of our renovation projects.",
      before: "Before",
      after: "After",
      empty: "We'll be publishing our renovations here soon.",
      adminLink: "Manage gallery",
    },
    about: {
      eyebrow: "About Us",
      title: "Who We Are",
      paragraphs: [
        "Behind Elecfont AS23 is a family-run, professional team with over 10 years of experience in electrical, plumbing and HVAC installations. Throughout this time, our greatest pride has been the trust and satisfaction of those who choose us day after day.",
        "Precisely because of that trust, and to meet the demand from our clients looking for a complete solution for their homes, we took the big leap: we created NOVUM, our exclusive full-renovation department.",
        "We have added new professionals and partners to the team who are passionate about detail and construction. This way, we combine the technical expertise and reliability that define Elecfont AS23 with the freshness, design and full renovation management that NOVUM offers. We take care of your project as if it were our own.",
      ],
      highlights: [
        "Over 10 years of experience in installations and renovations",
        "In-house team of qualified professionals",
        "Fixed quotes with no surprises",
        "Quality guarantee on materials and finishes",
        "Post-construction service included",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we take the first step?",
      subtitle:
        "Tell us about your project and we'll prepare a personalized quote with no commitment.",
      location: "Location",
      locationValue: "Badalona",
      phone: "Phone",
      email: "Email",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        phone: "Phone",
        email: "Email",
        town: "Town",
        townPlaceholder: "Your city or town",
        message: "Message",
        messagePlaceholder: "Tell us about your project or idea",
        submit: "Request quote",
        submitting: "Sending...",
        successTitle: "Message sent!",
        successText: "We'll get in touch with you very soon.",
        disclaimer:
          "Your information will be treated with complete confidentiality for the assessment of your quote.",
      },
    },
    footer: {
      tagline:
        "Comprehensive renovations with technical guarantee. The union of engineering, architecture and flawless construction.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      legal: "Legal notice",
    },
  },
} as const

export type TranslationKeys = (typeof translations)["ca"]