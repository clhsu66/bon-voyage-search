// ========================================================
// 1. GLOBAL AIRPORT & DOWNTOWN DIRECTORY
// ========================================================
const majorAirportCatalog = [
  // Taiwan Hubs
  { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan", airportLat: 25.0797, airportLon: 121.2342, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "TSA", name: "Taipei Songshan Airport", city: "Taipei", country: "Taiwan", airportLat: 25.0697, airportLon: 121.5525, cityLat: 25.0330, cityLon: 121.5654 },
  { code: "RMQ", name: "Taichung International Airport", city: "Taichung", country: "Taiwan", airportLat: 24.2647, airportLon: 120.6214, cityLat: 24.1477, cityLon: 120.6736 },
  { code: "TNN", name: "Tainan Airport", city: "Tainan", country: "Taiwan", airportLat: 22.9506, airportLon: 120.2058, cityLat: 22.9997, cityLon: 120.2270 },
  { code: "KHH", name: "Kaohsiung International Airport", city: "Kaohsiung", country: "Taiwan", airportLat: 22.5772, airportLon: 120.3500, cityLat: 22.6273, cityLon: 120.3014 },

  // Japan Hubs
  { code: "HND", name: "Tokyo Haneda", city: "Tokyo", country: "Japan", airportLat: 35.5494, airportLon: 139.7798, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "NRT", name: "Tokyo Narita", city: "Tokyo", country: "Japan", airportLat: 35.7720, airportLon: 140.3929, cityLat: 35.6895, cityLon: 139.6917 },
  { code: "KIX", name: "Kansai International (Kyoto/Osaka)", city: "Kyoto / Osaka", country: "Japan", airportLat: 34.4320, airportLon: 135.2304, cityLat: 35.0116, cityLon: 135.7681 },
  { code: "ITM", name: "Osaka Itami", city: "Osaka", country: "Japan", airportLat: 34.7855, airportLon: 135.4382, cityLat: 34.6937, cityLon: 135.5023 },

  // Europe Hubs
  { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom", airportLat: 51.4700, airportLon: -0.4543, cityLat: 51.5074, cityLon: -0.1278 },
  { code: "LGW", name: "London Gatwick", city: "London", country: "United Kingdom", airportLat: 51.1537, airportLon: -0.1821, cityLat: 51.5074, cityLon: -0.1278 },
  { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France", airportLat: 49.0097, airportLon: 2.5479, cityLat: 48.8566, cityLon: 2.3522 },
  { code: "ORY", name: "Paris Orly", city: "Paris", country: "France", airportLat: 48.7262, airportLon: 2.3652, cityLat: 48.8566, cityLon: 2.3522 },
  { code: "FCO", name: "Rome Fiumicino Leonardo da Vinci", city: "Rome", country: "Italy", airportLat: 41.8003, airportLon: 12.2389, cityLat: 41.9028, cityLon: 12.4964 },
  { code: "BCN", name: "Barcelona-El Prat", city: "Barcelona", country: "Spain", airportLat: 41.2974, airportLon: 2.0833, cityLat: 41.3874, cityLon: 2.1686 },
  { code: "MAD", name: "Adolfo Suárez Madrid-Barajas", city: "Madrid", country: "Spain", airportLat: 40.4839, airportLon: -3.5680, cityLat: 40.4168, cityLon: -3.7038 },
  { code: "FLR", name: "Florence Peretola", city: "Florence", country: "Italy", airportLat: 43.8100, airportLon: 11.2012, cityLat: 43.7696, cityLon: 11.2558 },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands", airportLat: 52.3105, airportLon: 4.7683, cityLat: 52.3676, cityLon: 4.9041 },

  // Hong Kong & Asia
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong", airportLat: 22.3080, airportLon: 113.9185, cityLat: 22.2855, cityLon: 114.1577 },

  // United States Hubs
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States", airportLat: 37.6213, airportLon: -122.3790, cityLat: 37.7749, cityLon: -122.4194 },
  { code: "SJC", name: "San José Mineta International", city: "San Jose", country: "United States", airportLat: 37.3639, airportLon: -121.9289, cityLat: 37.3382, cityLon: -121.8863 },
  { code: "OAK", name: "Oakland San Francisco Bay", city: "Oakland", country: "United States", airportLat: 37.7213, airportLon: -122.2207, cityLat: 37.8044, cityLon: -122.2711 },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "United States", airportLat: 33.9416, airportLon: -118.4085, cityLat: 34.0522, cityLon: -118.2437 },
  { code: "SAN", name: "San Diego International", city: "San Diego", country: "United States", airportLat: 32.7338, airportLon: -117.1933, cityLat: 32.7157, cityLon: -117.1611 },
  { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", country: "United States", airportLat: 47.4502, airportLon: -122.3088, cityLat: 47.6062, cityLon: -122.3321 },
  { code: "HNL", name: "Daniel K. Inouye International", city: "Honolulu", country: "United States", airportLat: 21.3245, airportLon: -157.9251, cityLat: 21.2766, cityLon: -157.8283 },
  { code: "ORD", name: "Chicago O'Hare International", city: "Chicago", country: "United States", airportLat: 41.9742, airportLon: -87.9073, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "MDW", name: "Chicago Midway International", city: "Chicago", country: "United States", airportLat: 41.7868, airportLon: -87.7522, cityLat: 41.8781, cityLon: -87.6298 },
  { code: "EWR", name: "Newark Liberty International", city: "Newark / New York", country: "United States", airportLat: 40.6895, airportLon: -74.1745, cityLat: 40.7357, cityLon: -74.1724 },
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "United States", airportLat: 40.6413, airportLon: -73.7781, cityLat: 40.7580, cityLon: -73.9855 },
  { code: "LGA", name: "LaGuardia Airport", city: "New York", country: "United States", airportLat: 40.7769, airportLon: -73.8740, cityLat: 40.7580, cityLon: -73.9855 },
  { code: "BOS", name: "Boston Logan International", city: "Boston", country: "United States", airportLat: 42.3656, airportLon: -71.0096, cityLat: 42.3601, cityLon: -71.0589 }
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
    airportLat: 25.0330,
    airportLon: 121.5654,
    cityLat: 25.0330,
    cityLon: 121.5654
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
  if (lower.includes("tokyo") || lower.includes("hnd") || lower.includes("nrt") || lower.includes("shinjuku") || lower.includes("shibuya")) {
    return { cityName: "Tokyo", lat: 35.6895, lon: 139.6917 };
  }
  if (lower.includes("kyoto") || lower.includes("kix")) {
    return { cityName: "Kyoto", lat: 35.0116, lon: 135.7681 };
  }
  if (lower.includes("osaka") || lower.includes("itm")) {
    return { cityName: "Osaka", lat: 34.6937, lon: 135.5023 };
  }
  if (lower.includes("london") || lower.includes("lhr") || lower.includes("lgw")) {
    return { cityName: "London", lat: 51.5074, lon: -0.1278 };
  }
  if (lower.includes("paris") || lower.includes("cdg") || lower.includes("ory")) {
    return { cityName: "Paris", lat: 48.8566, lon: 2.3522 };
  }
  if (lower.includes("rome") || lower.includes("fco") || lower.includes("vatican")) {
    return { cityName: "Rome", lat: 41.9028, lon: 12.4964 };
  }
  if (lower.includes("barcelona") || lower.includes("bcn")) {
    return { cityName: "Barcelona", lat: 41.3874, lon: 2.1686 };
  }
  if (lower.includes("madrid") || lower.includes("mad")) {
    return { cityName: "Madrid", lat: 40.4168, lon: -3.7038 };
  }
  if (lower.includes("hong kong") || lower.includes("hkg")) {
    return { cityName: "Hong Kong", lat: 22.2855, lon: 114.1577 };
  }
  if (lower.includes("honolulu") || lower.includes("hnl") || lower.includes("waikiki") || lower.includes("oahu")) {
    return { cityName: "Honolulu", lat: 21.2766, lon: -157.8283 };
  }
  if (lower.includes("taipei") || lower.includes("tpe") || lower.includes("tsa") || lower.includes("new taipei") || lower.includes("tamsui") || lower.includes("beitou") || lower.includes("jiufen")) {
    return { cityName: "Taipei", lat: 25.0330, lon: 121.5654 };
  }
  if (lower.includes("taichung") || lower.includes("rmq")) {
    return { cityName: "Taichung", lat: 24.1477, lon: 120.6736 };
  }
  if (lower.includes("tainan") || lower.includes("tnn")) {
    return { cityName: "Tainan", lat: 22.9997, lon: 120.2270 };
  }
  if (lower.includes("kaohsiung") || lower.includes("khh")) {
    return { cityName: "Kaohsiung", lat: 22.6273, lon: 120.3014 };
  }
  if (lower.includes("chicago") || lower.includes("windy city") || lower.includes("the loop")) {
    return { cityName: "Chicago", lat: 41.8781, lon: -87.6298 };
  }
  if (lower.includes("san francisco") || lower.includes("sf") || lower.includes("bay area")) {
    return { cityName: "San Francisco", lat: 37.7749, lon: -122.4194 };
  }
  if (lower.includes("san jose") || lower.includes("silicon valley")) {
    return { cityName: "San Jose, CA", lat: 37.3382, lon: -121.8863 };
  }
  if (lower.includes("princeton")) {
    return { cityName: "Princeton, NJ", lat: 40.3487, lon: -74.6593 };
  }
  if (lower.includes("manhattan") || lower.includes("new york") || lower.includes("nyc")) {
    return { cityName: "New York (Manhattan)", lat: 40.7580, lon: -73.9855 };
  }
  if (lower.includes("san diego")) {
    return { cityName: "San Diego", lat: 32.7157, lon: -117.1611 };
  }

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
// 3. PUBLIC TRANSIT & HIGH-SPEED RAIL GUIDES
// ========================================================
const cityTransitGuides = {
  TPE: [
    { title: "Taoyuan Airport MRT (Express Purple Line)", badge: "Airport Express", desc: "Purple Express train connects Terminal 1 & 2 directly to Taipei Main Station in 36 minutes with free onboard Wi-Fi & wireless charging.", route: "Taoyuan Airport ➔ Taipei Main Station (36 mins, NT$150)" },
    { title: "Taipei EasyCard / iPASS & Metro Network", badge: "Transit Card", desc: "Contactless card accepted across all Taipei MRT subway lines, city buses, YouBike 2.0 public bike rentals, and 7-Eleven/FamilyMart stores.", route: "Single ride NT$20–NT$65 / 24-hr Pass NT$180" },
    { title: "Taiwan High Speed Rail (THSR)", badge: "Bullet Train", desc: "Direct 300 km/h bullet trains from Taipei Main Station and Nangang linking Taichung (45m), Tainan (80m), and Kaohsiung (90m).", route: "Taipei ➔ Taichung (45 mins) / Kaohsiung (90 mins)" },
    { title: "TRA Pingxi & Ruifang Coastal Railway", badge: "Scenic Day Trip", desc: "Scenic regional rail connection from Taipei Main Station to Ruifang Station, transferring to Jiufen village, Pingxi, and Shifen Waterfall.", route: "Taipei ➔ Ruifang (40 mins, NT$49)" }
  ],
  TAICHUNG: [
    { title: "Taichung Green Line MRT & Public Bus", badge: "Metro & Rapid Bus", desc: "Green Line MRT connects THSR Taichung Station (Xinwuri) directly through downtown, City Hall, and Wenxin Forest Park.", route: "Single Fare (NT$20–NT$50 / EasyCard)" },
    { title: "Taiwan High Speed Rail (THSR Taichung)", badge: "Bullet Train Hub", desc: "Central Taiwan hub with high-frequency bullet trains running to Taipei (45m) and Kaohsiung Zuoying (45m).", route: "THSR Taichung Station ➔ Taipei / Kaohsiung" }
  ],
  TAINAN: [
    { title: "Tainan Historic City Bus & Tainan Pass", badge: "Cultural Transit", desc: "Tourist loop buses 88 (Anping Route) and 99 (Qigu Salt Mountain Route) connecting Tainan Railway Station with historic temples and fortresses.", route: "City Bus NT$18 / 1-Day Pass NT$150" },
    { title: "THSR Tainan Station Shuttle (H31 Line)", badge: "HSR Express Link", desc: "Free express feeder shuttle bus (H31) from THSR Tainan Station directly to Tainan City Hall and Downtown Cultural District.", route: "THSR Station ➔ Downtown Tainan (~35 mins, Free with HSR ticket)" }
  ],
  KHH: [
    { title: "Kaohsiung MRT (Red & Orange Lines)", badge: "Metro System", desc: "Rapid transit intersecting at Formosa Boulevard Station (Dome of Light), connecting Kaohsiung Airport (KHH), Zuoying THSR, and Pier-2.", route: "KHH Airport ➔ Downtown (15 mins, NT$30)" },
    { title: "Kaohsiung Circular Light Rail (LRT)", badge: "Scenic Waterfront Rail", desc: "Green circular light-rail tram running along Kaohsiung Music Center, Great Harbor Bridge, Pier-2 Art Center, and Glory Pier.", route: "Flat Fare (NT$10–NT$30 with EasyCard)" },
    { title: "Cijin Island Scenic Harbor Ferry", badge: "Harbor Transit", desc: "Short 5-minute ferry ride from Gushan Ferry Pier directly to Cijin Island seafood street and lighthouse.", route: "Gushan Pier ➔ Cijin Island (NT$30 with EasyCard)" }
  ],
  TOKYO: [
    { title: "Tokyo Monorail & Keikyu Airport Lines", badge: "Airport Rail Link", desc: "Tokyo Monorail connects Haneda to Hamamatsucho Station in 13 minutes. Narita Express (N'EX) links Narita to Tokyo Station in 55 minutes.", route: "Haneda ➔ Downtown (13 mins) / Narita ➔ Tokyo (55 mins)" },
    { title: "Digital Suica / Pasmo IC Card & Tokyo Metro", badge: "Transit Card", desc: "Tap contactless transit on Apple/Google Wallet across all Tokyo Metro, Toei Subway, and JR Yamanote lines.", route: "Accepted on all Japan Rail & Tokyo Metro lines" }
  ],
  KYOTO_OSAKA: [
    { title: "JR Haruka Airport Express & Kansai Thru Pass", badge: "Airport Express", desc: "Direct Haruka train from Kansai Airport (KIX) to Tennoji (30m), Shin-Osaka (50m), and Kyoto Station (75m).", route: "KIX ➔ Shin-Osaka (50 mins) / Kyoto (75 mins)" },
    { title: "Hankyu & Keihan Intercity Railways", badge: "Scenic Regional Link", desc: "Fast regional trains connecting Osaka Umeda directly to Central Kyoto Gion & Arashiyama bamboo groves.", route: "Osaka ➔ Kyoto (40 mins, ~¥410)" }
  ],
  LONDON: [
    { title: "London Underground (The Tube) & Elizabeth Line", badge: "Subway & Rail", desc: "Contactless tap-to-pay on all Tube lines, buses, and the Elizabeth Line directly from Heathrow Airport into central London.", route: "Heathrow ➔ Central London (30 mins via Elizabeth Line)" },
    { title: "Gatwick Express & Thameslink", badge: "Airport Rail", desc: "Direct high-frequency trains from London Gatwick Airport to London Victoria and London Bridge.", route: "Gatwick ➔ Victoria (30 mins)" }
  ],
  PARIS: [
    { title: "Paris Métro & RER Regional Rail", badge: "Metro & Rail Network", desc: "RER B line directly links CDG Airport to Gare du Nord and Châtelet-Les Halles in 35 minutes. Navigo Easy tap card for Metro.", route: "CDG ➔ Châtelet (35 mins, ~€11.80)" },
    { title: "RER C Versailles Express", badge: "Palace Link", desc: "Direct commuter rail connecting Eiffel Tower / Saint-Michel directly to Versailles Château Rive Gauche.", route: "Paris ➔ Versailles (35 mins)" }
  ],
  ROME: [
    { title: "Leonardo Express & Rome Metro (Metrebus)", badge: "Airport Rail Link", desc: "Non-stop Leonardo Express train connects Fiumicino Airport (FCO) directly to Roma Termini central station in 32 minutes.", route: "FCO Airport ➔ Roma Termini (32 mins, €14)" },
    { title: "Rome Metro & Contactless Tap", badge: "Subway System", desc: "Tap your contactless card at Metro Line A (Vatican/Spagna) and Line B (Colosseo) turnstiles.", route: "Single Ride (€1.50 / 100 mins)" }
  ],
  BCN: [
    { title: "Barcelona Metro & T-Casual Pass", badge: "Transit Card", desc: "Buy a 10-journey 'T-Casual' card for integrated travel across Metro, Bus, and Tram in Zone 1.", route: "Metro Lines L1-L5, T-Casual (~€12.15)" },
    { title: "Aerobús Express (A1 / A2)", badge: "Airport Transfer", desc: "Dedicated express bus running every 5-10 minutes from Terminal 1 & 2 directly to Plaça de Catalunya.", route: "Airport ➔ Plaça Catalunya (35 mins, ~€7.25)" }
  ],
  MADRID: [
    { title: "Madrid Metro & Cercanías Renfe", badge: "Airport & City Metro", desc: "Metro Line 8 and Cercanías C-1 train link Madrid-Barajas Airport Terminals directly to Nuevos Ministerios and Atocha Station.", route: "Barajas ➔ Nuevos Ministerios (15 mins)" }
  ],
  HKG: [
    { title: "Hong Kong Airport Express", badge: "High-Speed Rail", desc: "Connects HKG Airport directly to Kowloon Station (21 mins) and Central Hong Kong Station (24 mins) with in-town check-in.", route: "HKG Airport ➔ Central (24 mins, HK$115)" },
    { title: "Octopus Card & MTR Network", badge: "Transit Card", desc: "All-in-one contactless card for MTR subway, Star Ferry, Ding Ding historic trams, and peak tram.", route: "Accepted citywide" }
  ],
  HONOLULU: [
    { title: "Waikiki Trolley & TheBus Transit", badge: "Island Transit", desc: "TheBus system and open-air scenic Waikiki Trolley lines connecting Waikiki to Diamond Head, Ala Moana, and Pearl Harbor.", route: "TheBus Single Fare ($3.00 / HOLO Card)" }
  ],
  CHI: [
    { title: "CTA 'L' Rapid Transit Network & Contactless Tap", badge: "Subway & Elevated Rail", desc: "Tap any contactless credit card, phone, or Ventra card at all 145 CTA train stations. Easy transfer connections across the Loop.", route: "Single Fare ($2.50) / 24-Hour Unlimited Pass ($5.00)" },
    { title: "Direct O'Hare (ORD) ➔ Loop Blue Line", badge: "24/7 Airport Express", desc: "Board the Blue Line directly inside O'Hare Airport Lower Level concourse for a direct 45-minute ride straight to downtown Loop stations.", route: "O'Hare ➔ Loop (45 mins, $5.00 from airport)" }
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
  if (normCity.includes("taipei") || normCity.includes("new taipei") || normCity.includes("tamsui") || normCity.includes("beitou") || normCity.includes("jiufen") || normCode === "TPE" || normCode === "TSA") {
    key = "TPE";
  } else if (normCity.includes("taichung") || normCode === "RMQ") {
    key = "TAICHUNG";
  } else if (normCity.includes("tainan") || normCode === "TNN") {
    key = "TAINAN";
  } else if (normCity.includes("kaohsiung") || normCode === "KHH") {
    key = "KHH";
  } else if (normCity.includes("tokyo") || normCode === "HND" || normCode === "NRT") {
    key = "TOKYO";
  } else if (normCity.includes("kyoto") || normCity.includes("osaka") || normCode === "KIX" || normCode === "ITM") {
    key = "KYOTO_OSAKA";
  } else if (normCity.includes("london") || normCode === "LHR" || normCode === "LGW") {
    key = "LONDON";
  } else if (normCity.includes("paris") || normCode === "CDG" || normCode === "ORY") {
    key = "PARIS";
  } else if (normCity.includes("rome") || normCode === "FCO") {
    key = "ROME";
  } else if (normCity.includes("barcelona") || normCode === "BCN") {
    key = "BCN";
  } else if (normCity.includes("madrid") || normCode === "MAD") {
    key = "MADRID";
  } else if (normCity.includes("hong kong") || normCode === "HKG") {
    key = "HKG";
  } else if (normCity.includes("honolulu") || normCode === "HNL") {
    key = "HONOLULU";
  } else if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") {
    key = "CHI";
  } else if (normCity.includes("san francisco") || normCity.includes("sf") || normCode === "SFO" || normCode === "SJC" || normCode === "OAK") {
    key = "SF";
  } else if (normCity.includes("princeton")) {
    key = "PRINCETON";
  } else if (normCity.includes("new york") || normCity.includes("manhattan") || normCity.includes("brooklyn") || normCode === "JFK" || normCode === "EWR" || normCode === "LGA") {
    key = "NYC";
  } else if (normCity.includes("san diego") || normCode === "SAN") {
    key = "SAN";
  }

  const guides = cityTransitGuides[key] || [
    { title: `${cityName} Regional Airport Express Transit`, badge: "Airport Link", desc: `Direct train, express bus, and metro transfer corridors from the airport terminal into downtown ${cityName}.`, route: "Express routes available every 10-20 mins" },
    { title: `${cityName} Public Transit & Contactless Tap`, badge: "City Transit", desc: `Tap-to-pay public transit network covering subway, tram, and municipal bus routes across ${cityName}.`, route: "Standard single fares and 24-hr day passes" },
    { title: "City Walking & Micromobility Rentals", badge: "Local Mobility", desc: `Pedestrian-friendly central districts with municipal shared bike and scooter stations located near major sights.`, route: "Station hubs across central plazas" }
  ];

  if (subtitleEl) subtitleEl.textContent = `Essential metro cards, high-speed rail links, and transit navigation for ${cityName}`;

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
// 4. CURATED SIGHTS & CULINARY CATALOG
// ========================================================
const curatedCityGuides = {
  // TOKYO & SURROUNDING KANTO
  TOKYO: [
    { id: "tyo_s1", type: "sight", name: "Sensō-ji Temple & Nakamise-dori", category: "Historic Temple", location: "Asakusa", lat: 35.7148, lon: 139.7967, desc: "Tokyo's oldest Buddhist temple founded in 645 AD featuring the iconic giant red Kaminarimon lantern and street snack stalls.", query: "Senso-ji Asakusa Tokyo" },
    { id: "tyo_s2", type: "sight", name: "Meiji Jingu Shrine & Yoyogi Forest", category: "Shinto Shrine Oasis", location: "Shibuya / Harajuku", lat: 35.6764, lon: 139.6993, desc: "Tranquil 170-acre evergreen forest sanctuary dedicated to Emperor Meiji, entered through massive wooden Torii gates.", query: "Meiji Jingu Tokyo" },
    { id: "tyo_s3", type: "sight", name: "Shibuya Sky & Scramble Crossing", category: "Observation Deck & Crossing", location: "Shibuya", lat: 35.6580, lon: 139.7016, desc: "Open-air 360-degree rooftop deck 229 meters high overlooking the world's busiest pedestrian scramble crossing.", query: "Shibuya Sky Observation Deck" },
    { id: "tyo_s4", type: "sight", name: "teamLab Planets Tokyo", category: "Immersive Digital Art", location: "Toyosu Waterfront", lat: 35.6491, lon: 139.7898, desc: "Body-immersive digital museum where visitors walk barefoot through crystal universes and floating flower gardens.", query: "teamLab Planets Tokyo" },
    { id: "tyo_s5", type: "sight", name: "Tsukiji Outer Market", category: "Seafood Market", location: "Chuo / Tsukiji", lat: 35.6654, lon: 139.7707, desc: "Bustling market alleys serving fresh sea urchin (uni), wagyu skewers, tamagoyaki omelets, and premium sushi.", query: "Tsukiji Outer Market Tokyo" },
    { id: "tyo_s6", type: "sight", name: "Kamakura Great Buddha & Kotoku-in (25 mi south)", category: "Historic Coastal Landmark", location: "Kamakura", lat: 35.3167, lon: 139.5361, desc: "Monumental 13th-century outdoor bronze seated Buddha statue in the scenic coastal samurai capital.", query: "Kamakura Great Buddha" },
    { id: "tyo_f1", type: "food", name: "Ichiran Ramen Shibuya (Tonkotsu Broth)", category: "Iconic Tonkotsu Ramen", location: "Shibuya", lat: 35.6620, lon: 139.7005, desc: "Solo flavor-focus booths serving rich, slow-simmered natural tonkotsu pork bone broth with custom spicy red sauce.", query: "Ichiran Ramen Shibuya" },
    { id: "tyo_f2", type: "food", name: "Ginza Kagari (Rich Chicken Paitan Soba)", category: "Michelin Recognized Ramen", location: "Ginza", lat: 35.6702, lon: 139.7644, desc: "Velvety, creamy chicken paitan broth simmered to golden perfection crowned with seasonal vegetables and truffle oil.", query: "Ginza Kagari Ramen" }
  ],

  // KYOTO & OSAKA REGION
  KYOTO_OSAKA: [
    { id: "kyo_s1", type: "sight", name: "Fushimi Inari-Taisha (10,000 Vermilion Torii Gates)", category: "Sacred Shinto Shrine", location: "Fushimi / Kyoto", lat: 34.9671, lon: 135.7727, desc: "Breathtaking mountain trails lined with thousands of bright vermilion Torii gates winding through sacred cedar forests.", query: "Fushimi Inari Taisha Kyoto" },
    { id: "kyo_s2", type: "sight", name: "Kinkaku-ji (The Golden Pavilion)", category: "Zen Buddhist Temple", location: "Kita / Kyoto", lat: 35.0394, lon: 135.7292, desc: "Top two floors completely covered in pure gold leaf, reflecting across the Mirror Pond in a classical Muromachi garden.", query: "Kinkaku-ji Golden Pavilion Kyoto" },
    { id: "kyo_s3", type: "sight", name: "Arashiyama Bamboo Grove & Tenryu-ji", category: "Natural Bamboo Sanctuary", location: "Arashiyama / Kyoto", lat: 35.0169, lon: 135.6712, desc: "Towering green bamboo stalks swaying in the breeze alongside the historic Oi River and Togetsukyo Bridge.", query: "Arashiyama Bamboo Grove" },
    { id: "kyo_s4", type: "sight", name: "Dotonbori Canal & Glico Running Man (Osaka)", category: "Neon Entertainment Strip", location: "Namba / Osaka", lat: 34.6687, lon: 135.5013, desc: "Vibrant neon-lit canal lined with giant animatronic crab signs, takoyaki street stands, and izakayas.", query: "Dotonbori Osaka" },
    { id: "kyo_s5", type: "sight", name: "Osaka Castle & Castle Park", category: "Samurai Castle Fortress", location: "Chuo / Osaka", lat: 34.6873, lon: 135.5262, desc: "16th-century fortress encircled by massive stone moats, cherry blossom orchards, and golden tiger roof ornaments.", query: "Osaka Castle" },
    { id: "kyo_f1", type: "food", name: "Nishiki Market Street Food (Kyoto's Kitchen)", category: "Historic Culinary Arcade", location: "Nakagyo / Kyoto", lat: 35.0050, lon: 135.7649, desc: "Five-block historic covered market serving skewered glazed octopus, matcha soft-serve, and dashi tamagoyaki.", query: "Nishiki Market Kyoto" },
    { id: "kyo_f2", type: "food", name: "Kukuru Takoyaki & Kushikatsu Daruma (Osaka)", category: "Iconic Street Gastronomy", location: "Dotonbori / Shinsekai", lat: 34.6689, lon: 135.5015, desc: "Crispy octopus balls molten on the inside, and deep-fried golden skewered meats with no-double-dipping sauce.", query: "Takoyaki Kukuru Dotonbori" }
  ],

  // LONDON & SURROUNDING ENGLAND
  LONDON: [
    { id: "lon_s1", type: "sight", name: "Tower of London & Crown Jewels", category: "Royal Historic Fortress", location: "Tower Hill / Thames", lat: 51.5081, lon: -0.0759, desc: "Nearly 1,000-year-old castle and former prison housing the sparkling Crown Jewels and historic Yeoman Warders.", query: "Tower of London" },
    { id: "lon_s2", type: "sight", name: "The British Museum", category: "World-Class Museum", location: "Bloomsbury", lat: 51.5194, lon: -0.1270, desc: "Over 8 million historic works of world culture under the Great Court glass dome, including the Rosetta Stone.", query: "The British Museum London" },
    { id: "lon_s3", type: "sight", name: "Westminster Abbey & Big Ben", category: "Royal Coronation Abbey", location: "Westminster", lat: 51.4993, lon: -0.1273, desc: "Gothic church site of every British royal coronation since 1066, adjacent to the Houses of Parliament and Big Ben.", query: "Westminster Abbey London" },
    { id: "lon_s4", type: "sight", name: "The London Eye", category: "Observation Wheel", location: "South Bank", lat: 51.5033, lon: -0.1195, desc: "135-meter cantilevered observation wheel offering 360-degree views across London's skyline.", query: "The London Eye" },
    { id: "lon_s5", type: "sight", name: "Windsor Castle (21 mi west)", category: "Royal Castle Residence", location: "Windsor, Berkshire", lat: 51.4839, lon: -0.6044, desc: "The oldest and largest occupied castle in the world, serving as a royal residence for nearly 1,000 years.", query: "Windsor Castle" },
    { id: "lon_f1", type: "food", name: "Borough Market (Artisan Gourmet Market)", category: "Historic Food Market", location: "Southwark / London Bridge", lat: 51.5055, lon: -0.0910, desc: "Historic food market serving Swiss raclette, duck confit sandwiches, sausage rolls, and artisan cheeses.", query: "Borough Market London" },
    { id: "lon_f2", type: "food", name: "Dishoom (Bombay Cafe & House Black Daal)", category: "Iconic Indian Gastronomy", location: "Covent Garden / Kings Cross", lat: 51.5126, lon: -0.1265, desc: "Homage to the Irani cafes of old Bombay, renowned for 24-hour slow-cooked black daal, garlic naan, and chicken ruby.", query: "Dishoom Covent Garden" }
  ],

  // PARIS & SURROUNDING REGION
  PARIS: [
    { id: "par_s1", type: "sight", name: "Eiffel Tower & Champ de Mars", category: "Iconic Monument", location: "7th Arrondissement", lat: 48.8584, lon: 2.2945, desc: "Gustave Eiffel's 330-meter wrought-iron lattice masterpiece offering spectacular views and glittering hourly light shows.", query: "Eiffel Tower Paris" },
    { id: "par_s2", type: "sight", name: "Louvre Museum & Glass Pyramid", category: "World-Class Museum", location: "1st Arrondissement", lat: 48.8606, lon: 2.3376, desc: "World's largest art museum holding the Mona Lisa, Venus de Milo, and Winged Victory of Samothrace in a former royal palace.", query: "Louvre Museum Paris" },
    { id: "par_s3", type: "sight", name: "Musée d'Orsay", category: "Impressionist Sanctuary", location: "7th Arrondissement / Seine", lat: 48.8599, lon: 2.3266, desc: "Stunning Beaux-Arts railway station housing masterpieces by Monet, Van Gogh, Renoir, Degas, and Cézanne.", query: "Musee d'Orsay Paris" },
    { id: "par_s4", type: "sight", name: "Cathédrale Notre-Dame de Paris & Sainte-Chapelle", category: "Gothic Masterpiece", location: "Île de la Cité", lat: 48.8530, lon: 2.3499, desc: "Restored French Gothic cathedral and nearby Sainte-Chapelle renowned for its 1,113 stained-glass windows.", query: "Notre-Dame de Paris" },
    { id: "par_s5", type: "sight", name: "Palace of Versailles & Royal Gardens (12 mi southwest)", category: "Royal Palace Estate", location: "Versailles", lat: 48.8049, lon: 2.1204, desc: "The opulent palace of the Sun King Louis XIV featuring the Hall of Mirrors, Grand Trianon, and fountain gardens.", query: "Palace of Versailles" },
    { id: "par_f1", type: "food", name: "Du Pain et des Idées (Escargot Pistache Pastry)", category: "Artisan Boulangerie", location: "10th Arrondissement (Canal Saint-Martin)", lat: 48.8712, lon: 2.3629, desc: "Historic 1875 bakery acclaimed for crispy pain des amis and pistachio-chocolate escargot swirl pastries.", query: "Du Pain et des Idees Paris" },
    { id: "par_f2", type: "food", name: "Le Relais de l'Entrecôte (Steak Frites)", category: "Classic Parisian Bistro", location: "Saint-Germain / Champs-Élysées", lat: 48.8687, lon: 2.3045, desc: "Famous bistro serving tender sirloin steak covered in legendary secret green herb butter sauce with golden fries.", query: "Le Relais de l'Entrecote Paris" }
  ],

  // ROME & VATICAN CITY
  ROME: [
    { id: "rom_s1", type: "sight", name: "Colosseum & Roman Forum", category: "Ancient World Wonder", location: "Piazza del Colosseo", lat: 41.8902, lon: 12.4922, desc: "Nearly 2,000-year-old stone amphitheater where gladiators fought, paired with the ancient center of Roman civic life.", query: "Colosseum Rome" },
    { id: "rom_s2", type: "sight", name: "Pantheon & Piazza della Rotonda", category: "Ancient Architectural Wonder", location: "Central Historic District", lat: 41.8986, lon: 12.4769, desc: "Best-preserved Roman monument featuring an open oculus dome that remains the largest unreinforced concrete dome in the world.", query: "Pantheon Rome" },
    { id: "rom_s3", type: "sight", name: "Trevi Fountain & Spanish Steps", category: "Baroque Monument", location: "Piazza di Trevi", lat: 41.9009, lon: 12.4833, desc: "Monumental Baroque fountain fed by ancient aqueducts, tradition says tossing a coin ensures your return to Rome.", query: "Trevi Fountain Rome" },
    { id: "rom_s4", type: "sight", name: "Vatican Museums & St. Peter's Basilica", category: "Papal Art & Basilica", location: "Vatican City", lat: 41.9065, lon: 12.4536, desc: "Michelangelo's Sistine Chapel ceiling, Raphael Rooms, and the grandest Renaissance basilica in Christendom.", query: "Vatican Museums Sistine Chapel" },
    { id: "rom_f1", type: "food", name: "Roscioli Salumeria con Cucina (Carbonara)", category: "Iconic Roman Pasta", location: "Campo de' Fiori", lat: 41.8941, lon: 12.4735, desc: "Legendary deli-restaurant renowned across Italy for silky authentic Spaghetti alla Carbonara and fresh burrata.", query: "Roscioli Rome" },
    { id: "rom_f2", type: "food", name: "Da Enzo al 29 (Cacio e Pepe & Carciofi)", category: "Traditional Trattoria", location: "Trastevere", lat: 41.8876, lon: 12.4784, desc: "Beloved neighborhood trattoria serving crispy fried Roman artichokes, cacio e pepe, and creamy tiramisu.", query: "Da Enzo al 29 Trastevere Rome" }
  ],

  // BARCELONA & CATALONIA
  BCN: [
    { id: "bcn_s1", type: "sight", name: "Basílica de la Sagrada Família", category: "Gaudí Masterpiece", location: "Eixample", lat: 41.4036, lon: 2.1744, desc: "Antoni Gaudí's monumental basilica featuring forest-like stone pillars and soaring stained-glass light.", query: "Sagrada Familia Barcelona" },
    { id: "bcn_s2", type: "sight", name: "Park Güell & Gaudí Dragon Stairway", category: "Mosaic Park Reserve", location: "Gràcia", lat: 41.4145, lon: 2.1527, desc: "Enchanting park filled with colorful mosaic benches, gingerbread gatehouses, and sweeping views of Barcelona.", query: "Park Guell Barcelona" },
    { id: "bcn_s3", type: "sight", name: "Gothic Quarter (Barri Gòtic) & Cathedral", category: "Medieval Historic Quarter", location: "Ciutat Vella", lat: 41.3839, lon: 2.1764, desc: "Atmospheric labyrinth of narrow cobblestone streets, hidden Roman walls, and medieval stone plazas.", query: "Gothic Quarter Barcelona" },
    { id: "bcn_f1", type: "food", name: "Mercat de la Boqueria (Fresh Seafood & Jamón)", category: "Famous Food Market", location: "La Rambla", lat: 41.3817, lon: 2.1715, desc: "Vibrant market hall packed with freshly sliced Jamón Ibérico de Bellota, grilled prawns, and tropical fruit juices.", query: "La Boqueria Barcelona" },
    { id: "bcn_f2", type: "food", name: "Cervecería Catalana (Tapas & Sangria)", category: "Premier Tapas Bar", location: "Eixample (Carrer de Mallorca)", lat: 41.3923, lon: 2.1609, desc: "High-energy tapas counter serving montaditos, grilled razor clams, patatas bravas, and beef tenderloin skewers.", query: "Cerveceria Catalana Barcelona" }
  ],

  // MADRID & CENTRAL SPAIN
  MAD: [
    { id: "mad_s1", type: "sight", name: "Prado National Museum (Museo del Prado)", category: "World-Class Museum", location: "Paseo del Prado", lat: 40.4138, lon: -3.6921, desc: "Houses masterworks by Velázquez (Las Meninas), Goya, El Greco, and Hieronymus Bosch in a neoclassical palace.", query: "Museo del Prado Madrid" },
    { id: "mad_s2", type: "sight", name: "Royal Palace of Madrid & Sabatini Gardens", category: "Royal Residence", location: "Palacio District", lat: 40.4180, lon: -3.7143, desc: "The largest operational royal palace in Western Europe with 3,418 opulent frescoed rooms and royal armory.", query: "Royal Palace of Madrid" },
    { id: "mad_s3", type: "sight", name: "El Retiro Park & Crystal Palace", category: "UNESCO Royal Park", location: "Retiro District", lat: 40.4153, lon: -3.6845, desc: "300-acre lush park featuring a boating lake, rose gardens, and the stunning glass-and-iron Palacio de Cristal.", query: "El Retiro Park Madrid" },
    { id: "mad_f1", type: "food", name: "Mercado de San Miguel (Gourmet Tapas)", category: "Historic Gourmet Market", location: "Plaza de San Miguel", lat: 40.4154, lon: -3.7088, desc: "1916 iron-structured market serving gourmet tapas, Basque pintxos, Iberian ham, oysters, and Spanish wine.", query: "Mercado de San Miguel Madrid" },
    { id: "mad_f2", type: "food", name: "Chocolatería San Ginés (Since 1894)", category: "Historic Churrería", location: "Pasadizo de San Ginés", lat: 40.4171, lon: -3.7067, desc: "Open 24/7 since 1894 serving hot, crisp golden churros and porras for dipping in thick dark melted chocolate.", query: "Chocolateria San Gines Madrid" }
  ],

  // HONG KONG
  HKG: [
    { id: "hkg_s1", type: "sight", name: "Victoria Peak & Historic Peak Tram", category: "Iconic Panorama", location: "Hong Kong Island", lat: 22.2759, lon: 114.1455, desc: "Funicular railway climbing to the highest point on Hong Kong Island for jaw-dropping views of Victoria Harbour skyscrapers.", query: "Victoria Peak Hong Kong" },
    { id: "hkg_s2", type: "sight", name: "Tian Tan Big Buddha & Ngong Ping Cable Car", category: "Monumental Bronze Sanctuary", location: "Lantau Island", lat: 22.2540, lon: 113.9050, desc: "34-meter seated bronze Buddha statue reached by a glass-bottom crystal cable car ride over lush mountain peaks.", query: "Tian Tan Big Buddha Lantau" },
    { id: "hkg_s3", type: "sight", name: "Star Ferry & Victoria Harbour Promenade", category: "Historic Harbor Crossing", location: "Tsim Sha Tsui / Central", lat: 22.2936, lon: 114.1685, desc: "Scenic double-decker green ferry crossing Victoria Harbour operating since 1888 with stunning skyline views.", query: "Star Ferry Hong Kong" },
    { id: "hkg_f1", type: "food", name: "Tim Ho Wan (Michelin-Star Dim Sum)", category: "World's Famous Dim Sum", location: "Sham Shui Po / Central", lat: 22.3323, lon: 114.1627, desc: "Famous for its baked barbecue pork buns with sweet sugary crust, pan-fried turnip cake, and steamed shrimp dumplings.", query: "Tim Ho Wan Dim Sum Hong Kong" }
  ],

  // HONOLULU & OAHU
  HONOLULU: [
    { id: "hnl_s1", type: "sight", name: "Waikiki Beach & Diamond Head State Monument", category: "Iconic Beach & Crater", location: "Waikiki / Diamond Head", lat: 21.2620, lon: -157.8057, desc: "World-famous golden crescent beach and volcanic tuff crater trail offering sweeping vistas of the Pacific Ocean.", query: "Diamond Head State Monument Honolulu" },
    { id: "hnl_s2", type: "sight", name: "Pearl Harbor National Memorial & USS Arizona", category: "National Historic Landmark", location: "Pearl Harbor", lat: 21.3650, lon: -157.9500, desc: "Historic WWII memorial honoring the lives lost on December 7, 1941, built directly over the sunken battleship USS Arizona.", query: "Pearl Harbor National Memorial" },
    { id: "hnl_s3", type: "sight", name: "Hanauma Bay Nature Preserve", category: "Marine Sanctuary Snorkeling", location: "East Oahu", lat: 21.2690, lon: -157.6938, desc: "Curved volcanic crater bay with calm turquoise waters filled with living coral reefs, green sea turtles, and parrotfish.", query: "Hanauma Bay Nature Preserve" },
    { id: "hnl_f1", type: "food", name: "Leonard's Bakery (Original Malasadas Since 1952)", category: "Legendary Hawaiian Bakery", location: "Kapahulu Avenue", lat: 21.2849, lon: -157.8130, desc: "Hot, freshly fried Portuguese dough pastries dusted in sugar, cinnamon, and filled with coconut (haupia) cream.", query: "Leonard's Bakery Honolulu" },
    { id: "hnl_f2", type: "food", name: "Ono Seafood (Fresh Ahi Poke Bowls)", category: "Authentic Hawaiian Poke", location: "Kapahulu Avenue", lat: 21.2818, lon: -157.8145, desc: "Top-rated local poke counter serving fresh Hawaiian bigeye ahi tossed in shoyu, spicy mayo, Hawaiian sea salt, and seaweed.", query: "Ono Seafood Honolulu Poke" }
  ],

  // TAIPEI & GREATER NORTHERN TAIWAN
  TPE: [
    { id: "tpe_s1", type: "sight", name: "Taipei 101 & 89th-Floor Skyline Observatory", category: "Iconic Skyscraper", location: "Xinyi District", lat: 25.0339, lon: 121.5645, desc: "508-meter engineering marvel featuring the world's fastest elevators and panoramic 360-degree basin views.", query: "Taipei 101 Observatory" },
    { id: "tpe_s2", type: "sight", name: "National Palace Museum (Imperial Treasures)", category: "World-Class Museum", location: "Shilin District", lat: 25.1024, lon: 121.5485, desc: "Houses nearly 700,000 ancient Chinese imperial artifacts spanning 8,000 years, including the Jadeite Cabbage.", query: "National Palace Museum Taipei" },
    { id: "tpe_s3", type: "sight", name: "Chiang Kai-shek Memorial Hall & Liberty Square", category: "Monumental Architecture", location: "Zhongzheng District", lat: 25.0347, lon: 121.5218, desc: "Grand white-marble hall with blue-tiled octagonal roof, hourly ceremonial guard change, and classical gardens.", query: "Chiang Kai-shek Memorial Hall" },
    { id: "tpe_s4", type: "sight", name: "Longshan Temple & Historic Bopiliao Block", category: "Historic Temple Heritage", location: "Wanhua District", lat: 25.0370, lon: 121.4999, desc: "Historic 1738 Buddhist-Taoist sanctuary with intricate dragon carvings, incense halls, and Qing-era brick alleys.", query: "Longshan Temple Taipei" },
    { id: "tpe_s5", type: "sight", name: "Xiangshan (Elephant Mountain) Sunset Trail", category: "Scenic Viewpoint Hike", location: "Xinyi District", lat: 25.0274, lon: 121.5706, desc: "Steep 20-minute stone staircase hike leading to the iconic photography boulders overlooking Taipei 101.", query: "Elephant Mountain Hiking Trail" },
    { id: "tpe_s6", type: "sight", name: "Beitou Thermal Valley & Hot Springs Museum", category: "Thermal Spring Oasis", location: "Beitou District", lat: 25.1378, lon: 121.5074, desc: "Steaming geothermal emerald-sulfur pool, historic 1913 Japanese bathhouse museum, and wooden public library.", query: "Beitou Thermal Valley" },
    { id: "tpe_s7", type: "sight", name: "Tamsui Old Street & Fisherman's Wharf (11 mi north)", category: "Waterfront Sunset", location: "Tamsui Waterfront", lat: 25.1764, lon: 121.4326, desc: "Coastal boardwalk famous for golden sunsets over the Taiwan Strait, Lovers Bridge, and historic Fort San Domingo.", query: "Tamsui Fisherman's Wharf" },
    { id: "tpe_s8", type: "sight", name: "Jiufen Mountain Village & Tea Houses (21 mi east)", category: "Historic Mountain Village", location: "Ruifang District", lat: 25.1099, lon: 121.8452, desc: "Misty mountain gold-mining village with lantern-lit narrow staircases, traditional tea houses, and ocean vistas.", query: "Jiufen Old Street Taiwan" },
    { id: "tpe_s9", type: "sight", name: "Shifen Waterfall & Sky Lantern Old Street (19 mi east)", category: "Scenic Waterfall & Heritage", location: "Pingxi District", lat: 25.0494, lon: 121.7876, desc: "The 'Little Niagara of Taiwan' paired with railway tracks where visitors write wishes and launch sky lanterns.", query: "Shifen Waterfall Pingxi" },
    { id: "tpe_s10", type: "sight", name: "Yehliu Geopark & Queen's Head Rock (22 mi north)", category: "Geological Marvel", location: "Wanli / North Coast", lat: 25.2064, lon: 121.6905, desc: "Dramatic coastal promontory eroded into otherworldly hoodoo rock formations resembling the Queen's Head.", query: "Yehliu Geopark" },
    { id: "tpe_f1", type: "food", name: "Din Tai Fung Flagship (Xiao Long Bao Soup Dumplings)", category: "World-Famous Dumplings", location: "Xinyi / Dongmen", lat: 25.0338, lon: 121.5300, desc: "Legendary Michelin-recognized 18-fold steamed pork soup dumplings, truffle dumplings, and egg fried rice.", query: "Din Tai Fung Xinyi Flagship" },
    { id: "tpe_f2", type: "food", name: "Raohe Street Night Market (Fuzhou Pepper Buns)", category: "Legendary Night Market", location: "Songshan District", lat: 25.0509, lon: 121.5775, desc: "600-meter vibrant market renowned for wood-fired crispy black pepper pork buns, herbal pork ribs, and shaved ice.", query: "Raohe Street Night Market" },
    { id: "tpe_f3", type: "food", name: "Shilin Night Market (Giant Fried Chicken & Oyster Omelet)", category: "Mega Food Market", location: "Shilin District", lat: 25.0879, lon: 121.5241, desc: "Taipei's largest night market packed with sizzling hot star fried chicken cutlets, oyster omelets, and bubble tea.", query: "Shilin Night Market Taipei" },
    { id: "tpe_f4", type: "food", name: "Ningxia Night Market (Taro Balls & Minced Pork Rice)", category: "Artisan Culinary Market", location: "Datong District", lat: 25.0558, lon: 121.5152, desc: "Traditional foodies' favorite night market famous for crispy deep-fried taro balls, braised pork rice (Lu Rou Fan), and beef soup.", query: "Ningxia Night Market Taipei" },
    { id: "tpe_f5", type: "food", name: "Fu Hang Soy Milk (Michelin Bib Gourmand Breakfast)", category: "Historic Breakfast", location: "Huashan Market (Shandao Temple)", lat: 25.0442, lon: 121.5248, desc: "Beloved breakfast institution baking fresh thick flatbreads with eggs, deep-fried dough sticks (You Tiao), and savory soy milk.", query: "Fu Hang Soy Milk Taipei" },
    { id: "tpe_f6", type: "food", name: "Yongkang Beef Noodles (Braised Sichuan Broth)", category: "Signature Beef Noodle", location: "Dongmen / Yongkang St", lat: 25.0329, lon: 121.5298, desc: "Tender Australian beef shank and tendon slow-simmered in rich spicy chili-bean broth with springy noodles.", query: "Yongkang Beef Noodles Taipei" }
  ],

  // TAICHUNG & CENTRAL TAIWAN
  TAICHUNG: [
    { id: "txg_s1", type: "sight", name: "National Taichung Theater (Toyo Ito Architecture)", category: "Architectural Marvel", location: "Xitun District", lat: 24.1628, lon: 120.6405, desc: "Futuristic opera house designed by Pritzker laureate Toyo Ito featuring curved sound-cave walls and rooftop garden.", query: "National Taichung Theater" },
    { id: "txg_s2", type: "sight", name: "Rainbow Village (Artistic Heritage)", category: "Cultural Landmark", location: "Nantun District", lat: 24.1337, lon: 120.6098, desc: "Vibrant military dependents' village preserved and transformed with colorful folk art murals by Grandpa Rainbow.", query: "Rainbow Village Taichung" },
    { id: "txg_s3", type: "sight", name: "Gaomei Wetlands & Boardwalk Windmills (15 mi west)", category: "Coastal Nature Sanctuary", location: "Qingshui District", lat: 24.3122, lon: 120.5501, desc: "Vast tidal mudflat ecosystem featuring a wooden walkway, wind turbines, and world-class mirror-reflection sunsets.", query: "Gaomei Wetlands Taichung" },
    { id: "txg_f1", type: "food", name: "Chun Shui Tang (Original 1983 Birthplace of Bubble Tea)", category: "Historic Tea House", location: "West District (Siwei St)", lat: 24.1396, lon: 120.6723, desc: "The legendary original tea salon where iced milk tea was first combined with chewy tapioca pearl balls in 1983.", query: "Chun Shui Tang Original Siwei Taichung" },
    { id: "txg_f2", type: "food", name: "Miyahara (Historic Ophthalmic Hospital Pastry Palace)", category: "Artisan Pastry & Ice Cream", location: "Central District / Taichung River", lat: 24.1378, lon: 120.6834, desc: "1927 red-brick eye clinic restored into a cathedral-like Harry Potter style palace of artisan chocolates, pineapple cakes, and ice cream.", query: "Miyahara Taichung" },
    { id: "txg_f3", type: "food", name: "Fengjia Night Market (Taiwan's Largest Innovation Market)", category: "Legendary Night Market", location: "Xitun District", lat: 24.1798, lon: 120.6499, desc: "Huge culinary testing ground that originated cheese potato bakes, candied fruits, grilled squid, and egg rolls.", query: "Fengjia Night Market Taichung" }
  ],

  // TAINAN
  TAINAN: [
    { id: "tnn_s1", type: "sight", name: "Chimei Museum & Western Classical Palace", category: "World-Class Museum", location: "Rende District", lat: 22.9348, lon: 120.2260, desc: "Magnificent neoclassical palace surrounded by Olympus bridge statues, housing Western fine art, antique armor, and violins.", query: "Chimei Museum Tainan" },
    { id: "tnn_s2", type: "sight", name: "Anping Old Fort (Fort Zeelandia) & Tree House", category: "17th-Century Dutch Heritage", location: "Anping District", lat: 23.0016, lon: 120.1607, desc: "1624 Dutch fortress paired with an ancient warehouse engulfed by the massive aerial roots of banyan trees.", query: "Anping Tree House Fort Zeelandia" },
    { id: "tnn_s3", type: "sight", name: "Chihkan Tower (Fort Provintia)", category: "Historic Fortress", location: "West Central District", lat: 22.9975, lon: 120.2026, desc: "1653 Dutch outpost rebuilt into Qing Dynasty pavilions with stone turtle steles and lotus ponds.", query: "Chihkan Tower Tainan" },
    { id: "tnn_f1", type: "food", name: "Tainan Fresh Scalded Beef Soup (Chih-Kan / A-Cun)", category: "Iconic Dawn Gastronomy", location: "West Central District", lat: 22.9965, lon: 120.1985, desc: "Thinly sliced freshly slaughtered warm local beef instantly cooked by pouring scalding hot beef-bone broth over the bowl.", query: "Tainan Beef Soup" },
    { id: "tnn_f2", type: "food", name: "Chou's Shrimp Rolls & Anping Bean Jelly", category: "Heritage Seafood", location: "Anping Old Street", lat: 23.0003, lon: 120.1645, desc: "Crispy fried shrimp rolls stuffed with fresh sword shrimp, green onion, and minced pork, served with sweet wasabi dip.", query: "Chou's Shrimp Rolls Anping" }
  ],

  // KAOHSIUNG
  KHH: [
    { id: "khh_s1", type: "sight", name: "The Pier-2 Art Center & Great Harbor Bridge", category: "Harbor Cultural District", location: "Yancheng / Kaohsiung Harbor", lat: 22.6199, lon: 120.2818, desc: "Restored sugar warehouses turned into open-air contemporary art galleries, giant sculptures, and Asia's longest rotating bridge.", query: "Pier-2 Art Center Kaohsiung" },
    { id: "khh_s2", type: "sight", name: "Lotus Pond & Dragon and Tiger Pagodas", category: "Scenic Temple Lake", location: "Zuoying District", lat: 22.6804, lon: 120.2917, desc: "Scenic lake featuring towering twin pagodas entered through the dragon's mouth and exited from the tiger's jaws for good fortune.", query: "Dragon and Tiger Pagodas Kaohsiung" },
    { id: "khh_s3", type: "sight", name: "Fo Guang Shan Buddha Museum (15 mi northeast)", category: "Monumental Buddhist Sanctuary", location: "Dashu District", lat: 22.7554, lon: 120.4437, desc: "Massive 108-meter bronze seated Buddha statue, eight pagoda towers, and sacred Buddhist relic galleries.", query: "Fo Guang Shan Buddha Museum" },
    { id: "khh_f1", type: "food", name: "Ruifeng Night Market (Angel Fried Chicken & Papaya Milk)", category: "Premier Night Market", location: "Zuoying District", lat: 22.6659, lon: 120.3005, desc: "Over 1,000 stalls packed with sizzling steak platters, thick angel fried chicken chops, and freshly pressed papaya milk.", query: "Ruifeng Night Market Kaohsiung" },
    { id: "khh_f2", type: "food", name: "Gang Yuan Beef Noodles (Dry Tossed Beef Shank)", category: "Iconic Southern Noodle", location: "Yancheng District", lat: 22.6225, lon: 120.2842, desc: "Famous 70-year noodle shop serving rich lard-tossed dry noodles layered with braised beef shank slices and garlic.", query: "Gang Yuan Beef Noodles Kaohsiung" }
  ],

  // CHICAGO
  CHI: [
    { id: "chi_s1", type: "sight", name: "Millennium Park & Cloud Gate ('The Bean')", category: "Iconic Landmark", location: "Downtown Loop / Michigan Ave", lat: 41.8826, lon: -87.6226, desc: "World-famous polished steel sculpture reflecting Chicago's skyline, Lurie Garden, and Crown Fountain.", query: "Cloud Gate Millennium Park Chicago" },
    { id: "chi_s2", type: "sight", name: "The Art Institute of Chicago & Modern Wing", category: "World-Class Museum", location: "Michigan Avenue", lat: 41.8796, lon: -87.6237, desc: "Over 300,000 works of art featuring Seurat's Grand Jatte, Edward Hopper's Nighthawks, and Impressionist galleries.", query: "Art Institute of Chicago" },
    { id: "chi_s3", type: "sight", name: "Chicago Architecture Center River Cruise", category: "Iconic Architecture Tour", location: "Chicago Riverwalk / Michigan Ave", lat: 41.8887, lon: -87.6244, desc: "90-minute docent-led boat cruise through the canyon of skyscrapers that birthed modern architecture.", query: "Chicago Architecture Center River Cruise" },
    { id: "chi_s4", type: "sight", name: "Willis Tower Skydeck & 'The Ledge'", category: "Observation Deck", location: "Financial District / Wacker Dr", lat: 41.8789, lon: -87.6359, desc: "103rd-floor glass boxes extending 4.3 feet out over the street with sweeping 4-state views.", query: "Skydeck Chicago Willis Tower" },
    { id: "chi_s5", type: "sight", name: "360 CHICAGO Observation Deck & TILT", category: "Panoramic Viewpoint", location: "Magnificent Mile (875 N Michigan)", lat: 41.8988, lon: -87.6229, desc: "94th-floor observation deck with moving glass platform tilting visitors 30 degrees over Michigan Avenue.", query: "360 CHICAGO Observation Deck" },
    { id: "chi_f1", type: "food", name: "Pequod's Pizza (Caramelized Crust Deep Dish)", category: "Legendary Deep Dish", location: "Lincoln Park", lat: 41.9219, lon: -87.6644, desc: "World-famous deep-dish pan pizza with a halo of dark caramelized crispy cheddar-mozzarella cheese crust.", query: "Pequod's Pizza Chicago" },
    { id: "chi_f2", type: "food", name: "Lou Malnati's Pizzeria (Buttercrust Deep Dish)", category: "Classic Deep Dish", location: "River North / Loop", lat: 41.8903, lon: -87.6338, desc: "Iconic Chicago buttercrust deep-dish loaded with vine-ripened California tomatoes and mozzarella.", query: "Lou Malnati's Pizzeria River North" },
    { id: "chi_f3", type: "food", name: "Portillo's (Chicago-Style Hot Dogs & Cake Shake)", category: "Iconic Street Food", location: "River North / Ontario St", lat: 41.8935, lon: -87.6318, desc: "All-beef frankfurter 'dragged through the garden', Italian beef, and chocolate cake blended milkshakes.", query: "Portillo's Hot Dogs Ontario Chicago" }
  ],

  // SAN FRANCISCO
  SF: [
    { id: "sf_s1", type: "sight", name: "Golden Gate Bridge (Vista Point & Walkway)", category: "Iconic Landmark", location: "Presidio / Marin Headlands", lat: 37.8199, lon: -122.4783, desc: "World-famous Art Deco suspension bridge spanning the Golden Gate strait with scenic walking paths.", query: "Golden Gate Bridge Vista Point" },
    { id: "sf_s2", type: "sight", name: "Alcatraz Island & Cellhouse Audio Tour", category: "National Historic Landmark", location: "San Francisco Bay", lat: 37.8269, lon: -122.4230, desc: "Legendary former federal penitentiary in the middle of SF Bay offering captivating ranger-led and audio tours.", query: "Alcatraz Island Tour" },
    { id: "sf_s3", type: "sight", name: "Fisherman's Wharf & Pier 39 Sea Lions", category: "Waterfront Attraction", location: "Fisherman's Wharf", lat: 37.8087, lon: -122.4098, desc: "Bustling waterfront promenade featuring famous barking sea lions, maritime museums, and sourdough bakeries.", query: "Pier 39 San Francisco" },
    { id: "sf_f1", type: "food", name: "Tartine Bakery (Morning Buns & Sourdough)", category: "Iconic Bakery", location: "Mission District", lat: 37.7614, lon: -122.4241, desc: "World-renowned bakery famous for flaky country sourdough loaves, cinnamon morning buns, and artisan tarts.", query: "Tartine Bakery San Francisco" },
    { id: "sf_f2", type: "food", name: "La Taqueria (Mission-Style Burrito)", category: "Legendary Burrito", location: "Mission District", lat: 37.7508, lon: -122.4181, desc: "Award-winning Mission-style burritos grilled golden (dorado style) loaded with carne asada and guacamole.", query: "La Taqueria Mission San Francisco" }
  ],

  // PRINCETON
  PRINCETON: [
    { id: "pr_s1", type: "sight", name: "Nassau Hall & Princeton Campus", category: "Historic Landmark", location: "Princeton Campus", lat: 40.3487, lon: -74.6593, desc: "Historic 1756 building that briefly served as the US Capitol in 1783, framed by Collegiate Gothic courtyards.", query: "Nassau Hall Princeton University" },
    { id: "pr_s2", type: "sight", name: "Princeton University Chapel", category: "Gothic Masterpiece", location: "Central Campus", lat: 40.3491, lon: -74.6565, desc: "One of the largest university chapels in the world, featuring soaring stained glass and Skinner organ.", query: "Princeton University Chapel" },
    { id: "pr_f1", type: "food", name: "Hoagie Haven (The Body Bag & Sanchez Hoagie)", category: "Legendary Eatery", location: "Nassau Street", lat: 40.3524, lon: -74.6548, desc: "Famous counter-service institution beloved by students since 1974 for loaded gourmet hoagies.", query: "Hoagie Haven Princeton" }
  ],

  // NEW YORK
  NYC: [
    { id: "ny_s1", type: "sight", name: "Central Park (Bethesda Terrace & Bow Bridge)", category: "Iconic Park", location: "Central Park / Manhattan", lat: 40.7738, lon: -73.9708, desc: "843-acre green oasis featuring scenic lakes, Bethesda Terrace, and Ramble woodlands.", query: "Central Park New York" },
    { id: "ny_s2", type: "sight", name: "The Metropolitan Museum of Art (The Met)", category: "World-Class Museum", location: "Museum Mile / Upper East Side", lat: 40.7794, lon: -73.9632, desc: "Over 5,000 years of global art, Egyptian Temple of Dendur, and rooftop skyline terrace.", query: "The Metropolitan Museum of Art" },
    { id: "ny_s3", type: "sight", name: "Top of the Rock & Rockefeller Center", category: "Observation Deck", location: "Midtown Manhattan", lat: 40.7587, lon: -73.9787, desc: "Panoramic 360-degree observation deck with direct views of the Empire State Building and Central Park.", query: "Top of the Rock Observation Deck" },
    { id: "ny_f1", type: "food", name: "Katz's Delicatessen (Pastrami on Rye)", category: "Iconic Deli", location: "Lower East Side", lat: 40.7222, lon: -73.9874, desc: "Legendary 1888 deli serving hand-carved hot pastrami and corned beef on seedless rye.", query: "Katz's Delicatessen New York" }
  ],

  // SAN DIEGO
  SAN: [
    { id: "sd_s1", type: "sight", name: "Balboa Park & Spanish Village Art Center", category: "Cultural Park", location: "Balboa Park", lat: 32.7341, lon: -117.1446, desc: "1,200-acre historic park with 17 museums, Spanish Colonial Revival architecture, and gardens.", query: "Balboa Park San Diego" },
    { id: "sd_s2", type: "sight", name: "San Diego Zoo", category: "World-Class Zoo", location: "Balboa Park", lat: 32.7353, lon: -117.1490, desc: "World-famous 100-acre wildlife sanctuary pioneering cageless open-air animal exhibits.", query: "San Diego Zoo" },
    { id: "sd_f1", type: "food", name: "California Burrito at Lucha Libre Taco Shop", category: "Iconic Mexican", location: "Mission Hills", lat: 32.7441, lon: -117.1812, desc: "Carne asada, melted cheese, and French fries stuffed in a flour tortilla with house salsas.", query: "Lucha Libre Taco Shop San Diego" }
  ]
};

function getCuratedGuideForCity(cityName, airportCode) {
  const normCity = (cityName || "").toLowerCase();
  const normCode = (airportCode || "").toUpperCase();

  if (normCity.includes("tokyo") || normCode === "HND" || normCode === "NRT") return curatedCityGuides.TOKYO;
  if (normCity.includes("kyoto") || normCity.includes("osaka") || normCode === "KIX" || normCode === "ITM") return curatedCityGuides.KYOTO_OSAKA;
  if (normCity.includes("london") || normCode === "LHR" || normCode === "LGW") return curatedCityGuides.LONDON;
  if (normCity.includes("paris") || normCode === "CDG" || normCode === "ORY") return curatedCityGuides.PARIS;
  if (normCity.includes("rome") || normCode === "FCO") return curatedCityGuides.ROME;
  if (normCity.includes("barcelona") || normCode === "BCN") return curatedCityGuides.BCN;
  if (normCity.includes("madrid") || normCode === "MAD") return curatedCityGuides.MAD;
  if (normCity.includes("hong kong") || normCode === "HKG") return curatedCityGuides.HKG;
  if (normCity.includes("honolulu") || normCode === "HNL") return curatedCityGuides.HONOLULU;
  if (normCity.includes("taipei") || normCity.includes("new taipei") || normCity.includes("tamsui") || normCity.includes("beitou") || normCity.includes("jiufen") || normCode === "TPE" || normCode === "TSA") return curatedCityGuides.TPE;
  if (normCity.includes("taichung") || normCode === "RMQ") return curatedCityGuides.TAICHUNG;
  if (normCity.includes("tainan") || normCode === "TNN") return curatedCityGuides.TAINAN;
  if (normCity.includes("kaohsiung") || normCode === "KHH") return curatedCityGuides.KHH;
  if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") return curatedCityGuides.CHI;
  if (normCity.includes("san francisco") || normCity.includes("sf") || normCode === "SFO" || normCode === "SJC" || normCode === "OAK") return curatedCityGuides.SF;
  if (normCity.includes("princeton")) return curatedCityGuides.PRINCETON;
  if (normCity.includes("new york") || normCity.includes("manhattan") || normCity.includes("brooklyn") || normCode === "JFK" || normCode === "EWR" || normCode === "LGA") return curatedCityGuides.NYC;
  if (normCity.includes("san diego") || normCode === "SAN") return curatedCityGuides.SAN;

  return null;
}

// ========================================================
// 5. SIGHTS & FALLBACK GENERATOR
// ========================================================
async function fetchTargetCitySights(cityName, airportCode, centerLat, centerLon) {
  const curated = getCuratedGuideForCity(cityName, airportCode);

  if (curated) {
    return curated.map((item, idx) => {
      const d = haversineDistance(centerLat, centerLon, item.lat, item.lon);
      return {
        ...item,
        id: item.id || `curated_${idx}_${Date.now()}`,
        distanceKm: parseFloat(d.toFixed(1))
      };
    });
  }

  return [
    { id: "fb_1", type: "sight", name: `${cityName} Historic District`, category: "Historic Landmark", location: "City Center", lat: centerLat + 0.003, lon: centerLon + 0.002, distanceKm: 0.4, desc: "Pedestrian-friendly central quarter featuring historic architecture, shops, and cafes.", query: `${cityName} Old Town` },
    { id: "fb_2", type: "sight", name: `${cityName} Central Plaza & Park`, category: "Public Landmark", location: "Central Square", lat: centerLat - 0.004, lon: centerLon + 0.003, distanceKm: 0.6, desc: "The primary architectural landmark and cultural gathering hub of the city.", query: `${cityName} Central Plaza` },
    { id: "fb_3", type: "sight", name: `${cityName} Art & Heritage Museum`, category: "Museum / Gallery", location: "Museum District", lat: centerLat + 0.006, lon: centerLon - 0.004, distanceKm: 0.9, desc: "Comprehensive collections spotlighting regional art, archaeology, and heritage.", query: `${cityName} Art Museum` },
    { id: "fb_4", type: "sight", name: `${cityName} Scenic Promenade`, category: "Scenic Walkway", location: "Waterfront", lat: centerLat - 0.006, lon: centerLon - 0.003, distanceKm: 0.8, desc: "Scenic walking promenade offering panoramic city views.", query: `${cityName} Riverwalk` },
    { id: "fb_5", type: "food", name: `${cityName} Public Food Market`, category: "Food Market", location: "Downtown Market", lat: centerLat + 0.002, lon: centerLon - 0.005, distanceKm: 0.5, desc: "Vibrant indoor market packed with fresh regional produce, street food stalls, and bakeries.", query: `${cityName} Central Market` },
    { id: "fb_6", type: "food", name: `Traditional ${cityName} Regional Dining`, category: "Iconic Culinary", location: "Old Quarter", lat: centerLat - 0.003, lon: centerLon + 0.005, distanceKm: 0.6, desc: "Authentic local culinary dishes slow-cooked with fresh regional ingredients.", query: `${cityName} Traditional Food` }
  ];
}

function getBrandPortalUrl(brand, city, checkIn, checkOut) {
  if (brand === "Marriott Bonvoy") {
    return `https://www.marriott.com/search/findHotels.mi?destinationAddress.destination=${encodeURIComponent(city)}&fromDate=${checkIn}&toDate=${checkOut || checkIn}`;
  }
  if (brand === "World of Hyatt") {
    return `https://www.hyatt.com/search/${encodeURIComponent(city)}?checkinDate=${checkIn}&checkoutDate=${checkOut || checkIn}`;
  }
  if (brand === "IHG") {
    return `https://www.ihg.com/hotels/us/en/find-hotels/hotel/rooms?qDest=${encodeURIComponent(city)}&qCiMy=${checkIn}&qCoMy=${checkOut || checkIn}`;
  }
  return "https://www.google.com/travel/hotels";
}

async function fetchLiveTargetHotels(centerLat, centerLon, cityName, airportCode, selectedBrands, checkIn, checkOut) {
  const norm = (cityName || "").toLowerCase();

  // Tokyo
  if (norm.includes("tokyo") || airportCode === "HND" || airportCode === "NRT") {
    const list = [
      { id: "tyo_h1", name: "The Ritz-Carlton, Tokyo", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 680, lat: 35.6657, lon: 139.7310, area: "Roppongi / Tokyo Midtown", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "tyo_h2", name: "Tokyo Marriott Hotel", brand: "Marriott Bonvoy", rating: 4.6, priceUSD: 280, lat: 35.6214, lon: 139.7380, area: "Shinagawa", badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "tyo_h3", name: "Park Hyatt Tokyo", brand: "World of Hyatt", rating: 4.9, priceUSD: 720, lat: 35.6854, lon: 139.6912, area: "Shinjuku Skyscraper District", badge: "Palace Luxury", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "tyo_h4", name: "Kimpton Shinjuku Tokyo", brand: "IHG", rating: 4.8, priceUSD: 360, lat: 35.6860, lon: 139.6935, area: "Shinjuku Central", badge: "Boutique Design", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Kyoto & Osaka
  if (norm.includes("kyoto") || norm.includes("osaka") || airportCode === "KIX" || airportCode === "ITM") {
    const list = [
      { id: "kyo_h1", name: "The Ritz-Carlton, Kyoto", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 750, lat: 35.0125, lon: 135.7712, area: "Kamogawa Riverfront", badge: "Luxury Sanctuary", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "kyo_h2", name: "Park Hyatt Kyoto", brand: "World of Hyatt", rating: 4.9, priceUSD: 850, lat: 34.9998, lon: 135.7801, area: "Higashiyama / Ninenzaka", badge: "Heritage Palace", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "kyo_h3", name: "InterContinental Osaka", brand: "IHG", rating: 4.9, priceUSD: 380, lat: 34.7045, lon: 135.4950, area: "Grand Front Osaka / Umeda", badge: "Prime City Hub", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // London
  if (norm.includes("london") || airportCode === "LHR" || airportCode === "LGW") {
    const list = [
      { id: "lon_h1", name: "The London EDITION", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 520, lat: 51.5165, lon: -0.1360, area: "Fitzrovia / Oxford St", badge: "Boutique Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "lon_h2", name: "Hyatt Regency London - The Churchill", brand: "World of Hyatt", rating: 4.7, priceUSD: 420, lat: 51.5160, lon: -0.1585, area: "Marylebone / Portman Sq", badge: "Classic Elegance", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "lon_h3", name: "InterContinental London Park Lane", brand: "IHG", rating: 4.8, priceUSD: 490, lat: 51.5039, lon: -0.1505, area: "Mayfair / Hyde Park Corner", badge: "Historic Prestige", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Paris
  if (norm.includes("paris") || airportCode === "CDG" || airportCode === "ORY") {
    const list = [
      { id: "par_h1", name: "Hôtel de Crillon / Prince de Galles", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 850, lat: 48.8690, lon: 2.3015, area: "Champs-Élysées / George V", badge: "Palace Prestige", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "par_h2", name: "Park Hyatt Paris-Vendôme", brand: "World of Hyatt", rating: 4.9, priceUSD: 890, lat: 48.8692, lon: 2.3305, area: "Place Vendôme / Opéra", badge: "Palace Luxury", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "par_h3", name: "InterContinental Paris Le Grand", brand: "IHG", rating: 4.8, priceUSD: 480, lat: 48.8710, lon: 2.3312, area: "Opéra Garnier", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Rome
  if (norm.includes("rome") || airportCode === "FCO") {
    const list = [
      { id: "rom_h1", name: "The St. Regis Rome", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 720, lat: 41.9035, lon: 12.4950, area: "Piazza della Repubblica", badge: "Iconic Grandeur", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "rom_h2", name: "Six Senses Rome / InterContinental Ambasciatori", brand: "IHG", rating: 4.8, priceUSD: 560, lat: 41.9060, lon: 12.4905, area: "Via Veneto / Central", badge: "Historic Luxury", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Barcelona
  if (norm.includes("barcelona") || airportCode === "BCN") {
    const list = [
      { id: "bcn_h1", name: "W Barcelona (Hotel Vela)", brand: "Marriott Bonvoy", rating: 4.7, priceUSD: 360, lat: 41.3684, lon: 2.1901, area: "Barceloneta Beachfront", badge: "Waterfront Icon", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "bcn_h2", name: "Kimpton Vividora Hotel", brand: "IHG", rating: 4.8, priceUSD: 290, lat: 41.3845, lon: 2.1740, area: "Gothic Quarter", badge: "Boutique Design", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Madrid
  if (norm.includes("madrid") || airportCode === "MAD") {
    const list = [
      { id: "mad_h1", name: "The Westin Palace, Madrid", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 380, lat: 40.4150, lon: -3.6955, area: "Paseo del Prado / Cortes", badge: "Royal Grandeur", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "mad_h2", name: "Hyatt Centric Gran Via Madrid", brand: "World of Hyatt", rating: 4.7, priceUSD: 310, lat: 40.4205, lon: -3.7045, area: "Gran Vía Central", badge: "Prime City Hub", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Hong Kong
  if (norm.includes("hong kong") || airportCode === "HKG") {
    const list = [
      { id: "hkg_h1", name: "The Ritz-Carlton, Hong Kong", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 540, lat: 22.3034, lon: 114.1602, area: "ICC Tower / West Kowloon", badge: "Sky Luxury (118th Floor)", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "hkg_h2", name: "Grand Hyatt Hong Kong", brand: "World of Hyatt", rating: 4.8, priceUSD: 380, lat: 22.2805, lon: 114.1725, area: "Wan Chai Waterfront", badge: "Harbor Views", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "hkg_h3", name: "InterContinental Grand Stanford Hong Kong", brand: "IHG", rating: 4.7, priceUSD: 260, lat: 22.2985, lon: 114.1798, area: "Tsim Sha Tsui East", badge: "Harborfront Classic", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Honolulu
  if (norm.includes("honolulu") || airportCode === "HNL") {
    const list = [
      { id: "hnl_h1", name: "The Royal Hawaiian, a Luxury Collection Resort", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 450, lat: 21.2778, lon: -157.8285, area: "Waikiki Oceanfront", badge: "Historic 'Pink Palace'", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "hnl_h2", name: "Hyatt Regency Waikiki Beach Resort", brand: "World of Hyatt", rating: 4.6, priceUSD: 320, lat: 21.2765, lon: -157.8250, area: "Kalakaua Avenue / Waikiki", badge: "Oceanfront Resort", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Taipei & Taiwan Cities
  if (norm.includes("taipei") || norm.includes("new taipei") || airportCode === "TPE" || airportCode === "TSA") {
    const list = [
      { id: "tpe_h1", name: "W Taipei", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 310, lat: 25.0407, lon: 121.5658, area: "Xinyi District / Taipei 101", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "tpe_h2", name: "Grand Hyatt Taipei", brand: "World of Hyatt", rating: 4.8, priceUSD: 260, lat: 25.0354, lon: 121.5623, area: "Xinyi District", badge: "Prime Landmark", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "tpe_h3", name: "Kimpton Da An Hotel", brand: "IHG", rating: 4.8, priceUSD: 230, lat: 25.0416, lon: 121.5469, area: "Daan District", badge: "Design Boutique", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Chicago
  if (norm.includes("chicago") || airportCode === "ORD" || airportCode === "MDW") {
    const list = [
      { id: "chi_h1", name: "The Ritz-Carlton, Chicago", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 460, lat: 41.8976, lon: -87.6231, area: "Magnificent Mile", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "chi_h2", name: "Park Hyatt Chicago", brand: "World of Hyatt", rating: 4.9, priceUSD: 510, lat: 41.8980, lon: -87.6255, area: "Water Tower / Magnificent Mile", badge: "Palace Luxury Flagship", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "chi_h3", name: "InterContinental Chicago Magnificent Mile", brand: "IHG", rating: 4.7, priceUSD: 310, lat: 41.8912, lon: -87.6244, area: "Magnificent Mile", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // San Francisco
  if (norm.includes("san francisco") || norm.includes("sf") || airportCode === "SFO" || airportCode === "SJC" || airportCode === "OAK") {
    const list = [
      { id: "sf_h1", name: "The St. Regis San Francisco", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 520, lat: 37.7860, lon: -122.4010, area: "SoMa / SFMOMA", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "sf_h2", name: "Grand Hyatt San Francisco", brand: "World of Hyatt", rating: 4.7, priceUSD: 310, lat: 37.7892, lon: -122.4075, area: "Union Square Center", badge: "Premium Hub", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "sf_h3", name: "InterContinental Mark Hopkins San Francisco", brand: "IHG", rating: 4.7, priceUSD: 340, lat: 37.7918, lon: -122.4105, area: "Nob Hill", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  const fallback = [];
  if (selectedBrands.includes("Marriott Bonvoy")) {
    fallback.push({ id: `fb_h1_${cityName}`, name: `Marriott ${cityName} Grand`, brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 340, lat: centerLat + 0.005, lon: centerLon + 0.004, distanceKm: 0.7, area: `${cityName} Center`, badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) });
  }
  if (selectedBrands.includes("World of Hyatt")) {
    fallback.push({ id: `fb_h2_${cityName}`, name: `Hyatt Regency ${cityName}`, brand: "World of Hyatt", rating: 4.7, priceUSD: 320, lat: centerLat + 0.006, lon: centerLon - 0.003, distanceKm: 0.8, area: "Downtown", badge: "Premium", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) });
  }
  if (selectedBrands.includes("IHG")) {
    fallback.push({ id: `fb_h3_${cityName}`, name: `InterContinental ${cityName}`, brand: "IHG", rating: 4.8, priceUSD: 390, lat: centerLat + 0.003, lon: centerLon + 0.006, distanceKm: 0.7, area: "Plaza Center", badge: "Luxury Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) });
  }
  return fallback;
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
    { name: "EVA Air", code: "BR" },
    { name: "China Airlines", code: "CI" },
    { name: "STARLUX Airlines", code: "JX" },
    { name: "United Airlines", code: "UA" }
  ];
  let layoverHubs = ["TPE", "SFO", "LAX", "SEA"];

  const flights = [];
  const basePriceUSD = Math.round(isLongHaul ? 850 + (distanceKm * 0.045) : 180 + (distanceKm * 0.08));

  // 1. Non-stop #1
  const d1 = "11:45 PM";
  flights.push({
    id: "fl-1",
    airline: carrierPool[0].name,
    flightNum: `${carrierPool[0].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 0,
    stopDetails: "Non-stop",
    departTime: d1,
    arriveTime: calculateArrivalTime(d1, nonStopFlightMinutes, timeZoneDiffHours),
    rawDepartTimeMin: 1425,
    durationText: formatMinutesToDuration(nonStopFlightMinutes),
    rawDurationMinutes: nonStopFlightMinutes,
    priceUSD: basePriceUSD + 150,
    cabin: "Economy Standard",
    bookingUrl: gFlightsUrl
  });

  // 2. Non-stop #2
  const d2 = "03:40 PM";
  flights.push({
    id: "fl-2",
    airline: carrierPool[1].name,
    flightNum: `${carrierPool[1].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 0,
    stopDetails: "Non-stop",
    departTime: d2,
    arriveTime: calculateArrivalTime(d2, nonStopFlightMinutes, timeZoneDiffHours),
    rawDepartTimeMin: 940,
    durationText: formatMinutesToDuration(nonStopFlightMinutes),
    rawDurationMinutes: nonStopFlightMinutes,
    priceUSD: basePriceUSD + 200,
    cabin: "Main Cabin",
    bookingUrl: gFlightsUrl
  });

  // 3. 1-Stop Connection
  const hub1 = layoverHubs[0];
  const dur1 = nonStopFlightMinutes + 125;
  const d3 = "08:15 AM";
  flights.push({
    id: "fl-3",
    airline: carrierPool[2].name,
    flightNum: `${carrierPool[2].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 1,
    stopDetails: `1 stop (${hub1} - 1h 45m)`,
    departTime: d3,
    arriveTime: calculateArrivalTime(d3, dur1, timeZoneDiffHours),
    rawDepartTimeMin: 495,
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

      // 4. Fetch Sights with Exact GPS and Dynamic Distance Relative to Target Center
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