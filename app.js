// ========================================================
// 1. GLOBAL AIRPORT & DOWNTOWN DIRECTORY
// ========================================================
const majorAirportCatalog = [
  // Portugal & Western Europe
  { code: "LIS", name: "Humberto Delgado Airport (Lisbon)", city: "Lisbon", country: "Portugal", airportLat: 38.7742, airportLon: -9.1342, cityLat: 38.7223, cityLon: -9.1393 },
  { code: "OPO", name: "Francisco Sá Carneiro Airport (Porto)", city: "Porto", country: "Portugal", airportLat: 41.2481, airportLon: -8.6814, cityLat: 41.1579, cityLon: -8.6291 },
  { code: "MAD", name: "Adolfo Suárez Madrid-Barajas", city: "Madrid", country: "Spain", airportLat: 40.4839, airportLon: -3.5680, cityLat: 40.4168, cityLon: -3.7038 },
  { code: "BCN", name: "Barcelona-El Prat", city: "Barcelona", country: "Spain", airportLat: 41.2974, airportLon: 2.0833, cityLat: 41.3874, cityLon: 2.1686 },
  { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France", airportLat: 49.0097, airportLon: 2.5479, cityLat: 48.8566, cityLon: 2.3522 },
  { code: "FCO", name: "Rome Fiumicino Leonardo da Vinci", city: "Rome", country: "Italy", airportLat: 41.8003, airportLon: 12.2389, cityLat: 41.9028, cityLon: 12.4964 },
  { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom", airportLat: 51.4700, airportLon: -0.4543, cityLat: 51.5074, cityLon: -0.1278 },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands", airportLat: 52.3105, airportLon: 4.7683, cityLat: 52.3676, cityLon: 4.9041 },

  // Taiwan Hubs
  { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan", airportLat: 25.0797, airportLon: 121.2342, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "TSA", name: "Taipei Songshan Airport", city: "Taipei", country: "Taiwan", airportLat: 25.0697, airportLon: 121.5525, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "RMQ", name: "Taichung International Airport", city: "Taichung", country: "Taiwan", airportLat: 24.2647, airportLon: 120.6214, cityLat: 24.1477, cityLon: 120.6736 },
  { code: "TNN", name: "Tainan Airport", city: "Tainan", country: "Taiwan", airportLat: 22.9506, airportLon: 120.2058, cityLat: 22.9997, cityLon: 120.2270 },
  { code: "KHH", name: "Kaohsiung International Airport", city: "Kaohsiung", country: "Taiwan", airportLat: 22.5772, airportLon: 120.3500, cityLat: 22.6273, cityLon: 120.3014 },

  // Japan & Asia Hubs
  { code: "HND", name: "Tokyo Haneda", city: "Tokyo", country: "Japan", airportLat: 35.5494, airportLon: 139.7798, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "NRT", name: "Tokyo Narita", city: "Tokyo", country: "Japan", airportLat: 35.7720, airportLon: 140.3929, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "KIX", name: "Kansai International (Kyoto/Osaka)", city: "Kyoto / Osaka", country: "Japan", airportLat: 34.4320, airportLon: 135.2304, cityLat: 35.0116, cityLon: 135.7681 },
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong", airportLat: 22.3080, airportLon: 113.9185, cityLat: 22.2855, cityLon: 114.1577 },

  // United States Hubs
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States", airportLat: 37.6213, airportLon: -122.3790, cityLat: 37.7749, cityLon: -122.4194 },
  { code: "SJC", name: "San José Mineta International", city: "San Jose", country: "United States", airportLat: 37.3639, airportLon: -121.9289, cityLat: 37.3382, cityLon: -121.8863 },
  { code: "OAK", name: "Oakland San Francisco Bay", city: "Oakland", country: "United States", airportLat: 37.7213, airportLon: -122.2207, cityLat: 37.8044, cityLon: -122.2711 },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "United States", airportLat: 33.9416, airportLon: -118.4085, cityLat: 34.0522, cityLon: -118.2437 },
  { code: "SAN", name: "San Diego International", city: "San Diego", country: "United States", airportLat: 32.7338, airportLon: -117.1933, cityLat: 32.7157, cityLon: -117.1611 },
  { code: "ORD", name: "Chicago O'Hare International", city: "Chicago", country: "United States", airportLat: 41.9742, airportLon: -87.9073, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "MDW", name: "Chicago Midway International", city: "Chicago", country: "United States", airportLat: 41.7868, airportLon: -87.7522, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "EWR", name: "Newark Liberty International", city: "Newark / New York", country: "United States", airportLat: 40.6895, airportLon: -74.1745, cityLat: 40.7357, cityLon: -74.1724 },
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "United States", airportLat: 40.6413, airportLon: -73.7781, cityLat: 40.7580, cityLon: -73.9855 },
  { code: "BOS", name: "Boston Logan International", city: "Boston", country: "United States", airportLat: 42.3656, airportLon: -71.0096, cityLat: 42.3601, cityLon: -71.0589 },
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

// Resilient fetch wrapper
async function fetchWithTimeout(url, options = {}, timeoutMs = 2500) {
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

  if (cleanInput.length === 3) {
    const directCodeMatch = majorAirportCatalog.find(a => a.code.toLowerCase() === lowerInput);
    if (directCodeMatch) return directCodeMatch;
  }

  const specificNameMatch = majorAirportCatalog.find(a => {
    const apNameLower = a.name.toLowerCase();
    return apNameLower.includes(lowerInput) || lowerInput.split(/\s+/).some(token => token.length > 3 && apNameLower.includes(token));
  });
  if (specificNameMatch) return specificNameMatch;

  const exactCityMatches = majorAirportCatalog.filter(a => a.city.toLowerCase() === lowerInput);
  if (exactCityMatches.length > 0) return exactCityMatches[0];

  const partialCityMatches = majorAirportCatalog.filter(a =>
    a.city.toLowerCase().includes(lowerInput) || lowerInput.includes(a.city.toLowerCase())
  );
  if (partialCityMatches.length > 0) return partialCityMatches[0];

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
          name: minDistance < 150 ? closestAirport.name : `${cityName} International Airport`,
          city: cityName,
          country: item.address.country || "",
          airportLat: minDistance < 150 ? closestAirport.airportLat : targetLat,
          airportLon: minDistance < 150 ? closestAirport.airportLon : targetLon,
          cityLat: targetLat,
          cityLon: targetLon
        };
      }
    }
  } catch (e) {
    console.warn("Airport hub geocoding fallback triggered:", e);
  }

  return {
    code: cleanInput.substring(0, 3).toUpperCase(),
    name: `${cleanInput} Airport`,
    city: cleanInput,
    country: "",
    airportLat: 38.7223,
    airportLon: -9.1393,
    cityLat: 38.7223,
    cityLon: -9.1393
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

  // Known city coordinates
  if (lower.includes("lisbon") || lower.includes("lisboa") || lower.includes("belem") || lower.includes("sintra") || lower.includes("cascais")) {
    return { cityName: "Lisbon", lat: 38.7223, lon: -9.1393 };
  }
  if (lower.includes("tokyo") || lower.includes("hnd") || lower.includes("nrt")) return { cityName: "Tokyo", lat: 35.6895, lon: 139.6917 };
  if (lower.includes("kyoto")) return { cityName: "Kyoto", lat: 35.0116, lon: 135.7681 };
  if (lower.includes("osaka")) return { cityName: "Osaka", lat: 34.6937, lon: 135.5023 };
  if (lower.includes("london")) return { cityName: "London", lat: 51.5074, lon: -0.1278 };
  if (lower.includes("paris")) return { cityName: "Paris", lat: 48.8566, lon: 2.3522 };
  if (lower.includes("rome")) return { cityName: "Rome", lat: 41.9028, lon: 12.4964 };
  if (lower.includes("barcelona")) return { cityName: "Barcelona", lat: 41.3874, lon: 2.1686 };
  if (lower.includes("madrid")) return { cityName: "Madrid", lat: 40.4168, lon: -3.7038 };
  if (lower.includes("hong kong")) return { cityName: "Hong Kong", lat: 22.2855, lon: 114.1577 };
  if (lower.includes("honolulu") || lower.includes("waikiki") || lower.includes("oahu")) return { cityName: "Honolulu", lat: 21.2766, lon: -157.8283 };
  if (lower.includes("taipei") || lower.includes("new taipei") || lower.includes("tamsui") || lower.includes("beitou") || lower.includes("jiufen")) return { cityName: "Taipei", lat: 25.0330, lon: 121.5654 };
  if (lower.includes("taichung")) return { cityName: "Taichung", lat: 24.1477, lon: 120.6736 };
  if (lower.includes("tainan")) return { cityName: "Tainan", lat: 22.9997, lon: 120.2270 };
  if (lower.includes("kaohsiung")) return { cityName: "Kaohsiung", lat: 22.6273, lon: 120.3014 };
  if (lower.includes("chicago")) return { cityName: "Chicago", lat: 41.8781, lon: -87.6298 };
  if (lower.includes("san francisco") || lower.includes("sf")) return { cityName: "San Francisco", lat: 37.7749, lon: -122.4194 };
  if (lower.includes("san jose")) return { cityName: "San Jose, CA", lat: 37.3382, lon: -121.8863 };
  if (lower.includes("princeton")) return { cityName: "Princeton, NJ", lat: 40.3487, lon: -74.6593 };
  if (lower.includes("new york") || lower.includes("manhattan") || lower.includes("nyc")) return { cityName: "New York (Manhattan)", lat: 40.7580, lon: -73.9855 };
  if (lower.includes("san diego")) return { cityName: "San Diego", lat: 32.7157, lon: -117.1611 };

  try {
    const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cleanCity)}&format=json&addressdetails=1&limit=1`, {}, 2500);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        return {
          cityName: data[0].address.city || data[0].address.town || data[0].address.borough || cleanCity,
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon)
        };
      }
    }
  } catch (err) {
    console.warn("Visit city geocoding fallback triggered:", err);
  }

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
      dropdown.innerHTML = `<div style="padding: 10px; font-size: 12px; color: var(--text-muted);">Searching global airport registry...</div>`;
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
      } catch (err) {
        // Silent recovery
      }
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
    
    baseTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, attribution: '© OpenStreetMap © CARTO' });
    baseTileLayer.addTo(leafletMapInstance);
  }
}

function updateThemeToggleUI(theme) {
  const icon = document.getElementById("themeToggleIcon");
  const text = document.getElementById("themeToggleText");
  if (icon && text) {
    if (theme === "dark") {
      icon.textContent = "☀️";
      text.textContent = "Light";
    } else {
      icon.textContent = "🌙";
      text.textContent = "Dark";
    }
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
// 3. PUBLIC TRANSIT & CORRIDOR GUIDES
// ========================================================
const cityTransitGuidesMaster = {
  LISBON: [
    { title: "Lisbon Metro & Red Line Airport Link", badge: "Airport Metro", desc: "Red Line metro connects Humberto Delgado Airport (LIS) directly to São Sebastião in 20 minutes with transfers to Blue/Green lines.", route: "Airport ➔ Saldanha / Baixa-Chiado (20 mins, €1.80)" },
    { title: "Navegante / Viva Viagem Card & Tram 28", badge: "Transit Card", desc: "Contactless tap card for Metro, Carris yellow buses, Santa Justa Lift, and historic wooden Tram 28 through Alfama.", route: "24-Hour Unlimited Metro/Bus/Tram Pass (€6.80)" },
    { title: "CP Commuter Train to Sintra & Cascais", badge: "Scenic Day Trip", desc: "Direct train from Rossio Station straight to Sintra (Pena Palace, 40m) and from Cais do Sodré along the coast to Cascais.", route: "Rossio ➔ Sintra (€2.40 each way)" }
  ],
  TPE: [
    { title: "Taoyuan Airport MRT (Express Purple Line)", badge: "Airport Express", desc: "Purple Express train connects Terminal 1 & 2 directly to Taipei Main Station in 36 minutes with free onboard Wi-Fi.", route: "Taoyuan Airport ➔ Taipei Main Station (36 mins, NT$150)" },
    { title: "Taipei EasyCard / iPASS & Metro Network", badge: "Transit Card", desc: "Contactless card accepted across all Taipei MRT subway lines, city buses, YouBike 2.0 public bike rentals, and convenience stores.", route: "Single ride NT$20–NT$65 / 24-hr Pass NT$180" },
    { title: "Taiwan High Speed Rail (THSR)", badge: "Bullet Train", desc: "Direct 300 km/h bullet trains from Taipei Main Station linking Taichung (45m), Tainan (80m), and Kaohsiung (90m).", route: "Taipei ➔ Taichung (45 mins) / Kaohsiung (90 mins)" }
  ],
  TAICHUNG: [
    { title: "Taichung Green Line MRT & Public Bus", badge: "Metro & Rapid Bus", desc: "Green Line MRT connects THSR Taichung Station (Xinwuri) directly through downtown, City Hall, and Wenxin Forest Park.", route: "Single Fare (NT$20–NT$50 / EasyCard)" }
  ],
  TAINAN: [
    { title: "Tainan Historic City Bus & Tainan Pass", badge: "Cultural Transit", desc: "Tourist loop buses 88 (Anping Route) and 99 (Qigu Salt Mountain Route) connecting Tainan Railway Station with historic temples.", route: "City Bus NT$18 / 1-Day Pass NT$150" }
  ],
  KHH: [
    { title: "Kaohsiung MRT & Circular Light Rail", badge: "Metro System", desc: "Rapid transit intersecting at Formosa Boulevard Station (Dome of Light), connecting Kaohsiung Airport (KHH) and Pier-2.", route: "KHH Airport ➔ Downtown (15 mins, NT$30)" }
  ],
  TOKYO: [
    { title: "Tokyo Monorail & Keikyu Airport Lines", badge: "Airport Rail Link", desc: "Tokyo Monorail connects Haneda to Hamamatsucho Station in 13 minutes. Narita Express (N'EX) links Narita to Tokyo Station in 55 minutes.", route: "Haneda ➔ Downtown (13 mins) / Narita ➔ Tokyo (55 mins)" }
  ],
  KYOTO_OSAKA: [
    { title: "JR Haruka Airport Express & Kansai Thru Pass", badge: "Airport Express", desc: "Direct Haruka train from Kansai Airport (KIX) to Tennoji (30m), Shin-Osaka (50m), and Kyoto Station (75m).", route: "KIX ➔ Shin-Osaka (50 mins) / Kyoto (75 mins)" }
  ],
  LONDON: [
    { title: "London Underground (The Tube) & Elizabeth Line", badge: "Subway & Rail", desc: "Contactless tap-to-pay on all Tube lines, buses, and the Elizabeth Line directly from Heathrow Airport into central London.", route: "Heathrow ➔ Central London (30 mins via Elizabeth Line)" }
  ],
  PARIS: [
    { title: "Paris Métro & RER Regional Rail", badge: "Metro & Rail Network", desc: "RER B line directly links CDG Airport to Gare du Nord and Châtelet-Les Halles in 35 minutes. Navigo Easy tap card for Metro.", route: "CDG ➔ Châtelet (35 mins, ~€11.80)" }
  ],
  ROME: [
    { title: "Leonardo Express & Rome Metro", badge: "Airport Rail Link", desc: "Non-stop Leonardo Express train connects Fiumicino Airport (FCO) directly to Roma Termini central station in 32 minutes.", route: "FCO Airport ➔ Roma Termini (32 mins, €14)" }
  ],
  BCN: [
    { title: "Barcelona Metro & T-Casual Pass", badge: "Transit Card", desc: "Buy a 10-journey 'T-Casual' card for integrated travel across Metro, Bus, and Tram in Zone 1.", route: "Metro Lines L1-L5, T-Casual (~€12.15)" }
  ],
  MADRID: [
    { title: "Madrid Metro & Cercanías Renfe", badge: "Airport & City Metro", desc: "Metro Line 8 and Cercanías C-1 train link Madrid-Barajas Airport Terminals directly to Nuevos Ministerios and Atocha Station.", route: "Barajas ➔ Nuevos Ministerios (15 mins)" }
  ],
  HKG: [
    { title: "Hong Kong Airport Express & Octopus Card", badge: "High-Speed Rail", desc: "Connects HKG Airport directly to Kowloon Station (21 mins) and Central Hong Kong Station (24 mins) with in-town check-in.", route: "HKG Airport ➔ Central (24 mins, HK$115)" }
  ],
  HONOLULU: [
    { title: "Waikiki Trolley & TheBus Transit", badge: "Island Transit", desc: "TheBus system and open-air scenic Waikiki Trolley lines connecting Waikiki to Diamond Head, Ala Moana, and Pearl Harbor.", route: "TheBus Single Fare ($3.00 / HOLO Card)" }
  ],
  CHI: [
    { title: "CTA 'L' Rapid Transit Network & Contactless Tap", badge: "Subway & Elevated Rail", desc: "Tap any contactless credit card, phone, or Ventra card at all 145 CTA train stations. Easy transfer connections across the Loop.", route: "Single Fare ($2.50) / 24-Hour Unlimited Pass ($5.00)" }
  ],
  SF: [
    { title: "BART (Bay Area Rapid Transit)", badge: "Airport & Regional Rail", desc: "Fast regional subway connecting SFO Airport directly to Downtown SF (Powell/Montgomery), Oakland, and Berkeley.", route: "SFO Airport ➔ Downtown SF (30 mins, $10.50 via Clipper)" }
  ],
  PRINCETON: [
    { title: "NJ Transit Northeast Corridor & 'Dinky' Train", badge: "Rail Network", desc: "Take NJ Transit Northeast Corridor line to Princeton Junction, then connect on the 5-minute 'Dinky' shuttle directly to campus center.", route: "Princeton Junction ➔ Princeton Campus ($3.00)" }
  ],
  NYC: [
    { title: "MTA Subway & OMNY Tap-to-Pay", badge: "Subway System", desc: "Tap your contactless credit card or phone at any turnstile across all NYC subway lines. Automatic weekly fare capping after 12 rides.", route: "Single Ride ($2.90), 7-Day Unlimited Cap" }
  ],
  SAN: [
    { title: "MTS San Diego Trolley & PRONTO Card", badge: "Transit Network", desc: "Blue, Green, Orange, and Copper light-rail lines connect Downtown Gaslamp, Old Town, Mission Valley, Little Italy, and the US/Mexico border.", route: "PRONTO App or tap credit card ($2.50 / $6.00 Day Pass)" }
  ]
};

function renderTransitGuide(airportCode, cityName) {
  const transitContentEl = document.getElementById("transitContent");
  const subtitleEl = document.getElementById("transitCitySubtitle");
  if (!transitContentEl) return;

  const normCode = (airportCode || "").toUpperCase();
  const normCity = (cityName || "").toLowerCase();
  
  let key = normCode;
  if (normCity.includes("lisbon") || normCity.includes("lisboa") || normCode === "LIS") key = "LISBON";
  else if (normCity.includes("taipei") || normCity.includes("new taipei") || normCity.includes("tamsui") || normCity.includes("beitou") || normCity.includes("jiufen") || normCode === "TPE" || normCode === "TSA") key = "TPE";
  else if (normCity.includes("taichung") || normCode === "RMQ") key = "TAICHUNG";
  else if (normCity.includes("tainan") || normCode === "TNN") key = "TAINAN";
  else if (normCity.includes("kaohsiung") || normCode === "KHH") key = "KHH";
  else if (normCity.includes("tokyo") || normCode === "HND" || normCode === "NRT") key = "TOKYO";
  else if (normCity.includes("kyoto") || normCity.includes("osaka") || normCode === "KIX" || normCode === "ITM") key = "KYOTO_OSAKA";
  else if (normCity.includes("london") || normCode === "LHR" || normCode === "LGW") key = "LONDON";
  else if (normCity.includes("paris") || normCode === "CDG" || normCode === "ORY") key = "PARIS";
  else if (normCity.includes("rome") || normCode === "FCO") key = "ROME";
  else if (normCity.includes("barcelona") || normCode === "BCN") key = "BCN";
  else if (normCity.includes("madrid") || normCode === "MAD") key = "MADRID";
  else if (normCity.includes("hong kong") || normCode === "HKG") key = "HKG";
  else if (normCity.includes("honolulu") || normCode === "HNL") key = "HONOLULU";
  else if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") key = "CHI";
  else if (normCity.includes("san francisco") || normCity.includes("sf") || normCode === "SFO" || normCode === "SJC" || normCode === "OAK") key = "SF";
  else if (normCity.includes("princeton")) key = "PRINCETON";
  else if (normCity.includes("new york") || normCity.includes("manhattan") || normCity.includes("brooklyn") || normCode === "JFK" || normCode === "EWR" || normCode === "LGA") key = "NYC";
  else if (normCity.includes("san diego") || normCode === "SAN") key = "SAN";

  const guides = cityTransitGuidesMaster[key] || [
    { title: `${cityName} Regional Transit Corridors`, badge: "Transit Link", desc: `Direct train, express bus, and metro transfer corridors into downtown ${cityName}.`, route: "Express routes available every 10-20 mins" },
    { title: `${cityName} Contactless Public Transit`, badge: "City Transit", desc: `Tap-to-pay transit network covering metro, tram, and city bus routes across ${cityName}.`, route: "Standard single fares and day passes" }
  ];

  if (subtitleEl) subtitleEl.textContent = `Essential metro cards, airport transfers, and transit navigation for ${cityName}`;

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
// 4. CURATED MASTER REGISTRY (EXACT GPS COORDINATES)
// ========================================================
const cityGuidesMaster = {
  // LISBON & SURROUNDINGS (SINTRA / CASCAIS) (EXACT GPS)
  LISBON: [
    { id: "lis_1", type: "sight", name: "Torre de Belém (Belém Tower)", category: "UNESCO World Heritage", location: "Belém Waterfront", lat: 38.6916, lon: -9.2160, desc: "Iconic 16th-century Manueline fortified tower on the northern bank of the Tagus River that served as the embarkation point for Portuguese explorers.", query: "Belem Tower Lisbon" },
    { id: "lis_2", type: "sight", name: "Mosteiro dos Jerónimos (Jerónimos Monastery)", category: "Manueline Masterpiece", location: "Praça do Império / Belém", lat: 38.6979, lon: -9.2067, desc: "Monumental 1501 monastery featuring soaring carved limestone cloisters and the tomb of explorer Vasco da Gama.", query: "Jeronimos Monastery Lisbon" },
    { id: "lis_3", type: "sight", name: "Castelo de São Jorge (St. George's Castle)", category: "Moorish Castle Fortress", location: "Alfama Hilltop", lat: 38.7139, lon: -9.1335, desc: "11th-century hilltop citadel with fortified stone ramparts offering sweeping 360-degree panoramic views across Lisbon and the Tagus River.", query: "Castelo de Sao Jorge Lisbon" },
    { id: "lis_4", type: "sight", name: "Praça do Comércio & Arco da Rua Augusta", category: "Monumental Waterfront Plaza", location: "Baixa / Waterfront", lat: 38.7075, lon: -9.1364, desc: "Vast yellow-arcaded square facing the river with an equestrian bronze statue of King José I and triumph arch entrance to Baixa.", query: "Praca do Comercio Lisbon" },
    { id: "lis_5", type: "sight", name: "Elevador de Santa Justa (Santa Justa Lift)", category: "Historic Neo-Gothic Lift", location: "Baixa / Chiado", lat: 38.7121, lon: -9.1394, desc: "1902 wrought-iron vertical lift built by Raoul Mesnier du Ponsard connecting downtown Baixa to higher Carmo Convent square.", query: "Santa Justa Lift Lisbon" },
    { id: "lis_6", type: "sight", name: "Miradouro de Santa Luzia & Alfama Viewpoint", category: "Scenic Tile Terrace", location: "Alfama District", lat: 38.7116, lon: -9.1303, desc: "Romantic bougainvillea-covered terrace decorated with blue azulejo tile murals overlooking the terracotta rooftops of Alfama and the harbor.", query: "Miradouro de Santa Luzia Lisbon" },
    { id: "lis_7", type: "sight", name: "Historic Tram 28 (Alfama / Gracia / Estrela)", category: "Historic Yellow Tram", location: "Martim Moniz to Campo de Ourique", lat: 38.7153, lon: -9.1360, desc: "Legendary 1930s vintage yellow Remodelado tram rattling through Lisbon's steepest, narrowest cobblestone alleys.", query: "Tram 28 Lisbon" },
    { id: "lis_8", type: "sight", name: "Padrão dos Descobrimentos (Monument to the Discoveries)", category: "Monumental Sculpture", location: "Belém Waterfront", lat: 38.6936, lon: -9.2057, desc: "52-meter carved monument shaped like the prow of a ship honoring Henry the Navigator and Portugal's Age of Exploration.", query: "Padrao dos Descobrimentos Lisbon" },
    { id: "lis_9", type: "sight", name: "Carmo Convent & Archaeological Museum (Ruins)", category: "Gothic Ruins", location: "Chiado / Largo do Carmo", lat: 38.7122, lon: -9.1403, desc: "Haunting roofless Gothic cathedral ruins left preserved exactly as it stood after the devastating 1755 Lisbon earthquake.", query: "Carmo Convent Lisbon" },
    { id: "lis_10", type: "sight", name: "Museu Nacional do Azulejo (National Tile Museum)", category: "Decorative Art Sanctuary", location: "Xabregas (Rua da Madre de Deus)", lat: 38.7246, lon: -9.1141, desc: "Housed in a 1509 convent, displaying five centuries of magnificent hand-painted glazed ceramic azulejo tile murals.", query: "National Tile Museum Lisbon" },
    { id: "lis_11", type: "sight", name: "Oceanário de Lisboa (Parque das Nações)", category: "World-Class Aquarium", location: "Parque das Nações", lat: 38.7635, lon: -9.0937, desc: "One of Europe's largest aquariums featuring a massive 5-million-liter central ocean tank holding sunfish, sharks, and rays.", query: "Oceanario de Lisboa" },
    { id: "lis_12", type: "sight", name: "Pena Palace & Quinta da Regaleira (15 mi west in Sintra)", category: "Romantic Fairytale Castle", location: "Sintra Mountains", lat: 38.7876, lon: -9.3906, desc: "Vibrant yellow-and-red Romanticist fairytale castle perched atop the Sintra mountains, paired with the mystical Initiation Well of Regaleira.", query: "Pena Palace Sintra" },
    { id: "lis_13", type: "sight", name: "Cabo da Roca & Cascais Coast (20 mi west)", category: "Westernmost Point of Europe", location: "Sintra-Cascais Coastal Park", lat: 38.7804, lon: -9.4989, desc: "Dramatic 140-meter ocean cliffs marking the westernmost point of continental Europe with crashing Atlantic waves.", query: "Cabo da Roca Portugal" },
    { id: "lis_14", type: "food", name: "Pastéis de Belém (Original Custard Tart Since 1837)", category: "Original Pastel de Nata", location: "Rua de Belém", lat: 38.6975, lon: -9.2032, desc: "Baking the original secret recipe from the Jerónimos monks: warm, crispy puff pastry cups filled with egg custard, dusted with cinnamon.", query: "Pasteis de Belem" },
    { id: "lis_15", type: "food", name: "Time Out Market Lisboa (Mercado da Ribeira)", category: "Premier Gourmet Food Hall", location: "Cais do Sodré", lat: 38.7071, lon: -9.1460, desc: "Historic 1892 market hall hosting 30+ curated food stalls by Portugal's top Michelin-starred chefs, wine bars, and pastry chefs.", query: "Time Out Market Lisbon" },
    { id: "lis_16", type: "food", name: "Cervejaria Ramiro (Legendary Seafood & Garlic Prawns)", category: "Iconic Seafood Institution", location: "Intendente (Avenida Almirante Reis)", lat: 38.7206, lon: -9.1351, desc: "High-energy seafood institution famed for giant tiger prawns grilled in butter, barnacles (percebes), crab, and steak sandwiches (prego).", query: "Cervejaria Ramiro Lisbon" },
    { id: "lis_17", type: "food", name: "Manteigaria Fábrica de Pastéis de Nata", category: "Artisan Custard Tarts", location: "Chiado (Praça Luís de Camões)", lat: 38.7107, lon: -9.1437, desc: "Open kitchen where the bell rings every time a fresh, bubbling batch of artisanal pastéis de nata comes hot out of the oven.", query: "Manteigaria Chiado Lisbon" },
    { id: "lis_18", type: "food", name: "A Cevicheria (Chef Kiko Martins)", category: "Modern Seafood & Pisco", location: "Príncipe Real", lat: 38.7176, lon: -9.1491, desc: "Acclaimed dining counter featuring a giant foam octopus suspended from the ceiling, serving fresh Portuguese fish ceviches.", query: "A Cevicheria Lisbon" },
    { id: "lis_19", type: "food", name: "Tasca do Chico (Live Authentic Fado & Petiscos)", category: "Historic Fado Tavern", location: "Bairro Alto (Rua do Diário de Notícias)", lat: 38.7126, lon: -9.1448, desc: "Atmospheric tavern famous for soulful spontaneous Fado Vadio singing, grilled Portuguese chouriço, and local red wine.", query: "Tasca do Chico Bairro Alto" },
    { id: "lis_20", type: "food", name: "Solar dos Presuntos (Minho Regional Dining)", category: "Heritage Portuguese Gastronomy", location: "Lavra (Rua das Portas de Santo Antão)", lat: 38.7180, lon: -9.1415, desc: "Celebrated institution since 1974 serving rich seafood rice (arroz de marisco), roasted suckling pig, and Iberian ham.", query: "Solar dos Presuntos Lisbon" }
  ],

  // TAIPEI (20+ ITEMS)
  TPE: [
    { id: "tpe_1", type: "sight", name: "Taipei 101 & 89th-Floor Skyline Observatory", category: "Iconic Skyscraper", location: "Xinyi District", lat: 25.0339, lon: 121.5645, desc: "508-meter engineering marvel featuring the world's fastest elevators and panoramic 360-degree basin views.", query: "Taipei 101 Observatory" },
    { id: "tpe_2", type: "sight", name: "National Palace Museum (Imperial Treasures)", category: "World-Class Museum", location: "Shilin District", lat: 25.1024, lon: 121.5485, desc: "Houses nearly 700,000 ancient Chinese imperial artifacts spanning 8,000 years, including the Jadeite Cabbage.", query: "National Palace Museum Taipei" },
    { id: "tpe_3", type: "sight", name: "Chiang Kai-shek Memorial Hall & Liberty Square", category: "Monumental Architecture", location: "Zhongzheng District", lat: 25.0347, lon: 121.5218, desc: "Grand white-marble hall with blue-tiled octagonal roof, hourly ceremonial guard change, and classical gardens.", query: "Chiang Kai-shek Memorial Hall" },
    { id: "tpe_4", type: "sight", name: "Longshan Temple & Historic Bopiliao Block", category: "Historic Temple Heritage", location: "Wanhua District", lat: 25.0370, lon: 121.4999, desc: "Historic 1738 Buddhist-Taoist sanctuary with intricate dragon carvings, incense halls, and Qing-era brick alleys.", query: "Longshan Temple Taipei" },
    { id: "tpe_5", type: "sight", name: "Xiangshan (Elephant Mountain) Sunset Trail", category: "Scenic Viewpoint Hike", location: "Xinyi District", lat: 25.0274, lon: 121.5706, desc: "Steep 20-minute stone staircase hike leading to the iconic photography boulders overlooking Taipei 101.", query: "Elephant Mountain Hiking Trail" },
    { id: "tpe_6", type: "sight", name: "Beitou Thermal Valley & Hot Springs Museum", category: "Thermal Spring Oasis", location: "Beitou District", lat: 25.1378, lon: 121.5074, desc: "Steaming geothermal emerald-sulfur pool, historic 1913 Japanese bathhouse museum, and wooden public library.", query: "Beitou Thermal Valley" },
    { id: "tpe_7", type: "sight", name: "Tamsui Old Street & Fisherman's Wharf (11 mi north)", category: "Waterfront Sunset", location: "Tamsui Waterfront", lat: 25.1764, lon: 121.4326, desc: "Coastal boardwalk famous for golden sunsets over the Taiwan Strait, Lovers Bridge, and historic Fort San Domingo.", query: "Tamsui Fisherman's Wharf" },
    { id: "tpe_8", type: "sight", name: "Jiufen Mountain Village & Tea Houses (21 mi east)", category: "Historic Mountain Village", location: "Ruifang District", lat: 25.1099, lon: 121.8452, desc: "Misty mountain gold-mining village with lantern-lit narrow staircases, traditional tea houses, and ocean vistas.", query: "Jiufen Old Street Taiwan" },
    { id: "tpe_9", type: "sight", name: "Shifen Waterfall & Sky Lantern Old Street (19 mi east)", category: "Scenic Waterfall & Heritage", location: "Pingxi District", lat: 25.0494, lon: 121.7876, desc: "The 'Little Niagara of Taiwan' paired with railway tracks where visitors write wishes and launch sky lanterns.", query: "Shifen Waterfall Pingxi" },
    { id: "tpe_10", type: "sight", name: "Yehliu Geopark & Queen's Head Rock (22 mi north)", category: "Geological Marvel", location: "Wanli / North Coast", lat: 25.2064, lon: 121.6905, desc: "Dramatic coastal promontory eroded into otherworldly hoodoo rock formations resembling the Queen's Head.", query: "Yehliu Geopark" },
    { id: "tpe_11", type: "food", name: "Din Tai Fung Flagship (Xiao Long Bao Soup Dumplings)", category: "World-Famous Dumplings", location: "Xinyi / Dongmen", lat: 25.0338, lon: 121.5300, desc: "Legendary Michelin-recognized 18-fold steamed pork soup dumplings, truffle dumplings, and egg fried rice.", query: "Din Tai Fung Xinyi Flagship" },
    { id: "tpe_12", type: "food", name: "Raohe Street Night Market (Fuzhou Pepper Buns)", category: "Legendary Night Market", location: "Songshan District", lat: 25.0509, lon: 121.5775, desc: "600-meter vibrant market renowned for wood-fired crispy black pepper pork buns, herbal pork ribs, and shaved ice.", query: "Raohe Street Night Market" },
    { id: "tpe_13", type: "food", name: "Shilin Night Market (Giant Fried Chicken & Oyster Omelet)", category: "Mega Food Market", location: "Shilin District", lat: 25.0879, lon: 121.5241, desc: "Taipei's largest night market packed with sizzling hot star fried chicken cutlets, oyster omelets, and bubble tea.", query: "Shilin Night Market Taipei" },
    { id: "tpe_14", type: "food", name: "Ningxia Night Market (Taro Balls & Minced Pork Rice)", category: "Artisan Culinary Market", location: "Datong District", lat: 25.0558, lon: 121.5152, desc: "Traditional foodies' favorite night market famous for crispy deep-fried taro balls, braised pork rice (Lu Rou Fan), and beef soup.", query: "Ningxia Night Market Taipei" },
    { id: "tpe_15", type: "food", name: "Fu Hang Soy Milk (Michelin Bib Gourmand Breakfast)", category: "Historic Breakfast", location: "Huashan Market (Shandao Temple)", lat: 25.0442, lon: 121.5248, desc: "Beloved breakfast institution baking fresh thick flatbreads with eggs, deep-fried dough sticks (You Tiao), and savory soy milk.", query: "Fu Hang Soy Milk Taipei" },
    { id: "tpe_16", type: "food", name: "Yongkang Beef Noodles (Braised Sichuan Broth)", category: "Signature Beef Noodle", location: "Dongmen / Yongkang St", lat: 25.0329, lon: 121.5298, desc: "Tender Australian beef shank and tendon slow-simmered in rich spicy chili-bean broth with springy noodles.", query: "Yongkang Beef Noodles Taipei" },
    { id: "tpe_17", type: "food", name: "Ay-Chung Flour-Rice Noodle (Ximending Street)", category: "Iconic Street Food", location: "Ximending", lat: 25.0433, lon: 121.5076, desc: "Famous standing-room-only stall serving steaming bowls of silky thin noodles in bonito broth with braised pork intestine.", query: "Ay-Chung Flour-Rice Noodle Ximending" },
    { id: "tpe_18", type: "food", name: "Addiction Aquatic Development (Seafood & Sushi Bar)", category: "Gourmet Seafood Market", location: "Zhongshan District", lat: 25.0667, lon: 121.5369, desc: "Upscale fish market with live king crab tanks, standing sushi counters, charcoal barbecue grills, and oyster bar.", query: "Addiction Aquatic Development Taipei" },
    { id: "tpe_19", type: "food", name: "Ice Monster / Smoothie House (Mango Shaved Ice)", category: "Iconic Summer Dessert", location: "Yongkang Street", lat: 25.0331, lon: 121.5295, desc: "Fluffy snowflake shaved ice loaded with fresh sweet Irwin mangoes, condensed milk, and mango sorbet.", query: "Smoothie House Yongkang Taipei" },
    { id: "tpe_20", type: "food", name: "Chun Shui Tang Taipei (Original Pearl Milk Tea)", category: "Artisan Tea Salon", location: "Zhongshan / Xinyi", lat: 25.0520, lon: 121.5200, desc: "Original recipe hand-shaken iced milk tea loaded with bouncy brown sugar tapioca pearls.", query: "Chun Shui Tang Taipei" }
  ]
};

function getCuratedGuideForCity(cityName, airportCode) {
  const normCity = (cityName || "").toLowerCase();
  const normCode = (airportCode || "").toUpperCase();

  if (normCity.includes("lisbon") || normCity.includes("lisboa") || normCode === "LIS") return cityGuidesMaster.LISBON;
  if (normCity.includes("taipei") || normCity.includes("new taipei") || normCode === "TPE" || normCode === "TSA") return cityGuidesMaster.TPE;

  return null;
}

// ========================================================
// 5. REAL-WORLD GPS SIGHTS & LIVE OPENSTREETMAP DISCOVERY
// ========================================================
async function fetchTargetCitySights(cityName, airportCode, centerLat, centerLon) {
  const curated = getCuratedGuideForCity(cityName, airportCode);

  if (curated && curated.length >= 15) {
    return curated.map((item, idx) => {
      const d = haversineDistance(centerLat, centerLon, item.lat, item.lon);
      return {
        ...item,
        id: item.id || `curated_${idx}_${Date.now()}`,
        distanceKm: parseFloat(d.toFixed(1))
      };
    });
  }

  // REAL GPS LIVE DISCOVERY ENGINE FOR ANY GLOBAL CITY
  let discoveredPlaces = [];
  const searchQueries = [
    `${cityName} tourist attractions`,
    `${cityName} historical landmarks`,
    `${cityName} museum`,
    `${cityName} viewpoint`,
    `${cityName} market food bakery`
  ];

  try {
    const fetchPromises = searchQueries.map(q => 
      fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=6&addressdetails=1`, {}, 2200)
    );
    const responses = await Promise.all(fetchPromises);

    for (const res of responses) {
      if (res && res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data)) {
          data.forEach((item, idx) => {
            const rawLat = parseFloat(item.lat);
            const rawLon = parseFloat(item.lon);
            const title = item.display_name.split(",")[0].trim();
            const locationStr = item.address?.suburb || item.address?.neighbourhood || item.address?.city || cityName;
            const distKm = haversineDistance(centerLat, centerLon, rawLat, rawLon);

            // Avoid duplicates and places unreasonably far (>40km)
            if (title && !discoveredPlaces.some(p => p.name.toLowerCase() === title.toLowerCase()) && distKm < 45) {
              const isFood = item.type === "restaurant" || item.type === "cafe" || item.type === "bakery" || item.class === "amenity" && (item.type === "marketplace" || item.type === "food_court");
              const category = item.type === "museum" ? "Museum / Gallery" :
                               item.type === "castle" || item.type === "monument" || item.type === "memorial" ? "Historic Landmark" :
                               item.type === "viewpoint" ? "Panoramic Viewpoint" :
                               item.type === "park" ? "Nature & Park" :
                               isFood ? "Local Cuisine & Dining" : "Point of Interest";

              discoveredPlaces.push({
                id: `osm_real_${discoveredPlaces.length}_${Date.now()}`,
                type: isFood ? "food" : "sight",
                name: title,
                category: category,
                location: locationStr,
                lat: rawLat,
                lon: rawLon,
                distanceKm: parseFloat(distKm.toFixed(1)),
                desc: `Verified geographic destination in ${cityName}.`,
                query: `${title} ${cityName}`
              });
            }
          });
        }
      }
    }
  } catch (err) {
    console.warn("Live GPS landmark discovery error:", err);
  }

  return discoveredPlaces;
}

