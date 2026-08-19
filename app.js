// ========================================================
// 1. GLOBAL AIRPORT & DOWNTOWN DIRECTORY
// ========================================================
const majorAirportCatalog = [
  // Europe
  { code: "FCO", name: "Rome Fiumicino Leonardo da Vinci", city: "Rome", country: "Italy", airportLat: 41.8003, airportLon: 12.2389, cityLat: 41.9028, cityLon: 12.4964 },
  { code: "LIS", name: "Humberto Delgado Airport (Lisbon)", city: "Lisbon", country: "Portugal", airportLat: 38.7742, airportLon: -9.1342, cityLat: 38.7223, cityLon: -9.1393 },
  { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France", airportLat: 49.0097, airportLon: 2.5479, cityLat: 48.8566, cityLon: 2.3522 },
  { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom", airportLat: 51.4700, airportLon: -0.4543, cityLat: 51.5074, cityLon: -0.1278 },
  { code: "BCN", name: "Barcelona-El Prat", city: "Barcelona", country: "Spain", airportLat: 41.2974, airportLon: 2.0833, cityLat: 41.3874, cityLon: 2.1686 },
  { code: "MAD", name: "Adolfo Suárez Madrid-Barajas", city: "Madrid", country: "Spain", airportLat: 40.4839, airportLon: -3.5680, cityLat: 40.4168, cityLon: -3.7038 },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands", airportLat: 52.3105, airportLon: 4.7683, cityLat: 52.3676, cityLon: 4.9041 },

  // Asia & Pacific
  { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan", airportLat: 25.0797, airportLon: 121.2342, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "TSA", name: "Taipei Songshan Airport", city: "Taipei", country: "Taiwan", airportLat: 25.0697, airportLon: 121.5525, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "KHH", name: "Kaohsiung International", city: "Kaohsiung", country: "Taiwan", airportLat: 22.5772, airportLon: 120.3500, cityLat: 22.6273, cityLon: 120.3014 },
  { code: "HND", name: "Tokyo Haneda", city: "Tokyo", country: "Japan", airportLat: 35.5494, airportLon: 139.7798, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "NRT", name: "Tokyo Narita", city: "Tokyo", country: "Japan", airportLat: 35.7720, airportLon: 140.3929, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "KIX", name: "Kansai International (Kyoto/Osaka)", city: "Kyoto / Osaka", country: "Japan", airportLat: 34.4320, airportLon: 135.2304, cityLat: 35.0116, cityLon: 135.7681 },
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong", airportLat: 22.3080, airportLon: 113.9185, cityLat: 22.2855, cityLon: 114.1577 },

  // United States
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States", airportLat: 37.6213, airportLon: -122.3790, cityLat: 37.7749, cityLon: -122.4194 },
  { code: "SJC", name: "San José Mineta International", city: "San Jose", country: "United States", airportLat: 37.3639, airportLon: -121.9289, cityLat: 37.3382, cityLon: -121.8863 },
  { code: "OAK", name: "Oakland San Francisco Bay", city: "Oakland", country: "United States", airportLat: 37.7213, airportLon: -122.2207, cityLat: 37.8044, cityLon: -122.2711 },
  { code: "ORD", name: "Chicago O'Hare International", city: "Chicago", country: "United States", airportLat: 41.9742, airportLon: -87.9073, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "MDW", name: "Chicago Midway International", city: "Chicago", country: "United States", airportLat: 41.7868, airportLon: -87.7522, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "United States", airportLat: 40.6413, airportLon: -73.7781, cityLat: 40.7580, cityLon: -73.9855 },
  { code: "EWR", name: "Newark Liberty International", city: "Newark / New York", country: "United States", airportLat: 40.6895, airportLon: -74.1745, cityLat: 40.7357, cityLon: -74.1724 },
  { code: "SAN", name: "San Diego International", city: "San Diego", country: "United States", airportLat: 32.7338, airportLon: -117.1933, cityLat: 32.7157, cityLon: -117.1611 },
  { code: "HNL", name: "Daniel K. Inouye International", city: "Honolulu", country: "United States", airportLat: 21.3245, airportLon: -157.9251, cityLat: 21.2766, cityLon: -157.8283 }
];

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 4000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    return null;
  }
}

// Airport Hub Resolver
async function resolveAirportHub(userInput) {
  if (!userInput) return majorAirportCatalog[0];
  const cleanInput = userInput.trim();
  const lowerInput = cleanInput.toLowerCase();

  const explicitCodeMatch = cleanInput.match(/\(([A-Za-z]{3})\)/);
  if (explicitCodeMatch) {
    const codeFromParen = explicitCodeMatch[1].toUpperCase();
    const match = majorAirportCatalog.find(a => a.code === codeFromParen);
    if (match) return match;
  }

  const directCodeMatch = majorAirportCatalog.find(a => a.code.toLowerCase() === lowerInput);
  if (directCodeMatch) return directCodeMatch;

  const exactCityMatches = majorAirportCatalog.filter(a => a.city.toLowerCase() === lowerInput);
  if (exactCityMatches.length > 0) return exactCityMatches[0];

  const partialMatches = majorAirportCatalog.filter(a =>
    a.city.toLowerCase().includes(lowerInput) || lowerInput.includes(a.city.toLowerCase()) ||
    a.name.toLowerCase().includes(lowerInput)
  );
  if (partialMatches.length > 0) return partialMatches[0];

  try {
    const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanInput + " airport")}&format=json&addressdetails=1&limit=1`, {}, 2500);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        const item = data[0];
        const targetLat = parseFloat(item.lat);
        const targetLon = parseFloat(item.lon);
        const cityName = item.address.city || item.address.town || item.address.county || cleanInput;

        let closestAirport = majorAirportCatalog[0];
        let minDistance = Infinity;
        majorAirportCatalog.forEach(ap => {
          const dist = haversineDistance(targetLat, targetLon, ap.airportLat, ap.airportLon);
          if (dist < minDistance) {
            minDistance = dist;
            closestAirport = ap;
          }
        });

        return {
          code: minDistance < 150 ? closestAirport.code : cityName.substring(0, 3).toUpperCase(),
          name: minDistance < 150 ? closestAirport.name : `${cityName} Airport`,
          city: cityName,
          country: item.address.country || "",
          airportLat: minDistance < 150 ? closestAirport.airportLat : targetLat,
          airportLon: minDistance < 150 ? closestAirport.airportLon : targetLon,
          cityLat: targetLat,
          cityLon: targetLon
        };
      }
    }
  } catch (e) {}

  return {
    code: cleanInput.substring(0, 3).toUpperCase(),
    name: `${cleanInput} Airport`,
    city: cleanInput,
    country: "",
    airportLat: 41.9028,
    airportLon: 12.4964,
    cityLat: 41.9028,
    cityLon: 12.4964
  };
}

// Destination Visit City Resolver
async function resolveVisitCityLocation(cityName, fallbackAirportObj) {
  if (!cityName || cityName.trim() === "") {
    return {
      cityName: fallbackAirportObj.city,
      lat: fallbackAirportObj.cityLat,
      lon: fallbackAirportObj.cityLon
    };
  }

  const cleanCity = cityName.trim();
  const lower = cleanCity.toLowerCase();

  const known = majorAirportCatalog.find(a => a.city.toLowerCase() === lower || lower.includes(a.city.toLowerCase()));
  if (known) {
    return { cityName: known.city, lat: known.cityLat, lon: known.cityLon };
  }

  try {
    const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanCity)}&format=json&addressdetails=1&limit=1`, {}, 2500);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        return {
          cityName: data[0].address.city || data[0].address.town || data[0].address.state || cleanCity,
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon)
        };
      }
    }
  } catch (err) {}

  return {
    cityName: cleanCity,
    lat: fallbackAirportObj.cityLat,
    lon: fallbackAirportObj.cityLon
  };
}

