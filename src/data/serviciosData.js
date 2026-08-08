// src/data/serviciosData.js

// Importamos la imagen (puedes agregar las demás cuando las tengas)
import imgServicios1 from "../assets/banner_Agrovalue_servicios.jpg";
import imgServicios2 from "../assets/banner_Agrovalue_servicios2.jpg";
import imgServicios3 from "../assets/banner_Agrovalue_servicios3.jpg";

import logoBlanco from "../assets/Logo_Agrovalue_blanco.svg";

export const perfilesData = [
	{
		id: "productor-exportador",
		number: "01",
		subtitle: "PRODUCTOR / EXPORTADOR",
		title:
			"Tu fruta puede llegar a los clientes más competitivos, con la calidad que exigen.",
		text: "Te conectamos con mercados, financiamiento y tecnología para que cada campaña capture su verdadero valor.",
		problem: {
			subtitle: "— EL PROBLEMA",
			title: "Tu fruta no debería perder valor después de salir del campo.",
			text: "Sin el comprador correcto, el financiamiento a tiempo o visibilidad del camino, ese valor se queda en manos de intermediarios o en oportunidades que nunca llegaron a ti.",
		},
		solution: {
			subtitle: "— POR QUÉ AGROVALUE",
			title:
				"No necesitas manejar todo por tu cuenta. Necesitas un socio que lo resuelva todo.",
			text: "Integramos mercado, financiamiento y tecnología en un solo socio, para que captures más valor en cada programa de exportación, cumpliendo con la calidad, el volumen y la oportunidad que exigen los principales compradores.",
		},
		image: imgServicios1,
		logo: logoBlanco,
		imageAlt: "Productora mostrando racimo de uvas verdes",
		services: [
			{
				num: "01",
				title: "Compradores que buscan maximizar el valor de tu fruta.",
				text: "Te conectamos con compradores confiables en los principales mercados internacionales, desarrollando programas comerciales sostenibles y relaciones de largo plazo, en lugar de ventas puntuales.",
			},
			{
				num: "02",
				title: "El capital que necesitas, cuando lo necesitas.",
				text: "Facilitamos soluciones de financiamiento que fortalecen tu capital de trabajo y te permiten desarrollar tus programas de exportación con mayor solidez y flexibilidad.",
			},
			{
				num: "03",
				title: "Tu campaña, preparada desde el primer día.",
				text: "Iniciamos la preparación meses antes del arranque de campaña, verificando que el campo y la empresa cumplan con la documentación y certificaciones requeridas por cada mercado. Ejecutamos preauditorías que confirman el cumplimiento normativo y la condición de la fruta previa a la cosecha.",
			},
			{
				num: "04",
				title: "Control de calidad que anticipa.",
				text: "Realizamos inspecciones independientes de calidad en línea de producción y en destino, monitoreando las certificaciones de inocuidad y sostenibilidad que exige cada mercado.",
			},
			{
				num: "05",
				title: "Un aliado que también piensa en tu próxima campaña.",
				text: "Te asesoramos en la implementación de tecnologías y procesos que mejoran tu productividad, calidad y competitividad: no solo te ayudamos a exportar tu fruta, ayudamos a que la próxima campaña sea mejor.",
			},
			{
				num: "06",
				title: "Tecnología detrás de cada buena decisión.",
				text: "Con tecnología propia integramos la información comercial, operativa y de calidad de toda la cadena. Centralizamos cada programa de exportación en un solo lugar, brindando trazabilidad y visibilidad en tiempo real desde la cosecha hasta la liquidación final.",
			},
		],
		processes: [
			{
				num: "1",
				title: "Conocemos tu campo.",
				text: "Evaluamos tu producción, variedad, volumen y capacidad exportable, junto con las certificaciones internacionales y la documentación requerida por cada mercado.",
			},
			{
				num: "2",
				title: "Te conectamos con el mercado correcto.",
				text: "Activamos nuestra red de compradores según tu producto y ventana comercial.",
			},
			{
				num: "3",
				title: "Acompañamos cada embarque.",
				text: "Control de calidad, documentación y seguimiento en tiempo real con tecnología propia.",
			},
			{
				num: "4",
				title: "Cerramos el ciclo contigo.",
				text: "Liquidación transparente y aprendizajes para la siguiente campaña.",
			},
		],
		cta: {
			title: "Lleva tu próxima campaña más lejos.",
			text: "Cuéntanos qué produces, cuánto y cuándo, y te mostramos las oportunidades comerciales y de financiamiento disponibles para ti.",
			btnLink: "/contacto?perfil=productor",
			btnText: "Contáctanos",
		},
	},
	{
		id: "importador-distribuidor",
		number: "02",
		subtitle: "IMPORTADOR / DISTRIBUIDOR",
		title: "Compra en Perú como si tuvieras un equipo propio en origen.",
		text: "Conocemos a los productores, sus campos y su historia. Supervisamos tu fruta desde la cosecha hasta el puerto, con visibilidad total en cada etapa.",
		problem: {
			subtitle: "— EL PROBLEMA",
			title:
				"Comprar sin presencia local no debería significar operar sin control técnico.",
			text: "Cuando compras fruta en origen sin presencia local, quedas sujeto a información de terceros, como fotos que llegan tarde, calidad que no coincide con lo pactado, embarques sin trazabilidad y reclamos que nadie atiende.",
		},
		solution: {
			subtitle: "— POR QUÉ AGROVALUE",
			title:
				"El productor nos abre la puerta. Tú recibes el beneficio.Un suministro en el que puedes confiar ciegamente.",
			text: "Nuestro equipo lleva años trabajando junto a productores peruanos: sabemos quién produce con calidad, quién cumple y quién está listo para exportar. Esa confianza no se compra, se construye campaña tras campaña, y la ponemos a tu servicio.",
		},
		image: imgServicios2,
		logo: logoBlanco,
		imageAlt: "Importando la calidad de la fruta",
		services: [
			{
				num: "01",
				title: "Procurement y abastecimiento en origen.",
				text: "Identificamos, negociamos y aseguramos la fruta que necesitas directamente con productores verificados, cumpliendo tu especificación exacta de volumen, calidad y ventana comercial. Evaluamos su capacidad productiva y su historial de cumplimiento antes de incluirlos en tu programa.",
			},
			{
				num: "02",
				title: "Programas de suministro a la medida.",
				text: "Diseñamos programas de abastecimiento por campaña o multianuales, con productores comprometidos y volúmenes planificados con anticipación, reduciendo el riesgo de desabastecimiento en temporada alta.",
			},
			{
				num: "03",
				title: "Supervisión independiente de calidad.",
				text: "Verificamos el cumplimiento de tus especificaciones, la normativa vigente y los estándares internacionales de inocuidad en línea de producción y en destino. Monitoreamos también las certificaciones que exige tu mercado, antes de que la fruta salga del Perú.",
			},
			{
				num: "04",
				title:
					"Trazabilidad y monitoreo en tiempo real.Procurement y abastecimiento en origen.",
				text: "Con nuestra tecnología, podrás seguir el estado de cada contenedor desde el campo hasta tu almacén, con datos como ubicación, temperatura y documentación, centralizados en una sola plataforma, convirtiendo cada dato en una decisión informada.",
			},
			{
				num: "05",
				title: "Gestión de reclamos y análisis de calidad.",
				text: "Si algo no llega como debía, documentamos, analizamos la causa raíz en origen y gestionamos el reclamo con evidencia técnica. Te acompañamos hasta resolverlo.",
			},
			{
				num: "06",
				title:
					"Inteligencia de mercado en tiempo real.Supervisión independiente de calidad.",
				text: "Te compartimos información actualizada de campañas, volúmenes, precios y ventanas comerciales del Perú, para que decidas con datos verificados y no con estimados de terceros.",
			},
		],
		processes: [
			{
				num: "1",
				title: "Entendemos tu necesidad.",
				text: "Producto, volumen, calidad, ventana y destino. Definimos juntos la especificación exacta.",
			},
			{
				num: "2",
				title: "Activamos nuestra red de productores.",
				text: "Seleccionamos los productores adecuados para tu programa y negociamos las mejores condiciones.",
			},
			{
				num: "3",
				title: "Supervisamos cada etapa.",
				text: "Cosecha, empaque, calidad y despacho con presencia de nuestro equipo en campo.",
			},
			{
				num: "4",
				title: "Te mantenemos siempre informado.",
				text: "Seguimiento del embarque, documentación completa y soporte ante cualquier eventualidad.",
			},
		],
		cta: {
			title: "Tu próximo embarque desde Perú, con total confianza.",
			text: "Cuéntanos qué servicio necesitas y te respondemos con opciones concretas: productores, volúmenes y ventanas disponibles.",
			btnLink: "/contacto?perfil=importador",
			btnText: "Contáctanos",
		},
	},
	{
		id: "proyectos-especiales",
		number: "03",
		subtitle: "PROYECTOS ESPECIALES",
		title:
			"Invierte en el agro peruano con quienes conocen cada eslabón de la cadena.",
		text: "Estructuramos y ejecutamos proyectos de inversión y asesoría estratégica que impulsan el crecimiento del sector agroexportador, con el mismo rigor con el que operamos en el campo.",
		problem: {
			subtitle: "— EL PROBLEMA",
			title: "Invertir en el agro no debería significar ceder el control.",
			text: "El sector ofrece retornos atractivos, pero está lleno de riesgos que las instituciones financieras tradicionales no saben leer: estacionalidad, calidad de campo, logística de exportación y volatilidad de mercado. En AgroValue no delegamos esos riesgos a terceros, los gestionamos nosotros mismos, porque los conocemos desde adentro.",
		},
		solution: {
			subtitle: "— POR QUÉ AGROVALUE",
			title: "Un equipo que ha estado en ambos lados de la mesa.",
			text: "No somos gestores financieros que aprendieron de agro. Somos ejecutivos del agro que aplicamos disciplina financiera. Esa diferencia se traduce en mejores decisiones de inversión, en menos sorpresas y más control sobre cada dólar invertido.",
		},
		image: imgServicios3,
		logo: logoBlanco,
		imageAlt: "Campo en desarrollo",
		services: [
			{
				num: "01",
				title: "Estructuramos tu inversión de punta a punta.",
				text: "Identificamos y evaluamos la oportunidad, estructuramos la inversión y modelamos su retorno financiero. Te acompañamos en el levantamiento de capital y en la relación con tus inversionistas, del análisis al cierre.",
			},
			{
				num: "02",
				title: "Convertimos tu visión en un plan ejecutable.",
				text: "Diseñamos estrategias de crecimiento, planes de negocio y modelos comerciales adaptados a tu realidad, y te acompañamos en procesos de expansión internacional y transformación empresarial.",
			},
			{
				num: "03",
				title: "Desarrollamos el proyecto desde la tierra.",
				text: "Evaluamos tierras, desarrollamos nuevos proyectos agrícolas y lideramos la implementación de fundos y plantas de empaque, optimizando cada operación desde el primer día.",
			},
			{
				num: "04",
				title: "Fortalecemos la estructura detrás del negocio.",
				text: "Valorizamos empresas, acompañamos reestructuraciones y planeamiento financiero, fortalecemos el gobierno corporativo y te ayudamos a encontrar al socio estratégico correcto.",
			},
			{
				num: "05",
				title: "Due diligence que no deja cabos sueltos.",
				text: "Analizamos a fondo cada oportunidad: riesgos técnicos, comerciales, financieros y de campo. Antes de que tomes cualquier decisión, con estudios de factibilidad que no dejan nada al azar.",
			},
			{
				num: "06",
				title: "Tecnología detrás de cada decisión de inversión.",
				text: "Con nuestra tecnología propia integramos información comercial, agrícola y financiera de cada proyecto, para que decidas con datos en tiempo real y le des seguimiento integral de principio a fin.",
			},
		],
		processes: [
			{
				num: "1",
				title: "Entendemos tu objetivo.",
				text: "Tu perfil de inversión o desafío estratégico, horizonte de tiempo y contexto del negocio.",
			},
			{
				num: "2",
				title: "Evaluamos la oportunidad.",
				text: "Análisis técnico, financiero y de campo antes de cualquier recomendación.",
			},
			{
				num: "3",
				title: "Estructuramos y ejecutamos contigo.",
				text: "Términos, gobernanza y mecanismos de protección claros, con acompañamiento activo durante toda la implementación.",
			},
			{
				num: "4",
				title: "Reportamos con transparencia.",
				text: "Resultados, desviaciones y próximos pasos, de forma periódica.",
			},
		],
		cta: {
			title: "Construyamos juntos tu próximo proyecto.",
			text: "Ya sea una inversión, una expansión o un desafío estratégico, cuéntanos tu objetivo y te mostramos cómo lo estructuramos contigo.",
			btnLink: "/contacto?perfil=inversionista",
			btnText: "Contáctanos",
		},
	},
];
