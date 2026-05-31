import merkuriusImg from "../assets/merkurius.png";
import venusImg from "../assets/venus.png";
import bumiImg from "../assets/bumi.png";
import marsImg from "../assets/mars.png";
import jupiterImg from "../assets/jupiter.png";
import saturnusImg from "../assets/saturnus.png";
import uranusImg from "../assets/uranus.png";
import neptunusImg from "../assets/neptunus.png";

export interface Fact {
  label: string;
  value: string;
}

export interface Planet {
  id: string;
  name: string;
  description: string;
  image: string;
  facts: Fact[];
  additionalInfo?: string;
}

export const planets: Planet[] = [
  {
    id: "merkurius",
    name: "Merkurius",
    description:
      "Merkurius adalah planet terdekat dengan Matahari dan merupakan planet terkecil di tata surya kita. Planet ini memiliki permukaan yang berbatu dan penuh dengan kawah, mirip dengan Bulan. Merkurius tidak memiliki atmosfer yang signifikan, sehingga suhu di permukaannya dapat sangat ekstrem, dengan suhu siang hari mencapai sekitar 430 derajat Celsius dan suhu malam hari turun hingga -180 derajat Celsius. Meskipun ukurannya kecil, Merkurius memiliki inti logam yang besar, yang membuatnya memiliki medan magnet yang kuat dibandingkan dengan planet lain seukuran itu.",
    image: merkuriusImg,
    facts: [
      { label: "Diameter", value: "4,879 km" },
      { label: "Jarak dari Matahari", value: "57.9 juta km" },
      { label: "Suhu Permukaan", value: "-180°C hingga 430°C" },
      { label: "Periode Orbit", value: "88 hari" },
    ],
  },
  {
    id: "venus",
    name: "Venus",
    description:
      'Venus adalah planet kedua dari Matahari dan sering disebut "kembaran Bumi" karena ukurannya yang hampir sama, dengan diameter 12.104 km. Namun kemiripan itu hanya sebatas ukuran kondisi di Venus jauh dari ramah. Atmosfernya yang sangat tebal terdiri dari karbon dioksida dengan awan asam sulfat, menciptakan efek rumah kaca yang ekstrem hingga suhu permukaannya mencapai 465°C secara konstan. Yang membuat Venus semakin unik adalah arah rotasinya yang berlawanan dengan hampir semua planet lain di tata surya.',
    image: venusImg,
    facts: [
      { label: "Diameter", value: "12,104 km" },
      { label: "Jarak dari Matahari", value: "108.2 juta km" },
      { label: "Suhu Permukaan", value: "465°C" },
      { label: "Periode Orbit", value: "225 hari" },
    ],
    additionalInfo:
      "Venus berputar ke arah yang berlawanan (retrograde) dibandingkan dengan sebagian besar planet lain, dan rotasinya sangat lambat - satu hari Venus lebih lama dari satu tahun Venus!",
  },
  {
    id: "bumi",
    name: "Bumi",
    description:
      "Bumi adalah planet ketiga dari Matahari dan satu-satunya tempat di alam semesta yang terbukti mendukung kehidupan. Dengan diameter 12.742 km, Bumi memiliki kombinasi sempurna antara jarak dari Matahari, atmosfer pelindung, dan air cair di permukaan yang memungkinkan kehidupan berkembang. Suhu rata-ratanya sekitar 15°C, cukup stabil berkat lapisan atmosfer yang menjaga panas tetap seimbang. Bumi juga dilindungi oleh medan magnet kuat yang menangkal radiasi berbahaya dari luar angkasa.",
    image: bumiImg,
    facts: [
      { label: "Diameter", value: "12,742 km" },
      { label: "Jarak dari Matahari", value: "149.6 juta km" },
      { label: "Suhu Rata-rata", value: "15°C" },
      { label: "Periode Orbit", value: "365.25 hari" },
    ],
    additionalInfo:
      "Bumi adalah satu-satunya planet yang terbukti memiliki kehidupan dan memiliki satu satelit alami - Bulan.",
  },
  {
    id: "mars",
    name: "Mars",
    description:
      'Mars adalah planet keempat dari Matahari yang dikenal luas sebagai "Planet Merah" karena warna permukaannya yang khas. Warna merah kecokelatan itu berasal dari kandungan oksida besi atau karat yang menutupi tanah dan debu di permukaannya. Dengan diameter 6.779 km, Mars lebih kecil dari Bumi, namun memiliki gunung tertinggi di seluruh tata surya bernama Olympus Mons yang menjulang setinggi 21 kilometer. Suhu rata-rata di Mars sekitar -60°C, menjadikannya planet yang sangat dingin dan kering.',
    image: marsImg,
    facts: [
      { label: "Diameter", value: "6,779 km" },
      { label: "Jarak dari Matahari", value: "227.9 juta km" },
      { label: "Suhu Rata-rata", value: "-60°C" },
      { label: "Periode Orbit", value: "687 hari" },
    ],
    additionalInfo:
      "Mars memiliki gunung tertinggi di tata surya (Olympus Mons) dan adalah target utama eksplorasi ruang angkasa manusia.",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    description:
      "Jupiter adalah planet kelima dari Matahari dan merupakan planet terbesar di tata surya kita. Dengan diameter lebih dari 11 kali lipat dari Bumi, Jupiter adalah raksasa gas yang menakjubkan. Planet ini terkenal dengan Bintik Merah Besar, yaitu badai antiklon yang telah berlangsung selama berabad-abad. Jupiter memiliki sistem cincin yang lemah dan lebih dari 79 bulan yang diketahui, termasuk empat bulan Galilean besar (Io, Europa, Ganymed, dan Callisto). Medan magnet Jupiter adalah yang terkuat di tata surya.",
    image: jupiterImg,
    facts: [
      { label: "Diameter", value: "139,820 km" },
      { label: "Jarak dari Matahari", value: "778.5 juta km" },
      { label: "Komposisi", value: "Hidrogen & Helium" },
      { label: "Periode Orbit", value: "12 tahun" },
    ],
    additionalInfo:
      "Jupiter memiliki lebih dari 79 bulan dan badai Bintik Merah Besarnya cukup besar untuk menampung tiga Bumi di dalamnya.",
  },
  {
    id: "saturnus",
    name: "Saturnus",
    description:
      "Saturnus adalah planet keenam dari Matahari dan terkenal karena sistem cincinnya yang spektakuler. Planet ini merupakan raksasa gas kedua terbesar di tata surya dengan diameter sekitar 9.4 kali dari Bumi. Cincin Saturnus terdiri dari miliaran partikel es dan batu yang mengorbit planet ini, menciptakan pemandangan yang memukau. Saturnus juga memiliki lebih dari 80 bulan, termasuk Titan yang merupakan bulan terbesar Saturnus dan satu-satunya bulan dengan atmosfer tebal. Planet ini memiliki rotasi yang cepat dengan satu hari hanya berlangsung sekitar 10 jam.",
    image: saturnusImg,
    facts: [
      { label: "Diameter", value: "116,460 km" },
      { label: "Jarak dari Matahari", value: "1.434 miliar km" },
      { label: "Komposisi", value: "Hidrogen & Helium" },
      { label: "Periode Orbit", value: "29 tahun" },
    ],
    additionalInfo:
      "Sistem cincin Saturnus membentang sejauh jutaan kilometer dan tersusun atas miliaran partikel es.",
  },
  {
    id: "uranus",
    name: "Uranus",
    description:
      "Uranus adalah planet ketujuh dari Matahari dan merupakan raksasa es yang unik. Berbeda dengan planet lain, Uranus memiliki rotasi yang ekstrem - planet ini berputar pada sisinya dengan sudut kemiringan aksial sekitar 98 derajat, yang berarti kutubnya menghadap langsung ke arah Matahari. Uranus memiliki warna biru-hijau yang indah karena metana di atmosfernya yang menyerap cahaya merah. Planet ini juga memiliki cincin tetapi tidak setangi Saturnus, dan memiliki lebih dari 27 bulan yang diketahui.",
    image: uranusImg,
    facts: [
      { label: "Diameter", value: "50,724 km" },
      { label: "Jarak dari Matahari", value: "2.873 miliar km" },
      { label: "Komposisi", value: "Es & Raksasa Es" },
      { label: "Periode Orbit", value: "84 tahun" },
    ],
    additionalInfo:
      "Uranus berputar pada sisinya dengan kemiringan 98 derajat, menjadikannya planet yang paling miring di tata surya.",
  },
  {
    id: "neptunus",
    name: "Neptunus",
    description:
      "Neptunus adalah planet kedelapan dan terakhir dari Matahari dan merupakan raksasa es terjauh di tata surya kami. Planet ini terkenal dengan angin tercepat di tata surya yang dapat mencapai kecepatan lebih dari 2.100 kilometer per jam. Neptunus memiliki warna biru yang indah karena metana di atmosfernya. Meskipun jauh dari Matahari, Neptunus masih memiliki aktivitas cuaca yang dinamis dengan badai dan awan yang berubah dengan cepat. Planet ini memiliki 14 bulan yang diketahui, dengan Triton menjadi bulan terbesar yang memiliki aktivitas vulkanik.",
    image: neptunusImg,
    facts: [
      { label: "Diameter", value: "49,244 km" },
      { label: "Jarak dari Matahari", value: "4.495 miliar km" },
      { label: "Komposisi", value: "Es & Raksasa Es" },
      { label: "Periode Orbit", value: "165 tahun" },
    ],
    additionalInfo:
      "Neptunus memiliki angin tercepat di tata surya dan merupakan planet terakhir dalam sistem tata surya kita.",
  },
];
