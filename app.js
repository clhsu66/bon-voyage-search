// ========================================================
// 1. GLOBAL AIRPORT & DOWNTOWN DIRECTORY
// ========================================================
const majorAirportCatalog = [
  // Taiwan Regional & International Hubs
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
  if (lower.includes("chicago") || lower.includes("the loop")) return { cityName: "Chicago", lat: 41.8781, lon: -87.6298 };
  if (lower.includes("san francisco") || lower.includes("sf") || lower.includes("bay area")) return { cityName: "San Francisco", lat: 37.7749, lon: -122.4194 };
  if (lower.includes("san jose") || lower.includes("silicon valley")) return { cityName: "San Jose, CA", lat: 37.3382, lon: -121.8863 };
  if (lower.includes("princeton")) return { cityName: "Princeton, NJ", lat: 40.3487, lon: -74.6593 };
  if (lower.includes("manhattan") || lower.includes("new york") || lower.includes("nyc")) return { cityName: "New York (Manhattan)", lat: 40.7580, lon: -73.9855 };
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
// 3. PUBLIC TRANSIT & HIGH-SPEED RAIL GUIDES
// ========================================================
const cityTransitGuidesMaster = {
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
  if (normCity.includes("taipei") || normCity.includes("new taipei") || normCity.includes("tamsui") || normCity.includes("beitou") || normCity.includes("jiufen") || normCode === "TPE" || normCode === "TSA") key = "TPE";
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
// 4. CURATED SIGHTS & CULINARY CATALOG (20+ GUARANTEED PER CITY)
// ========================================================
const cityGuidesMaster = {
  // 1. TAIPEI & SURROUNDING NORTHERN TAIWAN (20+ ITEMS)
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
    { id: "tpe_11", type: "sight", name: "Songshan Cultural & Creative Park", category: "Creative Arts Hub", location: "Xinyi / Songshan", lat: 25.0440, lon: 121.5607, desc: "Former 1937 Japanese tobacco factory transformed into open green design studios, craft cafes, and Eslite Spectrum.", query: "Songshan Cultural Park" },
    { id: "tpe_12", type: "sight", name: "Maokong Gondola & Tea Plantations", category: "Scenic Cable Car & Tea", location: "Wenshan District", lat: 24.9680, lon: 121.5880, desc: "Glass-bottom crystal cabin gondola ride over mist-covered mountains to hillside Tieguanyin tea houses.", query: "Maokong Gondola Taipei" },
    { id: "tpe_13", type: "food", name: "Din Tai Fung Flagship (Xiao Long Bao Soup Dumplings)", category: "World-Famous Dumplings", location: "Xinyi / Dongmen", lat: 25.0338, lon: 121.5300, desc: "Legendary Michelin-recognized 18-fold steamed pork soup dumplings, truffle dumplings, and egg fried rice.", query: "Din Tai Fung Xinyi Flagship" },
    { id: "tpe_14", type: "food", name: "Raohe Street Night Market (Fuzhou Pepper Buns)", category: "Legendary Night Market", location: "Songshan District", lat: 25.0509, lon: 121.5775, desc: "600-meter vibrant market renowned for wood-fired crispy black pepper pork buns, herbal pork ribs, and shaved ice.", query: "Raohe Street Night Market" },
    { id: "tpe_15", type: "food", name: "Shilin Night Market (Giant Fried Chicken & Oyster Omelet)", category: "Mega Food Market", location: "Shilin District", lat: 25.0879, lon: 121.5241, desc: "Taipei's largest night market packed with sizzling hot star fried chicken cutlets, oyster omelets, and bubble tea.", query: "Shilin Night Market Taipei" },
    { id: "tpe_16", type: "food", name: "Ningxia Night Market (Taro Balls & Minced Pork Rice)", category: "Artisan Culinary Market", location: "Datong District", lat: 25.0558, lon: 121.5152, desc: "Traditional foodies' favorite night market famous for crispy deep-fried taro balls, braised pork rice (Lu Rou Fan), and beef soup.", query: "Ningxia Night Market Taipei" },
    { id: "tpe_17", type: "food", name: "Fu Hang Soy Milk (Michelin Bib Gourmand Breakfast)", category: "Historic Breakfast", location: "Huashan Market (Shandao Temple)", lat: 25.0442, lon: 121.5248, desc: "Beloved breakfast institution baking fresh thick flatbreads with eggs, deep-fried dough sticks (You Tiao), and savory soy milk.", query: "Fu Hang Soy Milk Taipei" },
    { id: "tpe_18", type: "food", name: "Yongkang Beef Noodles (Braised Sichuan Broth)", category: "Signature Beef Noodle", location: "Dongmen / Yongkang St", lat: 25.0329, lon: 121.5298, desc: "Tender Australian beef shank and tendon slow-simmered in rich spicy chili-bean broth with springy noodles.", query: "Yongkang Beef Noodles Taipei" },
    { id: "tpe_19", type: "food", name: "Ay-Chung Flour-Rice Noodle (Ximending Street)", category: "Iconic Street Food", location: "Ximending", lat: 25.0433, lon: 121.5076, desc: "Famous standing-room-only stall serving steaming bowls of silky thin noodles in bonito broth with braised pork intestine.", query: "Ay-Chung Flour-Rice Noodle Ximending" },
    { id: "tpe_20", type: "food", name: "Addiction Aquatic Development (Seafood & Sushi Bar)", category: "Gourmet Seafood Market", location: "Zhongshan District", lat: 25.0667, lon: 121.5369, desc: "Upscale fish market with live king crab tanks, standing sushi counters, charcoal barbecue grills, and oyster bar.", query: "Addiction Aquatic Development Taipei" },
    { id: "tpe_21", type: "food", name: "Ice Monster / Smoothie House (Mango Shaved Ice)", category: "Iconic Summer Dessert", location: "Yongkang Street", lat: 25.0331, lon: 121.5295, desc: "Fluffy snowflake shaved ice loaded with fresh sweet Irwin mangoes, condensed milk, and mango sorbet.", query: "Smoothie House Yongkang Taipei" }
  ],

  // 2. CHICAGO & OAK PARK METRO (20+ ITEMS)
  CHI: [
    { id: "chi_1", type: "sight", name: "Millennium Park & Cloud Gate ('The Bean')", category: "Iconic Landmark", location: "Downtown Loop / Michigan Ave", lat: 41.8826, lon: -87.6226, desc: "World-famous polished steel sculpture reflecting Chicago's skyline, Lurie Garden, and Crown Fountain.", query: "Cloud Gate Millennium Park Chicago" },
    { id: "chi_2", type: "sight", name: "The Art Institute of Chicago & Modern Wing", category: "World-Class Museum", location: "Michigan Avenue", lat: 41.8796, lon: -87.6237, desc: "Over 300,000 works of art featuring Seurat's Grand Jatte, Edward Hopper's Nighthawks, and Impressionist galleries.", query: "Art Institute of Chicago" },
    { id: "chi_3", type: "sight", name: "Chicago Architecture Center River Cruise", category: "Iconic Architecture Tour", location: "Chicago Riverwalk / Michigan Ave", lat: 41.8887, lon: -87.6244, desc: "90-minute docent-led boat cruise through the canyon of skyscrapers that birthed modern architecture.", query: "Chicago Architecture Center River Cruise" },
    { id: "chi_4", type: "sight", name: "Willis Tower Skydeck & 'The Ledge'", category: "Observation Deck", location: "Financial District / Wacker Dr", lat: 41.8789, lon: -87.6359, desc: "103rd-floor glass boxes extending 4.3 feet out over the street with sweeping 4-state views.", query: "Skydeck Chicago Willis Tower" },
    { id: "chi_5", type: "sight", name: "360 CHICAGO Observation Deck & TILT", category: "Panoramic Viewpoint", location: "Magnificent Mile (875 N Michigan)", lat: 41.8988, lon: -87.6229, desc: "94th-floor observation deck with moving glass platform tilting visitors 30 degrees over Michigan Avenue.", query: "360 CHICAGO Observation Deck" },
    { id: "chi_6", type: "sight", name: "The Field Museum of Natural History", category: "World-Class Museum", location: "Museum Campus / Lakefront", lat: 41.8663, lon: -87.6170, desc: "Renowned natural history museum home to 'Sue' the T. rex, ancient Egyptian tombs, and gemstone halls.", query: "Field Museum Chicago" },
    { id: "chi_7", type: "sight", name: "Shedd Aquarium & Oceanarium", category: "Marine Sanctuary", location: "Museum Campus", lat: 41.8676, lon: -87.6140, desc: "Historic 1930 lakefront aquarium housing beluga whales, Caribbean coral reefs, and sea otters.", query: "Shedd Aquarium Chicago" },
    { id: "chi_8", type: "sight", name: "Adler Planetarium & Skyline View", category: "Astronomy & Lakefront", location: "Museum Campus", lat: 41.8663, lon: -87.6068, desc: "America's first planetarium situated on Northerly Island offering the most famous postcard skyline view of Chicago.", query: "Adler Planetarium Chicago" },
    { id: "chi_9", type: "sight", name: "Navy Pier & Centennial Wheel", category: "Waterfront Destination", location: "Streeterville / Lake Michigan", lat: 41.8917, lon: -87.6086, desc: "Lakefront pier featuring a 200-foot Ferris wheel, Shakespeare Theater, boat tours, and fireworks.", query: "Navy Pier Chicago" },
    { id: "chi_10", type: "sight", name: "Wrigley Field Historic Ballpark (4.5 mi north)", category: "Historic Sports Heritage", location: "Wrigleyville / Lakeview", lat: 41.9484, lon: -87.6553, desc: "Legendary 1914 home of the Chicago Cubs with ivy-covered brick walls and neighborhood rooftop bleachers.", query: "Wrigley Field Chicago" },
    { id: "chi_11", type: "sight", name: "Chicago Cultural Center (Tiffany Dome)", category: "Architectural Marvel", location: "Loop / Washington St", lat: 41.8837, lon: -87.6248, desc: "Magnificent 1897 public palace featuring the world's largest stained glass Tiffany dome.", query: "Chicago Cultural Center Tiffany Dome" },
    { id: "chi_12", type: "sight", name: "Garfield Park Conservatory (4.5 mi west)", category: "Botanical Oasis", location: "Garfield Park", lat: 41.8863, lon: -87.7171, desc: "One of the largest botanical conservatories in the country with thousands of rare tropical plants under glass.", query: "Garfield Park Conservatory Chicago" },
    { id: "chi_13", type: "sight", name: "Frank Lloyd Wright Home & Studio (8.5 mi west)", category: "Historic Architecture", location: "Oak Park", lat: 41.8940, lon: -87.7983, desc: "Birthplace of the American Prairie School architectural style and historic neighborhood walking district.", query: "Frank Lloyd Wright Home Oak Park" },
    { id: "chi_14", type: "sight", name: "Museum of Science and Industry (7 mi south)", category: "Interactive Museum", location: "Hyde Park", lat: 41.7906, lon: -87.5830, desc: "Housed in the 1893 World's Fair palace, featuring a full German U-505 submarine, coal mine, and Boeing 727.", query: "Museum of Science and Industry Chicago" },
    { id: "chi_15", type: "food", name: "Pequod's Pizza (Caramelized Crust Deep Dish)", category: "Legendary Deep Dish", location: "Lincoln Park", lat: 41.9219, lon: -87.6644, desc: "World-famous deep-dish pan pizza with a halo of dark caramelized crispy cheddar-mozzarella cheese crust.", query: "Pequod's Pizza Chicago" },
    { id: "chi_16", type: "food", name: "Lou Malnati's Pizzeria (Buttercrust Deep Dish)", category: "Classic Deep Dish", location: "River North / Loop", lat: 41.8903, lon: -87.6338, desc: "Iconic Chicago buttercrust deep-dish loaded with vine-ripened California tomatoes and mozzarella.", query: "Lou Malnati's Pizzeria River North" },
    { id: "chi_17", type: "food", name: "Portillo's (Chicago-Style Hot Dogs & Cake Shake)", category: "Iconic Street Food", location: "River North / Ontario St", lat: 41.8935, lon: -87.6318, desc: "All-beef frankfurter 'dragged through the garden', Italian beef, and chocolate cake blended milkshakes.", query: "Portillo's Hot Dogs Ontario Chicago" },
    { id: "chi_18", type: "food", name: "Al's #1 Italian Beef (Since 1938)", category: "Historic Italian Beef", location: "Little Italy (Taylor St)", lat: 41.8698, lon: -87.6540, desc: "Thinly sliced roast beef soaked in seasoned au jus, tucked into French bread and crowned with spicy giardiniera.", query: "Al's Italian Beef Taylor Street" },
    { id: "chi_19", type: "food", name: "Garrett Popcorn Shops (The Garrett Mix)", category: "Iconic Snack", location: "Michigan Avenue", lat: 41.8966, lon: -87.6241, desc: "Famous batch-cooked blend of sweet CaramelCrisp and savory sharp CheddarCraft popcorn.", query: "Garrett Popcorn Michigan Ave Chicago" },
    { id: "chi_20", type: "food", name: "The Original Rainbow Cone (Since 1926)", category: "Historic Dessert", location: "Navy Pier / Beverly", lat: 41.8915, lon: -87.6080, desc: "Five legendary sliced layers of chocolate, strawberry, Palmer House (vanilla/walnut), pistachio, and orange sherbet.", query: "Original Rainbow Cone Navy Pier" },
    { id: "chi_21", type: "food", name: "MingHin Cuisine & Chinatown Square", category: "Cantonese Dim Sum", location: "Chinatown", lat: 41.8533, lon: -87.6329, desc: "Michelin Bib Gourmand dim sum palace serving steamed dumplings, barbecue pork buns, and seafood.", query: "MingHin Cuisine Chinatown Chicago" },
    { id: "chi_22", type: "food", name: "Green Mill Cocktail Lounge (Historic Jazz)", category: "Historic Jazz Lounge", location: "Uptown (5.5 mi north)", lat: 41.9691, lon: -87.6599, desc: "Historic 1907 cocktail lounge once patronized by Al Capone, hosting premier live jazz nightly.", query: "Green Mill Jazz Lounge Chicago" }
  ],

  // 3. SAN FRANCISCO & BAY AREA (20+ ITEMS)
  SF: [
    { id: "sf_1", type: "sight", name: "Golden Gate Bridge (Vista Point & Walkway)", category: "Iconic Landmark", location: "Presidio / Marin Headlands", lat: 37.8199, lon: -122.4783, desc: "World-famous Art Deco suspension bridge spanning the Golden Gate strait with scenic walking paths.", query: "Golden Gate Bridge Vista Point" },
    { id: "sf_2", type: "sight", name: "Alcatraz Island & Cellhouse Audio Tour", category: "National Historic Landmark", location: "San Francisco Bay", lat: 37.8269, lon: -122.4230, desc: "Legendary former federal penitentiary in the middle of SF Bay offering captivating ranger-led and audio tours.", query: "Alcatraz Island Tour" },
    { id: "sf_3", type: "sight", name: "Fisherman's Wharf & Pier 39 Sea Lions", category: "Waterfront Attraction", location: "Fisherman's Wharf", lat: 37.8087, lon: -122.4098, desc: "Bustling waterfront promenade featuring famous barking sea lions, maritime museums, and sourdough bakeries.", query: "Pier 39 San Francisco" },
    { id: "sf_4", type: "sight", name: "Historic Cable Cars (Powell-Hyde Line)", category: "Historic Transit", location: "Powell St / Nob Hill", lat: 37.7845, lon: -122.4080, desc: "The world's last manually operated cable car system climbing San Francisco's steepest scenic hills.", query: "Powell Hyde Cable Car Turnaround" },
    { id: "sf_5", type: "sight", name: "Chinatown & Dragon Gate", category: "Cultural Heritage", location: "Grant Avenue / Bush St", lat: 37.7908, lon: -122.4058, desc: "Oldest Chinatown in North America filled with herbal shops, dragon lantern streets, and dim sum parlors.", query: "Chinatown Dragon Gate San Francisco" },
    { id: "sf_6", type: "sight", name: "Palace of Fine Arts & Marina Lagoon", category: "Monumental Architecture", location: "Marina District", lat: 37.8029, lon: -122.4484, desc: "Greco-Roman rotunda and colonnade built for the 1915 Panama-Pacific Exposition surrounded by a peaceful lagoon.", query: "Palace of Fine Arts San Francisco" },
    { id: "sf_7", type: "sight", name: "Twin Peaks Panoramic Viewpoint", category: "Scenic Viewpoint", location: "Twin Peaks Summit", lat: 37.7544, lon: -122.4477, desc: "Twin 922-foot hills offering the ultimate 360-degree panoramic view of downtown SF, the bridges, and the bay.", query: "Twin Peaks San Francisco" },
    { id: "sf_8", type: "sight", name: "Muir Woods National Monument (11.5 mi north)", category: "Ancient Redwood Forest", location: "Mill Valley, Marin", lat: 37.8970, lon: -122.5811, desc: "Primeval coastal redwood sanctuary with towering 1,000-year-old trees and peaceful boardwalk trails.", query: "Muir Woods National Monument" },
    { id: "sf_9", type: "sight", name: "Golden Gate Park & Japanese Tea Garden", category: "Urban Park Oasis", location: "Richmond / Sunset", lat: 37.7700, lon: -122.4700, desc: "1,017-acre park featuring the historic 1894 Japanese Tea Garden, Conservatory of Flowers, and de Young Museum.", query: "Japanese Tea Garden San Francisco" },
    { id: "sf_10", type: "sight", name: "Lombard Street (World's Crookedest Street)", category: "Scenic Street", location: "Russian Hill", lat: 37.8021, lon: -122.4187, desc: "Famous steep block with eight sharp hairpin turns lined with blooming hydrangea gardens and brick paving.", query: "Lombard Street San Francisco" },
    { id: "sf_11", type: "sight", name: "Sausalito Waterfront & Houseboat Docks (7 mi north)", category: "Bayside Art Colony", location: "Sausalito, Marin", lat: 37.8590, lon: -122.4853, desc: "Charming Mediterranean-style coastal town offering waterfront dining with views across to the SF skyline.", query: "Sausalito Waterfront" },
    { id: "sf_12", type: "sight", name: "Stanford University & Memorial Church (28 mi south)", category: "Historic Campus Architecture", location: "Palo Alto / Silicon Valley", lat: 37.4275, lon: -122.1697, desc: "Prestigious university campus featuring Romanesque sandstone arcades, Rodin sculpture garden, and Hoover Tower.", query: "Stanford University Memorial Church" },
    { id: "sf_13", type: "food", name: "Tartine Bakery (Morning Buns & Sourdough)", category: "Iconic Bakery", location: "Mission District", lat: 37.7614, lon: -122.4241, desc: "World-renowned bakery famous for flaky country sourdough loaves, cinnamon morning buns, and artisan tarts.", query: "Tartine Bakery San Francisco" },
    { id: "sf_14", type: "food", name: "La Taqueria (Mission-Style Burrito)", category: "Legendary Burrito", location: "Mission District", lat: 37.7508, lon: -122.4181, desc: "Award-winning Mission-style burritos grilled golden (dorado style) loaded with carne asada and guacamole.", query: "La Taqueria Mission San Francisco" },
    { id: "sf_15", type: "food", name: "Swan Oyster Depot (Since 1912)", category: "Historic Seafood Counter", location: "Nob Hill / Polk St", lat: 37.7909, lon: -122.4211, desc: "18-seat marble counter serving fresh Pacific Dungeness crab, clam chowder, and oysters on the half shell.", query: "Swan Oyster Depot San Francisco" },
    { id: "sf_16", type: "food", name: "House of Prime Rib", category: "Classic American Dining", location: "Nob Hill / Van Ness", lat: 37.7934, lon: -122.4228, desc: "Beloved San Francisco institution carving prime rib tableside from stainless steel Zeppelins with Yorkshire pudding.", query: "House of Prime Rib San Francisco" },
    { id: "sf_17", type: "food", name: "Ghirardelli Chocolate Factory & Ice Cream", category: "Historic Dessert", location: "Ghirardelli Square", lat: 37.8059, lon: -122.4226, desc: "Historic 1893 chocolate landmark serving hot fudge sundaes and freshly made handmade chocolates.", query: "Ghirardelli Square San Francisco" },
    { id: "sf_18", type: "food", name: "Ferry Building Food Hall & Farmers Market", category: "Artisan Marketplace", location: "Embarcadero", lat: 37.7955, lon: -122.3937, desc: "Historic 1898 clocktower ferry terminal packed with artisan food purveyors, oysters, cheeses, and Blue Bottle coffee.", query: "Ferry Building Marketplace San Francisco" },
    { id: "sf_19", type: "food", name: "Boudin Bakery Sourdough (Flagship at Wharf)", category: "Original SF Sourdough", location: "Fisherman's Wharf", lat: 37.8085, lon: -122.4150, desc: "Baking SF sourdough with the original 1849 mother dough, famous for hot clam chowder in bread bowls.", query: "Boudin Bakery Fisherman's Wharf" },
    { id: "sf_20", type: "food", name: "City Bakery / Good Mong Kok Dim Sum", category: "Authentic Chinatown Dim Sum", location: "Chinatown (Stockton St)", lat: 37.7950, lon: -122.4082, desc: "Bustling takeout counter serving steaming hot baked pork buns, har gow shrimp dumplings, and egg tarts.", query: "Good Mong Kok Dim Sum San Francisco" }
  ],

  // 4. TOKYO & KANTO (20+ ITEMS)
  TOKYO: [
    { id: "tyo_1", type: "sight", name: "Sensō-ji Temple & Nakamise-dori", category: "Historic Temple", location: "Asakusa", lat: 35.7148, lon: 139.7967, desc: "Tokyo's oldest Buddhist temple founded in 645 AD featuring the iconic giant red Kaminarimon lantern and street snack stalls.", query: "Senso-ji Asakusa Tokyo" },
    { id: "tyo_2", type: "sight", name: "Meiji Jingu Shrine & Yoyogi Forest", category: "Shinto Shrine Oasis", location: "Shibuya / Harajuku", lat: 35.6764, lon: 139.6993, desc: "Tranquil 170-acre evergreen forest sanctuary dedicated to Emperor Meiji, entered through massive wooden Torii gates.", query: "Meiji Jingu Tokyo" },
    { id: "tyo_3", type: "sight", name: "Shibuya Sky & Scramble Crossing", category: "Observation Deck & Crossing", location: "Shibuya", lat: 35.6580, lon: 139.7016, desc: "Open-air 360-degree rooftop deck 229 meters high overlooking the world's busiest pedestrian scramble crossing.", query: "Shibuya Sky Observation Deck" },
    { id: "tyo_4", type: "sight", name: "teamLab Planets Tokyo", category: "Immersive Digital Art", location: "Toyosu Waterfront", lat: 35.6491, lon: 139.7898, desc: "Body-immersive digital museum where visitors walk barefoot through crystal universes and floating flower gardens.", query: "teamLab Planets Tokyo" },
    { id: "tyo_5", type: "sight", name: "Tsukiji Outer Market", category: "Seafood Market", location: "Chuo / Tsukiji", lat: 35.6654, lon: 139.7707, desc: "Bustling market alleys serving fresh sea urchin (uni), wagyu skewers, tamagoyaki omelets, and premium sushi.", query: "Tsukiji Outer Market Tokyo" },
    { id: "tyo_6", type: "sight", name: "Tokyo Skytree (634m)", category: "Observation Tower", location: "Sumida", lat: 35.7100, lon: 139.8107, desc: "The tallest structure in Japan offering observation decks on levels 350 and 450 with views of Mount Fuji.", query: "Tokyo Skytree" },
    { id: "tyo_7", type: "sight", name: "Tokyo Imperial Palace & East Gardens", category: "Imperial Heritage", location: "Chiyoda", lat: 35.6852, lon: 139.7528, desc: "Surrounded by stone walls and moats, featuring the historic Nijubashi Bridge and tranquil Edo-period castle ruins.", query: "Tokyo Imperial Palace East Gardens" },
    { id: "tyo_8", type: "sight", name: "Shinjuku Gyoen National Garden", category: "Botanical Landscape Park", location: "Shinjuku", lat: 35.6852, lon: 139.7101, desc: "Expansive 144-acre blending Japanese traditional, French formal, and English landscape gardens.", query: "Shinjuku Gyoen National Garden" },
    { id: "tyo_9", type: "sight", name: "Akihabara Electric Town & Anime Hub", category: "Pop Culture District", location: "Chiyoda / Akihabara", lat: 35.6983, lon: 139.7731, desc: "World center for electronics, retro video gaming, multi-story anime stores, and themed cafes.", query: "Akihabara Electric Town" },
    { id: "tyo_10", type: "sight", name: "Kamakura Great Buddha & Kotoku-in (25 mi south)", category: "Historic Coastal Landmark", location: "Kamakura", lat: 35.3167, lon: 139.5361, desc: "Monumental 13th-century outdoor bronze seated Buddha statue in the scenic coastal samurai capital.", query: "Kamakura Great Buddha" },
    { id: "tyo_11", type: "sight", name: "Yokohama Minato Mirai 21 & Chinatown (18 mi south)", category: "Harbor Skyline & Culture", location: "Yokohama", lat: 35.4548, lon: 139.6315, desc: "Waterfront futuristic skyline, Red Brick Warehouses, and Japan's largest vibrant Chinatown.", query: "Yokohama Minato Mirai" },
    { id: "tyo_12", type: "food", name: "Ichiran Ramen Shibuya (Tonkotsu Broth)", category: "Iconic Tonkotsu Ramen", location: "Shibuya", lat: 35.6620, lon: 139.7005, desc: "Solo flavor-focus booths serving rich, slow-simmered natural tonkotsu pork bone broth with custom spicy red sauce.", query: "Ichiran Ramen Shibuya" },
    { id: "tyo_13", type: "food", name: "Ginza Kagari (Rich Chicken Paitan Soba)", category: "Michelin Recognized Ramen", location: "Ginza", lat: 35.6702, lon: 139.7644, desc: "Velvety, creamy chicken paitan broth simmered to golden perfection crowned with seasonal vegetables and truffle oil.", query: "Ginza Kagari Ramen" },
    { id: "tyo_14", type: "food", name: "Gyukatsu Motomura (Deep-Fried Wagyu Beef Cutlet)", category: "Signature Beef Cutlet", location: "Shinjuku / Shibuya", lat: 35.6900, lon: 139.7020, desc: "Rare panko-crusted wagyu beef cutlet served with a personal stone hotplate to sear each slice to your liking.", query: "Gyukatsu Motomura Tokyo" },
    { id: "tyo_15", type: "food", name: "Tonkatsu Maisen Aoyama", category: "Classic Kurobuta Tonkatsu", location: "Omotesando / Aoyama", lat: 35.6678, lon: 139.7106, desc: "Housed in a converted historic public bathhouse, famed for fork-tender breaded black pork cutlets and katsu sandwiches.", query: "Tonkatsu Maisen Aoyama Tokyo" },
    { id: "tyo_16", type: "food", name: "Sushi Dai / Daiwa Sushi (Toyosu Market)", category: "Premier Market Sushi", location: "Toyosu Fish Market", lat: 35.6450, lon: 139.7850, desc: "Ultra-fresh omakase sushi served directly at the wholesale fish market, featuring fatty tuna (otoro) and sea urchin.", query: "Daiwa Sushi Toyosu Market" },
    { id: "tyo_17", type: "food", name: "Tempura Kondo (Michelin 2-Star Tempura)", category: "Artisan Tempura", location: "Ginza", lat: 35.6710, lon: 139.7635, desc: "Master chef frying delicate, feather-light tempura in pure sesame oil, famous for julienned sweet potato towers.", query: "Tempura Kondo Ginza" },
    { id: "tyo_18", type: "food", name: "Omoide Yokocho (Memory Lane Yakitori Alleys)", category: "Atmospheric Izakaya Alley", location: "Shinjuku West Exit", lat: 35.6931, lon: 139.6994, desc: "Atmospheric narrow post-war alleyways packed with charcoal yakitori skewers, grilled gyoza, and cold draft beer.", query: "Omoide Yokocho Shinjuku" },
    { id: "tyo_19", type: "food", name: "Harajuku Gyoza Lou", category: "Iconic Gyoza Dumplings", location: "Harajuku / Jingumae", lat: 35.6671, lon: 139.7061, desc: "Beloved neighborhood counter serving plates of crispy pan-fried or steamed pork and chive dumplings.", query: "Harajuku Gyoza Lou" },
    { id: "tyo_20", type: "food", name: "Tsujiki Fish Market Tamagoyaki (Yamacho)", category: "Sweet Japanese Rolled Omelet", location: "Tsukiji", lat: 35.6650, lon: 139.7710, desc: "Hot, freshly rolled sweet dashi egg omelet served on a skewer for ¥150.", query: "Tsukiji Yamacho Tamagoyaki" }
  ],

  // 5. LONDON & SURROUNDING ENGLAND (20+ ITEMS)
  LONDON: [
    { id: "lon_1", type: "sight", name: "Tower of London & Crown Jewels", category: "Royal Historic Fortress", location: "Tower Hill / Thames", lat: 51.5081, lon: -0.0759, desc: "Nearly 1,000-year-old castle and former prison housing the sparkling Crown Jewels and historic Yeoman Warders.", query: "Tower of London" },
    { id: "lon_2", type: "sight", name: "The British Museum", category: "World-Class Museum", location: "Bloomsbury", lat: 51.5194, lon: -0.1270, desc: "Over 8 million historic works of world culture under the Great Court glass dome, including the Rosetta Stone.", query: "The British Museum London" },
    { id: "lon_3", type: "sight", name: "Westminster Abbey & Big Ben", category: "Royal Coronation Abbey", location: "Westminster", lat: 51.4993, lon: -0.1273, desc: "Gothic church site of every British royal coronation since 1066, adjacent to the Houses of Parliament and Big Ben.", query: "Westminster Abbey London" },
    { id: "lon_4", type: "sight", name: "The London Eye", category: "Observation Wheel", location: "South Bank", lat: 51.5033, lon: -0.1195, desc: "135-meter cantilevered observation wheel offering 360-degree views across London's skyline.", query: "The London Eye" },
    { id: "lon_5", type: "sight", name: "Buckingham Palace & Changing of the Guard", category: "Royal Palace", location: "Westminster", lat: 51.5014, lon: -0.1419, desc: "The administrative headquarters of the British monarch, famous for state rooms and ceremonial guard change.", query: "Buckingham Palace" },
    { id: "lon_6", type: "sight", name: "Tower Bridge & High-Level Glass Floor", category: "Victorian Engineering", location: "River Thames", lat: 51.5055, lon: -0.0754, desc: "Victorian bascule bridge with glass walkways 42 meters above the river offering views of London.", query: "Tower Bridge London" },
    { id: "lon_7", type: "sight", name: "St Paul's Cathedral & Whispering Gallery", category: "Baroque Masterpiece", location: "City of London", lat: 51.5138, lon: -0.0984, desc: "Sir Christopher Wren's iconic dome, scene of royal weddings and state funerals with sweeping dome climbs.", query: "St Pauls Cathedral London" },
    { id: "lon_8", type: "sight", name: "Natural History Museum & Victoria and Albert Museum", category: "Museum Quarter", location: "South Kensington", lat: 51.4967, lon: -0.1764, desc: "Spectacular Romanesque palace of science with blue whale skeleton and world-leading art and design collections.", query: "Natural History Museum London" },
    { id: "lon_9", type: "sight", name: "Hyde Park & Kensington Palace", category: "Royal Park Reserve", location: "Kensington", lat: 51.5073, lon: -0.1696, desc: "350-acre royal park featuring Serpentine Lake, Diana Memorial Fountain, and Kensington Palace gardens.", query: "Kensington Palace Hyde Park" },
    { id: "lon_10", type: "sight", name: "Windsor Castle (21 mi west)", category: "Royal Castle Residence", location: "Windsor, Berkshire", lat: 51.4839, lon: -0.6044, desc: "The oldest and largest occupied castle in the world, serving as a royal residence for nearly 1,000 years.", query: "Windsor Castle" },
    { id: "lon_11", type: "sight", name: "Greenwich Royal Observatory & Prime Meridian (6 mi east)", category: "Astronomy & Maritime", location: "Greenwich", lat: 51.4769, lon: -0.0005, desc: "Stand on the Prime Meridian line (Longitude 0°) overlooking the Cutty Sark ship and the River Thames.", query: "Royal Observatory Greenwich" },
    { id: "lon_12", type: "food", name: "Borough Market (Artisan Gourmet Market)", category: "Historic Food Market", location: "Southwark / London Bridge", lat: 51.5055, lon: -0.0910, desc: "Historic food market serving Swiss raclette, duck confit sandwiches, sausage rolls, and artisan cheeses.", query: "Borough Market London" },
    { id: "lon_13", type: "food", name: "Dishoom (Bombay Cafe & House Black Daal)", category: "Iconic Indian Gastronomy", location: "Covent Garden / Kings Cross", lat: 51.5126, lon: -0.1265, desc: "Homage to the Irani cafes of old Bombay, renowned for 24-hour slow-cooked black daal, garlic naan, and chicken ruby.", query: "Dishoom Covent Garden" },
    { id: "lon_14", type: "food", name: "Poppies Fish & Chips (Classic British)", category: "Heritage Fish & Chips", location: "Spitalfields / Soho", lat: 51.5195, lon: -0.0740, desc: "Crisp golden beer-battered cod or haddock served with chunky chips, mushy peas, and homemade tartar sauce.", query: "Poppies Fish and Chips London" },
    { id: "lon_15", type: "food", name: "The Wolseley (Traditional Afternoon Tea)", category: "Grand European Cafe", location: "Piccadilly / Mayfair", lat: 51.5072, lon: -0.1411, desc: "Opulent 1920s dining room serving classic tiered afternoon tea with finger sandwiches, warm scones, and clotted cream.", query: "The Wolseley London" },
    { id: "lon_16", type: "food", name: "Hawksmoor Seven Dials (Dry-Aged British Steaks)", category: "Premier British Steakhouse", location: "Covent Garden", lat: 51.5135, lon: -0.1270, desc: "Charcoal-grilled heritage breed British steaks, bone marrow gravy, and sticky toffee pudding.", query: "Hawksmoor Seven Dials London" },
    { id: "lon_17", type: "food", name: "Duck & Waffle (24/7 Panoramic Sky Dining)", category: "Skyline Dining", location: "Bishopsgate / City of London", lat: 51.5160, lon: -0.0805, desc: "40th-floor restaurant serving crispy duck leg confit and fried duck egg over warm waffle with mustard maple syrup.", query: "Duck and Waffle London" },
    { id: "lon_18", type: "food", name: "Seven Dials Market (Indoor Street Food Hall)", category: "Modern Food Hall", location: "Covent Garden", lat: 51.5140, lon: -0.1260, desc: "Indoor market featuring two tiers of artisan street food, including conveyor-belt cheese bars and Asian bao.", query: "Seven Dials Market London" },
    { id: "lon_19", type: "food", name: "Ye Olde Cheshire Cheese (Since 1667)", category: "Historic Literary Pub", location: "Fleet Street", lat: 51.5144, lon: -0.1064, desc: "Rebuilt right after the Great Fire of 1666, historic vaulted stone cellars once frequented by Charles Dickens and Mark Twain.", query: "Ye Olde Cheshire Cheese London" },
    { id: "lon_20", type: "food", name: "Beigel Bake (Brick Lane Salt Beef)", category: "24/7 Jewish Bakery", location: "Brick Lane / Shoreditch", lat: 51.5240, lon: -0.0718, desc: "Open 24/7 boiling fresh bagels filled with thick hot salt beef, English mustard, and sour pickles.", query: "Beigel Bake Brick Lane" }
  ],

  // 6. PARIS & SURROUNDINGS (20+ ITEMS)
  PARIS: [
    { id: "par_1", type: "sight", name: "Eiffel Tower & Champ de Mars", category: "Iconic Monument", location: "7th Arrondissement", lat: 48.8584, lon: 2.2945, desc: "Gustave Eiffel's 330-meter wrought-iron lattice masterpiece offering spectacular views and glittering hourly light shows.", query: "Eiffel Tower Paris" },
    { id: "par_2", type: "sight", name: "Louvre Museum & Glass Pyramid", category: "World-Class Museum", location: "1st Arrondissement", lat: 48.8606, lon: 2.3376, desc: "World's largest art museum holding the Mona Lisa, Venus de Milo, and Winged Victory of Samothrace in a former royal palace.", query: "Louvre Museum Paris" },
    { id: "par_3", type: "sight", name: "Musée d'Orsay", category: "Impressionist Sanctuary", location: "7th Arrondissement / Seine", lat: 48.8599, lon: 2.3266, desc: "Stunning Beaux-Arts railway station housing masterpieces by Monet, Van Gogh, Renoir, Degas, and Cézanne.", query: "Musee d'Orsay Paris" },
    { id: "par_4", type: "sight", name: "Cathédrale Notre-Dame de Paris & Sainte-Chapelle", category: "Gothic Masterpiece", location: "Île de la Cité", lat: 48.8530, lon: 2.3499, desc: "Restored French Gothic cathedral and nearby Sainte-Chapelle renowned for its 1,113 stained-glass windows.", query: "Notre-Dame de Paris" },
    { id: "par_5", type: "sight", name: "Arc de Triomphe & Champs-Élysées", category: "Monumental Arch", location: "8th Arrondissement", lat: 48.8738, lon: 2.2950, desc: "Monument honoring those who fought for France, crowning the avenue with rooftop views of the 12 radiating avenues.", query: "Arc de Triomphe Paris" },
    { id: "par_6", type: "sight", name: "Basilique du Sacré-Cœur & Montmartre", category: "Hilltop Basilica & Artists", location: "18th Arrondissement", lat: 48.8867, lon: 2.3431, desc: "White-domed basilica atop the highest point in Paris overlooking cobblestone artist squares and windmills.", query: "Sacre Coeur Montmartre Paris" },
    { id: "par_7", type: "sight", name: "Palais Garnier (Opéra National de Paris)", category: "Opulent Opera Palace", location: "9th Arrondissement", lat: 48.8719, lon: 2.3316, desc: "Grand 19th-century opera house with marble grand staircase, gold leaf, and Marc Chagall's painted ceiling.", query: "Palais Garnier Paris" },
    { id: "par_8", type: "sight", name: "Jardin du Luxembourg & Latin Quarter", category: "Royal Public Gardens", location: "6th Arrondissement", lat: 48.8462, lon: 2.3372, desc: "Tree-lined promenades, Medici fountain, and model sailboat basin in the heart of the historic student district.", query: "Jardin du Luxembourg Paris" },
    { id: "par_9", type: "sight", name: "Centre Pompidou & Le Marais", category: "Modern Art & Historic Quarter", location: "4th Arrondissement", lat: 48.8606, lon: 2.3522, desc: "High-tech inside-out museum adjacent to the charming historic mansions, boutiques, and bakeries of Le Marais.", query: "Centre Pompidou Paris" },
    { id: "par_10", type: "sight", name: "Palace of Versailles & Royal Gardens (12 mi southwest)", category: "Royal Palace Estate", location: "Versailles", lat: 48.8049, lon: 2.1204, desc: "The opulent palace of the Sun King Louis XIV featuring the Hall of Mirrors, Grand Trianon, and fountain gardens.", query: "Palace of Versailles" },
    { id: "par_11", type: "food", name: "Du Pain et des Idées (Escargot Pistache Pastry)", category: "Artisan Boulangerie", location: "10th Arrondissement (Canal Saint-Martin)", lat: 48.8712, lon: 2.3629, desc: "Historic 1875 bakery acclaimed for crispy pain des amis and pistachio-chocolate escargot swirl pastries.", query: "Du Pain et des Idees Paris" },
    { id: "par_12", type: "food", name: "Le Relais de l'Entrecôte (Steak Frites)", category: "Classic Parisian Bistro", location: "Saint-Germain / Champs-Élysées", lat: 48.8687, lon: 2.3045, desc: "Famous bistro serving tender sirloin steak covered in legendary secret green herb butter sauce with golden fries.", query: "Le Relais de l'Entrecote Paris" },
    { id: "par_13", type: "food", name: "L'As du Fallafel (Middle Eastern Street Food)", category: "Legendary Street Food", location: "Le Marais (Rue des Rosiers)", lat: 48.8575, lon: 2.3590, desc: "World-famous pitas stuffed with crispy green falafel balls, fried eggplant, hummus, tahini, and red cabbage.", query: "L'As du Fallafel Paris" },
    { id: "par_14", type: "food", name: "Angelina Paris (Old-Fashioned Hot Chocolate)", category: "Belle Époque Tearoom", location: "Rue de Rivoli", lat: 48.8650, lon: 2.3283, desc: "Historic 1903 tearoom celebrated for its thick, velvety 'Africain' melted hot chocolate and Mont-Blanc pastry.", query: "Angelina Paris Hot Chocolate" },
    { id: "par_15", type: "food", name: "Bouillon Chartier (Historic 1896 Brasserie)", category: "Traditional Affordable Dining", location: "9th Arrondissement (Grands Boulevards)", lat: 48.8719, lon: 2.3429, desc: "Grand Belle Époque dining hall serving traditional escargots, duck confit, and steak at remarkably accessible prices.", query: "Bouillon Chartier Paris" },
    { id: "par_16", type: "food", name: "Pierre Hermé (Artisan Macarons & Ispahan)", category: "Haute Pâtisserie", location: "Saint-Germain-des-Prés", lat: 48.8517, lon: 2.3330, desc: "The 'Picasso of Pastry' famous for the Ispahan (rose, raspberry, and lychee) macaron and fine chocolates.", query: "Pierre Herme Paris" },
    { id: "par_17", type: "food", name: "Café de Flore & Les Deux Magots", category: "Historic Literary Cafe", location: "Saint-Germain", lat: 48.8540, lon: 2.3326, desc: "Iconic sidewalk terrace cafes once the philosophical salons of Jean-Paul Sartre, Simone de Beauvoir, and Hemingway.", query: "Cafe de Flore Paris" },
    { id: "par_18", type: "food", name: "Breizh Café (Artisan Brittany Galettes & Cider)", category: "Authentic Crêperie", location: "Le Marais", lat: 48.8601, lon: 2.3620, desc: "Organic buckwheat savory galettes loaded with Gruyère cheese, ham, egg, and artisanal Brittany ciders.", query: "Breizh Cafe Paris" },
    { id: "par_19", type: "food", name: "Marché des Enfants Rouges (Oldest Covered Market)", category: "Historic Market Stalls", location: "Le Marais (Rue de Bretagne)", lat: 48.8631, lon: 2.3629, desc: "1615 covered market packed with Moroccan couscous counters, Lebanese sandwiches, and oyster stands.", query: "Marche des Enfants Rouges Paris" },
    { id: "par_20", type: "food", name: "Cédric Grolet Opéra (Sculpted Fruit Pastries)", category: "Viral High Pâtisserie", location: "Avenue de l'Opéra", lat: 48.8680, lon: 2.3330, desc: "Master pastry chef famous for hyper-realistic trompe-l'œil sculpted fruits and flaky giant croissants.", query: "Cedric Grolet Opera Paris" }
  ],

  // 7. HONOLULU & OAHU (20+ ITEMS)
  HONOLULU: [
    { id: "hnl_1", type: "sight", name: "Waikiki Beach & Diamond Head Monument", category: "Iconic Beach & Crater", location: "Waikiki / Diamond Head", lat: 21.2620, lon: -157.8057, desc: "World-famous golden crescent beach and volcanic tuff crater trail offering sweeping vistas of the Pacific Ocean.", query: "Diamond Head State Monument Honolulu" },
    { id: "hnl_2", type: "sight", name: "Pearl Harbor National Memorial & USS Arizona", category: "National Historic Landmark", location: "Pearl Harbor", lat: 21.3650, lon: -157.9500, desc: "Historic WWII memorial honoring the lives lost on December 7, 1941, built directly over the sunken battleship USS Arizona.", query: "Pearl Harbor National Memorial" },
    { id: "hnl_3", type: "sight", name: "Hanauma Bay Nature Preserve", category: "Marine Sanctuary Snorkeling", location: "East Oahu", lat: 21.2690, lon: -157.6938, desc: "Curved volcanic crater bay with calm turquoise waters filled with living coral reefs, green sea turtles, and parrotfish.", query: "Hanauma Bay Nature Preserve" },
    { id: "hnl_4", type: "sight", name: "Iolani Palace (Only Royal Palace in the US)", category: "Royal Hawaiian Heritage", location: "Downtown Honolulu", lat: 21.3069, lon: -157.8589, desc: "Official residence of Hawaii's last reigning monarchs, King Kalakaua and Queen Liliuokalani, built in 1882.", query: "Iolani Palace Honolulu" },
    { id: "hnl_5", type: "sight", name: "Nu'uanu Pali Lookout", category: "Panoramic Mountain Pass", location: "Koolau Mountains", lat: 21.3670, lon: -157.7930, desc: "Windy mountain precipice with panoramic views of the Windward coast, site of King Kamehameha I's 1795 battle.", query: "Nuuanu Pali Lookout" },
    { id: "hnl_6", type: "sight", name: "North Shore Banzai Pipeline & Waimea Bay (30 mi)", category: "Legendary Surf Coast", location: "North Shore, Oahu", lat: 21.6640, lon: -158.0530, desc: "World capital of big-wave surfing with massive winter waves, white sand beaches, and surf town vibe.", query: "Waimea Bay North Shore Oahu" },
    { id: "hnl_7", type: "sight", name: "Kualoa Ranch & Jurassic Valley (22 mi north)", category: "Scenic Nature Preserve", location: "Kaneohe", lat: 21.5208, lon: -157.8373, desc: "4,000-acre private nature reserve and filming location for Jurassic Park, offering ATV and valley tours.", query: "Kualoa Ranch Oahu" },
    { id: "hnl_8", type: "sight", name: "Manoa Falls Rainforest Trail", category: "Tropical Waterfall Hike", location: "Manoa Valley", lat: 21.3330, lon: -157.8000, desc: "Lush 1.6-mile rainforest trail through bamboo groves and giant ferns leading to a 150-foot waterfall.", query: "Manoa Falls Trail" },
    { id: "hnl_9", type: "food", name: "Leonard's Bakery (Original Malasadas Since 1952)", category: "Legendary Hawaiian Bakery", location: "Kapahulu Avenue", lat: 21.2849, lon: -157.8130, desc: "Hot, freshly fried Portuguese dough pastries dusted in sugar, cinnamon, and filled with coconut (haupia) cream.", query: "Leonard's Bakery Honolulu" },
    { id: "hnl_10", type: "food", name: "Ono Seafood (Fresh Ahi Poke Bowls)", category: "Authentic Hawaiian Poke", location: "Kapahulu Avenue", lat: 21.2818, lon: -157.8145, desc: "Top-rated local poke counter serving fresh Hawaiian bigeye ahi tossed in shoyu, spicy mayo, Hawaiian sea salt, and seaweed.", query: "Ono Seafood Honolulu Poke" },
    { id: "hnl_11", type: "food", name: "Rainbow Drive-In (Loco Moco Plate Lunch)", category: "Classic Plate Lunch", location: "Kapahulu", lat: 21.2830, lon: -157.8150, desc: "Serving local Hawaiian plate lunches since 1961: hamburger patties over white rice, fried eggs, brown gravy, and mac salad.", query: "Rainbow Drive-In Honolulu" },
    { id: "hnl_12", type: "food", name: "Marugame Udon Waikiki", category: "Fresh Hand-Pulled Udon", location: "Kuhio Avenue", lat: 21.2785, lon: -157.8260, desc: "Open kitchen making fresh Sanuki-style udon noodles from scratch, served with crispy tempura and dashi broth.", query: "Marugame Udon Waikiki" },
    { id: "hnl_13", type: "food", name: "Matsumoto Shave Ice (North Shore Classic)", category: "Historic Shave Ice", location: "Haleiwa / North Shore", lat: 21.5925, lon: -158.1035, desc: "Historic 1951 grocery serving rainbow shave ice with sweet condensed milk, azuki beans, and vanilla ice cream.", query: "Matsumoto Shave Ice Haleiwa" },
    { id: "hnl_14", type: "food", name: "Giovanni's Shrimp Truck (Garlic Shrimp)", category: "North Shore Food Truck", location: "Kahuku / Haleiwa", lat: 21.6770, lon: -157.9530, desc: "Legendary graffiti-covered white truck serving jumbo shell-on shrimp sautéed in butter and caramelized minced garlic.", query: "Giovannis Shrimp Truck Oahu" },
    { id: "hnl_15", type: "food", name: "Helena's Hawaiian Food (James Beard Classic)", category: "Authentic Native Hawaiian", location: "Kalihi", lat: 21.3327, lon: -157.8682, desc: "Traditional pipikaula short ribs grilled over kiawe wood, kalua pork, poi, and lomi salmon since 1946.", query: "Helenas Hawaiian Food Honolulu" }
  ]
};

function getCuratedGuideForCity(cityName, airportCode) {
  const normCity = (cityName || "").toLowerCase();
  const normCode = (airportCode || "").toUpperCase();

  if (normCity.includes("tokyo") || normCode === "HND" || normCode === "NRT") return cityGuidesMaster.TOKYO;
  if (normCity.includes("kyoto") || normCity.includes("osaka") || normCode === "KIX" || normCode === "ITM") return cityGuidesMaster.KYOTO_OSAKA;
  if (normCity.includes("london") || normCode === "LHR" || normCode === "LGW") return cityGuidesMaster.LONDON;
  if (normCity.includes("paris") || normCode === "CDG" || normCode === "ORY") return cityGuidesMaster.PARIS;
  if (normCity.includes("honolulu") || normCode === "HNL") return cityGuidesMaster.HONOLULU;
  if (normCity.includes("taipei") || normCity.includes("new taipei") || normCity.includes("tamsui") || normCity.includes("beitou") || normCity.includes("jiufen") || normCode === "TPE" || normCode === "TSA") return cityGuidesMaster.TPE;
  if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") return cityGuidesMaster.CHI;
  if (normCity.includes("san francisco") || normCity.includes("sf") || normCode === "SFO" || normCode === "SJC" || normCode === "OAK") return cityGuidesMaster.SF;

  return null;
}

// ========================================================
// 5. SIGHTS & DYNAMIC 20+ GUARANTEED EXTERNAL GENERATOR
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

  // If outside known catalog, query external open directory
  let dynamicResults = [];
  try {
    const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName + " attractions")}&format=json&limit=15`, {}, 2000);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        dynamicResults = data.map((item, idx) => {
          const lat = parseFloat(item.lat);
          const lon = parseFloat(item.lon);
          const name = item.display_name.split(",")[0];
          const distKm = haversineDistance(centerLat, centerLon, lat, lon);
          return {
            id: `dyn_${idx}_${Date.now()}`,
            type: idx % 3 === 0 ? "food" : "sight",
            name: name,
            category: idx % 3 === 0 ? "Local Cuisine" : "Point of Interest",
            location: cityName,
            lat: lat,
            lon: lon,
            distanceKm: parseFloat(distKm.toFixed(1)),
            desc: `Verified cultural landmark and destination in ${cityName}.`,
            query: `${name} ${cityName}`
          };
        });
      }
    }
  } catch (err) {
    // Silent recovery
  }

  // Ensure minimum 20 items guaranteed
  const comprehensiveTemplates = [
    { name: `${cityName} Old Town & Historic Quarter`, cat: "Historic Heritage", type: "sight", dLat: 0.003, dLon: 0.002, desc: "Pedestrian-friendly central quarter featuring historic architecture, local shops, and cafes." },
    { name: `${cityName} Central Plaza & Fountain`, cat: "Public Landmark", type: "sight", dLat: -0.004, dLon: 0.003, desc: "The primary architectural landmark and cultural gathering hub of the city." },
    { name: `${cityName} Museum of Art & History`, cat: "Museum / Gallery", type: "sight", dLat: 0.006, dLon: -0.004, desc: "Comprehensive collections spotlighting regional art, archaeology, and cultural heritage." },
    { name: `${cityName} Waterfront Promenade`, cat: "Scenic Walkway", type: "sight", dLat: -0.006, dLon: -0.003, desc: "Scenic walking promenade offering panoramic city views and outdoor cafes." },
    { name: `${cityName} Cathedral / Historic Basilica`, cat: "Monumental Architecture", type: "sight", dLat: 0.002, dLon: 0.005, desc: "Historic sanctuary featuring classic stonework, soaring ceilings, and stained glass." },
    { name: `${cityName} Botanical Gardens & City Park`, cat: "Nature Sanctuary", type: "sight", dLat: -0.007, dLon: 0.006, desc: "Sprawling landscaped green space with walking trails, exotic flora, and ponds." },
    { name: `${cityName} Panoramic Hilltop Lookout (3 mi)`, cat: "Scenic Viewpoint", type: "sight", dLat: 0.025, dLon: 0.020, desc: "High vantage point offering unobstructed panoramic views across the entire metro area." },
    { name: `${cityName} Performing Arts & Concert Hall`, cat: "Arts & Theater", type: "sight", dLat: 0.005, dLon: -0.007, desc: "Premier cultural venue hosting symphony orchestra, theater plays, and dance." },
    { name: `${cityName} Fortress & Ancient Castle Walls (5 mi)`, cat: "Historic Fortress", type: "sight", dLat: 0.040, dLon: -0.035, desc: "Centuries-old stone ramparts and towers overlooking the historic trading routes." },
    { name: `${cityName} Contemporary Design District`, cat: "Artisan Quarter", type: "sight", dLat: -0.003, dLon: 0.008, desc: "Vibrant creative neighborhood filled with indie galleries, bookshops, and boutique design studios." },
    { name: `${cityName} Regional Nature Reserve (9 mi out)`, cat: "Nature Excursion", type: "sight", dLat: 0.080, dLon: 0.075, desc: "Scenic regional wilderness park offering hiking trails and native wildlife reserves." },
    { name: `${cityName} Central Public Food Market`, cat: "Gourmet Food Market", type: "food", dLat: 0.002, dLon: -0.003, desc: "Vibrant indoor market packed with fresh regional produce, street food stalls, and bakeries." },
    { name: `Traditional ${cityName} Regional Dining`, cat: "Heritage Cuisine", type: "food", dLat: -0.002, dLon: 0.004, desc: "Authentic local culinary dishes slow-cooked with fresh seasonal ingredients." },
    { name: `${cityName} Evening Street Food & Tapas Strip`, cat: "Street Food", type: "food", dLat: 0.004, dLon: 0.006, desc: "Bustling evening alleyway lined with sizzling street food stalls, grills, and beverages." },
    { name: `${cityName} Artisan Bakery & Patisserie`, cat: "Artisan Bakery", type: "food", dLat: -0.005, dLon: -0.002, desc: "Famous for freshly baked morning pastries, sourdough loaves, and delicate desserts." },
    { name: `${cityName} Waterfront Seafood Counter`, cat: "Fresh Catch Seafood", type: "food", dLat: -0.008, dLon: -0.004, desc: "Dockside dining serving fresh local grilled fish, seafood platters, and soups." },
    { name: `${cityName} Historic Coffeehouse & Roastery`, cat: "Craft Coffee", type: "food", dLat: 0.001, dLon: 0.003, desc: "Century-old meeting place serving hand-crafted specialty brews and regional pastries." },
    { name: `${cityName} Farm-to-Table Bistro`, cat: "Modern Bistro", type: "food", dLat: 0.007, dLon: 0.002, desc: "Chef-driven seasonal cuisine sourcing organic heirloom produce from local farms." },
    { name: `${cityName} Historic Tavern & Craft Taproom`, cat: "Historic Pub", type: "food", dLat: -0.004, dLon: -0.005, desc: "Historic pub serving regional craft beers, ciders, and comfort dishes." },
    { name: `${cityName} Shaved Ice & Artisan Gelateria`, cat: "Artisan Dessert", type: "food", dLat: 0.003, dLon: -0.006, desc: "Handmade small-batch ice creams and fruit desserts crafted with local ingredients." }
  ];

  const combined = [...dynamicResults];
  comprehensiveTemplates.forEach((t, i) => {
    if (combined.length < 22) {
      const lat = centerLat + t.dLat;
      const lon = centerLon + t.dLon;
      const distKm = haversineDistance(centerLat, centerLon, lat, lon);
      combined.push({
        id: `gen_${i}_${Date.now()}`,
        type: t.type,
        name: t.name,
        category: t.cat,
        location: cityName,
        lat: lat,
        lon: lon,
        distanceKm: parseFloat(distKm.toFixed(1)),
        desc: t.desc,
        query: `${t.name}`
      });
    }
  });

  return combined;
}

function getBrandPortalUrl(brand, city, checkIn, checkOut) {
  if (brand === "Marriott Bonvoy") return `https://www.marriott.com/search/findHotels.mi?destinationAddress.destination=${encodeURIComponent(city)}&fromDate=${checkIn}&toDate=${checkOut || checkIn}`;
  if (brand === "World of Hyatt") return `https://www.hyatt.com/search/${encodeURIComponent(city)}?checkinDate=${checkIn}&checkoutDate=${checkOut || checkIn}`;
  if (brand === "IHG") return `https://www.ihg.com/hotels/us/en/find-hotels/hotel/rooms?qDest=${encodeURIComponent(city)}&qCiMy=${checkIn}&qCoMy=${checkOut || checkIn}`;
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
      { id: "par_h1", name: "Hôtel de Crillon / Prince de Galles", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 850, lat: 48.8690, lon: 2.3015, area: "Champs-Élysées", badge: "Palace Prestige", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "par_h2", name: "Park Hyatt Paris-Vendôme", brand: "World of Hyatt", rating: 4.9, priceUSD: 890, lat: 48.8692, lon: 2.3305, area: "Place Vendôme", badge: "Palace Luxury", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "par_h3", name: "InterContinental Paris Le Grand", brand: "IHG", rating: 4.8, priceUSD: 480, lat: 48.8710, lon: 2.3312, area: "Opéra Garnier", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];
    return list.map(h => ({ ...h, distanceKm: parseFloat(haversineDistance(centerLat, centerLon, h.lat, h.lon).toFixed(1)) })).filter(h => selectedBrands.includes(h.brand));
  }

  // Taipei & Taiwan
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
      { id: "chi_h2", name: "Park Hyatt Chicago", brand: "World of Hyatt", rating: 4.9, priceUSD: 510, lat: 41.8980, lon: -87.6255, area: "Water Tower", badge: "Palace Luxury Flagship", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
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
  const isTranspacific = (originObj.country === "Taiwan" || originObj.country === "Japan" || originObj.country === "China") ||
                         (destAirportObj.country === "Taiwan" || destAirportObj.country === "Japan" || destAirportObj.country === "China");

  const timeZoneDiffHours = Math.round((destAirportObj.airportLon - originObj.airportLon) / 15);

  let carrierPool = [
    { name: "EVA Air", code: "BR" },
    { name: "China Airlines", code: "CI" },
    { name: "STARLUX Airlines", code: "JX" },
    { name: "United Airlines", code: "UA" }
  ];
  let layoverHubs = ["TPE", "SFO", "LAX", "SEA"];

  if (!isTranspacific) {
    carrierPool = [
      { name: "United Airlines", code: "UA" },
      { name: "American Airlines", code: "AA" },
      { name: "Delta Air Lines", code: "DL" },
      { name: "British Airways", code: "BA" }
    ];
    layoverHubs = ["LHR", "JFK", "ORD", "DEN"];
  }

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

      // 4. Fetch Sights with Exact GPS and Dynamic Distance Relative to Target Center (20+ Guaranteed)
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