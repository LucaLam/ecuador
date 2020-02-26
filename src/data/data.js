import cuenca from '../assets/img/cuenca.jpg'
import guaranda from '../assets/img/guaranda.jpg'
import ingapirca from '../assets/img/ingapirca.jpeg'
import tulcan from '../assets/img/tulcan.jpeg'
import chimborazo from '../assets/img/chimborazo.jpg'
import cotopaxi from '../assets/img/cotopaxi.jpg'
import zamora from '../assets/img/zamora.jpg'
import tungurahua from '../assets/img/tungurahua.jpg'
import sucumbios from '../assets/img/cuyabeno.jpg'
import santo_domingo from '../assets/img/Santo_Domingo.jpg'
import santa_elena from '../assets/img/santa_elena.jpg'
import quito from '../assets/img/quito.jpg'
import guayaquil from '../assets/img/guayaquil.jpg'
import oro from '../assets/img/oro.jpg'
import esmeraldas from '../assets/img/esmeraldas.jpeg'
import galapagos from '../assets/img/galapagos.jpg'
import imbabura from '../assets/img/imbabura.jpeg'
import pastaza from '../assets/img/pastaza.jpg'
import orellana from '../assets/img/orellana.jpg'
import napo from '../assets/img/napo.jpg'
import morona from '../assets/img/morona.jpg'
import manabi from '../assets/img/manabi.jpg'
import loja from '../assets/img/loja.jpg'
import rios from '../assets/img/rios.jpg'