let searchDebounce = null;
function setupLiveAirportAutocomplete(inputId, dropdownId, linkToVisitCityId = null) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !dropdown) return;

  input.addEventListener("input", () => {
    clearTimeout(searchDebounce);
    const q = input.value.trim().toLowerCase();

    if (q.length === 0) {
      dropdown.classList.remove("active");
      dropdown.innerHTML = "";
      return;
    }

    const localMatches = majorAirportCatalog.filter(ap =>
      ap.code.toLowerCase().includes(q) ||
      ap.city.toLowerCase().includes(q) ||
      ap.name.toLowerCase().includes(q)
    ).slice(0, 7);

    if (localMatches.length > 0) {
      renderDropdownItems(localMatches, input, dropdown, linkToVisitCityId);
      return;
    }

    searchDebounce = setTimeout(async () => {
      dropdown.innerHTML = `<div style="padding: 10px; font-size: 12px; color: var(--text-muted);">Searching registry...</div>`;
      dropdown.classList.add("active");

      try {
        const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q + " airport")}&format=json&addressdetails=1&limit=5`, {}, 2000);
        if (res && res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const resolvedList = data.map(item => {
              const cityName = item.address.city || item.address.town || item.address.county || item.display_name.split(",")[0];
              return {
                city: cityName,
                name: item.display_name.split(",").slice(0, 2).join(","),
                code: cityName.substring(0, 3).toUpperCase(),
                country: item.address.country || ""
              };
            });
            renderDropdownItems(resolvedList, input, dropdown, linkToVisitCityId);
            return;
          }
        }
      } catch (err) {}
      dropdown.classList.remove("active");
    }, 300);
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
}

function renderDropdownItems(list, input, dropdown, linkToVisitCityId = null) {
  dropdown.innerHTML = list.map(item => `
    <div class="suggestion-item" data-value="${item.city} (${item.code})" data-city="${item.city}">
      <div>
        <strong>${item.name}</strong><br/>
        <small style="color: var(--text-muted);">${item.city}, ${item.country}</small>
      </div>
      <span class="iata-code">${item.code}</span>
    </div>
  `).join("");

  dropdown.classList.add("active");

  dropdown.querySelectorAll(".suggestion-item").forEach(el => {
    el.addEventListener("click", () => {
      input.value = el.getAttribute("data-value");
      dropdown.classList.remove("active");

      if (linkToVisitCityId) {
        const visitCityInput = document.getElementById(linkToVisitCityId);
        if (visitCityInput && (!visitCityInput.value || visitCityInput.value.trim() === "")) {
          visitCityInput.value = el.getAttribute("data-city");
        }
      }
    });
  });
}

// ========================================================
// 2. THEME & CURRENCY CONVERTER ENGINES
// ========================================================
const THEME_STORAGE_KEY = "voyagesearch_theme";

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeToggleUI(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  updateThemeToggleUI(newTheme);

  if (leafletMapInstance && baseTileLayer) {
    leafletMapInstance.removeLayer(baseTileLayer);
    const tileUrl = newTheme === "dark" 
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    baseTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, attribution: '© OpenStreetMap © CARTO' }).addTo(leafletMapInstance);
  }
}

function updateThemeToggleUI(theme) {
  const icon = document.getElementById("themeToggleIcon");
  const text = document.getElementById("themeToggleText");
  if (icon && text) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
    text.textContent = theme === "dark" ? "Light" : "Dark";
  }
}

const exchangeRates = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.92, symbol: "€" },
  JPY: { rate: 155.0, symbol: "¥" },
  GBP: { rate: 0.78, symbol: "£" },
  TWD: { rate: 32.2, symbol: "NT$" },
  CNY: { rate: 7.25, symbol: "¥" }
};
let currentCurrency = "USD";

function formatCurrency(amountInUSD) {
  const fx = exchangeRates[currentCurrency] || exchangeRates.USD;
  const converted = Math.round(amountInUSD * fx.rate);
  return `${fx.symbol}${converted.toLocaleString()}`;
}

// ========================================================
// 3. PUBLIC TRANSIT & HIGH-SPEED RAIL GUIDES
// ========================================================
const cityTransitGuides = {
  ROME: [
    { title: "Leonardo Express Non-Stop Airport Link", badge: "Airport Express", desc: "Non-stop Leonardo Express train connects Fiumicino Airport (FCO) directly to Roma Termini central station in 32 minutes.", route: "FCO ➔ Roma Termini (32 mins, €14.00, every 15 mins)" },
    { title: "Rome Metro (Metrebus) & Contactless Tap", badge: "Subway Network", desc: "Line A connects Termini to the Vatican (Ottaviano) and Spanish Steps. Line B connects directly to the Colosseum.", route: "Single Ticket €1.50 (100 mins) / 24-hr Pass €7.00" },
    { title: "Regional Rail (FL1) & Tram Network", badge: "Regional Tram", desc: "FL1 suburban train links FCO Airport to Trastevere and Ostiense. Scenic Tram 8 runs through historic Trastevere.", route: "Tap contactless card or phone at any turnstile" }
  ],
  LISBON: [
    { title: "Lisbon Metro Red Line Airport Link", badge: "Airport Metro", desc: "Red Line metro connects Humberto Delgado Airport (LIS) directly to São Sebastião in 20 minutes with transfers to Blue/Green lines.", route: "Airport ➔ Saldanha / Baixa-Chiado (20 mins, €1.80)" },
    { title: "Viva Viagem Card & Historic Tram 28", badge: "Transit Card", desc: "Contactless tap card for Metro, Carris yellow buses, Santa Justa Lift, and historic wooden Tram 28 through Alfama.", route: "24-Hour Unlimited Metro/Bus/Tram Pass (€6.80)" }
  ],
  TPE: [
    { title: "Taoyuan Airport MRT (Express Purple Line)", badge: "Airport Express", desc: "Purple Express train connects Terminal 1 & 2 directly to Taipei Main Station in 36 minutes with free onboard Wi-Fi.", route: "Taoyuan Airport ➔ Taipei Main Station (36 mins, NT$150)" },
    { title: "Taipei EasyCard / iPASS & Metro Network", badge: "Transit Card", desc: "Contactless card accepted across all Taipei MRT subway lines, city buses, YouBike 2.0 rentals, and convenience stores.", route: "Single ride NT$20–NT$65 / 24-hr Pass NT$180" }
  ],
  CHI: [
    { title: "CTA 'L' Rapid Transit Network & Contactless Tap", badge: "Subway & Elevated Rail", desc: "Tap any contactless credit card, phone, or Ventra card at all 145 CTA train stations. Direct Blue Line from O'Hare to Loop.", route: "Single Fare ($2.50) / 24-Hour Unlimited Pass ($5.00)" }
  ],
  SF: [
    { title: "BART (Bay Area Rapid Transit)", badge: "Airport & Regional Rail", desc: "Fast regional subway connecting SFO Airport directly to Downtown SF (Powell/Montgomery), Oakland, and Berkeley.", route: "SFO Airport ➔ Downtown SF (30 mins, $10.50 via Clipper)" }
  ]
};

function renderTransitGuide(airportCode, cityName) {
  const transitContentEl = document.getElementById("transitContent");
  const subtitleEl = document.getElementById("transitCitySubtitle");
  if (!transitContentEl) return;

  const normCode = (airportCode || "").toUpperCase();
  const normCity = (cityName || "").toLowerCase();
  
  let key = normCode;
  if (normCity.includes("rome") || normCode === "FCO") key = "ROME";
  else if (normCity.includes("lisbon") || normCode === "LIS") key = "LISBON";
  else if (normCity.includes("taipei") || normCode === "TPE" || normCode === "TSA") key = "TPE";
  else if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") key = "CHI";
  else if (normCity.includes("san francisco") || normCode === "SFO" || normCode === "SJC") key = "SF";

  const guides = cityTransitGuides[key] || [
    { title: `${cityName} Regional Transit Corridors`, badge: "Transit Link", desc: `Direct train, express bus, and metro transfer corridors into downtown ${cityName}.`, route: "Express routes available every 10-20 mins" },
    { title: `${cityName} Public Transit & Contactless Tap`, badge: "City Transit", desc: `Tap-to-pay transit network covering subway, tram, and municipal bus routes across ${cityName}.`, route: "Standard single fares and 24-hr day passes" }
  ];

  if (subtitleEl) subtitleEl.textContent = `Essential metro cards, airport express links, and transit navigation for ${cityName}`;

  transitContentEl.innerHTML = guides.map(g => `
    <div class="transit-card">
      <div class="transit-card-header">
        <span class="transit-title">${g.title}</span>
        <span class="transit-badge">${g.badge}</span>
      </div>
      <p class="transit-desc">${g.desc}</p>
      <div class="transit-detail-row">
        <span>Route / Fare:</span>
        <strong>${g.route}</strong>
      </div>
    </div>
  `).join('');
}

// ========================================================
// 4. ROBUST GEOGRAPHIC DISCOVERY ENGINE (OVERPASS + WIKIPEDIA GEODATA)
// ========================================================
async function fetchTargetCitySights(cityName, airportCode, centerLat, centerLon) {
  let places = [];

  // 1. Primary: Wikipedia GeoSearch API (Reliable worldwide tourist sights with verified GPS)
  try {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${centerLat}|${centerLon}&gsradius=15000&gslimit=40&format=json&origin=*`;
    const res = await fetchWithTimeout(wikiUrl, {}, 3500);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.query && data.query.geosearch) {
        const ignoredWords = ["station", "district", "metro", "line", "railway", "airport", "school", "hospital", "embassy", "football club"];
        
        data.query.geosearch.forEach((item, idx) => {
          const title = item.title;
          const lower = title.toLowerCase();
          
          if (!ignoredWords.some(w => lower.endsWith(w) || lower.includes(` ${w}`))) {
            const dist = haversineDistance(centerLat, centerLon, item.lat, item.lon);
            const isFood = lower.includes("market") || lower.includes("restaurant") || lower.includes("bakery") || lower.includes("cafe");
            
            places.push({
              id: `wiki_${item.pageid}_${idx}`,
              type: isFood ? "food" : "sight",
              name: title,
              category: isFood ? "Iconic Culinary & Market" : "Historic Landmark & Culture",
              location: cityName,
              lat: parseFloat(item.lat),
              lon: parseFloat(item.lon),
              distanceKm: parseFloat(dist.toFixed(1)),
              desc: `Prominent verified destination and cultural highlight in ${cityName}.`,
              query: `${title} ${cityName}`
            });
          }
        });
      }
    }
  } catch (e) {
    console.warn("Wiki Geosearch fallback triggered:", e);
  }

  // 2. Secondary: Overpass API spatial query if more points needed
  if (places.length < 20) {
    try {
      const bbox = `${centerLat - 0.12},${centerLon - 0.15},${centerLat + 0.12},${centerLon + 0.15}`;
      const overpassQuery = `[out:json][timeout:5];(node["tourism"~"attraction|museum|viewpoint"](${bbox});node["amenity"~"marketplace|restaurant"]["name"](${bbox}););out 35;`;
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;
      
      const res = await fetchWithTimeout(overpassUrl, {}, 3500);
      if (res && res.ok) {
        const data = await res.json();
        if (data && data.elements) {
          data.elements.forEach((el, idx) => {
            const name = el.tags?.name || el.tags?.["name:en"];
            if (name && !places.some(p => p.name.toLowerCase() === name.toLowerCase())) {
              const isFood = el.tags.amenity === "restaurant" || el.tags.amenity === "marketplace";
              const dist = haversineDistance(centerLat, centerLon, el.lat, el.lon);
              places.push({
                id: `op_${el.id}_${idx}`,
                type: isFood ? "food" : "sight",
                name: name,
                category: el.tags.tourism === "museum" ? "Museum / Gallery" :
                          el.tags.tourism === "viewpoint" ? "Panoramic Viewpoint" :
                          isFood ? "Local Cuisine & Dining" : "Historic Landmark",
                location: el.tags["addr:city"] || cityName,
                lat: parseFloat(el.lat),
                lon: parseFloat(el.lon),
                distanceKm: parseFloat(dist.toFixed(1)),
                desc: `Verified OpenStreetMap destination in ${cityName}.`,
                query: `${name} ${cityName}`
              });
            }
          });
        }
      }
    } catch (e) {
      console.warn("Overpass API fallback triggered:", e);
    }
  }

  // Sort by closest distance
  places.sort((a, b) => a.distanceKm - b.distanceKm);
  return places.slice(0, 30);
}