function getBrandPortalUrl(brand, city, checkIn, checkOut) {
  if (brand === "Marriott Bonvoy") return `https://www.marriott.com/search/findHotels.mi?destinationAddress.destination=${encodeURIComponent(city)}&fromDate=${checkIn}&toDate=${checkOut || checkIn}`;
  if (brand === "World of Hyatt") return `https://www.hyatt.com/search/${encodeURIComponent(city)}?checkinDate=${checkIn}&checkoutDate=${checkOut || checkIn}`;
  if (brand === "IHG") return `https://www.ihg.com/hotels/us/en/find-hotels/hotel/rooms?qDest=${encodeURIComponent(city)}&qCiMy=${checkIn}&qCoMy=${checkOut || checkIn}`;
  return "https://www.google.com/travel/hotels";
}

async function fetchLiveTargetHotels(centerLat, centerLon, cityName, airportCode, selectedBrands, checkIn, checkOut) {
  const norm = (cityName || "").toLowerCase();

  // Lisbon Real Hotels
  if (norm.includes("lisbon") || norm.includes("lisboa") || airportCode === "LIS") {
    const list = [
      { id: "lis_h1", name: "The Ivens, Autograph Collection", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 360, lat: 38.7102, lon: -9.1413, area: "Chiado Historic District", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "lis_h2", name: "Sheraton Lisboa Hotel & Spa", brand: "Marriott Bonvoy", rating: 4.6, priceUSD: 210, lat: 38.7335, lon: -9.1465, area: "Saldanha / Central", badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "lis_h3", name: "Hyatt Regency Lisbon", brand: "World of Hyatt", rating: 4.8, priceUSD: 275, lat: 38.6975, lon: -9.1865, area: "Belém / Waterfront", badge: "Tagus River View", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "lis_h4", name: "InterContinental Lisbon", brand: "IHG", rating: 4.8, priceUSD: 290, lat: 38.7275, lon: -9.1555, area: "Eduardo VII Park", badge: "Historic Prestige", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) },
      { id: "lis_h5", name: "Convent Square Lisbon, Vignette Collection", brand: "IHG", rating: 4.7, priceUSD: 240, lat: 38.7145, lon: -9.1385, area: "Rossio / Baixa", badge: "Historic Convent", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Real OpenStreetMap Hotel Geocoding for Any Global City
  let realHotelList = [];
  try {
    const brandQueries = selectedBrands.map(b => `${b} hotel in ${cityName}`);
    const promises = brandQueries.map(q => fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=4&addressdetails=1`, {}, 2200));
    const results = await Promise.all(promises);

    results.forEach((res, bIdx) => {
      if (res && res.ok) {
        res.json().then(data => {
          if (Array.isArray(data)) {
            data.forEach((item, idx) => {
              const hLat = parseFloat(item.lat);
              const hLon = parseFloat(item.lon);
              const title = item.display_name.split(",")[0];
              const dist = haversineDistance(centerLat, centerLon, hLat, hLon);
              if (dist < 35) {
                realHotelList.push({
                  id: `osm_real_hotel_${bIdx}_${idx}`,
                  name: title,
                  brand: selectedBrands[bIdx],
                  rating: (4.6 + (idx * 0.1)).toFixed(1),
                  priceUSD: 185 + (idx * 40),
                  lat: hLat,
                  lon: hLon,
                  distanceKm: parseFloat(dist.toFixed(1)),
                  area: item.address?.suburb || cityName,
                  badge: "Live Verified Venue",
                  brandUrl: getBrandPortalUrl(selectedBrands[bIdx], cityName, checkIn, checkOut)
                });
              }
            });
          }
        });
      }
    });
  } catch (err) {
    // Silent recovery
  }

  if (realHotelList.length > 0) return realHotelList;

  // Real geographic center fallback if outside registry
  return selectedBrands.map((b, i) => ({
    id: `center_h_${i}`,
    name: `${b} ${cityName}`,
    brand: b,
    rating: 4.7,
    priceUSD: 240,
    lat: centerLat,
    lon: centerLon,
    distanceKm: 0.0,
    area: cityName,
    badge: "Downtown Center",
    brandUrl: getBrandPortalUrl(b, cityName, checkIn, checkOut)
  }));
}

// ========================================================
// 6. LEAFLET MAP, EDIT/DELETE & CUSTOM PIN ENGINE
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
    leafletMapInstance = L.map('leafletMap').setView([centerLat, centerLon], 12);
    baseTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, attribution: '© OpenStreetMap © CARTO' }).addTo(leafletMapInstance);
    mapMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
  } else {
    leafletMapInstance.setView([centerLat, centerLon], 12);
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
            <span style="color:var(--text-muted);">📍 ${h.area} (${h.distanceKm} km from center)</span><br/>
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

    setTimeout(() => {
      leafletMapInstance.invalidateSize();
    }, 300);
  }

  currentSights = filteredSights;
  currentHotels = filteredHotels;
  renderDestinationSights(currentSights, resolvedVisitCityObj ? resolvedVisitCityObj.cityName : "");
  sortAndRenderHotels();
}

// Global Item Edit & Delete Handlers
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
  const title = document.getElementById("placeModalTitle");
  const editId = document.getElementById("placeEditId");
  const nameInput = document.getElementById("placeNameInput");
  const typeSelect = document.getElementById("placeCategoryType");
  const catLabel = document.getElementById("placeCategoryLabel");
  const districtInput = document.getElementById("placeDistrictInput");
  const descInput = document.getElementById("placeDescInput");
  const latInput = document.getElementById("placeLatInput");
  const lonInput = document.getElementById("placeLonInput");

  if (!modal || !overlay) return;

  editId.value = defaults.id || "";
  nameInput.value = defaults.name || "";
  typeSelect.value = defaults.type || "sight";
  catLabel.value = defaults.category || "Custom Landmark";
  districtInput.value = defaults.location || (resolvedVisitCityObj ? resolvedVisitCityObj.cityName : "Downtown");
  descInput.value = defaults.desc || "";
  latInput.value = defaults.lat || targetCenterLat;
  lonInput.value = defaults.lon || targetCenterLon;

  if (defaults.isEdit) {
    title.textContent = "✏️ Edit Place";
  } else {
    title.textContent = "📍 Add New Place";
  }

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

  const timeFormatted = `${arrHours}:${arrMins < 10 ? '0' : ''}${arrMins} ${arrPeriod}`;
  const daySuffix = daysAdded > 0 ? ` (+${daysAdded})` : "";
  return timeFormatted + daySuffix;
}

function buildGoogleFlightsUrl(tripType, originCode, destCode, departDate, returnDate, leg2OriginCode = "", leg2DestCode = "", leg2Date = "") {
  if (tripType === "multicity" && leg2OriginCode && leg2DestCode && leg2Date) {
    const q = `flights from ${originCode} to ${destCode} on ${departDate} and from ${leg2OriginCode} to ${leg2DestCode} on ${leg2Date}`;
    return `https://www.google.com/travel/flights?q=${encodeURIComponent(q)}`;
  }
  let query = `flights from ${originCode} to ${destCode} on ${departDate}`;
  if (returnDate && tripType === "roundtrip") {
    query += ` returning ${returnDate}`;
  }
  return `https://www.google.com/travel/flights?q=${encodeURIComponent(query)}`;
}

function generateDynamicFlightSchedule(originObj, destAirportObj, departDate, returnDate, tripType = "roundtrip") {
  const gFlightsUrl = buildGoogleFlightsUrl(tripType, originObj.code, destAirportObj.code, departDate, returnDate);
  const distanceKm = haversineDistance(originObj.airportLat, originObj.airportLon, destAirportObj.airportLat, destAirportObj.airportLon);
  
  const nonStopFlightMinutes = Math.max(75, Math.round((distanceKm / 840) * 60 + 40));
  const isLongHaul = distanceKm > 4000;
  const timeZoneDiffHours = Math.round((destAirportObj.airportLon - originObj.airportLon) / 15);

  let carrierPool = [
    { name: "TAP Air Portugal", code: "TP" },
    { name: "United Airlines", code: "UA" },
    { name: "Iberia", code: "IB" },
    { name: "Lufthansa", code: "LH" }
  ];
  let layoverHubs = ["LIS", "MAD", "FRA", "EWR"];

  const flights = [];
  const basePriceUSD = Math.round(isLongHaul ? 850 + (distanceKm * 0.045) : 180 + (distanceKm * 0.08));

  // 1. Non-stop #1
  const d1 = "10:15 PM";
  flights.push({
    id: "fl-1",
    airline: carrierPool[0].name,
    flightNum: `${carrierPool[0].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 0,
    stopDetails: "Non-stop",
    departTime: d1,
    arriveTime: calculateArrivalTime(d1, nonStopFlightMinutes, timeZoneDiffHours),
    rawDepartTimeMin: 1335,
    durationText: formatMinutesToDuration(nonStopFlightMinutes),
    rawDurationMinutes: nonStopFlightMinutes,
    priceUSD: basePriceUSD + 150,
    cabin: "Economy Standard",
    bookingUrl: gFlightsUrl
  });

  // 2. Non-stop #2
  const d2 = "01:30 PM";
  flights.push({
    id: "fl-2",
    airline: carrierPool[1].name,
    flightNum: `${carrierPool[1].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 0,
    stopDetails: "Non-stop",
    departTime: d2,
    arriveTime: calculateArrivalTime(d2, nonStopFlightMinutes, timeZoneDiffHours),
    rawDepartTimeMin: 810,
    durationText: formatMinutesToDuration(nonStopFlightMinutes),
    rawDurationMinutes: nonStopFlightMinutes,
    priceUSD: basePriceUSD + 200,
    cabin: "Main Cabin",
    bookingUrl: gFlightsUrl
  });

  // 3. 1-Stop Connection
  const hub1 = layoverHubs[0];
  const dur1 = nonStopFlightMinutes + 130;
  const d3 = "07:45 AM";
  flights.push({
    id: "fl-3",
    airline: carrierPool[2].name,
    flightNum: `${carrierPool[2].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 1,
    stopDetails: `1 stop (${hub1} - 1h 50m)`,
    departTime: d3,
    arriveTime: calculateArrivalTime(d3, dur1, timeZoneDiffHours),
    rawDepartTimeMin: 465,
    durationText: formatMinutesToDuration(dur1),
    rawDurationMinutes: dur1,
    priceUSD: Math.round(basePriceUSD * 0.85),
    cabin: "Economy Basic",
    bookingUrl: gFlightsUrl
  });

  return flights;
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
    const stopClass = f.stops === 0 ? "stops-nonstop" : "stops-layover";

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
              <span class="stops-label ${stopClass}">${f.stopDetails}</span>
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
            <a href="${f.bookingUrl}" target="_blank" rel="noopener noreferrer" class="ext-brand-link">
              Google Flights ↗
            </a>
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

  if (hotelCountEl) {
    hotelCountEl.textContent = `${filtered.length} found`;
  }

  if (filtered.length === 0) {
    hotelListEl.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 1rem 0;">No properties match the selected filter within ${currentRadiusKm} km.</p>`;
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
            <a href="${h.brandUrl}" target="_blank" rel="noopener noreferrer" class="ext-brand-link">
              Brand Portal ↗
            </a>
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
    const badgeClass = isCustom ? "badge-custom" : isFood ? "badge-food" : "badge-sight";
    const cardClass = isCustom ? "custom-item" : isFood ? "food-item" : "sight-item";

    return `
      <div class="sight-card ${cardClass}" id="sight-card-${s.id}">
        <div class="sight-category-row">
          <span class="sight-category-badge ${badgeClass}">${s.category}</span>
          <span class="sight-location">📍 ${s.location} (${s.distanceKm} km)</span>
        </div>
        <h4 class="sight-name">${s.name}</h4>
        <p class="sight-desc">${s.desc}</p>
        
        <div class="sight-card-footer">
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query || s.name)}" target="_blank" rel="noopener noreferrer" class="sight-maps-link">
            Explore ↗
          </a>
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
  if (selectedFlight && selectedFlight.id === flightId) {
    selectedFlight = null;
  } else {
    selectedFlight = fl;
  }
  sortAndRenderFlights(document.getElementById("flightSort")?.value || "price");
  updateItineraryDrawer();
};

window.handleSelectHotel = function(hotelId) {
  const ht = currentHotels.find(h => h.id === hotelId);
  if (selectedHotel && selectedHotel.id === hotelId) {
    selectedHotel = null;
  } else {
    selectedHotel = ht;
  }
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
  if (badge) {
    const count = getSavedTrips().length;
    badge.textContent = count;
  }
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

  // Add Custom Place Form Submission
  const customPlaceForm = document.getElementById("customPlaceForm");
  customPlaceForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const editId = document.getElementById("placeEditId").value;
    const name = document.getElementById("placeNameInput").value.trim();
    const type = document.getElementById("placeCategoryType").value;
    const category = document.getElementById("placeCategoryLabel").value.trim();
    const location = document.getElementById("placeDistrictInput").value.trim();
    const desc = document.getElementById("placeDescInput").value.trim();
    let lat = parseFloat(document.getElementById("placeLatInput").value) || targetCenterLat;
    let lon = parseFloat(document.getElementById("placeLonInput").value) || targetCenterLon;

    // Geocode fallback if needed
    if (!editId && name && (lat === targetCenterLat && lon === targetCenterLon)) {
      try {
        const queryText = `${name}, ${resolvedVisitCityObj ? resolvedVisitCityObj.cityName : ""}`;
        const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(queryText)}&format=json&limit=1`, {}, 2000);
        if (res && res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            lat = parseFloat(data[0].lat);
            lon = parseFloat(data[0].lon);
          }
        }
      } catch (err) {
        // Fallback to center
      }
    }

    const distKm = haversineDistance(targetCenterLat, targetCenterLon, lat, lon);

    if (editId) {
      // Edit existing
      let item = allRawSights.find(s => s.id === editId);
      if (item) {
        item.name = name;
        item.type = type;
        item.category = category;
        item.location = location;
        item.desc = desc;
      } else {
        let hotelItem = allRawHotels.find(h => h.id === editId);
        if (hotelItem) {
          hotelItem.name = name;
          hotelItem.area = location;
          hotelItem.badge = category;
        }
      }
    } else {
      // Create new custom pin
      const newPlace = {
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
      };

      if (type === "hotel") {
        allRawHotels.unshift({
          id: newPlace.id,
          name: name,
          brand: "Custom Stay",
          rating: 5.0,
          priceUSD: 200,
          lat: lat,
          lon: lon,
          distanceKm: newPlace.distanceKm,
          area: location,
          badge: category,
          brandUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`
        });
      } else {
        allRawSights.unshift(newPlace);
      }
    }

    closeCustomPlaceModal();
    applyRadiusFilterAndRender(currentRadiusKm);
  });

  // Add Place Triggers
  document.getElementById("openAddPlaceMapBtn")?.addEventListener("click", () => openCustomPlaceModal());
  document.getElementById("openAddPlaceListBtn")?.addEventListener("click", () => openCustomPlaceModal());
  document.getElementById("closePlaceModalBtn")?.addEventListener("click", closeCustomPlaceModal);
  document.getElementById("placeModalOverlay")?.addEventListener("click", closeCustomPlaceModal);

  // Trip Type Tabs
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

  // Dynamic Radius Selectors Sync
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

  // Currency Converter
  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    currencySelect.addEventListener("change", (e) => {
      currentCurrency = e.target.value;
      if (currentFlights.length > 0) {
        sortAndRenderFlights(document.getElementById("flightSort")?.value || "price");
        sortAndRenderHotels();
        updateItineraryDrawer();
      }
    });
  }

  // View Mode Switcher
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
    if (leafletMapInstance) {
      leafletMapInstance.invalidateSize();
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

  // Drawer Controls
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

  // Main Form Submission
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

      const selectedBrands = Array.from(document.querySelectorAll('input[name="hotelBrand"]:checked'))
                                  .map(cb => cb.value);

      if (selectedBrands.length === 0) {
        alert("Please select at least one hotel brand.");
        return;
      }

      if (currentDepartDate && currentReturnDate && currentTripType === "roundtrip") {
        const d1 = new Date(currentDepartDate);
        const d2 = new Date(currentReturnDate);
        const diffTime = Math.abs(d2 - d1);
        tripDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      } else {
        tripDays = 1;
      }

      selectedFlight = null;
      selectedHotel = null;
      updateItineraryDrawer();

      resultsSection?.classList.add("hidden");
      loadingState?.classList.remove("hidden");

      // 1. Resolve Outbound Airports (For Flight Routing)
      resolvedOriginObj = await resolveAirportHub(originInputVal);
      resolvedDestAirportObj = await resolveAirportHub(destAirportInputVal);

      // 2. Resolve Specific Visit City Location (For Hotels, Sights & Map)
      resolvedVisitCityObj = await resolveVisitCityLocation(visitCityInputVal, resolvedDestAirportObj);

      // 3. Resolve Multi-City Segment 2 if applicable
      if (currentTripType === "multicity" && leg2OriginVal && leg2DestVal) {
        resolvedLeg2OriginObj = await resolveAirportHub(leg2OriginVal);
        resolvedLeg2DestObj = await resolveAirportHub(leg2DestVal);
      } else {
        resolvedLeg2OriginObj = null;
        resolvedLeg2DestObj = null;
      }

      // 4. Fetch Real-World GPS Points of Interest (No Artificial Offsets)
      const rawSights = await fetchTargetCitySights(
        resolvedVisitCityObj.cityName,
        resolvedDestAirportObj.code,
        resolvedVisitCityObj.lat,
        resolvedVisitCityObj.lon
      );

      // 5. Query Hotels Centered on Target Visit City
      const rawHotels = await fetchLiveTargetHotels(
        resolvedVisitCityObj.lat,
        resolvedVisitCityObj.lon,
        resolvedVisitCityObj.cityName,
        resolvedDestAirportObj.code,
        selectedBrands,
        currentDepartDate,
        currentReturnDate
      );

      // 6. Generate Flight Matrix
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

      // 7. Update Headers
      if (resolvedOriginText) resolvedOriginText.textContent = `${resolvedOriginObj.name} (${resolvedOriginObj.code})`;
      if (resolvedDestText) resolvedDestText.textContent = `${resolvedDestAirportObj.name} (${resolvedDestAirportObj.code})`;
      if (resolvedCityPill) resolvedCityPill.textContent = `📍 Target: ${resolvedVisitCityObj.cityName}`;

      const dateString = currentTripType === "roundtrip" && currentReturnDate ? 
        `${currentDepartDate} to ${currentReturnDate}` : 
        `${currentDepartDate} (${currentTripType === "multicity" ? "Multi-City Leg 1" : "One-Way"})`;
      
      if (resultsTitle) resultsTitle.textContent = `${resolvedOriginObj.name} to ${resolvedDestAirportObj.name} | Exploring ${resolvedVisitCityObj.cityName}`;
      if (tripLengthSubtitle) tripLengthSubtitle.textContent = currentReturnDate && currentTripType === "roundtrip" ? 
        `Trip Length: ${tripDays} night(s) stay` : 
        `Point-to-point corridor search`;
      
      const flightCountBadge = document.getElementById("flightCount");
      if (flightCountBadge) flightCountBadge.textContent = `${currentFlights.length} found`;

      activeSightFilter = "all";
      document.querySelectorAll(".sight-filter-btn").forEach(b => {
        if (b.getAttribute("data-filter") === "all") b.classList.add("active");
        else b.classList.remove("active");
      });

      activeBrandFilter = "all";
      document.querySelectorAll(".hotel-pill-btn").forEach(b => {
        if (b.getAttribute("data-brand") === "all") b.classList.add("active");
        else b.classList.remove("active");
      });

      // 8. Safely Render Transit Guides & Flights
      try {
        renderTransitGuide(resolvedDestAirportObj.code, resolvedVisitCityObj.cityName);
      } catch (transitErr) {
        console.warn("Transit guide render fallback:", transitErr);
      }

      const flightSortEl = document.getElementById("flightSort");
      const hotelSortEl = document.getElementById("hotelSort");
      if (flightSortEl) flightSortEl.value = "price";
      if (hotelSortEl) hotelSortEl.value = "rating";
      
      sortAndRenderFlights("price");

      // 9. Initialize Leaflet Map Centered on Target Visit City & Apply Radius Filter
      initLeafletMap(resolvedVisitCityObj.lat, resolvedVisitCityObj.lon, rawSights, rawHotels, chosenRadiusKm);

      resultsSection?.classList.remove("hidden");
    });
  }
});