const ProvinceData = [
  {
    name: "Azuay",
    description: "It encompasses an area of 8,309.58 square kilometres (3,208.35 sq mi). Its capital is Cuenca. It is located in the south center of Ecuador in the highlands. Its mountains reach 4,500 m (14,800 ft) above sea level in the national park of El Cajas.",
    places: ["The city of Cuenca",
    "Cajas National Park",
    "Baños, a town known for extreme sports, nature, and waterfalls",
    "Sangay National Park",
    "Laguna Toreadora",
    "Sigsig"
],
image: cuenca
  },
  {
    name: "Bolívar",
    description: "Much of the province has a cool, 'sierra' climate, but the part in the lower foothills has a cold, tundra like climate.",
    places: [
    "Guaranda, the capital of the Bolívar province",
    "Salinas de Guaranda, also known as Salinas de Tomabela, is an Ecuadorian village at the altitude of 3550 m at the Andes in the province of Bolivar. It is known for its solidarity based economy and cooperative companies that produce cheeses, chocolates, dried mushrooms and fruits, alpaca wool yarn and textiles.",
    "Reserva de Produccion Faunistica Chimborazo",
],
image: guaranda
  },
  {
    name: "Cañar",
    description: "It contains the 16th-century ruins of Ingapirca, the best-known Inca settlement in Ecuador and a product of their conquest of the indigenous Cañari.",
    places: [
        "Ingapirca, These are the largest known Inca ruins in Ecuador.",
        "Laguna de Culebrillas",
        "Sanctuary of the Virgen del Rocio"
    ],
    image: ingapirca
  },
  {
    name: "Carchi",
    description: "The capital is Tulcán. The Carchi River rises on the slopes of Chiles volcano and forms the boundary between Colombia and Ecuador near Tulcan.",
    places: [
      "Tulcán Cemetery - topiary garden cemetery",
      "El Ángel ecological reserve, El Ángel - extensive páramo ecosystem with diverse biotopes, including the visually striking páramos de frailejones - moorland with a forest of ancient, up to 10 m tall Espeletia pycnophylla plants",
      "Arrayanes Forest, San Gabriel - 16 ha large forest with rare trees whose bark is in cinnamon color",
      "Lagunas Verdes on the way from Tufiño to Maldonado. Three lakes of volcanic origin with blue - green water, rich with sulphur",
      "Gruta de la Paz, San Gabriel - show cave with a shrine of Virgin Mary",
      "Laguna del Salado, San Gabriel - a serene lagoon with translucent water",
      "Tufiño Hot Springs in Tulcán",
      "El Voladero lagoons in El Angel",
      "De Paluz Falls in San Gabriel",
      "Guanderas Scientific Station, Huaca - a biological research station for montane ecosystems."
    ],
    image: tulcan
  },
  {
    name: "Chimborazo",
    description: "It is a home to a section of Sangay National Park. The capital is Riobamba. The province contains Chimborazo (6,267 m), Ecuador's highest mountain.",
    places: [
        "Hike Chimborazo volcano",
        "Climb El Altar Volcano",
        "Tungurahua Volcano",
        "La Nariz Del Diablo",
        "Sangay National Park",
        "Reserva de Produccion Faunistica Chimborazo",
        "Town of Alausí"
    ],
    image: chimborazo
  },
  {
    name: "Cotopaxi",
    description: "The province contains the Cotopaxi Volcano, an intermittent volcano with a height of 19,388 feet (5,909 m).",
    places: [
        "Cotopaxi National Park",
        "Latacunga",
        "Town of Salcedo",
        "Ilinizas Ecological Reserve",
        "El Corazón Volcano",
    ],
    image: cotopaxi
  },
  {
    name: "El Oro",
    description: "It was named for its historically important gold production. Today it is one of the world's major exporters of bananas. The capital is Machala.",
    places: [
        "Machala",
        "Zaruma",
        "Piñas",
        "Huaquillas Border City",
        "Arenillas Ecological Reserve",
    ],
    image: oro
  },
  {
    name: "Esmeraldas",
    description: "The province is home to the Afro-Ecuadorian culture.",
    places: [
        "Playa Tonsupa",
        "Playa de Las Palmas",
        "Playa de Atacames",
        "Playa Mompiche",
        "Tonsupa Beach",
    ],
    image: esmeraldas
  },
  {
    name: "Galápagos",
    description: "A province of Ecuador in the country's Insular region, located approximately 1,000 km (620 mi) off the western coast of the mainland.",
    places: [
        "North Seymour Island",
        "Bartolomé Island",
        "Black Turtle Cove",
        "Cerro Dragon",
        "Mosquera Island",
    ],
    image: galapagos
  },
  {
    name: "Guayas",
    description: "With a population of over 3 million people, it is the most populous province in Ecuador. In terms of area it is the seventh largest province in the country. The largest city of Ecuador, Guayaquil, is located within the province.",
    places: [
        "City of Guayaquil",
        "Playas, a seaside city",
        "Isla Santay",
        "Churute Mangroves Ecological Reserve",
    ],
    image: guayaquil
  },
  {
    name: "Imbabura",
    description: "The people of the province speak Spanish and the Imbaburan Quechua language.",
    places: [
        "Lago Cuicoha",
        "Imbabura Volcano",
        "Cotacachi Volcano",
        "Laguna de San Pablo",
    ],
    image: imbabura
  },
  {
    name: "Loja",
    description: "It also is named as 'Cuxibamba Valley', from the Quichua language, which means the 'Smiley Valley'.",
    places: [
        "Podocarpus National Park",
        "Yacurí National Park",
        "Central Bank Museum",
        "City of Loja",
    ],
    image: loja
  },
  {
    name: "Los Ríos",
    description: "The province's economy is largely based on its agriculture: coffee, cacao, bananas, rice, tobacco, etc.",
    places: [
        "Hulio Hulio Reserva Biológica",
        "Villarrica National Park",
        "Casino Valdivia",
        "Coñaripe",
    ],
    image: rios
  },
  {
    name: "Manabí",
    description: "The province is named after the Manabí people.",
    places: [
        "Puerto Lopez",
        "Manta",
        "Plata Island",
        "Machalilla National Park",
    ],
    image: manabi
  },
  {
    name: "Morona Santiago",
    description: "The provincial economy is industrially unexploited to its potential due to poor means of transportation. Its economy relies largely on the tourist sector of the rain forest.",
    places: [
        "Sangay National Park",
        "Sangay Volcano",
    ],
    image: morona
  },
  {
    name: "Napo",
    description: "The thick rainforest is home to many natives that remain isolated by preference, descendants of those who fled the Spanish invasion in the Andes, and the Incas years before.",
    places: [
        "Antisana Volcano",
        "Sumaco National Park",
        "Cayambe Coca Ecological Reserve",
        "AmaZOOnico",
    ],
    image: napo
  },
  {
    name: "Orellana",
    description: "The name of the province derives from the explorer Francisco de Orellana who it is told to have sailed from somewhere near the town to the Atlantic Ocean.",
    places: [
        "Yasuni National Park",
        "Sumaco National Park",
        "Cuyabeno Wildlife Reserve",
        "Coca (city)",
    ],
    image: orellana
  },
  {
    name: "Pastaza",
    description: "The landscape is mostly mountainous in the western part of the province and becomes relatively flat toward the east as it nears the Peruvian border with rivers and plains characterizing most of the province.",
    places: [
        "Finca Mirador Indichuris",
        "Cascada Hola Vida",
        "Llanganates National Park",
        "Puyo",
    ],
    image: pastaza
  },
  {
    name: "Pichincha",
    description: "The province is home to many rose plantations, which make up the bulk of Ecuador's floriculture industry.",
    places: [
        "Quito, Ecuador's Capital",
        "Mindo Valley",
        "Cayambe",
        "Cotopaxi National Park",
    ],
    image: quito
  },
  {
    name: "Santa Elena",
    description: "Created in 2007 from territory that belonged to the Guayas Province",
    places: [
    "Playa de Ballenita", 
    "Santa Elena Peninsula", 
    "Punta Carnero, surfing beach"
    ],
    image: santa_elena
  },
  {
    name: "Santo Domingo de los Tsáchilas",
    description: "The name of the province refers to a local ethnic group, the Tsáchila, also known as the Colorados on account of the custom of men dyeing their hair with paste made from achiote plants.",
    places: [
    "Parque Botanico La Carolina", 
    "La Isla del Tapir Zoo", 
    "Cerro Bombolí"
    ],
    image: santo_domingo
  },
  {
    name: "Sucumbíos",
    description: "Sucumbíos is the only province in Ecuador that borders two different countries.",
    places: [
    "Limoncocha National Park", 
    "Reventador Volcano", 
    "Cayambe Coca Ecological Reserve"
    ],
    image: sucumbios
  },
  {
    name: "Tungurahua",
    description: "The province takes its name from the Tungurahua volcano, which is located within the boundaries of the provinces.",
    places: [
    "Ambato", 
    "Cascada Manto de la Novia", 
    "Volcan Carihuairazo"
    ],
    image: tungurahua
  },
  {
    name: "Zamora-Chinchipe",
    description: "Zamora-Chinchipe is characterized and largely identified by its mining industry; indigenous ethnic groups with a rich archaeological legacy; its biodiversity; and its niche and tourist attractions, which include a number of waterfalls well-noted for their beauty.",
    places: [
    "Yacurí National Park", 
    "Zamora", 
    "Podocarpus National Park"
    ],
    image: zamora
  }
];

export default ProvinceData;
