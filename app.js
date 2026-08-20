// ========================================================
// CHUNG'S BON VOYAGE SEARCH - APPLICATION CORE (PART 1 OF 2)
// ========================================================

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
  { code: "PHL", name: "Philadelphia International", city: "Philadelphia", country: "United States", airportLat: 39.8722, airportLon: -75.2437, cityLat: 39.9526, cityLon: -75.1652 },
  { code: "PIT", name: "Pittsburgh International", city: "Pittsburgh", country: "United States", airportLat: 40.4914, airportLon: -80.2329, cityLat: 40.4406, cityLon: -79.9959 },  

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

  const regionalAliases = {
    "taiwan": { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan", airportLat: 25.0797, airportLon: 121.2342, cityLat: 25.0330, cityLon: 121.5654 },
    "taipei": { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan", airportLat: 25.0797, airportLon: 121.2342, cityLat: 25.0330, cityLon: 121.5654 },
    "japan": { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", airportLat: 35.5494, airportLon: 139.7798, cityLat: 35.6895, cityLon: 139.6917 },
    "tokyo": { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", airportLat: 35.5494, airportLon: 139.7798, cityLat: 35.6895, cityLon: 139.6917 },
    "italy": { code: "FCO", name: "Rome Fiumicino Airport", city: "Rome", country: "Italy", airportLat: 41.8003, airportLon: 12.2389, cityLat: 41.9028, cityLon: 12.4964 },
    "rome": { code: "FCO", name: "Rome Fiumicino Airport", city: "Rome", country: "Italy", airportLat: 41.8003, airportLon: 12.2389, cityLat: 41.9028, cityLon: 12.4964 },
    "france": { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France", airportLat: 49.0097, airportLon: 2.5479, cityLat: 48.8566, cityLon: 2.3522 },
    "paris": { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France", airportLat: 49.0097, airportLon: 2.5479, cityLat: 48.8566, cityLon: 2.3522 },
    "spain": { code: "BCN", name: "Barcelona-El Prat Airport", city: "Barcelona", country: "Spain", airportLat: 41.2974, airportLon: 2.0833, cityLat: 41.3874, cityLon: 2.1686 },
    "barcelona": { code: "BCN", name: "Barcelona-El Prat Airport", city: "Barcelona", country: "Spain", airportLat: 41.2974, airportLon: 2.0833, cityLat: 41.3874, cityLon: 2.1686 },
    "uk": { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom", airportLat: 51.4700, airportLon: -0.4543, cityLat: 51.5074, cityLon: -0.1278 },
    "london": { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom", airportLat: 51.4700, airportLon: -0.4543, cityLat: 51.5074, cityLon: -0.1278 },
    "canada": { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada", airportLat: 49.1967, airportLon: -123.1815, cityLat: 49.2827, cityLon: -123.1207 },
    "new york": { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "United States", airportLat: 40.6413, airportLon: -73.7781, cityLat: 40.7580, cityLon: -73.9855 },
    "chicago": { code: "ORD", name: "Chicago O'Hare International", city: "Chicago", country: "United States", airportLat: 41.9742, airportLon: -87.9073, cityLat: 41.8781, cityLon: -87.6298 },
    "san francisco": { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States", airportLat: 37.6213, airportLon: -122.3790, cityLat: 37.7749, cityLon: -122.4194 }
  };

  if (regionalAliases[lowerInput]) {
    return regionalAliases[lowerInput];
  }

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

  let closestAirport = majorAirportCatalog[0];
  return {
    code: cleanInput.substring(0, 3).toUpperCase(),
    name: `${cleanInput} Airport`,
    city: cleanInput,
    country: "",
    airportLat: closestAirport.airportLat,
    airportLon: closestAirport.airportLon,
    cityLat: closestAirport.cityLat,
    cityLon: closestAirport.cityLon
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
// 3. PUBLIC TRANSIT GUIDES
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
  PHILADELPHIA: [
    { title: "SEPTA Airport Line Regional Rail", badge: "Airport Train", desc: "SEPTA regional rail connects Philadelphia International Airport (PHL) directly to Center City stations (Market East, Suburban, 30th St) every 30 minutes.", route: "PHL Airport ➔ Center City (25 mins, $6.75)" },
    { title: "SEPTA Market-Frankford & Broad Street Subway", badge: "Subway Network", desc: "Rapid transit subway lines intersecting at City Hall, providing fast access to Old City, museums, and South Philly.", route: "Single Fare ($2.50 / SEPTA Key or Contactless Tap)" }
  ],
  PITTSBURGH: [
    { title: "PRT 28X Airport Flyer Bus", badge: "Express Airport Bus", desc: "Pittsburgh Regional Transit 28X Airport Flyer connects Pittsburgh International Airport (PIT) directly to Downtown and Oakland/CMU/Pitt campuses every 30 minutes.", route: "PIT Airport ➔ Downtown / Oakland (35-45 mins, $2.75)" },
    { title: "Pittsburgh Light Rail (The T) & Inclines", badge: "Light Rail", desc: "Free downtown subway zone ('The T') connecting Gateway, Wood Street, and Steel Plaza, plus historic Duquesne & Monongahela cable car inclines.", route: "Free within Downtown Zone / $2.75 inbound" }
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
  else if (normCity.includes("philadelphia") || normCode === "PHL") key = "PHILADELPHIA";
  else if (normCity.includes("pittsburgh") || normCode === "PIT") key = "PITTSBURGH";
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
// 4. TIER-1 RESOLUTION ENGINE FOR SIGHTS & HOTELS
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
  else if (normCity.includes("lisbon") || normCode === "LIS") matchedKey = "LISBON";
  else if (normCity.includes("san francisco") || normCode === "SFO" || normCode === "SJC") matchedKey = "SF";
  else if (normCity.includes("new york") || normCity.includes("manhattan")) matchedKey = "NYC";
  else if (normCity.includes("los angeles") || normCode === "LAX") matchedKey = "LAX";
  else if (normCity.includes("seattle") || normCode === "SEA") matchedKey = "SEA";
  else if (normCity.includes("san diego") || normCode === "SAN") matchedKey = "SAN";
  else if (normCity.includes("las vegas") || normCode === "LAS") matchedKey = "LAS";
  else if (normCity.includes("honolulu") || normCode === "HNL") matchedKey = "HNL";
  else if (normCity.includes("boston") || normCode === "BOS") matchedKey = "BOS";
  else if (normCity.includes("washington") || normCode === "DCA" || normCode === "IAD") matchedKey = "WASHINGTON_DC";
  else if (normCity.includes("miami") || normCode === "MIA") matchedKey = "MIAMI";
  else if (normCity.includes("new orleans") || normCode === "MSY") matchedKey = "NEW_ORLEANS";
  else if (normCity.includes("austin") || normCode === "AUS") matchedKey = "AUSTIN";
  else if (normCity.includes("london") || normCode === "LHR") matchedKey = "LONDON";
  else if (normCity.includes("paris") || normCode === "CDG") matchedKey = "PARIS";
  else if (normCity.includes("florence") || normCode === "FLR") matchedKey = "FLORENCE";
  else if (normCity.includes("barcelona") || normCode === "BCN") matchedKey = "BARCELONA";
  else if (normCity.includes("madrid") || normCode === "MAD") matchedKey = "MADRID";
  else if (normCity.includes("amsterdam") || normCode === "AMS") matchedKey = "AMSTERDAM";
  else if (normCity.includes("taichung") || normCode === "RMQ") matchedKey = "TAICHUNG";
  else if (normCity.includes("tainan") || normCode === "TNN") matchedKey = "TAINAN";
  else if (normCity.includes("kaohsiung") || normCode === "KHH") matchedKey = "KAOHSIUNG";
  else if (normCity.includes("tokyo") || normCode === "HND" || normCode === "NRT") matchedKey = "TOKYO";
  else if (normCity.includes("kyoto") || normCode === "KIX") matchedKey = "KYOTO";
  else if (normCity.includes("osaka") || normCode === "ITM") matchedKey = "OSAKA";
  else if (normCity.includes("hong kong") || normCode === "HKG") matchedKey = "HKG";
  else if (normCity.includes("seoul") || normCode === "ICN") matchedKey = "SEOUL";
  else if (normCity.includes("singapore") || normCode === "SIN") matchedKey = "SINGAPORE";
  else if (normCity.includes("bangkok") || normCode === "BKK") matchedKey = "BANGKOK";
  else if (normCity.includes("sydney") || normCode === "SYD") matchedKey = "SYDNEY";
  else if (normCity.includes("philadelphia") || normCity.includes("philly") || normCode === "PHL") matchedKey = "PHILADELPHIA";
  else if (normCity.includes("pittsburgh") || normCode === "PIT") matchedKey = "PITTSBURGH";

  if (matchedKey && typeof MASTER_CURATED_CATALOG !== 'undefined' && MASTER_CURATED_CATALOG[matchedKey]) {
    return MASTER_CURATED_CATALOG[matchedKey].map((item, idx) => {
      const d = haversineDistance(centerLat, centerLon, item.lat, item.lon);
      return {
        ...item,
        id: item.id || `curated_${idx}_${Date.now()}`,
        distanceKm: parseFloat(d.toFixed(1))
      };
    });
  }

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
// 5. TAGGING STATE & LEAFLET MAP & INTERACTIVE CONTROLS
// ========================================================
let taggedPlaces = [];

window.handleToggleTag = function(id, itemType) {
  const existingIdx = taggedPlaces.findIndex(p => p.id === id);
  if (existingIdx > -1) {
    taggedPlaces.splice(existingIdx, 1);
  } else {
    let item = null;
    if (itemType === "hotel") {
      item = currentHotels.find(h => h.id === id);
    } else {
      item = currentSights.find(s => s.id === id);
    }
    if (item) {
      taggedPlaces.push({ ...item, itemType });
    }
  }
  sortAndRenderHotels();
  renderDestinationSights(currentSights, resolvedVisitCityObj ? resolvedVisitCityObj.cityName : "");
  updateItineraryDrawer();
};

function isItemTagged(id) {
  return taggedPlaces.some(p => p.id === id);
}

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
        const isTagged = isItemTagged(h.id);
        const hotelIcon = L.divIcon({
          className: `custom-map-marker marker-hotel ${isTagged ? 'marker-tagged' : ''}`,
          html: isTagged ? `⭐` : `🏨`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const popupHtml = `
          <div style="font-family:sans-serif; font-size:12px; line-height:1.4;">
            <strong style="color:var(--text-main); font-size:13px;">${h.name}</strong> ${isTagged ? '<span style="color:#f59e0b;">★ Tagged</span>' : ''}<br/>
            <span style="color:#9f1239; font-weight:bold;">${h.brand}</span> • ${h.badge}<br/>
            <span style="color:var(--text-muted);">📍 ${h.area} (${h.distanceKm} km away)</span><br/>
            <b style="color:var(--primary); font-size:14px;">${formatCurrency(h.priceUSD)}</b> / night<br/>
            <div style="display:flex; gap:0.4rem; margin-top:0.4rem; flex-wrap:wrap;">
              <button onclick="handleToggleTag('${h.id}', 'hotel')" style="background:var(--pill-bg); border:1px solid var(--border); color:var(--text-main); font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer;">${isTagged ? '★ Untag' : '⭐ Tag'}</button>
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
        const isTagged = isItemTagged(s.id);
        const sightIcon = L.divIcon({
          className: `custom-map-marker ${isTagged ? 'marker-tagged' : isCustom ? 'marker-custom' : isFood ? 'marker-food' : 'marker-sight'}`,
          html: isTagged ? `⭐` : isCustom ? `📍` : isFood ? `🍜` : `🏛️`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const popupHtml = `
          <div style="font-family:sans-serif; font-size:12px; line-height:1.4;">
            <span style="background:${isFood ? 'rgba(244,63,94,0.15)':'rgba(59,130,246,0.15)'}; color:${isFood ? '#f43f5e':'#3b82f6'}; padding:2px 6px; border-radius:4px; font-weight:bold; font-size:10px;">${s.category}</span> ${isTagged ? '<span style="color:#f59e0b; font-weight:bold;">★ Tagged</span>' : ''}<br/>
            <strong style="color:var(--text-main); font-size:13px; margin-top:3px; display:inline-block;">${s.name}</strong><br/>
            <p style="color:var(--text-main); margin:4px 0;">${s.desc}</p>
            <span style="color:var(--text-muted);">📍 ${s.location} (${s.distanceKm} km away)</span><br/>
            <div style="display:flex; gap:0.4rem; margin-top:0.4rem; align-items:center; flex-wrap:wrap;">
              <button onclick="handleToggleTag('${s.id}', 'sight')" style="background:var(--pill-bg); border:1px solid var(--border); color:var(--text-main); font-size:11px; padding:2px 6px; border-radius:4px; cursor:pointer;">${isTagged ? '★ Untag' : '⭐ Tag'}</button>
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
  taggedPlaces = taggedPlaces.filter(p => p.id !== id);
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
// 7. APPLICATION CONTROLLER & STATE RENDERING
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
let travelersCount = 1;
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
  const flightCountEl = document.getElementById("flightCount");
  if (!flightListEl) return;

  if (flightCountEl) flightCountEl.textContent = `${sorted.length} options`;

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
          <span class="flight-price">${formatCurrency(f.priceUSD * travelersCount)}</span>
          <span class="cabin-tag">${f.cabin} (${travelersCount} pax)</span>
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
    const isTagged = isItemTagged(h.id);
    return `
      <div class="hotel-card ${isSelected ? 'selected' : ''} ${isTagged ? 'tagged-card' : ''}" id="card-${h.id}">
        <div class="hotel-main">
          <div class="hotel-header-meta">
            <span class="brand-badge ${getBrandClass(h.brand)}">${h.brand}</span>
            <span class="hotel-tag">${h.badge}</span>
            ${isTagged ? '<span class="tag-indicator-badge">★ Tagged Hotel</span>' : ''}
          </div>
          
          <h4 class="hotel-name">${h.name}</h4>
          <span class="hotel-location">📍 ${h.area} (${h.distanceKm} km away)</span>

          <div class="hotel-rating-row">
            <span class="rating-star">★</span>
            <span class="rating-score">${h.rating} / 5.0</span>
          </div>

          <div class="card-manage-bar" style="margin-top:0.35rem; display:flex; gap:0.4rem; flex-wrap:wrap;">
            <button class="btn-card-action ${isTagged ? 'btn-active-tag' : ''}" onclick="handleToggleTag('${h.id}', 'hotel')">
              ${isTagged ? '★ Tagged' : '⭐ Tag Hotel'}
            </button>
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
    sightsListEl.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 1.5rem 0;">No verified places found within ${currentRadiusKm} km. Try increasing the exploration radius or clicking "+ Add Place".</p>`;
    return;
  }

  sightsListEl.innerHTML = filtered.map(s => {
    const isFood = s.type === "food";
    const isCustom = s.isCustom;
    const isTagged = isItemTagged(s.id);
    return `
      <div class="sight-card ${isCustom ? 'custom-item' : isFood ? 'food-item' : 'sight-item'} ${isTagged ? 'tagged-card' : ''}" id="sight-card-${s.id}">
        <div class="sight-category-row">
          <span class="sight-category-badge ${isCustom ? 'badge-custom' : isFood ? 'badge-food' : 'badge-sight'}">${s.category}</span>
          ${isTagged ? '<span class="tag-indicator-badge">★ Tagged</span>' : ''}
          <span class="sight-location">📍 ${s.location} (${s.distanceKm} km)</span>
        </div>
        <h4 class="sight-name">${s.name}</h4>
        <p class="sight-desc">${s.desc}</p>
        
        <div class="sight-card-footer">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query || s.name)}" target="_blank" rel="noopener noreferrer" class="sight-maps-link">Explore ↗</a>
          <div class="card-manage-bar" style="display:flex; gap:0.35rem; flex-wrap:wrap;">
            <button class="btn-card-action ${isTagged ? 'btn-active-tag' : ''}" onclick="handleToggleTag('${s.id}', 'sight')">
              ${isTagged ? '★ Tagged' : '⭐ Tag'}
            </button>
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

  const dailyFoodUSD = 60 * travelersCount;
  const dailyTransitUSD = 12 * travelersCount;
  const totalLivingUSD = (dailyFoodUSD + dailyTransitUSD) * tripDays;

  let flightCostUSD = 0;
  let hotelCostUSD = 0;
  let count = 0;

  if (selectedFlight) {
    flightCostUSD = selectedFlight.priceUSD * travelersCount;
    count++;
    if (drawerFlight) {
      drawerFlight.className = "drawer-card";
      drawerFlight.innerHTML = `
        <strong>${selectedFlight.airline} (${selectedFlight.flightNum})</strong><br/>
        <small style="color:var(--text-muted);">${resolvedOriginObj ? resolvedOriginObj.code : ""} ➔ ${resolvedDestAirportObj ? resolvedDestAirportObj.code : ""} (${selectedFlight.durationText})</small><br/>
        <b>${formatCurrency(selectedFlight.priceUSD)}</b> &times; ${travelersCount} traveler(s) = <b>${formatCurrency(flightCostUSD)}</b> <span style="font-size:11px;color:var(--text-muted);">${selectedFlight.cabin}</span>
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

  if (drawerDailyFood) drawerDailyFood.textContent = `${formatCurrency(60 * travelersCount)} / day (${travelersCount} pax)`;
  if (drawerDailyTransit) drawerDailyTransit.textContent = `${formatCurrency(12 * travelersCount)} / day (${travelersCount} pax)`;
  if (flightPriceEl) flightPriceEl.textContent = formatCurrency(flightCostUSD);
  if (hotelLabelEl) hotelLabelEl.textContent = `Hotel Room (${tripDays} night${tripDays > 1 ? 's' : ''}):`;
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

  const totalTaggedCount = taggedPlaces.length;
  if ((count > 0 || totalTaggedCount > 0) && badgeEl && badgeText) {
    badgeEl.classList.remove("hidden");
    badgeText.textContent = `${count} Booked • ${totalTaggedCount} Tagged ⭐ (${travelersCount} Pax)`;
  } else if (badgeEl) {
    badgeEl.classList.add("hidden");
  }
}

function toggleDrawer(open) {
  const drawer = document.getElementById("itineraryDrawer");
  const overlay = document.getElementById("itineraryOverlay");
  if (open) {
    if (drawer) drawer.style.transform = "translateX(0)";
    overlay?.classList.remove("hidden");
  } else {
    if (drawer) drawer.style.transform = "translateX(100%)";
    overlay?.classList.add("hidden");
  }
}

// ========================================================
// 8. SMART DAILY ITINERARY GENERATOR (PROXIMITY ENGINE)
// ========================================================
function generateSmartDailyItinerary() {
  const sightsOnly = taggedPlaces.filter(p => p.itemType === "sight" || !p.itemType);
  if (sightsOnly.length === 0) {
    alert("Please tag (⭐) at least a few sights or food spots first to generate your smart daily itinerary!");
    return;
  }

  let anchorLat = resolvedVisitCityObj ? resolvedVisitCityObj.lat : targetCenterLat;
  let anchorLon = resolvedVisitCityObj ? resolvedVisitCityObj.lon : targetCenterLon;
  if (selectedHotel) {
    anchorLat = selectedHotel.lat;
    anchorLon = selectedHotel.lon;
  }

  let remainingSights = sightsOnly.map(s => ({
    ...s,
    distFromAnchor: haversineDistance(anchorLat, anchorLon, s.lat, s.lon)
  })).sort((a, b) => a.distFromAnchor - b.distFromAnchor);

  const daysCount = Math.max(1, tripDays);
  let dailySchedules = Array.from({ length: daysCount }, () => []);

  let currentDayIdx = 0;
  while (remainingSights.length > 0) {
    let currentSpot = remainingSights.shift();
    dailySchedules[currentDayIdx].push(currentSpot);

    for (let i = 0; i < 2 && remainingSights.length > 0; i++) {
      remainingSights.sort((a, b) => haversineDistance(currentSpot.lat, currentSpot.lon, a.lat, a.lon) - haversineDistance(currentSpot.lat, currentSpot.lon, b.lat, b.lon));
      let nextSpot = remainingSights.shift();
      dailySchedules[currentDayIdx].push(nextSpot);
      currentSpot = nextSpot;
    }

    currentDayIdx = (currentDayIdx + 1) % daysCount;
  }

  renderDailyItineraryModal(dailySchedules);
}

function renderDailyItineraryModal(dailySchedules) {
  let modal = document.getElementById("smartItineraryModal");
  if (!modal) {
    const modalHtml = `
      <div id="smartItineraryModalOverlay" class="modal-overlay"></div>
      <div id="smartItineraryModal" class="modal-card" style="max-width: 720px; max-height: 85vh;">
        <div class="modal-header">
          <h3>🤖 AI Smart Daily Itinerary & Route Plan</h3>
          <button id="closeSmartModalBtn" class="close-btn">✕</button>
        </div>
        <div id="smartItineraryBody" class="modal-body" style="display:flex; flex-direction:column; gap:1.25rem;"></div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    document.getElementById("closeSmartModalBtn").addEventListener("click", closeSmartItineraryModal);
    document.getElementById("smartItineraryModalOverlay").addEventListener("click", closeSmartItineraryModal);
    modal = document.getElementById("smartItineraryModal");
  }

  const bodyEl = document.getElementById("smartItineraryBody");
  const hotelName = selectedHotel ? selectedHotel.name : (resolvedVisitCityObj ? resolvedVisitCityObj.cityName + " Center" : "Hotel Anchor");

  bodyEl.innerHTML = `
    <p style="font-size:0.85rem; color:var(--text-muted);">Optimized geographic clustering departing from <strong>🏨 ${hotelName}</strong> for ${travelersCount} traveler(s) across your ${dailySchedules.length}-day trip.</p>
  ` + dailySchedules.map((daySpots, idx) => {
    if (daySpots.length === 0) return `<div class="drawer-card"><h4>Day ${idx + 1}</h4><p style="color:var(--text-muted);font-size:0.85rem;">Free day / flexible exploration.</p></div>`;
    
    const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(hotelName)}&destination=${encodeURIComponent(hotelName)}&waypoints=${daySpots.map(s => encodeURIComponent(s.name)).join('|')}`;

    return `
      <div class="drawer-card" style="background:var(--card-bg); border:1px solid var(--border);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <h4 style="color:var(--primary); font-size:1rem; margin:0;">📅 Day ${idx + 1} Itinerary</h4>
          <a href="${googleMapsRouteUrl}" target="_blank" class="btn-google-flights" style="text-decoration:none;">🗺️ Navigate Route ↗</a>
        </div>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem; margin-top:0.5rem;">
          <li style="font-size:0.85rem; color:var(--text-muted);">🌅 <strong>Morning Start:</strong> Depart from ${hotelName}</li>
          ${daySpots.map((spot, sIdx) => `
            <li style="font-size:0.88rem; padding:0.4rem 0.6rem; background:var(--pill-bg); border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <span style="font-weight:bold; color:var(--text-main);">${sIdx + 1}. ${spot.name}</span>
                <div style="font-size:0.75rem; color:var(--text-muted);">${spot.category} • ${spot.distanceKm} km from base</div>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.query || spot.name)}" target="_blank" style="font-size:0.75rem; color:var(--primary); text-decoration:none;">Map ↗</a>
            </li>
          `).join('')}
          <li style="font-size:0.85rem; color:var(--text-muted);">🌙 <strong>Evening Return:</strong> Return to ${hotelName}</li>
        </ul>
      </div>
    `;
  }).join('');

  modal.classList.remove("hidden");
  document.getElementById("smartItineraryModalOverlay").classList.remove("hidden");
}

function closeSmartItineraryModal() {
  document.getElementById("smartItineraryModal")?.classList.add("hidden");
  document.getElementById("smartItineraryModalOverlay")?.classList.add("hidden");
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
    taggedPlaces: taggedPlaces,
    tripDays: tripDays,
    travelersCount: travelersCount,
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
    listEl.innerHTML = `<p class="empty-state-text">No itineraries saved yet. Select a flight and hotel, tag locations, then click "Save Trip" in the drawer!</p>`;
    return;
  }

  listEl.innerHTML = `<div class="saved-trips-stack">` + trips.map(t => `
    <div class="saved-trip-item">
      <div class="saved-trip-info">
        <h4>${t.name}</h4>
        <p>${t.origin.city} (${t.origin.code}) ➔ ${t.destAirport.city} (${t.destAirport.code}) | Target: <strong>${t.visitCity.cityName}</strong></p>
        <p style="font-size:11px; color:var(--text-muted); margin-top:2px;">Saved on ${t.createdAt} • ${t.tripDays} night(s) • ${t.travelersCount || 1} Traveler(s) • ${t.taggedPlaces ? t.taggedPlaces.length : 0} Tagged Spots</p>
      </div>
      <div class="saved-trip-actions">
        <button class="btn-load-trip" onclick="loadSavedTrip('${t.id}')">Load</button>
        <button class="btn-del-trip" onclick="deleteSavedTrip('${t.id}')">✕</button>
      </div>
    </div>
  `).join('') + `</div>`;
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
  if (document.getElementById("travelersCount")) document.getElementById("travelersCount").value = trip.travelersCount || 1;
  
  if (trip.taggedPlaces) taggedPlaces = trip.taggedPlaces;

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
      if (type === "hotel") {
        let hotelItem = allRawHotels.find(h => h.id === editId);
        if (hotelItem) {
          hotelItem.name = name;
          hotelItem.badge = category || hotelItem.badge;
          hotelItem.area = location || hotelItem.area;
          hotelItem.lat = lat;
          hotelItem.lon = lon;
          hotelItem.distanceKm = parseFloat(distKm.toFixed(1));
        }
      } else {
        let sightItem = allRawSights.find(s => s.id === editId);
        if (sightItem) {
          sightItem.name = name;
          sightItem.type = type;
          sightItem.category = category;
          sightItem.location = location;
          sightItem.desc = desc;
          sightItem.lat = lat;
          sightItem.lon = lon;
          sightItem.distanceKm = parseFloat(distKm.toFixed(1));
        }
      }
      
      const taggedIdx = taggedPlaces.findIndex(p => p.id === editId);
      if (taggedIdx > -1) {
        taggedPlaces[taggedIdx] = {
          ...taggedPlaces[taggedIdx],
          name: name,
          category: category,
          location: location,
          desc: desc,
          lat: lat,
          lon: lon,
          distanceKm: parseFloat(distKm.toFixed(1))
        };
      }
    } else {
      if (type === "hotel") {
        allRawHotels.unshift({
          id: `custom_hotel_${Date.now()}`,
          name: name,
          brand: "Independent",
          rating: 4.8,
          priceUSD: 250,
          lat: lat,
          lon: lon,
          distanceKm: parseFloat(distKm.toFixed(1)),
          area: location,
          badge: category || "Custom Stay",
          brandUrl: `https://www.google.com/travel/hotels?q=${encodeURIComponent(name + " " + location)}`
        });
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
    }

    closeCustomPlaceModal();
    applyRadiusFilterAndRender(currentRadiusKm);
    updateItineraryDrawer();
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

      if (currentTripType === "roundtrip") {
        returnGroup?.classList.remove("hidden");
        multiCityFields?.classList.add("hidden");
      } else if (currentTripType === "oneway") {
        returnGroup?.classList.add("hidden");
        multiCityFields?.classList.add("hidden");
      } else if (currentTripType === "multicity") {
        returnGroup?.classList.add("hidden");
        multiCityFields?.classList.remove("hidden");
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
  const resultsGrid = document.querySelector(".results-grid");
  const sightsWrapper = document.querySelector(".sights-wrapper");

  toggleListViewBtn?.addEventListener("click", () => {
    toggleListViewBtn.classList.add("active");
    toggleMapViewBtn?.classList.remove("active");
    mapSection?.classList.remove("hidden");
    if (resultsGrid) resultsGrid.classList.remove("hidden");
    if (sightsWrapper) sightsWrapper.classList.remove("hidden");
    if (leafletMapInstance) {
      setTimeout(() => leafletMapInstance.invalidateSize(), 200);
    }
  });

  toggleMapViewBtn?.addEventListener("click", () => {
    toggleMapViewBtn.classList.add("active");
    toggleListViewBtn?.classList.remove("active");
    mapSection?.classList.remove("hidden");
    if (resultsGrid) resultsGrid.classList.add("hidden");
    if (sightsWrapper) sightsWrapper.classList.add("hidden");
    if (leafletMapInstance) {
      setTimeout(() => {
        leafletMapInstance.invalidateSize();
        if (mapRadiusCircle) leafletMapInstance.fitBounds(mapRadiusCircle.getBounds(), { padding: [30, 30] });
      }, 200);
    }
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

  // Smart Itinerary Button in Drawer / Header
  const drawerActionRow = document.querySelector(".drawer-action-row");
  if (drawerActionRow && !document.getElementById("generateSmartItineraryBtn")) {
    const smartBtnHtml = `
      <div style="margin-top: 0.5rem;">
        <button id="generateSmartItineraryBtn" class="btn-secondary drawer-btn" style="background: rgba(168,85,247,0.15); border-color: rgba(168,85,247,0.4); color: var(--accent-purple);">🤖 Generate AI Smart Itinerary</button>
      </div>
    `;
    drawerActionRow.insertAdjacentHTML("afterend", smartBtnHtml);
    document.getElementById("generateSmartItineraryBtn").addEventListener("click", generateSmartDailyItinerary);
  }

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

      travelersCount = parseInt(document.getElementById("travelersCount")?.value) || 1;

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

      // Reset selection and tagged places for the new corridor search
      selectedFlight = null;
      selectedHotel = null;
      taggedPlaces = [];
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
      if (tripLengthSubtitle) tripLengthSubtitle.textContent = currentReturnDate && currentTripType === "roundtrip" ? `Trip Length: ${tripDays} night(s) stay (${travelersCount} Traveler${travelersCount > 1 ? 's' : ''})` : `Point-to-point corridor search`;

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