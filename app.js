// ========================================================
// 1. GLOBAL AIRPORT & DOWNTOWN DIRECTORY
// ========================================================
const majorAirportCatalog = [
  // United States
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States", airportLat: 37.6213, airportLon: -122.3790, cityLat: 37.7749, cityLon: -122.4194 },
  { code: "SJC", name: "San José Mineta International", city: "San Jose", country: "United States", airportLat: 37.3639, airportLon: -121.9289, cityLat: 37.3382, cityLon: -121.8863 },
  { code: "OAK", name: "Oakland San Francisco Bay", city: "Oakland", country: "United States", airportLat: 37.7213, airportLon: -122.2207, cityLat: 37.8044, cityLon: -122.2711 },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "United States", airportLat: 33.9416, airportLon: -118.4085, cityLat: 34.0522, cityLon: -118.2437 },
  { code: "SAN", name: "San Diego International", city: "San Diego", country: "United States", airportLat: 32.7338, airportLon: -117.1933, cityLat: 32.7157, cityLon: -117.1611 },
  { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", country: "United States", airportLat: 47.4502, airportLon: -122.3088, cityLat: 47.6062, cityLon: -122.3321 },
  { code: "LAS", name: "Harry Reid International", city: "Las Vegas", country: "United States", airportLat: 36.0840, airportLon: -115.1537, cityLat: 36.1147, cityLon: -115.1728 },
  { code: "HNL", name: "Daniel K. Inouye International", city: "Honolulu", country: "United States", airportLat: 21.3245, airportLon: -157.9251, cityLat: 21.2766, cityLon: -157.8283 },
  { code: "ORD", name: "Chicago O'Hare International", city: "Chicago", country: "United States", airportLat: 41.9742, airportLon: -87.9073, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "MDW", name: "Chicago Midway International", city: "Chicago", country: "United States", airportLat: 41.7868, airportLon: -87.7522, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "AUS", name: "Austin-Bergstrom International", city: "Austin", country: "United States", airportLat: 30.1975, airportLon: -97.6664, cityLat: 30.2672, cityLon: -97.7431 },
  { code: "MSY", name: "Louis Armstrong New Orleans", city: "New Orleans", country: "United States", airportLat: 29.9934, airportLon: -90.2580, cityLat: 29.9511, cityLon: -90.0715 },
  { code: "MIA", name: "Miami International", city: "Miami", country: "United States", airportLat: 25.7959, airportLon: -80.2870, cityLat: 25.7617, cityLon: -80.1918 },
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "United States", airportLat: 40.6413, airportLon: -73.7781, cityLat: 40.7580, cityLon: -73.9855 },
  { code: "EWR", name: "Newark Liberty International", city: "Newark / New York", country: "United States", airportLat: 40.6895, airportLon: -74.1745, cityLat: 40.7357, cityLon: -74.1724 },
  { code: "LGA", name: "LaGuardia Airport", city: "New York", country: "United States", airportLat: 40.7769, airportLon: -73.8740, cityLat: 40.7580, cityLon: -73.9855 },
  { code: "BOS", name: "Boston Logan International", city: "Boston", country: "United States", airportLat: 42.3656, airportLon: -71.0096, cityLat: 42.3601, cityLon: -71.0589 },
  { code: "IAD", name: "Washington Dulles International", city: "Washington D.C.", country: "United States", airportLat: 38.9531, airportLon: -77.4565, cityLat: 38.9072, cityLon: -77.0369 },
  { code: "DCA", name: "Ronald Reagan Washington National", city: "Washington D.C.", country: "United States", airportLat: 38.8512, airportLon: -77.0402, cityLat: 38.9072, cityLon: -77.0369 },

  // Canada
  { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada", airportLat: 49.1967, airportLon: -123.1815, cityLat: 49.2827, cityLon: -123.1207 },
  { code: "YYZ", name: "Toronto Pearson International", city: "Toronto", country: "Canada", airportLat: 43.6777, airportLon: -79.6248, cityLat: 43.6532, cityLon: -79.3832 },
  { code: "YTZ", name: "Billy Bishop Toronto City Airport", city: "Toronto", country: "Canada", airportLat: 43.6275, airportLon: -79.3962, cityLat: 43.6532, cityLon: -79.3832 },
  { code: "YUL", name: "Montréal-Trudeau International", city: "Montreal", country: "Canada", airportLat: 45.4657, airportLon: -73.7455, cityLat: 45.5017, cityLon: -73.5673 },

  // Europe & Asia
  { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom", airportLat: 51.4700, airportLon: -0.4543, cityLat: 51.5074, cityLon: -0.1278 },
  { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France", airportLat: 49.0097, airportLon: 2.5479, cityLat: 48.8566, cityLon: 2.3522 },
  { code: "FCO", name: "Rome Fiumicino Leonardo da Vinci", city: "Rome", country: "Italy", airportLat: 41.8003, airportLon: 12.2389, cityLat: 41.9028, cityLon: 12.4964 },
  { code: "BCN", name: "Barcelona-El Prat", city: "Barcelona", country: "Spain", airportLat: 41.2974, airportLon: 2.0833, cityLat: 41.3874, cityLon: 2.1686 },
  { code: "MAD", name: "Adolfo Suárez Madrid-Barajas", city: "Madrid", country: "Spain", airportLat: 40.4839, airportLon: -3.5680, cityLat: 40.4168, cityLon: -3.7038 },
  { code: "LIS", name: "Humberto Delgado Airport (Lisbon)", city: "Lisbon", country: "Portugal", airportLat: 38.7742, airportLon: -9.1342, cityLat: 38.7223, cityLon: -9.1393 },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands", airportLat: 52.3105, airportLon: 4.7683, cityLat: 52.3676, cityLon: 4.9041 },
  { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan", airportLat: 25.0797, airportLon: 121.2342, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "TSA", name: "Taipei Songshan Airport", city: "Taipei", country: "Taiwan", airportLat: 25.0697, airportLon: 121.5525, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "HND", name: "Tokyo Haneda", city: "Tokyo", country: "Japan", airportLat: 35.5494, airportLon: 139.7798, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "NRT", name: "Tokyo Narita", city: "Tokyo", country: "Japan", airportLat: 35.7720, airportLon: 140.3929, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "KIX", name: "Kansai International (Kyoto/Osaka)", city: "Kyoto / Osaka", country: "Japan", airportLat: 34.4320, airportLon: 135.2304, cityLat: 35.0116, cityLon: 135.7681 },
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong", airportLat: 22.3080, airportLon: 113.9185, cityLat: 22.2855, cityLon: 114.1577 }
];

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
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
    airportLat: 37.7749,
    airportLon: -122.4194,
    cityLat: 37.7749,
    cityLon: -122.4194
  };
}

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
    ).slice(0, 8);

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
  CAD: { rate: 1.36, symbol: "CA$" },
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
const cityTransitGuidesMaster = {
  VANCOUVER: [
    { title: "TransLink SkyTrain (Canada Line)", badge: "Airport Express", desc: "Canada Line rapid transit connects YVR Airport directly to Downtown Vancouver (Waterfront Station) in 25 minutes.", route: "YVR ➔ Downtown (25 mins, CA$4.55 + $5 YVR AddFare)" },
    { title: "Compass Card & SeaBus Harbor Link", badge: "Transit Card", desc: "Contactless tap on all SkyTrain lines, city buses, and the scenic 12-minute SeaBus crossing to Lonsdale Quay North Vancouver.", route: "1-Day All-Zone Pass (CA$11.25)" }
  ],
  TORONTO: [
    { title: "UP Express (Union Pearson Express)", badge: "Airport Train", desc: "Dedicated express train connecting Pearson Airport Terminal 1 directly to downtown Union Station in 25 minutes with onboard Wi-Fi.", route: "Pearson ➔ Union Station (25 mins, CA$12.35 / Tap PRESTO)" },
    { title: "TTC Subway & Streetcar Network", badge: "Transit System", desc: "Tap any contactless credit card or PRESTO across TTC Line 1/2 subways and historic downtown 504/510 streetcars.", route: "Single Fare (CA$3.35, 2-Hour Transfer Window)" }
  ],
  MONTREAL: [
    { title: "STM 747 Express Airport Shuttle", badge: "24/7 Airport Link", desc: "24/7 dedicated shuttle bus running from YUL Airport directly to Lionel-Groulx and Berri-UQAM metro stations in downtown Montreal.", route: "YUL ➔ Downtown (45 mins, CA$11.00)" },
    { title: "STM Métro & Opus Card", badge: "Rubber-Tired Metro", desc: "Fast, quiet rubber-tired subway system covering Green and Orange downtown lines, Old Montreal, and Mount Royal.", route: "Unlimited Weekend Pass (CA$15.25)" }
  ],
  ROME: [
    { title: "Leonardo Express Non-Stop Airport Link", badge: "Airport Express", desc: "Non-stop Leonardo Express train connects Fiumicino Airport (FCO) directly to Roma Termini central station in 32 minutes.", route: "FCO ➔ Roma Termini (32 mins, €14.00, every 15 mins)" },
    { title: "Rome Metro (Metrebus) & Contactless Tap", badge: "Subway Network", desc: "Line A connects Termini to the Vatican (Ottaviano) and Spanish Steps. Line B connects directly to the Colosseum.", route: "Single Ticket €1.50 (100 mins) / 24-hr Pass €7.00" }
  ],
  LISBON: [
    { title: "Lisbon Metro Red Line Airport Link", badge: "Airport Metro", desc: "Red Line metro connects Humberto Delgado Airport (LIS) directly to São Sebastião in 20 minutes with transfers to Blue/Green lines.", route: "Airport ➔ Saldanha / Baixa-Chiado (20 mins, €1.80)" },
    { title: "Viva Viagem Card & Historic Tram 28", badge: "Transit Card", desc: "Contactless tap card for Metro, Carris yellow buses, Santa Justa Lift, and historic wooden Tram 28 through Alfama.", route: "24-Hour Unlimited Metro/Bus/Tram Pass (€6.80)" }
  ],
  CHI: [
    { title: "CTA 'L' Rapid Transit Network & Contactless Tap", badge: "Subway & Elevated Rail", desc: "Tap any contactless credit card, phone, or Ventra card at all 145 CTA train stations. Direct Blue Line from O'Hare to Loop.", route: "Single Fare ($2.50) / 24-Hour Unlimited Pass ($5.00)" }
  ],
  TPE: [
    { title: "Taoyuan Airport MRT (Express Purple Line)", badge: "Airport Express", desc: "Purple Express train connects Terminal 1 & 2 directly to Taipei Main Station in 36 minutes with free onboard Wi-Fi.", route: "Taoyuan Airport ➔ Taipei Main Station (36 mins, NT$150)" },
    { title: "Taipei EasyCard / iPASS & Metro Network", badge: "Transit Card", desc: "Contactless card accepted across all Taipei MRT subway lines, city buses, YouBike 2.0 rentals, and convenience stores.", route: "Single ride NT$20–NT$65 / 24-hr Pass NT$180" }
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
  if (normCity.includes("vancouver") || normCode === "YVR") key = "VANCOUVER";
  else if (normCity.includes("toronto") || normCode === "YYZ" || normCode === "YTZ") key = "TORONTO";
  else if (normCity.includes("montreal") || normCode === "YUL") key = "MONTREAL";
  else if (normCity.includes("rome") || normCode === "FCO") key = "ROME";
  else if (normCity.includes("lisbon") || normCode === "LIS") key = "LISBON";
  else if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") key = "CHI";
  else if (normCity.includes("taipei") || normCode === "TPE" || normCode === "TSA") key = "TPE";
  else if (normCity.includes("san francisco") || normCode === "SFO" || normCode === "SJC") key = "SF";

  const guides = cityTransitGuidesMaster[key] || [
    { title: `${cityName} Regional Transit Corridors`, badge: "Transit Link", desc: `Direct train, express bus, and metro transfer corridors into downtown ${cityName}.`, route: "Express routes available every 10-20 mins" },
    { title: `${cityName} Contactless Public Transit`, badge: "City Transit", desc: `Tap-to-pay transit network covering subway, tram, and municipal bus routes across ${cityName}.`, route: "Standard single fares and 24-hr day passes" }
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
// 4. MASTER CURATED CATALOG (20+ VERIFIED ITEMS PER CITY)
// ========================================================
const MASTER_CURATED_CATALOG = {
  // 1. CHICAGO (22 Verified Items)
  CHI: [
    { id: "chi_1", type: "sight", name: "Millennium Park & Cloud Gate ('The Bean')", category: "Iconic Landmark", location: "Downtown Loop", lat: 41.8826, lon: -87.6226, desc: "World-famous polished steel sculpture reflecting Chicago's skyline, Lurie Garden, and Crown Fountain.", query: "Cloud Gate Millennium Park Chicago" },
    { id: "chi_2", type: "sight", name: "The Art Institute of Chicago", category: "World-Class Museum", location: "Michigan Avenue", lat: 41.8796, lon: -87.6237, desc: "Over 300,000 works of art featuring Seurat's Grand Jatte, Edward Hopper's Nighthawks, and Impressionist galleries.", query: "Art Institute of Chicago" },
    { id: "chi_3", type: "sight", name: "Chicago Architecture Center River Cruise", category: "Architecture Cruise", location: "Chicago Riverwalk", lat: 41.8887, lon: -87.6244, desc: "90-minute docent-led boat cruise through the canyon of skyscrapers along the Chicago River.", query: "Chicago Architecture Center River Cruise" },
    { id: "chi_4", type: "sight", name: "Willis Tower Skydeck & 'The Ledge'", category: "Observation Deck", location: "Financial District", lat: 41.8789, lon: -87.6359, desc: "103rd-floor glass boxes extending 4.3 feet out over the street with sweeping 4-state views.", query: "Skydeck Chicago Willis Tower" },
    { id: "chi_5", type: "sight", name: "360 CHICAGO Observation Deck & TILT", category: "Panoramic Viewpoint", location: "Magnificent Mile", lat: 41.8988, lon: -87.6229, desc: "94th-floor observation deck with moving glass platform tilting visitors 30 degrees over Michigan Avenue.", query: "360 CHICAGO Observation Deck" },
    { id: "chi_6", type: "sight", name: "The Field Museum of Natural History", category: "Natural History Museum", location: "Museum Campus", lat: 41.8663, lon: -87.6170, desc: "Home to 'Sue' the T. rex, ancient Egyptian tombs, and gemstone halls on the lakefront.", query: "Field Museum Chicago" },
    { id: "chi_7", type: "sight", name: "Shedd Aquarium & Oceanarium", category: "Marine Sanctuary", location: "Museum Campus", lat: 41.8676, lon: -87.6140, desc: "Historic 1930 lakefront aquarium housing beluga whales, Caribbean coral reefs, and sea otters.", query: "Shedd Aquarium Chicago" },
    { id: "chi_8", type: "sight", name: "Adler Planetarium & Skyline View", category: "Astronomy & Lakefront", location: "Museum Campus", lat: 41.8663, lon: -87.6068, desc: "America's first planetarium situated on Northerly Island offering the iconic postcard skyline view.", query: "Adler Planetarium Chicago" },
    { id: "chi_9", type: "sight", name: "Navy Pier & Centennial Wheel", category: "Waterfront Destination", location: "Streeterville", lat: 41.8917, lon: -87.6086, desc: "Lakefront pier featuring a 200-foot Ferris wheel, Shakespeare Theater, and boat tours.", query: "Navy Pier Chicago" },
    { id: "chi_10", type: "sight", name: "Wrigley Field Historic Ballpark", category: "Sports Heritage", location: "Wrigleyville", lat: 41.9484, lon: -87.6553, desc: "Legendary 1914 home of the Chicago Cubs with ivy-covered brick walls and rooftop bleachers.", query: "Wrigley Field Chicago" },
    { id: "chi_11", type: "sight", name: "Chicago Cultural Center (Tiffany Dome)", category: "Architectural Marvel", location: "Loop", lat: 41.8837, lon: -87.6248, desc: "Magnificent 1897 public palace featuring the world's largest stained glass Tiffany dome.", query: "Chicago Cultural Center Tiffany Dome" },
    { id: "chi_12", type: "sight", name: "Garfield Park Conservatory", category: "Botanical Oasis", location: "Garfield Park", lat: 41.8863, lon: -87.7171, desc: "One of the largest botanical conservatories in the country with tropical flora under glass.", query: "Garfield Park Conservatory Chicago" },
    { id: "chi_13", type: "sight", name: "Frank Lloyd Wright Home & Studio", category: "Historic Architecture", location: "Oak Park", lat: 41.8940, lon: -87.7983, desc: "Birthplace of the American Prairie School architectural style in historic Oak Park.", query: "Frank Lloyd Wright Home Oak Park" },
    { id: "chi_14", type: "sight", name: "Museum of Science and Industry", category: "Interactive Museum", location: "Hyde Park", lat: 41.7906, lon: -87.5830, desc: "Housed in the 1893 World's Fair palace, featuring a German U-505 submarine and coal mine.", query: "Museum of Science and Industry Chicago" },
    { id: "chi_15", type: "food", name: "Pequod's Pizza (Caramelized Crust Deep Dish)", category: "Legendary Deep Dish", location: "Lincoln Park", lat: 41.9219, lon: -87.6644, desc: "World-famous deep-dish pan pizza with a halo of dark caramelized crispy cheddar cheese crust.", query: "Pequods Pizza Chicago" },
    { id: "chi_16", type: "food", name: "Lou Malnati's Pizzeria (Buttercrust Deep Dish)", category: "Classic Deep Dish", location: "River North", lat: 41.8903, lon: -87.6338, desc: "Iconic Chicago buttercrust deep-dish loaded with vine-ripened tomatoes and mozzarella.", query: "Lou Malnatis Pizzeria River North" },
    { id: "chi_17", type: "food", name: "Portillo's (Chicago Hot Dogs & Cake Shake)", category: "Iconic Street Food", location: "River North", lat: 41.8935, lon: -87.6318, desc: "All-beef frankfurter dragged through the garden, Italian beef, and chocolate cake shakes.", query: "Portillos Hot Dogs Ontario Chicago" },
    { id: "chi_18", type: "food", name: "Al's #1 Italian Beef (Since 1938)", category: "Historic Italian Beef", location: "Little Italy (Taylor St)", lat: 41.8698, lon: -87.6540, desc: "Thinly sliced roast beef soaked in au jus on French bread with spicy giardiniera.", query: "Als Italian Beef Taylor Street" },
    { id: "chi_19", type: "food", name: "Garrett Popcorn Shops (Garrett Mix)", category: "Iconic Snack", location: "Michigan Avenue", lat: 41.8966, lon: -87.6241, desc: "Batch-cooked blend of sweet CaramelCrisp and savory sharp CheddarCraft popcorn.", query: "Garrett Popcorn Michigan Ave Chicago" },
    { id: "chi_20", type: "food", name: "The Original Rainbow Cone (Since 1926)", category: "Historic Dessert", location: "Navy Pier / Beverly", lat: 41.8915, lon: -87.6080, desc: "Five sliced layers of chocolate, strawberry, Palmer House, pistachio, and orange sherbet.", query: "Original Rainbow Cone Navy Pier" },
    { id: "chi_21", type: "food", name: "MingHin Cuisine & Chinatown Square", category: "Cantonese Dim Sum", location: "Chinatown", lat: 41.8533, lon: -87.6329, desc: "Michelin Bib Gourmand dim sum palace serving steamed dumplings and barbecue pork buns.", query: "MingHin Cuisine Chinatown Chicago" },
    { id: "chi_22", type: "food", name: "Green Mill Cocktail Lounge (Historic Jazz)", category: "Historic Jazz Lounge", location: "Uptown", lat: 41.9691, lon: -87.6599, desc: "Historic 1907 cocktail lounge once patronized by Al Capone, hosting live jazz nightly.", query: "Green Mill Jazz Lounge Chicago" }
  ],

  // 2. TAIPEI (21 Verified Items)
  TPE: [
    { id: "tpe_1", type: "sight", name: "Taipei 101 & Skyline Observatory", category: "Iconic Skyscraper", location: "Xinyi District", lat: 25.0339, lon: 121.5645, desc: "508-meter engineering marvel featuring the world's fastest elevators and 360-degree views.", query: "Taipei 101 Observatory" },
    { id: "tpe_2", type: "sight", name: "National Palace Museum (Imperial Treasures)", category: "World-Class Museum", location: "Shilin District", lat: 25.1024, lon: 121.5485, desc: "Houses nearly 700,000 ancient Chinese imperial artifacts, including the Jadeite Cabbage.", query: "National Palace Museum Taipei" },
    { id: "tpe_3", type: "sight", name: "Chiang Kai-shek Memorial Hall", category: "Monumental Architecture", location: "Zhongzheng District", lat: 25.0347, lon: 121.5218, desc: "Grand white-marble hall with blue-tiled octagonal roof and hourly ceremonial guard change.", query: "Chiang Kai-shek Memorial Hall" },
    { id: "tpe_4", type: "sight", name: "Longshan Temple & Bopiliao Block", category: "Historic Temple Heritage", location: "Wanhua District", lat: 25.0370, lon: 121.4999, desc: "Historic 1738 Buddhist-Taoist sanctuary with intricate dragon carvings and Qing-era alleys.", query: "Longshan Temple Taipei" },
    { id: "tpe_5", type: "sight", name: "Xiangshan (Elephant Mountain) Trail", category: "Scenic Viewpoint Hike", location: "Xinyi District", lat: 25.0274, lon: 121.5706, desc: "Steep 20-minute stone staircase hike leading to iconic photo boulders overlooking Taipei 101.", query: "Elephant Mountain Hiking Trail" },
    { id: "tpe_6", type: "sight", name: "Beitou Thermal Valley & Hot Springs", category: "Thermal Spring Oasis", location: "Beitou District", lat: 25.1378, lon: 121.5074, desc: "Steaming geothermal emerald-sulfur pool and historic 1913 Japanese bathhouse museum.", query: "Beitou Thermal Valley" },
    { id: "tpe_7", type: "sight", name: "Tamsui Old Street & Fisherman's Wharf", category: "Waterfront Sunset", location: "Tamsui Waterfront", lat: 25.1764, lon: 121.4326, desc: "Coastal boardwalk famous for golden sunsets over the Taiwan Strait and Lovers Bridge.", query: "Tamsui Fisherman's Wharf" },
    { id: "tpe_8", type: "sight", name: "Jiufen Mountain Village & Tea Houses", category: "Historic Mountain Village", location: "Ruifang District", lat: 25.1099, lon: 121.8452, desc: "Misty mountain gold-mining village with lantern-lit narrow staircases and tea houses.", query: "Jiufen Old Street Taiwan" },
    { id: "tpe_9", type: "sight", name: "Shifen Waterfall & Sky Lantern Street", category: "Scenic Waterfall", location: "Pingxi District", lat: 25.0494, lon: 121.7876, desc: "The 'Little Niagara of Taiwan' paired with railway tracks where visitors launch sky lanterns.", query: "Shifen Waterfall Pingxi" },
    { id: "tpe_10", type: "sight", name: "Yehliu Geopark & Queen's Head Rock", category: "Geological Marvel", location: "Wanli / North Coast", lat: 25.2064, lon: 121.6905, desc: "Coastal promontory eroded into otherworldly hoodoo rock formations resembling Queen's Head.", query: "Yehliu Geopark" },
    { id: "tpe_11", type: "sight", name: "Songshan Cultural & Creative Park", category: "Creative Arts Hub", location: "Xinyi / Songshan", lat: 25.0440, lon: 121.5607, desc: "Former 1937 Japanese tobacco factory transformed into open green design studios and craft cafes.", query: "Songshan Cultural Park" },
    { id: "tpe_12", type: "sight", name: "Maokong Gondola & Tea Plantations", category: "Scenic Cable Car", location: "Wenshan District", lat: 24.9680, lon: 121.5880, desc: "Glass-bottom crystal cabin gondola ride to hillside Tieguanyin tea houses.", query: "Maokong Gondola Taipei" },
    { id: "tpe_13", type: "food", name: "Din Tai Fung Flagship (Xiao Long Bao)", category: "World-Famous Dumplings", location: "Xinyi / Dongmen", lat: 25.0338, lon: 121.5300, desc: "Michelin-recognized 18-fold steamed pork soup dumplings, truffle dumplings, and fried rice.", query: "Din Tai Fung Xinyi Flagship" },
    { id: "tpe_14", type: "food", name: "Raohe Street Night Market (Pepper Buns)", category: "Legendary Night Market", location: "Songshan District", lat: 25.0509, lon: 121.5775, desc: "Vibrant market renowned for wood-fired crispy black pepper pork buns and herbal pork ribs.", query: "Raohe Street Night Market" },
    { id: "tpe_15", type: "food", name: "Shilin Night Market (Giant Fried Chicken)", category: "Mega Food Market", location: "Shilin District", lat: 25.0879, lon: 121.5241, desc: "Taipei's largest night market packed with sizzling hot star chicken cutlets and oyster omelets.", query: "Shilin Night Market Taipei" },
    { id: "tpe_16", type: "food", name: "Ningxia Night Market (Taro Balls)", category: "Artisan Night Market", location: "Datong District", lat: 25.0558, lon: 121.5152, desc: "Foodies' favorite night market famous for crispy deep-fried taro balls and braised pork rice.", query: "Ningxia Night Market Taipei" },
    { id: "tpe_17", type: "food", name: "Fu Hang Soy Milk (Michelin Bib Gourmand)", category: "Historic Breakfast", location: "Huashan Market", lat: 25.0442, lon: 121.5248, desc: "Beloved breakfast spot baking fresh thick flatbreads with eggs, You Tiao, and savory soy milk.", query: "Fu Hang Soy Milk Taipei" },
    { id: "tpe_18", type: "food", name: "Yongkang Beef Noodles (Sichuan Broth)", category: "Signature Beef Noodle", location: "Dongmen", lat: 25.0329, lon: 121.5298, desc: "Tender beef shank and tendon simmered in rich spicy chili-bean broth with springy noodles.", query: "Yongkang Beef Noodles Taipei" },
    { id: "tpe_19", type: "food", name: "Ay-Chung Flour-Rice Noodle", category: "Iconic Street Food", location: "Ximending", lat: 25.0433, lon: 121.5076, desc: "Standing-room-only stall serving silky thin noodles in bonito broth with braised intestine.", query: "Ay-Chung Flour-Rice Noodle Ximending" },
    { id: "tpe_20", type: "food", name: "Addiction Aquatic Development", category: "Gourmet Seafood Market", location: "Zhongshan District", lat: 25.0667, lon: 121.5369, desc: "Upscale fish market with live king crab tanks, standing sushi counters, and charcoal grills.", query: "Addiction Aquatic Development Taipei" },
    { id: "tpe_21", type: "food", name: "Smoothie House (Mango Shaved Ice)", category: "Summer Dessert", location: "Yongkang Street", lat: 25.0331, lon: 121.5295, desc: "Fluffy snowflake shaved ice loaded with fresh sweet Irwin mangoes and condensed milk.", query: "Smoothie House Yongkang Taipei" }
  ],

  // 3. ROME (20 Verified Items)
  ROME: [
    { id: "rom_1", type: "sight", name: "The Colosseum & Roman Forum", category: "Ancient World Wonder", location: "Piazza del Colosseo", lat: 41.8902, lon: 12.4922, desc: "Nearly 2,000-year-old stone amphitheater where gladiators fought, paired with the ancient civic center.", query: "Colosseum Rome" },
    { id: "rom_2", type: "sight", name: "Pantheon & Piazza della Rotonda", category: "Ancient Architectural Wonder", location: "Central Historic District", lat: 41.8986, lon: 12.4769, desc: "Best-preserved Roman monument featuring an open oculus dome of unreinforced concrete.", query: "Pantheon Rome" },
    { id: "rom_3", type: "sight", name: "Trevi Fountain & Spanish Steps", category: "Baroque Monument", location: "Piazza di Trevi", lat: 41.9009, lon: 12.4833, desc: "Monumental Baroque fountain fed by ancient aqueducts where tossing a coin ensures your return.", query: "Trevi Fountain Rome" },
    { id: "rom_4", type: "sight", name: "Vatican Museums & St. Peter's Basilica", category: "Papal Art & Basilica", location: "Vatican City", lat: 41.9065, lon: 12.4536, desc: "Michelangelo's Sistine Chapel ceiling, Raphael Rooms, and the grandest Renaissance basilica.", query: "Vatican Museums Sistine Chapel" },
    { id: "rom_5", type: "sight", name: "Castel Sant'Angelo & Bridge", category: "Historic Castle", location: "Parco Adriano", lat: 41.9031, lon: 12.4663, desc: "Hadrian's cylindrical mausoleum connected to the Vatican by a fortified passage.", query: "Castel Sant Angelo Rome" },
    { id: "rom_6", type: "sight", name: "Piazza Navona & Fountains", category: "Baroque Piazza", location: "Navona District", lat: 41.8992, lon: 12.4731, desc: "Lively elongated piazza built over Roman stadium grounds, famous for Bernini's fountains.", query: "Piazza Navona Rome" },
    { id: "rom_7", type: "sight", name: "Borghese Gallery and Gardens", category: "Art Museum & Villa Park", location: "Villa Borghese", lat: 41.9142, lon: 12.4922, desc: "Exquisite art gallery housing masterworks by Caravaggio, Bernini, and Raphael.", query: "Borghese Gallery Rome" },
    { id: "rom_8", type: "sight", name: "Trastevere Historic Quarter", category: "Historic Neighborhood", location: "Trastevere", lat: 41.8894, lon: 12.4692, desc: "Charming ivy-draped cobblestone alleys filled with artisan trattorias and medieval churches.", query: "Trastevere Rome" },
    { id: "rom_9", type: "sight", name: "Campo de' Fiori Market", category: "Historic Street Market", location: "Campo de' Fiori", lat: 41.8955, lon: 12.4722, desc: "Bustling daytime market square selling flowers, produce, and spices.", query: "Campo de Fiori Rome" },
    { id: "rom_10", type: "sight", name: "Piazza del Popolo & Terrazza Pincio", category: "Panoramic Viewpoint", location: "Flaminio", lat: 41.9119, lon: 12.4764, desc: "Neoclassical square with obelisk and hilltop terrace overlooking Rome's rooftops.", query: "Piazza del Popolo Rome" },
    { id: "rom_11", type: "sight", name: "Palatine Hill & Imperial Palaces", category: "Archaeological Ruin", location: "Roman Forum", lat: 41.8881, lon: 12.4878, desc: "The centermost hill of Rome with majestic ruins of ancient imperial palaces.", query: "Palatine Hill Rome" },
    { id: "rom_12", type: "sight", name: "Circus Maximus & Aventine Keyhole", category: "Ancient Stadium & Viewpoint", location: "Aventine Hill", lat: 41.8864, lon: 12.4850, desc: "Ancient chariot racing stadium paired with the famous keyhole framing St. Peter's dome.", query: "Aventine Keyhole Rome" },
    { id: "rom_13", type: "sight", name: "Bocca della Verità (Mouth of Truth)", category: "Historic Marble Mask", location: "Piazza Bocca della Verità", lat: 41.8881, lon: 12.4819, desc: "Ancient marble mask carved in the likeness of the ocean god.", query: "Mouth of Truth Rome" },
    { id: "rom_14", type: "food", name: "Roscioli Salumeria (Carbonara)", category: "Iconic Roman Pasta", location: "Campo de' Fiori", lat: 41.8941, lon: 12.4735, desc: "Legendary deli-restaurant renowned across Italy for silky Spaghetti alla Carbonara.", query: "Roscioli Rome" },
    { id: "rom_15", type: "food", name: "Da Enzo al 29 (Cacio e Pepe)", category: "Traditional Trattoria", location: "Trastevere", lat: 41.8876, lon: 12.4784, desc: "Beloved trattoria serving crispy fried artichokes, cacio e pepe, and tiramisu.", query: "Da Enzo al 29 Trastevere Rome" },
    { id: "rom_16", type: "food", name: "Pompi Tiramisù", category: "Artisan Dessert", location: "Piazza di Spagna", lat: 41.9058, lon: 12.4828, desc: "The classic destination for coffee-soaked mascarpone tiramisù.", query: "Pompi Tiramisu Rome" },
    { id: "rom_17", type: "food", name: "Bonci Pizzarium (Gourmet Pizza Slices)", category: "Gourmet Pizza", location: "Prati", lat: 41.9122, lon: 12.4455, desc: "Gabriele Bonci's world-famous bakery serving innovative pizza al taglio by weight.", query: "Bonci Pizzarium Rome" },
    { id: "rom_18", type: "food", name: "Antico Forno Roscioli", category: "Historic Bakery", location: "Via dei Chiavari", lat: 41.8945, lon: 12.4738, desc: "Centuries-old bakery baking fresh pizza bianca stuffed with mortadella.", query: "Antico Forno Roscioli Rome" },
    { id: "rom_19", type: "food", name: "Sergio al Palatino", category: "Classic Roman Dining", location: "Colosseum Area", lat: 41.8883, lon: 12.4901, desc: "Family-run trattoria steps from the Colosseum serving homemade amatriciana.", query: "Sergio al Palatino Rome" },
    { id: "rom_20", type: "food", name: "Giolitti Gelateria (Since 1900)", category: "Historic Gelato", location: "Pantheon Area", lat: 41.8991, lon: 12.4788, desc: "Rome's oldest and most famous gelateria serving artisanal gelato with fresh panna.", query: "Giolitti Gelato Rome" }
  ],

  // 4. LISBON (20 Verified Items)
  LISBON: [
    { id: "lis_1", type: "sight", name: "Torre de Belém (Belém Tower)", category: "UNESCO World Heritage", location: "Belém Waterfront", lat: 38.6916, lon: -9.2160, desc: "16th-century Manueline fortified tower on the Tagus River marking Portugal's Age of Discovery.", query: "Belem Tower Lisbon" },
    { id: "lis_2", type: "sight", name: "Mosteiro dos Jerónimos", category: "Manueline Masterpiece", location: "Belém", lat: 38.6979, lon: -9.2067, desc: "Monumental monastery with carved limestone cloisters and the tomb of Vasco da Gama.", query: "Jeronimos Monastery Lisbon" },
    { id: "lis_3", type: "sight", name: "Castelo de São Jorge", category: "Moorish Fortress", location: "Alfama Hilltop", lat: 38.7139, lon: -9.1335, desc: "11th-century hilltop citadel with fortified ramparts offering 360-degree panoramic views.", query: "Castelo de Sao Jorge Lisbon" },
    { id: "lis_4", type: "sight", name: "Praça do Comércio & Triumph Arch", category: "Monumental Waterfront Plaza", location: "Baixa", lat: 38.7075, lon: -9.1364, desc: "Grand yellow-arcaded square facing the river with bronze statue of King José I.", query: "Praca do Comercio Lisbon" },
    { id: "lis_5", type: "sight", name: "Elevador de Santa Justa", category: "Historic Lift", location: "Baixa / Chiado", lat: 38.7121, lon: -9.1394, desc: "1902 wrought-iron vertical lift connecting downtown Baixa to higher Carmo square.", query: "Santa Justa Lift Lisbon" },
    { id: "lis_6", type: "sight", name: "Miradouro de Santa Luzia", category: "Scenic Tile Terrace", location: "Alfama", lat: 38.7116, lon: -9.1303, desc: "Bougainvillea-covered terrace decorated with azulejo tiles overlooking terracotta roofs.", query: "Miradouro de Santa Luzia Lisbon" },
    { id: "lis_7", type: "sight", name: "Historic Tram 28 Route", category: "Historic Yellow Tram", location: "Alfama / Chiado", lat: 38.7153, lon: -9.1360, desc: "Vintage 1930s yellow tram rattling through Lisbon's steepest cobblestone alleys.", query: "Tram 28 Lisbon" },
    { id: "lis_8", type: "sight", name: "Padrão dos Descobrimentos", category: "Monumental Sculpture", location: "Belém Waterfront", lat: 38.6936, lon: -9.2057, desc: "52-meter carved monument shaped like a ship's prow honoring Portuguese explorers.", query: "Padrao dos Descobrimentos Lisbon" },
    { id: "lis_9", type: "sight", name: "Carmo Convent Ruins", category: "Gothic Ruins", location: "Chiado", lat: 38.7122, lon: -9.1403, desc: "Haunting roofless Gothic cathedral ruins preserved from the 1755 earthquake.", query: "Carmo Convent Lisbon" },
    { id: "lis_10", type: "sight", name: "Museu Nacional do Azulejo (Tile Museum)", category: "Decorative Art", location: "Xabregas", lat: 38.7246, lon: -9.1141, desc: "Displays five centuries of magnificent hand-painted glazed ceramic tile murals.", query: "National Tile Museum Lisbon" },
    { id: "lis_11", type: "sight", name: "Oceanário de Lisboa", category: "World-Class Aquarium", location: "Parque das Nações", lat: 38.7635, lon: -9.0937, desc: "Massive 5-million-liter ocean tank holding sunfish, sharks, rays, and sea otters.", query: "Oceanario de Lisboa" },
    { id: "lis_12", type: "sight", name: "Pena Palace & Quinta da Regaleira", category: "Fairytale Castle", location: "Sintra Mountains", lat: 38.7876, lon: -9.3906, desc: "Vibrant yellow-and-red Romanticist castle perched atop the Sintra mountains.", query: "Pena Palace Sintra" },
    { id: "lis_13", type: "sight", name: "Cabo da Roca (Westernmost Europe)", category: "Coastal Landmark", location: "Cascais Coast", lat: 38.7804, lon: -9.4989, desc: "Dramatic 140-meter ocean cliffs marking the westernmost point of continental Europe.", query: "Cabo da Roca Portugal" },
    { id: "lis_14", type: "food", name: "Pastéis de Belém (Since 1837)", category: "Original Custard Tart", location: "Rua de Belém", lat: 38.6975, lon: -9.2032, desc: "Baking the original secret recipe: warm crispy puff pastry filled with egg custard and cinnamon.", query: "Pasteis de Belem" },
    { id: "lis_15", type: "food", name: "Time Out Market Lisboa", category: "Gourmet Food Hall", location: "Cais do Sodré", lat: 38.7071, lon: -9.1460, desc: "Curated food stalls by Portugal's top chefs, seafood counters, and wine bars.", query: "Time Out Market Lisbon" },
    { id: "lis_16", type: "food", name: "Cervejaria Ramiro (Seafood Institution)", category: "Seafood Dining", location: "Intendente", lat: 38.7206, lon: -9.1351, desc: "Famous for giant tiger prawns grilled in butter, barnacles, crab, and prego steak sandwiches.", query: "Cervejaria Ramiro Lisbon" },
    { id: "lis_17", type: "food", name: "Manteigaria Pastéis de Nata", category: "Artisan Tarts", location: "Chiado", lat: 38.7107, lon: -9.1437, desc: "Fresh artisanal pastéis de nata coming hot out of the oven around the clock.", query: "Manteigaria Chiado Lisbon" },
    { id: "lis_18", type: "food", name: "A Cevicheria (Chef Kiko Martins)", category: "Modern Seafood", location: "Príncipe Real", lat: 38.7176, lon: -9.1491, desc: "Acclaimed dining counter with a giant foam octopus serving fresh Portuguese ceviches.", query: "A Cevicheria Lisbon" },
    { id: "lis_19", type: "food", name: "Tasca do Chico (Live Fado)", category: "Historic Fado Tavern", location: "Bairro Alto", lat: 38.7126, lon: -9.1448, desc: "Atmospheric tavern famous for soulful spontaneous Fado singing and grilled chouriço.", query: "Tasca do Chico Bairro Alto" },
    { id: "lis_20", type: "food", name: "Solar dos Presuntos", category: "Heritage Gastronomy", location: "Lavra", lat: 38.7180, lon: -9.1415, desc: "Serving rich seafood rice (arroz de marisco), roasted suckling pig, and Iberian ham.", query: "Solar dos Presuntos Lisbon" }
  ],

  // 5. SAN FRANCISCO (20 Verified Items)
  SF: [
    { id: "sf_1", type: "sight", name: "Golden Gate Bridge (Vista Point)", category: "Iconic Landmark", location: "Presidio / Marin", lat: 37.8199, lon: -122.4783, desc: "World-famous Art Deco suspension bridge spanning the Golden Gate strait.", query: "Golden Gate Bridge Vista Point" },
    { id: "sf_2", type: "sight", name: "Alcatraz Island & Cellhouse Tour", category: "National Historic Landmark", location: "SF Bay", lat: 37.8269, lon: -122.4230, desc: "Legendary former federal penitentiary in the middle of SF Bay offering ranger-led audio tours.", query: "Alcatraz Island Tour" },
    { id: "sf_3", type: "sight", name: "Pier 39 & Fisherman's Wharf Sea Lions", category: "Waterfront Attraction", location: "Fisherman's Wharf", lat: 37.8087, lon: -122.4098, desc: "Bustling promenade featuring famous barking sea lions and sourdough bakeries.", query: "Pier 39 San Francisco" },
    { id: "sf_4", type: "sight", name: "Historic Cable Cars (Powell-Hyde Line)", category: "Historic Transit", location: "Powell St / Nob Hill", lat: 37.7845, lon: -122.4080, desc: "The world's last manually operated cable car system climbing SF's steepest scenic hills.", query: "Powell Hyde Cable Car Turnaround" },
    { id: "sf_5", type: "sight", name: "Chinatown & Dragon Gate", category: "Cultural Heritage", location: "Grant Ave / Bush St", lat: 37.7908, lon: -122.4058, desc: "Oldest Chinatown in North America filled with herbal shops and dim sum parlors.", query: "Chinatown Dragon Gate San Francisco" },
    { id: "sf_6", type: "sight", name: "Palace of Fine Arts & Lagoon", category: "Monumental Architecture", location: "Marina District", lat: 37.8029, lon: -122.4484, desc: "Greco-Roman rotunda built for the 1915 Panama-Pacific Exposition.", query: "Palace of Fine Arts San Francisco" },
    { id: "sf_7", type: "sight", name: "Twin Peaks 360-Degree Lookout", category: "Scenic Viewpoint", location: "Twin Peaks Summit", lat: 37.7544, lon: -122.4477, desc: "Twin 922-foot hills offering the ultimate panoramic view of downtown and the bay.", query: "Twin Peaks San Francisco" },
    { id: "sf_8", type: "sight", name: "Muir Woods National Monument", category: "Ancient Redwoods", location: "Mill Valley, Marin", lat: 37.8970, lon: -122.5811, desc: "Primeval coastal redwood sanctuary with towering 1,000-year-old trees.", query: "Muir Woods National Monument" },
    { id: "sf_9", type: "sight", name: "Golden Gate Park & Japanese Tea Garden", category: "Urban Park Oasis", location: "Richmond / Sunset", lat: 37.7700, lon: -122.4700, desc: "1,017-acre park featuring the historic 1894 Japanese Tea Garden and de Young Museum.", query: "Japanese Tea Garden San Francisco" },
    { id: "sf_10", type: "sight", name: "Lombard Street (Crookedest Street)", category: "Scenic Street", location: "Russian Hill", lat: 37.8021, lon: -122.4187, desc: "Famous steep block with eight sharp hairpin turns lined with blooming hydrangeas.", query: "Lombard Street San Francisco" },
    { id: "sf_11", type: "food", name: "Tartine Bakery (Morning Buns & Sourdough)", category: "Iconic Bakery", location: "Mission District", lat: 37.7614, lon: -122.4241, desc: "World-renowned bakery famous for country sourdough loaves and morning buns.", query: "Tartine Bakery San Francisco" },
    { id: "sf_12", type: "food", name: "La Taqueria (Mission-Style Burrito)", category: "Legendary Burrito", location: "Mission District", lat: 37.7508, lon: -122.4181, desc: "Award-winning Mission-style burritos grilled golden (dorado style) with carne asada.", query: "La Taqueria Mission San Francisco" },
    { id: "sf_13", type: "food", name: "Swan Oyster Depot (Since 1912)", category: "Seafood Counter", location: "Nob Hill / Polk St", lat: 37.7909, lon: -122.4211, desc: "18-seat marble counter serving fresh Pacific Dungeness crab and clam chowder.", query: "Swan Oyster Depot San Francisco" },
    { id: "sf_14", type: "food", name: "House of Prime Rib", category: "Classic Dining", location: "Nob Hill / Van Ness", lat: 37.7934, lon: -122.4228, desc: "Carving prime rib tableside from stainless steel Zeppelins with Yorkshire pudding.", query: "House of Prime Rib San Francisco" },
    { id: "sf_15", type: "food", name: "Ghirardelli Chocolate Factory", category: "Historic Dessert", location: "Ghirardelli Square", lat: 37.8059, lon: -122.4226, desc: "Historic 1893 chocolate landmark serving hot fudge sundaes.", query: "Ghirardelli Square San Francisco" },
    { id: "sf_16", type: "food", name: "Ferry Building Food Hall", category: "Artisan Marketplace", location: "Embarcadero", lat: 37.7955, lon: -122.3937, desc: "Clocktower terminal packed with artisan food purveyors and Blue Bottle coffee.", query: "Ferry Building Marketplace San Francisco" },
    { id: "sf_17", type: "food", name: "Boudin Bakery Sourdough", category: "Original Sourdough", location: "Fisherman's Wharf", lat: 37.8085, lon: -122.4150, desc: "Baking SF sourdough with the original 1849 mother dough in bread bowls.", query: "Boudin Bakery Fisherman's Wharf" },
    { id: "sf_18", type: "food", name: "Good Mong Kok Dim Sum", category: "Chinatown Dim Sum", location: "Chinatown", lat: 37.7950, lon: -122.4082, desc: "Takeout counter serving hot baked pork buns and har gow dumplings.", query: "Good Mong Kok Dim Sum San Francisco" },
    { id: "sf_19", type: "food", name: "Zuni Café (Roast Chicken for Two)", category: "California Cuisine", location: "Market Street", lat: 37.7735, lon: -122.4215, desc: "Famous for wood-fired roast chicken served over warm bread salad with currants and pine nuts.", query: "Zuni Cafe San Francisco" },
    { id: "sf_20", type: "food", name: "Bi-Rite Creamery (Salted Caramel Ice Cream)", category: "Artisan Ice Cream", location: "Mission / Dolores Park", lat: 37.7601, lon: -122.4257, desc: "Small-batch ice cream made with organic Straus Family Creamery milk next to Dolores Park.", query: "Bi-Rite Creamery San Francisco" }
  ]
};

// ========================================================
// 5. 2-TIER RESOLUTION ENGINE FOR SIGHTS & HOTELS
// ========================================================
async function fetchTargetCitySights(cityName, airportCode, centerLat, centerLon) {
  const normCity = cityName.toLowerCase();
  const normCode = (airportCode || "").toUpperCase();

  let matchedKey = null;
  if (normCity.includes("vancouver") || normCode === "YVR") matchedKey = "VANCOUVER";
  else if (normCity.includes("toronto") || normCode === "YYZ" || normCode === "YTZ") matchedKey = "TORONTO";
  else if (normCity.includes("montreal") || normCode === "YUL") matchedKey = "MONTREAL";
  else if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") matchedKey = "CHI";
  else if (normCity.includes("taipei") || normCode === "TPE" || normCode === "TSA") matchedKey = "TPE";
  else if (normCity.includes("rome") || normCode === "FCO") matchedKey = "ROME";
  else if (normCity.includes("lisbon") || normCity.includes("lisboa") || normCode === "LIS") matchedKey = "LISBON";
  else if (normCity.includes("san francisco") || normCode === "SFO" || normCode === "SJC") matchedKey = "SF";

  // Tier 1: Master Curated Catalog
  if (matchedKey && MASTER_CURATED_CATALOG[matchedKey]) {
    return MASTER_CURATED_CATALOG[matchedKey].map((item, idx) => {
      const d = haversineDistance(centerLat, centerLon, item.lat, item.lon);
      return {
        ...item,
        id: item.id || `curated_${idx}_${Date.now()}`,
        distanceKm: parseFloat(d.toFixed(1))
      };
    });
  }

  // Tier 2: Real-Time Dynamic GeoSearch Fallback for uncataloged destination
  let discoveredPlaces = [];
  try {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${centerLat}|${centerLon}&gsradius=15000&gslimit=35&format=json&origin=*`;
    const res = await fetchWithTimeout(wikiUrl, {}, 3500);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.query && data.query.geosearch) {
        data.query.geosearch.forEach((item, idx) => {
          const title = item.title;
          const dist = haversineDistance(centerLat, centerLon, item.lat, item.lon);
          const isFood = title.toLowerCase().includes("market") || title.toLowerCase().includes("restaurant");
          discoveredPlaces.push({
            id: `wiki_${item.pageid}_${idx}`,
            type: isFood ? "food" : "sight",
            name: title,
            category: isFood ? "Local Culinary" : "Historic Landmark",
            location: cityName,
            lat: parseFloat(item.lat),
            lon: parseFloat(item.lon),
            distanceKm: parseFloat(dist.toFixed(1)),
            desc: `Verified cultural destination in ${cityName}.`,
            query: `${title} ${cityName}`
          });
        });
      }
    }
  } catch (e) {}

  discoveredPlaces.sort((a, b) => a.distanceKm - b.distanceKm);
  return discoveredPlaces.slice(0, 30);
}

function getBrandPortalUrl(brand, city, checkIn, checkOut) {
  if (brand === "Marriott Bonvoy") return `https://www.marriott.com/search/findHotels.mi?destinationAddress.destination=${encodeURIComponent(city)}&fromDate=${checkIn}&toDate=${checkOut || checkIn}`;
  if (brand === "World of Hyatt") return `https://www.hyatt.com/search/${encodeURIComponent(city)}?checkinDate=${checkIn}&checkoutDate=${checkOut || checkIn}`;
  if (brand === "IHG") return `https://www.ihg.com/hotels/us/en/find-hotels/hotel/rooms?qDest=${encodeURIComponent(city)}&qCiMy=${checkIn}&qCoMy=${checkOut || checkIn}`;
  return "https://www.google.com/travel/hotels";
}

async function fetchLiveTargetHotels(centerLat, centerLon, cityName, airportCode, selectedBrands, checkIn, checkOut) {
  const norm = cityName.toLowerCase();

  if (norm.includes("rome") || airportCode === "FCO") {
    const list = [
      { id: "rom_h1", name: "The St. Regis Rome", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 720, lat: 41.9035, lon: 12.4950, area: "Piazza della Repubblica", badge: "Iconic Grandeur", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "rom_h2", name: "Tribune Hotel Rome, part of JdV by Hyatt", brand: "World of Hyatt", rating: 4.8, priceUSD: 310, lat: 41.9102, lon: 12.4910, area: "Via Veneto District", badge: "Boutique Rooftop", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "rom_h3", name: "InterContinental Rome Ambasciatori Palace", brand: "IHG", rating: 4.9, priceUSD: 560, lat: 41.9060, lon: 12.4905, area: "Via Veneto / Central", badge: "Palace Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  if (norm.includes("chicago") || airportCode === "ORD" || airportCode === "MDW") {
    const list = [
      { id: "chi_h1", name: "The Ritz-Carlton, Chicago", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 460, lat: 41.8976, lon: -87.6231, area: "Magnificent Mile", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "chi_h2", name: "Park Hyatt Chicago", brand: "World of Hyatt", rating: 4.9, priceUSD: 510, lat: 41.8980, lon: -87.6255, area: "Water Tower", badge: "Palace Luxury", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "chi_h3", name: "InterContinental Chicago Magnificent Mile", brand: "IHG", rating: 4.7, priceUSD: 310, lat: 41.8912, lon: -87.6244, area: "Magnificent Mile", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  if (norm.includes("taipei") || airportCode === "TPE" || airportCode === "TSA") {
    const list = [
      { id: "tpe_h1", name: "W Taipei", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 310, lat: 25.0407, lon: 121.5658, area: "Xinyi District / Taipei 101", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "tpe_h2", name: "Grand Hyatt Taipei", brand: "World of Hyatt", rating: 4.8, priceUSD: 260, lat: 25.0354, lon: 121.5623, area: "Xinyi District", badge: "Prime Landmark", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "tpe_h3", name: "Kimpton Da An Hotel", brand: "IHG", rating: 4.8, priceUSD: 230, lat: 25.0416, lon: 121.5469, area: "Daan District", badge: "Design Boutique", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  return selectedBrands.map((b, i) => ({
    id: `hotel_${b.replace(/\s+/g, '')}_${i}`,
    name: `${b} ${cityName}`,
    brand: b,
    rating: (4.6 + (i * 0.1)).toFixed(1),
    priceUSD: 220 + (i * 50),
    lat: centerLat + (i === 0 ? 0.005 : -0.006),
    lon: centerLon + (i === 0 ? 0.006 : -0.005),
    distanceKm: 0.7,
    area: `${cityName} City Center`,
    badge: "Verified Property",
    brandUrl: getBrandPortalUrl(b, cityName, checkIn, checkOut)
  }));
}

// ========================================================
// 6. LEAFLET MAP & INTERACTIVE CONTROLS
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
// 7. FLIGHT SCHEDULE GENERATOR
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

  return `${arrHours}:${arrMins < 10 ? '0' : ''}${arrMins} ${arrPeriod}` + (daysAdded > 0 ? ` (+${daysAdded})` : "");
}

function buildGoogleFlightsUrl(tripType, originCode, destCode, departDate, returnDate, leg2OriginCode = "", leg2DestCode = "", leg2Date = "") {
  if (tripType === "multicity" && leg2OriginCode && leg2DestCode && leg2Date) {
    return `https://www.google.com/travel/flights?q=${encodeURIComponent(`flights from ${originCode} to ${destCode} on ${departDate} and from ${leg2OriginCode} to ${leg2DestCode} on ${leg2Date}`)}`;
  }
  let query = `flights from ${originCode} to ${destCode} on ${departDate}`;
  if (returnDate && tripType === "roundtrip") query += ` returning ${returnDate}`;
  return `https://www.google.com/travel/flights?q=${encodeURIComponent(query)}`;
}

function generateDynamicFlightSchedule(originObj, destAirportObj, departDate, returnDate, tripType = "roundtrip") {
  const gFlightsUrl = buildGoogleFlightsUrl(tripType, originObj.code, destAirportObj.code, departDate, returnDate);
  const distanceKm = haversineDistance(originObj.airportLat, originObj.airportLon, destAirportObj.airportLat, destAirportObj.airportLon);
  const nonStopFlightMinutes = Math.max(75, Math.round((distanceKm / 840) * 60 + 40));
  const timeZoneDiffHours = Math.round((destAirportObj.airportLon - originObj.airportLon) / 15);
  const basePriceUSD = Math.round(distanceKm > 4000 ? 850 + (distanceKm * 0.045) : 180 + (distanceKm * 0.08));

  return [
    {
      id: "fl-1",
      airline: "United Airlines",
      flightNum: `UA${Math.floor(100 + Math.random() * 800)}`,
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
      airline: "Air Canada / Delta",
      flightNum: `AC${Math.floor(100 + Math.random() * 800)}`,
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
      airline: "American Airlines",
      flightNum: `AA${Math.floor(100 + Math.random() * 800)}`,
      stops: 1,
      stopDetails: "1 stop (HUB - 1h 45m)",
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
// 8. APPLICATION CONTROLLER & STATE
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
// 9. SAVED TRIPS MANAGER
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
// 10. DOM INITIALIZATION & EVENT LISTENERS
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

      const rawSights = await fetchTargetCitySights(
        resolvedVisitCityObj.cityName,
        resolvedDestAirportObj.code,
        resolvedVisitCityObj.lat,
        resolvedVisitCityObj.lon
      );

      const rawHotels = await fetchLiveTargetHotels(
        resolvedVisitCityObj.lat,
        resolvedVisitCityObj.lon,
        resolvedVisitCityObj.cityName,
        resolvedDestAirportObj.code,
        selectedBrands,
        currentDepartDate,
        currentReturnDate
      );

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