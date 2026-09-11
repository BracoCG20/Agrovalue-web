// src/data/serviciosData.js

import imgServicios2 from '../assets/servicios/importador_Distribuidor.webp';
import imgServicios1 from '../assets/servicios/productor_Exportador.webp';
import imgServicios3 from '../assets/servicios/proyectos_Especiales.webp';

import logoBlanco from '../assets/Logo_Agrovalue_blanco.svg';

//  Ahora es un objeto que contiene dos arreglos: 'es' y 'en'
export const perfilesData = {
  es: [
    {
      id: 'productor-exportador',
      number: '01',
      subtitle: 'PRODUCTOR / EXPORTADOR',
      title:
        'Tu fruta puede llegar a los clientes más competitivos, con la calidad que exigen.',
      text: 'Te conectamos con mercados, financiamiento y tecnología para que cada campaña capture su verdadero valor.',
      problem: {
        subtitle: '— EL PROBLEMA',
        title: 'Tu fruta no debería perder valor después de salir del campo.',
        text: 'Sin el comprador correcto, el financiamiento a tiempo o visibilidad del camino, ese valor se queda en manos de intermediarios o en oportunidades que nunca llegaron a ti.',
      },
      solution: {
        subtitle: '— POR QUÉ AGROVALUE',
        title:
          'Necesitas un socio experto que te guíe en cada etapa del proceso.',
        text: 'Integramos mercado, financiamiento y tecnología en un solo socio, para que captures más valor en cada programa de exportación, cumpliendo con la calidad, el volumen y la oportunidad que exigen los principales compradores.',
      },
      image: imgServicios1,
      logo: logoBlanco,
      imageAlt: 'Productora mostrando racimo de uvas verdes',
      services: [
        {
          num: '01',
          title: 'Compradores que buscan maximizar el valor de tu fruta.',
          text: 'Te conectamos con compradores confiables en los principales mercados internacionales, desarrollando programas comerciales sostenibles y relaciones de largo plazo, en lugar de ventas puntuales.',
        },
        {
          num: '02',
          title: 'El capital que necesitas, cuando lo necesitas.',
          text: 'Facilitamos soluciones de financiamiento que fortalecen tu capital de trabajo y te permiten desarrollar tus programas de exportación con mayor solidez y flexibilidad.',
        },
        {
          num: '03',
          title: 'Nos anticipamos, para que cumplas sin contratiempos.',
          text: 'Iniciamos la preparación meses antes del arranque de campaña, verificando que el campo y la empresa cumplan con la documentación y certificaciones requeridas por cada mercado. Ejecutamos preauditorías que confirman el cumplimiento normativo y la condición de la fruta previa a la cosecha.',
        },
        {
          num: '04',
          title: 'Control de calidad que anticipa.',
          text: 'Realizamos inspecciones independientes de calidad en línea de producción y en destino, monitoreando las certificaciones de inocuidad y sostenibilidad que exige cada mercado.',
        },
        {
          num: '05',
          title: 'Un aliado que piensa en la sostenibilidad de tu negocio.',
          text: 'Te asesoramos en la implementación de tecnologías y procesos que mejoran tu productividad, calidad y competitividad, porque no solo te ayudamos a exportar tu fruta, sino que ayudamos a que la próxima campaña sea mejor.',
        },
        {
          num: '06',
          title: 'Tecnología detrás de cada buena decisión.',
          text: 'Con tecnología propia integramos la información comercial, operativa y de calidad de toda la cadena. Centralizamos cada programa de exportación en un solo lugar, brindando trazabilidad y visibilidad en tiempo real desde la cosecha hasta la liquidación final.',
        },
      ],
      processes: [
        {
          num: '1',
          title: 'Conocemos tu campo.',
          text: 'Evaluamos tu producción, variedad, volumen y capacidad exportable, junto con las certificaciones internacionales y la documentación requerida por cada mercado.',
        },
        {
          num: '2',
          title:
            'Te damos la información de mercado para tomar decisiones correctas.',
          text: 'Activamos nuestra red de compradores según tu producto y ventana comercial.',
        },
        {
          num: '3',
          title: 'Acompañamos cada embarque.',
          text: 'Control de calidad, documentación y seguimiento en tiempo real con tecnología propia.',
        },
        {
          num: '4',
          title: 'Cerramos el ciclo contigo.',
          text: 'Liquidación transparente y aprendizajes para la siguiente campaña.',
        },
      ],
      cta: {
        title: 'Lleva tu próxima campaña más lejos.',
        text: 'Cuéntanos qué produces, cuánto y cuándo, y te mostramos las oportunidades comerciales y de financiamiento disponibles para ti.',
        btnLink: '/contacto?perfil=productor',
        btnText: 'Contáctanos',
      },
    },
    {
      id: 'importador-distribuidor',
      number: '02',
      subtitle: 'IMPORTADOR / DISTRIBUIDOR',
      title: 'Compra en Perú como si tuvieras un equipo propio en origen.',
      text: 'Conocemos a los productores, sus campos y su historia. Supervisamos tu fruta desde la cosecha hasta el puerto, con visibilidad total en cada etapa.',
      problem: {
        subtitle: '— EL PROBLEMA',
        title:
          'Comprar sin presencia local no debería significar operar sin control técnico.',
        text: 'Cuando compras fruta en origen sin presencia local, quedas sujeto a información de terceros, como fotos que llegan tarde, calidad que no coincide con lo pactado, embarques sin trazabilidad y reclamos que nadie atiende.',
      },
      solution: {
        subtitle: '— POR QUÉ AGROVALUE',
        title: 'El productor nos abre la puerta. Tú recibes el beneficio.',
        text: 'Nuestro equipo lleva años trabajando junto a productores peruanos: sabemos quién produce con calidad, quién cumple y quién está listo para exportar. Esa confianza no se compra, se construye campaña tras campaña, y la ponemos a tu servicio.',
      },
      image: imgServicios2,
      logo: logoBlanco,
      imageAlt: 'Importando la calidad de la fruta',
      services: [
        {
          num: '01',
          title: 'Procurement y abastecimiento en origen.',
          text: 'Identificamos, negociamos y aseguramos la fruta que necesitas directamente con productores verificados, cumpliendo tu especificación exacta de volumen, calidad y ventana comercial. Evaluamos su capacidad productiva y su historial de cumplimiento antes de incluirlos en tu programa.',
        },
        {
          num: '02',
          title: 'Programas de suministro a la medida.',
          text: 'Diseñamos programas de abastecimiento por campaña o multianuales, con productores comprometidos y volúmenes planificados con anticipación, reduciendo el riesgo de desabastecimiento en temporada alta.',
        },
        {
          num: '03',
          title: 'Supervisión independiente de calidad.',
          text: 'Verificamos el cumplimiento de tus especificaciones, la normativa vigente y los estándares internacionales de inocuidad en línea de producción y en destino. Monitoreamos también las certificaciones de calidad y sostenibilidad que exige tu mercado, antes de que la fruta salga del Perú.',
        },
        {
          num: '04',
          title: 'Trazabilidad y monitoreo en tiempo real.',
          text: 'Con nuestra tecnología, podrás seguir el estado de cada contenedor desde el campo hasta tu almacén, con datos como ubicación, temperatura y documentación, centralizados en una sola plataforma, convirtiendo cada dato en una decisión informada.',
        },
        {
          num: '05',
          title: 'Gestión de reclamos y análisis de calidad.',
          text: 'Si algo no llega como debería, documentamos, analizamos la causa raíz en origen y gestionamos el reclamo con evidencia técnica. Te acompañamos hasta resolverlo.',
        },
        {
          num: '06',
          title: 'Inteligencia de mercado en tiempo real.',
          text: 'Te compartimos información actualizada de campañas, volúmenes, precios y ventanas comerciales del Perú, para que decidas con datos verificados y no con estimados de terceros.',
        },
      ],
      processes: [
        {
          num: '1',
          title: 'Entendemos tu necesidad.',
          text: 'Producto, volumen, calidad, ventana y destino. Definimos juntos la especificación exacta.',
        },
        {
          num: '2',
          title: 'Activamos nuestra red de productores.',
          text: 'Seleccionamos los productores adecuados para tu programa y negociamos las mejores condiciones.',
        },
        {
          num: '3',
          title: 'Supervisamos cada etapa.',
          text: 'Cosecha, empaque, calidad y despacho con presencia de nuestro equipo en campo',
        },
        {
          num: '4',
          title: 'Te mantenemos siempre informado.',
          text: 'Seguimiento del embarque, documentación completa y soporte ante cualquier eventualidad.',
        },
      ],
      cta: {
        title: 'Tu próximo embarque desde Perú, con total confianza.',
        text: 'Cuéntanos qué servicio necesitas y te respondemos con opciones concretas: productores, volúmenes y ventanas disponibles.',
        btnLink: '/contacto?perfil=importador',
        btnText: 'Contáctanos',
      },
    },
    {
      id: 'proyectos-especiales',
      number: '03',
      subtitle: 'PROYECTOS ESPECIALES',
      title:
        'Estructuramos proyectos de inversión y crecimiento en el agro peruano, con el mismo rigor con el que operamos en el campo.',
      text: 'Estructuramos, evaluamos y ejecutamos proyectos de inversión y asesoría estratégica para el sector agroexportador. Lo hacemos desde adentro: la misma organización que abastece fruta, supervisa la cosecha y el packing, inspecciona la calidad y sigue los embarques hasta destino es la que estructura y acompaña cada proyecto',
      problem: {
        subtitle: '— EL PROBLEMA',
        title: 'Invertir en el agro no debería significar ceder el control.',
        text: 'El sector ofrece retornos atractivos, pero concentra riesgos que las instituciones financieras tradicionales no saben leer: estacionalidad, calidad de campo, logística de exportación y volatilidad de mercado. En AgroValue no leemos esos riesgos desde un modelo financiero, sino que los gestionamos todos los días en la operación.',
      },
      solution: {
        subtitle: '— POR QUÉ AGROVALUE',
        title: 'Un equipo que ha estado en ambos lados de la mesa.',
        text: 'No somos gestores financieros que aprendieron de agro. Somos ejecutivos del agro que aplican disciplina financiera. Abastecemos fruta para clientes internacionales, supervisamos la cosecha, el packing y la calidad, y seguimos cada embarque hasta su destino. Esa operación es la que nos da criterio, y para ti se traduce en mejores decisiones, menos sorpresas y más control sobre cada dólar invertido.',
      },
      image: imgServicios3,
      logo: logoBlanco,
      imageAlt: 'Campo en desarrollo',
      services: [],
      serviceGroups: [
        {
          groupTitle: 'PARA INVERSIONISTAS',
          items: [
            {
              num: '01',
              title: 'Estructuramos tu inversión de punta a punta.',
              text: 'Identificamos y evaluamos la oportunidad, estructuramos la operación y modelamos su retorno. Te acompañamos en el levantamiento de capital y en la gestión de la relación con tus coinversionistas, del análisis al cierre.',
            },
            {
              num: '02',
              title: 'Due diligence que no deja cabos sueltos.',
              text: 'Analizamos cada oportunidad en sus cuatro dimensiones: técnica, agronómica, comercial y financiera. Evaluamos tierras, agua, variedades, capacidad de empaque, acceso logístico y realidad de mercado, y lo complementamos con estudios de factibilidad para que decidas con información y no con supuestos.',
            },
            {
              num: '03',
              title: 'Desarrollamos y ejecutamos el proyecto.',
              text: 'No entregamos un informe y nos retiramos. Lideramos el desarrollo de nuevos proyectos agrícolas y la implementación de fundos y plantas de empaque por cuenta del inversionista, desde el diseño hasta la puesta en marcha y la optimización de la operación.',
            },
            {
              num: '04',
              title: 'Supervisamos el desempeño con visibilidad real.',
              text: 'Con tecnología propia integramos en un solo lugar la información de productores, producción, calidad, programas de exportación, seguimiento logístico e información comercial. Sigues tu proyecto con los mismos datos con los que lo operamos, no con un reporte armado para la reunión.',
            },
          ],
        },
        {
          groupTitle: 'PARA EMPRESAS AGROEXPORTADORAS',
          items: [
            {
              num: '01',
              title: 'Convertimos tu visión en un plan ejecutable.',
              text: 'Diseñamos estrategias de crecimiento, planes de negocio y modelos comerciales adaptados a tu realidad, y te acompañamos en procesos de expansión internacional y transformación empresarial.',
            },
            {
              num: '02',
              title: 'Estructuramos el capital para tu próxima etapa.',
              text: 'Modelamos la inversión que tu crecimiento requiere y facilitamos el acceso a capital para financiarla, de modo que la caja deje de ser la restricción que define hasta dónde puedes llegar.',
            },
            {
              num: '03',
              title: 'Fortalecemos la estructura detrás del negocio.',
              text: 'Valorizamos empresas, acompañamos procesos de reestructuración y planeamiento financiero, fortalecemos el gobierno corporativo y te ayudamos a encontrar al socio estratégico correcto.',
            },
          ],
        },
      ],
      processes: [
        {
          num: '1',
          title: 'Entendemos tu objetivo.',
          text: 'Tu perfil de inversión o desafío estratégico, horizonte de tiempo y contexto del negocio.',
        },
        {
          num: '2',
          title: 'Evaluamos la oportunidad.',
          text: 'Análisis técnico, financiero y de campo antes de cualquier recomendación.',
        },
        {
          num: '3',
          title: 'Estructuramos y ejecutamos contigo.',
          text: 'Términos, gobernanza y mecanismos de protección claros, con acompañamiento activo durante toda la implementación.',
        },
        {
          num: '4',
          title: 'Reportamos con transparencia.',
          text: 'Resultados, desviaciones y próximos pasos, de forma periódica.',
        },
      ],
      cta: {
        title: 'Construyamos juntos tu próximo proyecto.',
        text: 'Ya sea una inversión, una expansión o un desafío estratégico, cuéntanos tu objetivo y te mostramos cómo lo estructuramos contigo.',
        btnLink: '/contacto?perfil=inversionista',
        btnText: 'Contáctanos',
      },
    },
  ],
  // AQUÍ LA TRADUCCIÓN AL INGLÉS
  en: [
    {
      id: 'producer-exporter',
      number: '01',
      subtitle: 'GROWER / EXPORTER',
      title:
        'Your fruit can reach the most competitive buyers at the quality they demand.',
      text: 'We connect you with markets, financing, and technology so every season captures its true value.',
      problem: {
        subtitle: '— THE PROBLEM',
        title: `Your fruit shouldn't lose value after it leaves the field`,
        text: 'Without the right buyer, timely financing, or visibility into the process, that value can end up in the hands of intermediaries, while valuable opportunities never reach you.',
      },
      solution: {
        subtitle: '— WHY AGROVALUE',
        title:
          'You need an expert partner to guide you through every stage of the process.',
        text: 'We bring market access, financing, and technology  through a single partner, so you capture more value in every export program while meeting the quality, volume, and timing that leading buyers demand.',
      },
      image: imgServicios1,
      logo: logoBlanco,
      imageAlt: 'Producer showing a bunch of green grapes',
      services: [
        {
          num: '01',
          title: 'Buyers focused on maximizing the value of your fruit.',
          text: 'We connect you with reliable buyers in leading international markets, building sustainable commercial programs and long-term relationships instead of one-off sales.',
        },
        {
          num: '02',
          title: 'The capital you need, when you need it.',
          text: 'We provide financing solutions that strengthen your working capital and let you build your export programs with greater strength and flexibility.',
        },
        {
          num: '03',
          title: 'We plan ahead, so you can deliver without setbacks.',
          text: 'We begin preparations months before the season starts, verifying that the farm and the company meet the documentation and certifications each market requires. We run pre-audits that confirm regulatory compliance and fruit condition ahead of harvest.',
        },
        {
          num: '04',
          title: 'Quality control that stays ahead.',
          text: 'We carry out independent quality inspections on the production line and at destination, monitoring the food-safety and sustainability certifications each market demands.',
        },
        {
          num: '05',
          title: 'A partner invested in the sustainability of your business.',
          text: `We advise you on implementing technologies and processes that improve your productivity, quality, and competitiveness — because we don't just help you export your fruit, we help make next season better.`,
        },
        {
          num: '06',
          title: 'Technology behind every good decision.',
          text: 'With proprietary technology, we integrate commercial, operational, and quality information across the entire chain. We centralize every export program in one place, delivering real-time traceability and visibility from harvest through final settlement.',
        },
      ],
      processes: [
        {
          num: '1',
          title: 'We get to know your field.',
          text: 'We assess your production, variety, volume, and export capacity, along with the international certifications and documentation each market requires.',
        },
        {
          num: '2',
          title:
            'We give you the market intelligence to make the right decisions.',
          text: 'We tap into our network of buyers based on your product and commercial window.',
        },
        {
          num: '3',
          title: 'We support you through every shipment.',
          text: 'Quality control, documentation, and real-time tracking with our proprietary technology.',
        },
        {
          num: '4',
          title: 'We close the loop with you.',
          text: 'Transparent settlement and lessons applied to the next season.',
        },
      ],
      cta: {
        title: 'Take your next season further.',
        text: `Tell us what you grow, how much, and when, and we'll show you the commercial and financing opportunities available to you.`,
        btnLink: '/en/contact?perfil=productor', // Apunta a la página en inglés
        btnText: 'Contact us',
      },
    },
    {
      id: 'importer-distributor',
      number: '02',
      subtitle: 'IMPORTER / DISTRIBUTOR',
      title: 'Buy in Peru as if you had your own team at origin.',
      text: 'We know the growers, their fields, and their history. We oversee your fruit from harvest to port, with full visibility at every stage.',
      problem: {
        subtitle: '— THE PROBLEM',
        title: `Buying without a local presence shouldn't mean operating without technical control.`,
        text: `When you buy fruit at origin without a local presence, you're left relying on third-party information — photos that arrive late, quality that doesn't match what was agreed, shipments with no traceability, and claims nobody follows up on.`,
      },
      solution: {
        subtitle: '— WHY AGROVALUE',
        title: 'The grower opens the door for us. You get the benefit.',
        text: `Our team has spent years working alongside Peruvian growers: we know who delivers quality, who follows through, and who is ready to export. That trust isn't bought — it's built season after season, and we put it at your service.`,
      },
      image: imgServicios2,
      logo: logoBlanco,
      imageAlt: 'Importer',
      services: [
        {
          num: '01',
          title: 'Procurement and sourcing at origin.',
          text: 'We identify, negotiate, and secure the fruit you need directly from verified growers, meeting your exact specifications for volume, quality, and commercial window. We assess their production capacity and compliance track record before including them in your program.',
        },
        {
          num: '02',
          title: 'Tailored supply programs.',
          text: 'We design seasonal or multi-year sourcing programs with committed growers and volumes planned in advance, reducing the risk of shortages during peak season.',
        },
        {
          num: '03',
          title: 'Independent quality oversight.',
          text: ' We verify compliance with your specifications, current regulations, and international food-safety standards on the production line and at destination. We also monitor the quality and sustainability certifications your market requires before the fruit leaves Peru.',
        },
        {
          num: '04',
          title: 'Real-time traceability and monitoring.',
          text: 'With our technology, you can track the status of every container from the field to your warehouse — location, temperature, and documentation, centralized on a single platform, turning every data point into an informed decision.',
        },
        {
          num: '05',
          title: 'Claims management and quality analysis.',
          text: `If something doesn't arrive as it should, we document it, analyze the root cause at origin, and manage the claim with technical evidence. We stay with you until it's resolved.`,
        },
        {
          num: '06',
          title: 'Real-time market intelligence.',
          text: 'We share up-to-date information on seasons, volumes, prices, and commercial windows in Peru, so you can make decisions based on verified data instead of third-party estimates.',
        },
      ],
      processes: [
        {
          num: '1',
          title: 'We understand your need.',
          text: 'Product, volume, quality, window, and destination. We define the exact specification together.',
        },
        {
          num: '2',
          title: 'We tap into our network of growers.',
          text: 'We select the right growers for your program and negotiate the best terms.',
        },
        {
          num: '3',
          title: 'We oversee every stage.',
          text: 'Harvest, packing, quality, and dispatch, with our team present in the field.',
        },
        {
          num: '4',
          title: 'We keep you informed at all times.',
          text: 'Shipment tracking, complete documentation, and support for any issue that arises.',
        },
      ],
      cta: {
        title: 'Your next shipment from Peru, with total confidence.',
        text: `Tell us what service you need and we'll respond with concrete options: growers, volumes, and available windows.`,
        btnLink: '/en/contact?perfil=importador',
        btnText: 'Contact us',
      },
    },
    {
      id: 'special-projects',
      number: '03',
      subtitle: 'SPECIAL PROJECTS',
      title:
        'We structure investment and growth projects in Peruvian agriculture with the same rigor we apply in the field.',
      text: 'We structure, evaluate, and execute investment projects and strategic advisory for the agroexport sector. We do it from the inside: the same organization that sources fruit, oversees harvest and packing, inspects quality, and tracks shipments to destination is the one that structures and supports every project.',
      problem: {
        subtitle: '— THE PROBLEM',
        title: `Investing in agriculture shouldn't mean giving up control.`,
        text: `The sector offers attractive returns, but it concentrates risks that traditional financial institutions struggle to read: seasonality, field quality, export logistics, and market volatility. At AgroValue, we don't read these risks from a financial model — we manage them every day in the operation.`,
      },
      solution: {
        subtitle: '— WHY AGROVALUE',
        title: 'A team that has sat on both sides of the table. ',
        text: 'We are not financial managers who learned agriculture. We are agriculture executives who apply financial discipline. We source fruit for international clients, oversee harvest, packing, and quality, and track every shipment to its destination. That operating experience is what gives us judgment — and for you, it translates into better decisions, fewer surprises, and greater control over every dollar invested.',
      },
      image: imgServicios3,
      logo: logoBlanco,
      imageAlt: 'Projects',
      services: [],
      serviceGroups: [
        {
          groupTitle: 'FOR INVESTORS',
          items: [
            {
              num: '01',
              title: 'We structure your investment end to end.',
              text: 'We identify and evaluate the opportunity, structure the deal, and model its returns. We support you in raising capital and managing the relationship with your co-investors, from analysis through closing.',
            },
            {
              num: '02',
              title: 'Due diligence that leaves no loose ends.',
              text: 'We analyze every opportunity across four dimensions: technical, agronomic, commercial, and financial. We assess land, water, varieties, packing capacity, logistics access, and market conditions, complemented by feasibility studies so you can make decisions based on information, not assumptions.',
            },
            {
              num: '03',
              title: 'We develop and execute the project.',
              text: `We don't hand over a report and walk away. We lead the development of new agricultural projects and the implementation of farms and packing plants on the investor's behalf, from design through startup and operational optimization.`,
            },
            {
              num: '04',
              title: 'We monitor performance with real visibility.',
              text: 'With proprietary technology, we bring together grower, production, quality, export-program, logistics, and commercial information in one place. You follow your project with the same data we use to run it — not a report assembled for the meeting.',
            },
          ],
        },
        {
          groupTitle: 'FOR AGROEXPORT COMPANIES',
          items: [
            {
              num: '01',
              title: 'We turn your vision into an executable plan.',
              text: 'We design growth strategies, business plans, and commercial models tailored to your reality, and support you through international expansion and business transformation processes.',
            },
            {
              num: '02',
              title: 'We structure the capital for your next stage.',
              text: 'We model the investment your growth requires and facilitate access to the capital to finance it, so cash flow doesn’t limit how far you can grow.',
            },
            {
              num: '03',
              title: 'We strengthen the structure behind the business.',
              text: 'We value companies, support restructuring and financial-planning processes, strengthen corporate governance, and help you find the right strategic partner.',
            },
          ],
        },
      ],
      processes: [
        {
          num: '1',
          title: 'We understand your objective.',
          text: 'Your investment profile or strategic challenge, time horizon, and business context.',
        },
        {
          num: '2',
          title: 'We evaluate the opportunity.',
          text: 'Technical, financial, and field analysis before any recommendation.',
        },
        {
          num: '3',
          title: 'We structure and execute alongside you.',
          text: 'Clear terms, governance, and protection mechanisms, with active support throughout implementation.',
        },
        {
          num: '4',
          title: 'We report with transparency.',
          text: 'Results, variances and next steps, on a regular basis.',
        },
      ],
      cta: {
        title: `Let's build your next project together.`,
        text: `Whether it's an investment, an expansion, or a strategic challenge, tell us your goal and we'll show you how we can structure it with you.`,
        btnLink: '/en/contact?perfil=inversionista',
        btnText: 'Contact us',
      },
    },
  ],
};