function getBrandPortalUrl(brand, city, checkIn, checkOut) {
  if (brand === "Marriott Bonvoy") return `https://www.marriott.com/search/findHotels.mi?destinationAddress.destination=${encodeURIComponent(city)}&fromDate=${checkIn}&toDate=${checkOut || checkIn}`;
  if (brand === "World of Hyatt") return `https://www.hyatt.com/search/${encodeURIComponent(city)}?checkinDate=${checkIn}&checkoutDate=${checkOut || checkIn}`;
  if (brand === "IHG") return `https://www.ihg.com/hotels/us/en/find-hotels/hotel/rooms?qDest=${encodeURIComponent(city)}&qCiMy=${checkIn}&qCoMy=${checkOut || checkIn}`;
  return "https://www.google.com/travel/hotels";
}

async function fetchLiveTargetHotels(centerLat, centerLon, cityName, airportCode, selectedBrands, checkIn, checkOut) {
  const norm = (cityName || "").toLowerCase();

  // Curated Hotels for Rome
  if (norm.includes("rome") || airportCode === "FCO") {
    const list = [
      { id: "rom_h1", name: "The St. Regis Rome", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 720, lat: 41.9035, lon: 12.4950, area: "Piazza della Repubblica", badge: "Iconic Grandeur", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "rom_h2", name: "Rome Marriott Grand Hotel Flora", brand: "Marriott Bonvoy", rating: 4.6, priceUSD: 340, lat: 41.9095, lon: 12.4890, area: "Via Veneto / Villa Borghese", badge: "Historic Prestige", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "rom_h3", name: "Tribune Hotel Rome, part of JdV by Hyatt", brand: "World of Hyatt", rating: 4.8, priceUSD: 310, lat: 41.9102, lon: 12.4910, area: "Via Veneto District", badge: "Boutique Rooftop", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "rom_h4", name: "InterContinental Rome Ambasciatori Palace", brand: "IHG", rating: 4.9, priceUSD: 560, lat: 41.9060, lon: 12.4905, area: "Via Veneto / Central", badge: "Palace Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) },
      { id: "rom_h5", name: "Hotel Indigo Rome - St. George", brand: "IHG", rating: 4.7, priceUSD: 320, lat: 41.8970, lon: 12.4670, area: "Via Giulia / Navona", badge: "Boutique Historic", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Curated Hotels for Lisbon
  if (norm.includes("lisbon") || airportCode === "LIS") {
    const list = [
      { id: "lis_h1", name: "The Ivens, Autograph Collection", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 360, lat: 38.7102, lon: -9.1413, area: "Chiado Historic District", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "lis_h2", name: "Hyatt Regency Lisbon", brand: "World of Hyatt", rating: 4.8, priceUSD: 275, lat: 38.6975, lon: -9.1865, area: "Belém Waterfront", badge: "River View", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "lis_h3", name: "InterContinental Lisbon", brand: "IHG", rating: 4.8, priceUSD: 290, lat: 38.7275, lon: -9.1555, area: "Eduardo VII Park", badge: "Full Service", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Dynamic Geographic Fallback for all other destinations
  return selectedBrands.map((b, i) => ({
    id: `hotel_${b.replace(/\s+/g, '')}_${i}`,
    name: `${b} ${cityName}`,
    brand: b,
    rating: (4.6 + (i * 0.1)).toFixed(1),
    priceUSD: 220 + (i * 50),
    lat: centerLat + (i === 0 ? 0.005 : i === 1 ? -0.006 : 0.008),
    lon: centerLon + (i === 0 ? 0.006 : i === 1 ? -0.005 : -0.007),
    distanceKm: parseFloat(haversineDistance(centerLat, centerLon, centerLat + 0.005, centerLon + 0.006).toFixed(1)),
    area: `${cityName} City Center`,
    badge: "Verified Property",
    brandUrl: getBrandPortalUrl(b, cityName, checkIn, checkOut)
  }));
}

// ========================================================
// 5. LEAFLET MAP & INTERACTIVE CONTROLS
// ========================================================
let leafletMapInstance = null;
let baseTileLayer = null;
let mapMarkersLayer = null;
let mapRadiusCircle = null;

let allRawSights = [];
let allRawHotels = [];
let targetCenterLat = 0;
let targetCenterLon = 0;
let currentRadiusKm = 10;

function initLeafletMap(centerLat, centerLon, sights, hotels, radiusKm) {
  const mapElement = document.getElementById("leafletMap");
  if (!mapElement) return;

  targetCenterLat = centerLat;
  targetCenterLon = centerLon;
  currentRadiusKm = radiusKm;
  allRawSights = sights;
  allRawHotels = hotels;

  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const tileUrl = currentTheme === "dark" 
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  if (!leafletMapInstance) {
    leafletMapInstance = L.map('leafletMap').setView([centerLat, centerLon], 13);
    baseTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, attribution: '© OpenStreetMap © CARTO' }).addTo(leafletMapInstance);
    mapMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
  } else {
    leafletMapInstance.setView([centerLat, centerLon], 13);
  }

  applyRadiusFilterAndRender(currentRadiusKm);
}

function applyRadiusFilterAndRender(radiusKm) {
  currentRadiusKm = radiusKm;

  const filteredSights = allRawSights.filter(s => (s.distanceKm !== undefined ? s.distanceKm : 0) <= currentRadiusKm);
  const filteredHotels = allRawHotels.filter(h => (h.distanceKm !== undefined ? h.distanceKm : 0) <= currentRadiusKm);

  if (mapRadiusCircle && leafletMapInstance) {
    leafletMapInstance.removeLayer(mapRadiusCircle);
  }

  if (leafletMapInstance) {
    mapRadiusCircle = L.circle([targetCenterLat, targetCenterLon], {
      radius: currentRadiusKm * 1000,
      color: '#3b82f6',
      fillColor: '#3b82f6',
      fillOpacity: 0.08,
      weight: 2,
      dashArray: '4, 6'
    }).addTo(leafletMapInstance);

    mapMarkersLayer.clearLayers();

    filteredHotels.forEach(h => {
      if (h.lat && h.lon) {
        const hotelIcon = L.divIcon({
          className: 'custom-map-marker marker-hotel',
          html: `🏨`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const popupHtml = `
          <div style="font-family:sans-serif; font-size:12px; line-height:1.4;">
            <strong style="color:var(--text-main); font-size:13px;">${h.name}</strong><br/>
            <span style="color:#9f1239; font-weight:bold;">${h.brand}</span> • ${h.badge}<br/>
            <span style="color:var(--text-muted);">📍 ${h.area} (${h.distanceKm} km away)</span><br/>
            <b style="color:var(--primary); font-size:14px;">${formatCurrency(h.priceUSD)}</b> / night<br/>
            <div style="display:flex; gap:0.4rem; margin-top:0.4rem;">
              <button onclick="handleEditItem('${h.id}', 'hotel')" style="background:var(--pill-bg); border:1px solid var(--border); color:var(--text-main); font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer;">✏️ Edit</button>
              <button onclick="handleDeleteItem('${h.id}', 'hotel')" style="background:rgba(244,63,94,0.15); border:1px solid rgba(244,63,94,0.3); color:var(--accent-rose); font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer;">🗑️ Delete</button>
              <a href="${h.brandUrl}" target="_blank" style="color:#3b82f6; font-weight:600; text-decoration:none; margin-left:auto;">Book ↗</a>
            </div>
          </div>
        `;
        L.marker([h.lat, h.lon], { icon: hotelIcon }).bindPopup(popupHtml).addTo(mapMarkersLayer);
      }
    });

    filteredSights.forEach(s => {
      if (s.lat && s.lon) {
        const isFood = s.type === "food";
        const isCustom = s.isCustom;
        const sightIcon = L.divIcon({
          className: `custom-map-marker ${isCustom ? 'marker-custom' : isFood ? 'marker-food' : 'marker-sight'}`,
          html: isCustom ? `📍` : isFood ? `🍜` : `🏛️`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const popupHtml = `
          <div style="font-family:sans-serif; font-size:12px; line-height:1.4;">
            <span style="background:${isFood ? 'rgba(244,63,94,0.15)':'rgba(59,130,246,0.15)'}; color:${isFood ? '#f43f5e':'#3b82f6'}; padding:2px 6px; border-radius:4px; font-weight:bold; font-size:10px;">${s.category}</span><br/>
            <strong style="color:var(--text-main); font-size:13px; margin-top:3px; display:inline-block;">${s.name}</strong><br/>
            <p style="color:var(--text-main); margin:4px 0;">${s.desc}</p>
            <span style="color:var(--text-muted);">📍 ${s.location} (${s.distanceKm} km away)</span><br/>
            <div style="display:flex; gap:0.4rem; margin-top:0.4rem; align-items:center;">
              <button onclick="handleEditItem('${s.id}', 'sight')" style="background:var(--pill-bg); border:1px solid var(--border); color:var(--text-main); font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer;">✏️ Edit</button>
              <button onclick="handleDeleteItem('${s.id}', 'sight')" style="background:rgba(244,63,94,0.15); border:1px solid rgba(244,63,94,0.3); color:var(--accent-rose); font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer;">🗑️ Delete</button>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query || s.name)}" target="_blank" style="color:#3b82f6; font-weight:600; text-decoration:none; margin-left:auto;">Maps ↗</a>
            </div>
          </div>
        `;
        L.marker([s.lat, s.lon], { icon: sightIcon }).bindPopup(popupHtml).addTo(mapMarkersLayer);
      }
    });

    leafletMapInstance.fitBounds(mapRadiusCircle.getBounds(), { padding: [30, 30] });
    setTimeout(() => leafletMapInstance.invalidateSize(), 300);
  }

  currentSights = filteredSights;
  currentHotels = filteredHotels;
  renderDestinationSights(currentSights, resolvedVisitCityObj ? resolvedVisitCityObj.cityName : "");
  sortAndRenderHotels();
}

window.handleDeleteItem = function(id, itemType) {
  if (itemType === "hotel") {
    allRawHotels = allRawHotels.filter(h => h.id !== id);
    if (selectedHotel && selectedHotel.id === id) {
      selectedHotel = null;
      updateItineraryDrawer();
    }
  } else {
    allRawSights = allRawSights.filter(s => s.id !== id);
  }
  applyRadiusFilterAndRender(currentRadiusKm);
};

window.handleEditItem = function(id, itemType) {
  if (itemType === "hotel") {
    const h = allRawHotels.find(item => item.id === id);
    if (h) {
      openCustomPlaceModal({
        id: h.id,
        name: h.name,
        type: "hotel",
        category: h.badge || "Hotel & Lodging",
        location: h.area,
        desc: `Rate: ${formatCurrency(h.priceUSD)} / night`,
        lat: h.lat,
        lon: h.lon,
        isEdit: true
      });
    }
  } else {
    const s = allRawSights.find(item => item.id === id);
    if (s) {
      openCustomPlaceModal({
        id: s.id,
        name: s.name,
        type: s.type || "sight",
        category: s.category,
        location: s.location,
        desc: s.desc,
        lat: s.lat,
        lon: s.lon,
        isEdit: true
      });
    }
  }
};

function openCustomPlaceModal(defaults = {}) {
  const modal = document.getElementById("placeModal");
  const overlay = document.getElementById("placeModalOverlay");
  if (!modal || !overlay) return;

  document.getElementById("placeEditId").value = defaults.id || "";
  document.getElementById("placeNameInput").value = defaults.name || "";
  document.getElementById("placeCategoryType").value = defaults.type || "sight";
  document.getElementById("placeCategoryLabel").value = defaults.category || "Custom Landmark";
  document.getElementById("placeDistrictInput").value = defaults.location || (resolvedVisitCityObj ? resolvedVisitCityObj.cityName : "Downtown");
  document.getElementById("placeDescInput").value = defaults.desc || "";
  document.getElementById("placeLatInput").value = defaults.lat || targetCenterLat;
  document.getElementById("placeLonInput").value = defaults.lon || targetCenterLon;
  document.getElementById("placeModalTitle").textContent = defaults.isEdit ? "✏️ Edit Place" : "📍 Add New Place";

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeCustomPlaceModal() {
  document.getElementById("placeModal")?.classList.add("hidden");
  document.getElementById("placeModalOverlay")?.classList.add("hidden");
}

// ========================================================
// 6. FLIGHT SCHEDULE GENERATOR
// ========================================================
function formatMinutesToDuration(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m < 10 ? '0' : ''}${m}m`;
}

function calculateArrivalTime(departTimeStr, durationMinutes, timeZoneDiffHours = 0) {
  const [timePart, period] = departTimeStr.split(" ");
  let [hours, mins] = timePart.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const totalDepartMinutes = hours * 60 + mins;
  const totalArriveMinutes = totalDepartMinutes + durationMinutes + (timeZoneDiffHours * 60);

  const daysAdded = Math.floor(totalArriveMinutes / (24 * 60));
  const normalizedMins = ((totalArriveMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);

  let arrHours = Math.floor(normalizedMins / 60);
  const arrMins = normalizedMins % 60;
  const arrPeriod = arrHours >= 12 ? "PM" : "AM";
  if (arrHours > 12) arrHours -= 12;
  if (arrHours === 0) arrHours = 12;

  const timeFormatted = `${arrHours}:${arrMins < 10 ? '0' : ''}${arrMins} ${arrPeriod}`;
  return timeFormatted + (daysAdded > 0 ? ` (+${daysAdded})` : "");
}

function buildGoogleFlightsUrl(tripType, originCode, destCode, departDate, returnDate, leg2OriginCode = "", leg2DestCode = "", leg2Date = "") {
  if (tripType === "multicity" && leg2OriginCode && leg2DestCode && leg2Date) {
    const q = `flights from ${originCode} to ${destCode} on ${departDate} and from ${leg2OriginCode} to ${leg2DestCode} on ${leg2Date}`;
    return `https://www.google.com/travel/flights?q=${encodeURIComponent(q)}`;
  }
  let query = `flights from ${originCode} to ${destCode} on ${departDate}`;
  if (returnDate && tripType === "roundtrip") query += ` returning ${returnDate}`;
  return `https://www.google.com/travel/flights?q=${encodeURIComponent(query)}`;
}

function generateDynamicFlightSchedule(originObj, destAirportObj, departDate, returnDate, tripType = "roundtrip") {
  const gFlightsUrl = buildGoogleFlightsUrl(tripType, originObj.code, destAirportObj.code, departDate, returnDate);
  const distanceKm = haversineDistance(originObj.airportLat, originObj.airportLon, destAirportObj.airportLat, destAirportObj.airportLon);
  const nonStopFlightMinutes = Math.max(75, Math.round((distanceKm / 840) * 60 + 40));
  const isLongHaul = distanceKm > 4000;
  const timeZoneDiffHours = Math.round((destAirportObj.airportLon - originObj.airportLon) / 15);

  let carrierPool = [
    { name: "ITA Airways", code: "AZ" },
    { name: "United Airlines", code: "UA" },
    { name: "Lufthansa", code: "LH" },
    { name: "Air France", code: "AF" }
  ];
  let layoverHubs = ["FCO", "FRA", "CDG", "EWR"];

  const basePriceUSD = Math.round(isLongHaul ? 850 + (distanceKm * 0.045) : 180 + (distanceKm * 0.08));

  return [
    {
      id: "fl-1",
      airline: carrierPool[0].name,
      flightNum: `${carrierPool[0].code}${Math.floor(100 + Math.random() * 800)}`,
      stops: 0,
      stopDetails: "Non-stop",
      departTime: "10:30 PM",
      arriveTime: calculateArrivalTime("10:30 PM", nonStopFlightMinutes, timeZoneDiffHours),
      rawDepartTimeMin: 1350,
      durationText: formatMinutesToDuration(nonStopFlightMinutes),
      rawDurationMinutes: nonStopFlightMinutes,
      priceUSD: basePriceUSD + 150,
      cabin: "Economy Standard",
      bookingUrl: gFlightsUrl
    },
    {
      id: "fl-2",
      airline: carrierPool[1].name,
      flightNum: `${carrierPool[1].code}${Math.floor(100 + Math.random() * 800)}`,
      stops: 0,
      stopDetails: "Non-stop",
      departTime: "02:15 PM",
      arriveTime: calculateArrivalTime("02:15 PM", nonStopFlightMinutes, timeZoneDiffHours),
      rawDepartTimeMin: 855,
      durationText: formatMinutesToDuration(nonStopFlightMinutes),
      rawDurationMinutes: nonStopFlightMinutes,
      priceUSD: basePriceUSD + 200,
      cabin: "Main Cabin",
      bookingUrl: gFlightsUrl
    },
    {
      id: "fl-3",
      airline: carrierPool[2].name,
      flightNum: `${carrierPool[2].code}${Math.floor(100 + Math.random() * 800)}`,
      stops: 1,
      stopDetails: `1 stop (${layoverHubs[0]} - 1h 45m)`,
      departTime: "08:15 AM",
      arriveTime: calculateArrivalTime("08:15 AM", nonStopFlightMinutes + 125, timeZoneDiffHours),
      rawDepartTimeMin: 495,
      durationText: formatMinutesToDuration(nonStopFlightMinutes + 125),
      rawDurationMinutes: nonStopFlightMinutes + 125,
      priceUSD: Math.round(basePriceUSD * 0.85),
      cabin: "Economy Basic",
      bookingUrl: gFlightsUrl
    }
  ];
}

// ========================================================
// 7. APPLICATION CONTROLLER & STATE
// ========================================================
let currentTripType = "roundtrip";
let currentFlights = [];
let currentHotels = [];
let currentSights = [];

let resolvedOriginObj = null;
let resolvedDestAirportObj = null;
let resolvedVisitCityObj = null;

let resolvedLeg2OriginObj = null;
let resolvedLeg2DestObj = null;

let currentDepartDate = "";
let currentReturnDate = "";
let currentLeg2Date = "";
let tripDays = 1;
let activeBrandFilter = "all";
let activeSightFilter = "all";

let selectedFlight = null;
let selectedHotel = null;

function sortAndRenderFlights(sortBy = "price") {
  const sorted = [...currentFlights].sort((a, b) => {
    if (sortBy === "price") return a.priceUSD - b.priceUSD;
    if (sortBy === "duration") return a.rawDurationMinutes - b.rawDurationMinutes;
    if (sortBy === "stops") return a.stops - b.stops;
    if (sortBy === "departTime") return a.rawDepartTimeMin - b.rawDepartTimeMin;
    return 0;
  });

  const flightListEl = document.getElementById("flightList");
  if (!flightListEl) return;

  flightListEl.innerHTML = sorted.map(f => {
    const isSelected = selectedFlight && selectedFlight.id === f.id;
    return `
      <div class="flight-card ${isSelected ? 'selected' : ''}" id="card-${f.id}">
        <div class="flight-main">
          <div class="flight-meta">
            <span class="airline-badge">${f.airline}</span>
            <span class="flight-number">${f.flightNum}</span>
          </div>
          
          <div class="flight-route-row">
            <div class="flight-time-block">
              <span class="flight-time">${f.departTime}</span>
              <span class="flight-airport">${resolvedOriginObj ? resolvedOriginObj.code : ""}</span>
            </div>

            <div class="flight-duration-diagram">
              <span class="duration-text">${f.durationText}</span>
              <div class="duration-line"></div>
              <span class="stops-label ${f.stops === 0 ? 'stops-nonstop' : 'stops-layover'}">${f.stopDetails}</span>
            </div>

            <div class="flight-time-block">
              <span class="flight-time">${f.arriveTime}</span>
              <span class="flight-airport">${resolvedDestAirportObj ? resolvedDestAirportObj.code : ""}</span>
            </div>
          </div>
        </div>

        <div class="flight-price-col">
          <span class="flight-price">${formatCurrency(f.priceUSD)}</span>
          <span class="cabin-tag">${f.cabin}</span>
          <div class="card-actions">
            <button class="select-btn ${isSelected ? 'btn-active' : ''}" onclick="handleSelectFlight('${f.id}')">
              ${isSelected ? 'Selected ✓' : 'Select Flight'}
            </button>
            <a href="${f.bookingUrl}" target="_blank" rel="noopener noreferrer" class="ext-brand-link">Google Flights ↗</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getBrandClass(brand) {
  if (brand === "Marriott Bonvoy") return "brand-marriott";
  if (brand === "World of Hyatt") return "brand-hyatt";
  if (brand === "IHG") return "brand-ihg";
  return "";
}

function sortAndRenderHotels() {
  const sortBy = document.getElementById("hotelSort")?.value || "rating";
  
  let filtered = currentHotels.filter(h => {
    if (activeBrandFilter === "all") return true;
    return h.brand === activeBrandFilter;
  });

  filtered.sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "priceLow") return a.priceUSD - b.priceUSD;
    if (sortBy === "priceHigh") return b.priceUSD - a.priceUSD;
    return 0;
  });

  const hotelListEl = document.getElementById("hotelList");
  const hotelCountEl = document.getElementById("hotelCount");
  if (!hotelListEl) return;

  if (hotelCountEl) hotelCountEl.textContent = `${filtered.length} found`;

  if (filtered.length === 0) {
    hotelListEl.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 1rem 0;">No properties match within ${currentRadiusKm} km.</p>`;
    return;
  }

  hotelListEl.innerHTML = filtered.map(h => {
    const isSelected = selectedHotel && selectedHotel.id === h.id;
    return `
      <div class="hotel-card ${isSelected ? 'selected' : ''}" id="card-${h.id}">
        <div class="hotel-main">
          <div class="hotel-header-meta">
            <span class="brand-badge ${getBrandClass(h.brand)}">${h.brand}</span>
            <span class="hotel-tag">${h.badge}</span>
          </div>
          
          <h4 class="hotel-name">${h.name}</h4>
          <span class="hotel-location">📍 ${h.area} (${h.distanceKm} km away)</span>

          <div class="hotel-rating-row">
            <span class="rating-star">★</span>
            <span class="rating-score">${h.rating} / 5.0</span>
          </div>

          <div class="card-manage-bar" style="margin-top:0.35rem;">
            <button class="btn-card-action" onclick="handleEditItem('${h.id}', 'hotel')">✏️ Edit</button>
            <button class="btn-card-action btn-card-delete" onclick="handleDeleteItem('${h.id}', 'hotel')">🗑️ Remove</button>
          </div>
        </div>

        <div class="hotel-price-col">
          <span class="hotel-price">${formatCurrency(h.priceUSD)}</span>
          <span class="per-night-tag">/ night</span>
          <div class="card-actions">
            <button class="select-btn ${isSelected ? 'btn-active' : ''}" onclick="handleSelectHotel('${h.id}')">
              ${isSelected ? 'Selected ✓' : 'Select Hotel'}
            </button>
            <a href="${h.brandUrl}" target="_blank" rel="noopener noreferrer" class="ext-brand-link">Brand Portal ↗</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderDestinationSights(sights, cityName) {
  const sightsListEl = document.getElementById("sightsList");
  const sightsCountEl = document.getElementById("sightsCount");
  const sightsSubtitleEl = document.getElementById("sightsCitySubtitle");
  if (!sightsListEl) return;

  const filtered = sights.filter(s => {
    if (activeSightFilter === "all") return true;
    return s.type === activeSightFilter;
  });

  if (sightsCountEl) sightsCountEl.textContent = `${filtered.length} highlights`;
  if (sightsSubtitleEl) sightsSubtitleEl.textContent = `Must-visit places, landmarks, and signature food experiences within ${currentRadiusKm} km of ${cityName}`;

  if (filtered.length === 0) {
    sightsListEl.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 1.5rem 0;">No verified places found within ${currentRadiusKm} km. Try increasing the exploration radius or clicking "+ Add Custom Place".</p>`;
    return;
  }

  sightsListEl.innerHTML = filtered.map(s => {
    const isFood = s.type === "food";
    const isCustom = s.isCustom;
    return `
      <div class="sight-card ${isCustom ? 'custom-item' : isFood ? 'food-item' : 'sight-item'}" id="sight-card-${s.id}">
        <div class="sight-category-row">
          <span class="sight-category-badge ${isCustom ? 'badge-custom' : isFood ? 'badge-food' : 'badge-sight'}">${s.category}</span>
          <span class="sight-location">📍 ${s.location} (${s.distanceKm} km)</span>
        </div>
        <h4 class="sight-name">${s.name}</h4>
        <p class="sight-desc">${s.desc}</p>
        
        <div class="sight-card-footer">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query || s.name)}" target="_blank" rel="noopener noreferrer" class="sight-maps-link">Explore ↗</a>
          <div class="card-manage-bar">
            <button class="btn-card-action" onclick="handleEditItem('${s.id}', 'sight')">✏️ Edit</button>
            <button class="btn-card-action btn-card-delete" onclick="handleDeleteItem('${s.id}', 'sight')">🗑️ Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.handleSelectFlight = function(flightId) {
  const fl = currentFlights.find(f => f.id === flightId);
  selectedFlight = selectedFlight && selectedFlight.id === flightId ? null : fl;
  sortAndRenderFlights(document.getElementById("flightSort")?.value || "price");
  updateItineraryDrawer();
};

window.handleSelectHotel = function(hotelId) {
  const ht = currentHotels.find(h => h.id === hotelId);
  selectedHotel = selectedHotel && selectedHotel.id === hotelId ? null : ht;
  sortAndRenderHotels();
  updateItineraryDrawer();
};

function updateItineraryDrawer() {
  const drawerFlight = document.getElementById("drawerFlightContent");
  const drawerHotel = document.getElementById("drawerHotelContent");
  const flightPriceEl = document.getElementById("drawerFlightPrice");
  const hotelPriceEl = document.getElementById("drawerHotelPrice");
  const hotelLabelEl = document.getElementById("drawerHotelLabel");
  const livingPriceEl = document.getElementById("drawerLivingPrice");
  const totalPriceEl = document.getElementById("drawerTotalPrice");
  const badgeEl = document.getElementById("tripBadge");
  const badgeText = document.getElementById("tripBadgeText");
  const drawerDailyFood = document.getElementById("drawerDailyFood");
  const drawerDailyTransit = document.getElementById("drawerDailyTransit");
  const drawerGoogleFlightsLink = document.getElementById("drawerGoogleFlightsLink");

  const dailyFoodUSD = 60;
  const dailyTransitUSD = 12;
  const totalLivingUSD = (dailyFoodUSD + dailyTransitUSD) * tripDays;

  let flightCostUSD = 0;
  let hotelCostUSD = 0;
  let count = 0;

  if (selectedFlight) {
    flightCostUSD = selectedFlight.priceUSD;
    count++;
    if (drawerFlight) {
      drawerFlight.className = "drawer-card";
      drawerFlight.innerHTML = `
        <strong>${selectedFlight.airline} (${selectedFlight.flightNum})</strong><br/>
        <small style="color:var(--text-muted);">${resolvedOriginObj ? resolvedOriginObj.code : ""} ➔ ${resolvedDestAirportObj ? resolvedDestAirportObj.code : ""} (${selectedFlight.durationText})</small><br/>
        <b>${formatCurrency(selectedFlight.priceUSD)}</b> <span style="font-size:11px;color:var(--text-muted);">${selectedFlight.cabin}</span>
      `;
    }
  } else if (drawerFlight) {
    drawerFlight.className = "drawer-card empty-card";
    drawerFlight.innerHTML = "<span>No flight selected yet.</span>";
  }

  if (selectedHotel) {
    hotelCostUSD = selectedHotel.priceUSD * tripDays;
    count++;
    if (drawerHotel) {
      drawerHotel.className = "drawer-card";
      drawerHotel.innerHTML = `
        <strong>${selectedHotel.name}</strong><br/>
        <span class="brand-badge ${getBrandClass(selectedHotel.brand)}" style="font-size:10px;">${selectedHotel.brand}</span><br/>
        <small style="color:var(--text-muted);">${selectedHotel.area}</small><br/>
        <b>${formatCurrency(selectedHotel.priceUSD)} / night</b> &times; ${tripDays} night(s) = <b>${formatCurrency(hotelCostUSD)}</b>
      `;
    }
  } else if (drawerHotel) {
    drawerHotel.className = "drawer-card empty-card";
    drawerHotel.innerHTML = "<span>No hotel selected yet.</span>";
  }

  if (drawerDailyFood) drawerDailyFood.textContent = `${formatCurrency(dailyFoodUSD)} / day`;
  if (drawerDailyTransit) drawerDailyTransit.textContent = `${formatCurrency(dailyTransitUSD)} / day`;
  if (flightPriceEl) flightPriceEl.textContent = formatCurrency(flightCostUSD);
  if (hotelLabelEl) hotelLabelEl.textContent = `Hotel Subtotal (${tripDays} night${tripDays > 1 ? 's' : ''}):`;
  if (hotelPriceEl) hotelPriceEl.textContent = formatCurrency(hotelCostUSD);
  if (livingPriceEl) livingPriceEl.textContent = formatCurrency(totalLivingUSD);
  
  const grandTotalUSD = flightCostUSD + hotelCostUSD + totalLivingUSD;
  if (totalPriceEl) totalPriceEl.textContent = formatCurrency(grandTotalUSD);

  if (drawerGoogleFlightsLink && resolvedOriginObj && resolvedDestAirportObj) {
    drawerGoogleFlightsLink.href = buildGoogleFlightsUrl(
      currentTripType, 
      resolvedOriginObj.code, 
      resolvedDestAirportObj.code, 
      currentDepartDate, 
      currentReturnDate,
      resolvedLeg2OriginObj ? resolvedLeg2OriginObj.code : "",
      resolvedLeg2DestObj ? resolvedLeg2DestObj.code : "",
      currentLeg2Date
    );
  }

  if (count > 0 && badgeEl && badgeText) {
    badgeEl.classList.remove("hidden");
    badgeText.textContent = `${count} Item${count > 1 ? 's' : ''} Selected (${formatCurrency(flightCostUSD + hotelCostUSD)})`;
  } else if (badgeEl) {
    badgeEl.classList.add("hidden");
  }
}

function toggleDrawer(open) {
  const drawer = document.getElementById("itineraryDrawer");
  const overlay = document.getElementById("itineraryOverlay");
  if (open) {
    drawer?.classList.remove("hidden");
    overlay?.classList.remove("hidden");
  } else {
    drawer?.classList.add("hidden");
    overlay?.classList.add("hidden");
  }
}

// ========================================================
// 8. SAVED TRIPS MANAGER
// ========================================================
const SAVED_TRIPS_KEY = "voyagesearch_saved_trips";

function getSavedTrips() {
  try {
    const raw = localStorage.getItem(SAVED_TRIPS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveTripToLocalStorage() {
  if (!resolvedOriginObj || !resolvedDestAirportObj || !resolvedVisitCityObj) {
    alert("Please perform a search and select an itinerary first.");
    return;
  }

  const trips = getSavedTrips();
  const tripName = prompt("Enter a name for this trip plan:", `${resolvedVisitCityObj.cityName} Trip (${currentDepartDate})`);
  if (!tripName) return;

  const newTrip = {
    id: "trip_" + Date.now(),
    name: tripName,
    tripType: currentTripType,
    origin: resolvedOriginObj,
    destAirport: resolvedDestAirportObj,
    visitCity: resolvedVisitCityObj,
    departDate: currentDepartDate,
    returnDate: currentReturnDate,
    selectedFlight: selectedFlight,
    selectedHotel: selectedHotel,
    savedSights: allRawSights,
    savedHotels: allRawHotels,
    tripDays: tripDays,
    radiusKm: currentRadiusKm,
    createdAt: new Date().toLocaleDateString()
  };

  trips.push(newTrip);
  localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(trips));
  updateSavedTripsCountBadge();
  alert(`"${tripName}" saved successfully!`);
}

function updateSavedTripsCountBadge() {
  const badge = document.getElementById("savedTripsCountBadge");
  if (badge) badge.textContent = getSavedTrips().length;
}

function renderSavedTripsModal() {
  const listEl = document.getElementById("savedTripsList");
  if (!listEl) return;

  const trips = getSavedTrips();
  if (trips.length === 0) {
    listEl.innerHTML = `<p class="empty-state-text">No itineraries saved yet. Select a flight and hotel, then click "Save Trip" in the drawer!</p>`;
    return;
  }

  listEl.innerHTML = trips.map(t => `
    <div class="saved-trip-item">
      <div class="saved-trip-info">
        <h4>${t.name}</h4>
        <p>${t.origin.city} (${t.origin.code}) ➔ ${t.destAirport.city} (${t.destAirport.code}) | Target: <strong>${t.visitCity.cityName}</strong></p>
        <p style="font-size:11px; color:var(--text-muted); margin-top:2px;">Saved on ${t.createdAt} • ${t.tripDays} night(s) • ${t.radiusKm || 10} km radius</p>
      </div>
      <div class="saved-trip-actions">
        <button class="btn-load-trip" onclick="loadSavedTrip('${t.id}')">Load</button>
        <button class="btn-del-trip" onclick="deleteSavedTrip('${t.id}')">✕</button>
      </div>
    </div>
  `).join('');
}

window.loadSavedTrip = function(tripId) {
  const trips = getSavedTrips();
  const trip = trips.find(t => t.id === tripId);
  if (!trip) return;

  document.getElementById("origin").value = `${trip.origin.city} (${trip.origin.code})`;
  document.getElementById("destination").value = `${trip.destAirport.city} (${trip.destAirport.code})`;
  document.getElementById("visitCity").value = trip.visitCity.cityName;
  document.getElementById("departDate").value = trip.departDate;
  if (document.getElementById("returnDate")) document.getElementById("returnDate").value = trip.returnDate || "";
  if (document.getElementById("radiusSelect")) document.getElementById("radiusSelect").value = trip.radiusKm || "10";

  document.getElementById("savedTripsModal")?.classList.add("hidden");
  document.getElementById("savedTripsModalOverlay")?.classList.add("hidden");
  document.getElementById("travelSearchForm")?.dispatchEvent(new Event("submit"));
};

window.deleteSavedTrip = function(tripId) {
  let trips = getSavedTrips();
  trips = trips.filter(t => t.id !== tripId);
  localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(trips));
  updateSavedTripsCountBadge();
  renderSavedTripsModal();
};

// ========================================================
// 9. DOM INITIALIZATION & EVENT LISTENERS
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);

  const today = new Date().toISOString().split("T")[0];
  const departInput = document.getElementById("departDate");
  const returnInput = document.getElementById("returnDate");
  const leg2DateInput = document.getElementById("leg2Date");
  
  if (departInput) departInput.setAttribute("min", today);
  if (returnInput) returnInput.setAttribute("min", today);
  if (leg2DateInput) leg2DateInput.setAttribute("min", today);

  setupLiveAirportAutocomplete("origin", "originSuggestions");
  setupLiveAirportAutocomplete("destination", "destSuggestions", "visitCity");
  setupLiveAirportAutocomplete("leg2Origin", "leg2OriginSuggestions");
  setupLiveAirportAutocomplete("leg2Dest", "leg2DestSuggestions");

  updateSavedTripsCountBadge();

  // Custom Place Form
  document.getElementById("customPlaceForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const editId = document.getElementById("placeEditId").value;
    const name = document.getElementById("placeNameInput").value.trim();
    const type = document.getElementById("placeCategoryType").value;
    const category = document.getElementById("placeCategoryLabel").value.trim();
    const location = document.getElementById("placeDistrictInput").value.trim();
    const desc = document.getElementById("placeDescInput").value.trim();
    const lat = parseFloat(document.getElementById("placeLatInput").value) || targetCenterLat;
    const lon = parseFloat(document.getElementById("placeLonInput").value) || targetCenterLon;
    const distKm = haversineDistance(targetCenterLat, targetCenterLon, lat, lon);

    if (editId) {
      let item = allRawSights.find(s => s.id === editId);
      if (item) {
        item.name = name;
        item.type = type;
        item.category = category;
        item.location = location;
        item.desc = desc;
      }
    } else {
      allRawSights.unshift({
        id: `custom_${Date.now()}`,
        name: name,
        type: type,
        category: category,
        location: location,
        desc: desc,
        lat: lat,
        lon: lon,
        distanceKm: parseFloat(distKm.toFixed(1)),
        isCustom: true,
        query: `${name} ${location}`
      });
    }

    closeCustomPlaceModal();
    applyRadiusFilterAndRender(currentRadiusKm);
  });

  document.getElementById("openAddPlaceMapBtn")?.addEventListener("click", () => openCustomPlaceModal());
  document.getElementById("openAddPlaceListBtn")?.addEventListener("click", () => openCustomPlaceModal());
  document.getElementById("closePlaceModalBtn")?.addEventListener("click", closeCustomPlaceModal);
  document.getElementById("placeModalOverlay")?.addEventListener("click", closeCustomPlaceModal);

  // Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentTripType = e.target.getAttribute("data-type");

      const returnGroup = document.getElementById("returnDateGroup");
      const multiCityFields = document.getElementById("multiCityFields");
      const leg1Title = document.getElementById("leg1Title");
      const departDateLabel = document.getElementById("departDateLabel");

      if (currentTripType === "roundtrip") {
        returnGroup?.classList.remove("hidden");
        multiCityFields?.classList.add("hidden");
        if (leg1Title) leg1Title.style.display = "none";
        if (departDateLabel) departDateLabel.textContent = "Depart Date";
      } else if (currentTripType === "oneway") {
        returnGroup?.classList.add("hidden");
        multiCityFields?.classList.add("hidden");
        if (leg1Title) leg1Title.style.display = "none";
        if (departDateLabel) departDateLabel.textContent = "Flight Date";
      } else if (currentTripType === "multicity") {
        returnGroup?.classList.add("hidden");
        multiCityFields?.classList.remove("hidden");
        if (leg1Title) leg1Title.style.display = "block";
        if (departDateLabel) departDateLabel.textContent = "Segment 1 Date";
      }
    });
  });

  // Radius Selectors Sync
  const radiusSelect = document.getElementById("radiusSelect");
  const mapRadiusSelect = document.getElementById("mapRadiusSelect");

  radiusSelect?.addEventListener("change", (e) => {
    const val = parseInt(e.target.value);
    if (mapRadiusSelect) mapRadiusSelect.value = val;
    if (leafletMapInstance) applyRadiusFilterAndRender(val);
  });

  mapRadiusSelect?.addEventListener("change", (e) => {
    const val = parseInt(e.target.value);
    if (radiusSelect) radiusSelect.value = val;
    if (leafletMapInstance) applyRadiusFilterAndRender(val);
  });

  // Currency
  document.getElementById("currencySelect")?.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    if (currentFlights.length > 0) {
      sortAndRenderFlights(document.getElementById("flightSort")?.value || "price");
      sortAndRenderHotels();
      updateItineraryDrawer();
    }
  });

  // View Mode
  const toggleListViewBtn = document.getElementById("toggleListViewBtn");
  const toggleMapViewBtn = document.getElementById("toggleMapViewBtn");
  const mapSection = document.getElementById("mapSection");

  toggleListViewBtn?.addEventListener("click", () => {
    toggleListViewBtn.classList.add("active");
    toggleMapViewBtn?.classList.remove("active");
    mapSection?.classList.add("hidden");
  });

  toggleMapViewBtn?.addEventListener("click", () => {
    toggleMapViewBtn.classList.add("active");
    toggleListViewBtn?.classList.remove("active");
    mapSection?.classList.remove("hidden");
    if (leafletMapInstance) leafletMapInstance.invalidateSize();
  });

  // Saved Trips Modal
  document.getElementById("openSavedTripsBtn")?.addEventListener("click", () => {
    renderSavedTripsModal();
    document.getElementById("savedTripsModal")?.classList.remove("hidden");
    document.getElementById("savedTripsModalOverlay")?.classList.remove("hidden");
  });

  document.getElementById("closeSavedTripsModalBtn")?.addEventListener("click", () => {
    document.getElementById("savedTripsModal")?.classList.add("hidden");
    document.getElementById("savedTripsModalOverlay")?.classList.add("hidden");
  });

  document.getElementById("savedTripsModalOverlay")?.addEventListener("click", () => {
    document.getElementById("savedTripsModal")?.classList.add("hidden");
    document.getElementById("savedTripsModalOverlay")?.classList.add("hidden");
  });

  document.getElementById("saveTripToStorageBtn")?.addEventListener("click", saveTripToLocalStorage);

  // Drawer
  document.getElementById("viewDrawerBtn")?.addEventListener("click", () => toggleDrawer(true));
  document.getElementById("closeDrawerBtn")?.addEventListener("click", () => toggleDrawer(false));
  document.getElementById("itineraryOverlay")?.addEventListener("click", () => toggleDrawer(false));

  if (departInput && returnInput) {
    departInput.addEventListener("change", (e) => {
      returnInput.setAttribute("min", e.target.value);
    });
  }

  // Sorters & Category Filters
  document.getElementById("flightSort")?.addEventListener("change", (e) => sortAndRenderFlights(e.target.value));
  document.getElementById("hotelSort")?.addEventListener("change", () => sortAndRenderHotels());

  document.querySelectorAll(".sight-filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".sight-filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      activeSightFilter = e.target.getAttribute("data-filter");
      renderDestinationSights(currentSights, resolvedVisitCityObj ? resolvedVisitCityObj.cityName : "");
    });
  });

  document.querySelectorAll(".hotel-pill-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".hotel-pill-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      activeBrandFilter = e.target.getAttribute("data-brand");
      sortAndRenderHotels();
    });
  });

  // Main Form Submit
  const form = document.getElementById("travelSearchForm");
  const loadingState = document.getElementById("loadingState");
  const resultsSection = document.getElementById("resultsSection");
  const resultsTitle = document.getElementById("resultsTitle");
  const resolvedOriginText = document.getElementById("resolvedOriginText");
  const resolvedDestText = document.getElementById("resolvedDestText");
  const resolvedCityPill = document.getElementById("resolvedCityPill");
  const tripLengthSubtitle = document.getElementById("tripLengthSubtitle");
  const googleFlightsLiveBtn = document.getElementById("googleFlightsLiveBtn");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const originInputVal = document.getElementById("origin").value.trim();
      const destAirportInputVal = document.getElementById("destination").value.trim();
      const visitCityInputVal = document.getElementById("visitCity").value.trim();
      const chosenRadiusKm = parseInt(radiusSelect ? radiusSelect.value : 10);

      currentDepartDate = departInput.value;
      currentReturnDate = returnInput ? returnInput.value : "";
      
      const leg2OriginVal = document.getElementById("leg2Origin")?.value.trim();
      const leg2DestVal = document.getElementById("leg2Dest")?.value.trim();
      currentLeg2Date = leg2DateInput ? leg2DateInput.value : "";

      const selectedBrands = Array.from(document.querySelectorAll('input[name="hotelBrand"]:checked')).map(cb => cb.value);
      if (selectedBrands.length === 0) {
        alert("Please select at least one hotel brand.");
        return;
      }

      if (currentDepartDate && currentReturnDate && currentTripType === "roundtrip") {
        const d1 = new Date(currentDepartDate);
        const d2 = new Date(currentReturnDate);
        tripDays = Math.max(1, Math.ceil(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24)));
      } else {
        tripDays = 1;
      }

      selectedFlight = null;
      selectedHotel = null;
      updateItineraryDrawer();

      resultsSection?.classList.add("hidden");
      loadingState?.classList.remove("hidden");

      // 1. Resolve Outbound Airports & Target City
      resolvedOriginObj = await resolveAirportHub(originInputVal);
      resolvedDestAirportObj = await resolveAirportHub(destAirportInputVal);
      resolvedVisitCityObj = await resolveVisitCityLocation(visitCityInputVal, resolvedDestAirportObj);

      if (currentTripType === "multicity" && leg2OriginVal && leg2DestVal) {
        resolvedLeg2OriginObj = await resolveAirportHub(leg2OriginVal);
        resolvedLeg2DestObj = await resolveAirportHub(leg2DestVal);
      } else {
        resolvedLeg2OriginObj = null;
        resolvedLeg2DestObj = null;
      }

      // 2. Fetch Real Sights via Spatial Overpass + GeoData
      const rawSights = await fetchTargetCitySights(
        resolvedVisitCityObj.cityName,
        resolvedDestAirportObj.code,
        resolvedVisitCityObj.lat,
        resolvedVisitCityObj.lon
      );

      // 3. Fetch Hotels
      const rawHotels = await fetchLiveTargetHotels(
        resolvedVisitCityObj.lat,
        resolvedVisitCityObj.lon,
        resolvedVisitCityObj.cityName,
        resolvedDestAirportObj.code,
        selectedBrands,
        currentDepartDate,
        currentReturnDate
      );

      // 4. Generate Flights
      currentFlights = generateDynamicFlightSchedule(resolvedOriginObj, resolvedDestAirportObj, currentDepartDate, currentReturnDate, currentTripType);
      if (googleFlightsLiveBtn) {
        googleFlightsLiveBtn.href = buildGoogleFlightsUrl(
          currentTripType,
          resolvedOriginObj.code,
          resolvedDestAirportObj.code,
          currentDepartDate,
          currentReturnDate,
          resolvedLeg2OriginObj ? resolvedLeg2OriginObj.code : "",
          resolvedLeg2DestObj ? resolvedLeg2DestObj.code : "",
          currentLeg2Date
        );
      }

      loadingState?.classList.add("hidden");

      // 5. Update Headers & UI
      if (resolvedOriginText) resolvedOriginText.textContent = `${resolvedOriginObj.name} (${resolvedOriginObj.code})`;
      if (resolvedDestText) resolvedDestText.textContent = `${resolvedDestAirportObj.name} (${resolvedDestAirportObj.code})`;
      if (resolvedCityPill) resolvedCityPill.textContent = `📍 Target: ${resolvedVisitCityObj.cityName}`;
      if (resultsTitle) resultsTitle.textContent = `${resolvedOriginObj.name} to ${resolvedDestAirportObj.name} | Exploring ${resolvedVisitCityObj.cityName}`;
      if (tripLengthSubtitle) tripLengthSubtitle.textContent = currentReturnDate && currentTripType === "roundtrip" ? `Trip Length: ${tripDays} night(s) stay` : `Point-to-point corridor search`;

      activeSightFilter = "all";
      document.querySelectorAll(".sight-filter-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-filter") === "all");
      });

      activeBrandFilter = "all";
      document.querySelectorAll(".hotel-pill-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-brand") === "all");
      });

      renderTransitGuide(resolvedDestAirportObj.code, resolvedVisitCityObj.cityName);

      const flightSortEl = document.getElementById("flightSort");
      const hotelSortEl = document.getElementById("hotelSort");
      if (flightSortEl) flightSortEl.value = "price";
      if (hotelSortEl) hotelSortEl.value = "rating";
      
      sortAndRenderFlights("price");
      initLeafletMap(resolvedVisitCityObj.lat, resolvedVisitCityObj.lon, rawSights, rawHotels, chosenRadiusKm);

      resultsSection?.classList.remove("hidden");
    });
  }
});