// ========================================================
// 1. GLOBAL AIRPORT & DOWNTOWN DIRECTORY
// ========================================================
const majorAirportCatalog = [
  // Chicago Hubs
  { 
    code: "ORD", 
    name: "Chicago O'Hare International", 
    city: "Chicago", 
    country: "United States", 
    airportLat: 41.9742, airportLon: -87.9073,
    cityLat: 41.8781, cityLon: -87.6298 // Downtown Chicago (The Loop)
  },
  { 
    code: "MDW", 
    name: "Chicago Midway International", 
    city: "Chicago", 
    country: "United States", 
    airportLat: 41.7868, airportLon: -87.7522,
    cityLat: 41.8781, cityLon: -87.6298 
  },

  // San Francisco Bay Area & Silicon Valley
  { 
    code: "SFO", 
    name: "San Francisco International", 
    city: "San Francisco", 
    country: "United States", 
    airportLat: 37.6213, airportLon: -122.3790,
    cityLat: 37.7749, cityLon: -122.4194 
  },
  { 
    code: "SJC", 
    name: "San José Mineta International", 
    city: "San Jose", 
    country: "United States", 
    airportLat: 37.3639, airportLon: -121.9289,
    cityLat: 37.3382, cityLon: -121.8863 
  },
  { 
    code: "OAK", 
    name: "Oakland San Francisco Bay", 
    city: "Oakland", 
    country: "United States", 
    airportLat: 37.7213, airportLon: -122.2207,
    cityLat: 37.8044, cityLon: -122.2711 
  },

  // New York & New Jersey Area Hubs
  { 
    code: "EWR", 
    name: "Newark Liberty International", 
    city: "Newark / New York", 
    country: "United States", 
    airportLat: 40.6895, airportLon: -74.1745,
    cityLat: 40.7357, cityLon: -74.1724 
  },
  { 
    code: "JFK", 
    name: "John F. Kennedy International", 
    city: "New York", 
    country: "United States", 
    airportLat: 40.6413, airportLon: -73.7781,
    cityLat: 40.7580, cityLon: -73.9855 
  },
  { 
    code: "LGA", 
    name: "LaGuardia Airport", 
    city: "New York", 
    country: "United States", 
    airportLat: 40.7769, airportLon: -73.8740,
    cityLat: 40.7580, cityLon: -73.9855 
  },

  // California & US West
  { 
    code: "SAN", 
    name: "San Diego International", 
    city: "San Diego", 
    country: "United States", 
    airportLat: 32.7338, airportLon: -117.1933,
    cityLat: 32.7157, cityLon: -117.1611 
  },
  { 
    code: "LAX", 
    name: "Los Angeles International", 
    city: "Los Angeles", 
    country: "United States", 
    airportLat: 33.9416, airportLon: -118.4085,
    cityLat: 34.0522, cityLon: -118.2437 
  },
  { 
    code: "SEA", 
    name: "Seattle-Tacoma International", 
    city: "Seattle", 
    country: "United States", 
    airportLat: 47.4502, airportLon: -122.3088,
    cityLat: 47.6062, cityLon: -122.3321 
  },
  { 
    code: "LAS", 
    name: "Harry Reid International", 
    city: "Las Vegas", 
    country: "United States", 
    airportLat: 36.0840, airportLon: -115.1537,
    cityLat: 36.1147, cityLon: -115.1728 
  },
  { 
    code: "HNL", 
    name: "Daniel K. Inouye International", 
    city: "Honolulu", 
    country: "United States", 
    airportLat: 21.3245, airportLon: -157.9251,
    cityLat: 21.2766, cityLon: -157.8283 
  },

  // US East Coast & Midwest
  { 
    code: "BOS", 
    name: "Boston Logan International", 
    city: "Boston", 
    country: "United States", 
    airportLat: 42.3656, airportLon: -71.0096,
    cityLat: 42.3601, cityLon: -71.0589 
  },
  { 
    code: "MIA", 
    name: "Miami International", 
    city: "Miami", 
    country: "United States", 
    airportLat: 25.7959, airportLon: -80.2870,
    cityLat: 25.7617, cityLon: -80.1918 
  },
  { 
    code: "AUS", 
    name: "Austin-Bergstrom International", 
    city: "Austin", 
    country: "United States", 
    airportLat: 30.1975, airportLon: -97.6664,
    cityLat: 30.2672, cityLon: -97.7431 
  },

  // Greater China & East Asia
  { 
    code: "TPE", 
    name: "Taiwan Taoyuan International", 
    city: "Taipei", 
    country: "Taiwan", 
    airportLat: 25.0797, airportLon: 121.2342,
    cityLat: 25.0330, cityLon: 121.5654 
  },
  { 
    code: "TSA", 
    name: "Taipei Songshan Airport", 
    city: "Taipei", 
    country: "Taiwan", 
    airportLat: 25.0697, airportLon: 121.5525,
    cityLat: 25.0330, cityLon: 121.5654 
  },
  { 
    code: "HND", 
    name: "Tokyo Haneda", 
    city: "Tokyo", 
    country: "Japan", 
    airportLat: 35.5494, airportLon: 139.7798,
    cityLat: 35.6895, cityLon: 139.6917 
  },
  { 
    code: "NRT", 
    name: "Tokyo Narita", 
    city: "Tokyo", 
    country: "Japan", 
    airportLat: 35.7720, airportLon: 140.3929,
    cityLat: 35.6895, cityLon: 139.6917 
  },
  { 
    code: "KIX", 
    name: "Kansai International (Kyoto/Osaka)", 
    city: "Kyoto / Osaka", 
    country: "Japan", 
    airportLat: 34.4320, airportLon: 135.2304,
    cityLat: 35.0116, cityLon: 135.7681 
  },
  { 
    code: "PVG", 
    name: "Shanghai Pudong International", 
    city: "Shanghai", 
    country: "China", 
    airportLat: 31.1443, airportLon: 121.8083,
    cityLat: 31.2304, cityLon: 121.4737 
  },
  { 
    code: "SHA", 
    name: "Shanghai Hongqiao International", 
    city: "Shanghai", 
    country: "China", 
    airportLat: 31.1979, airportLon: 121.3363,
    cityLat: 31.2304, cityLon: 121.4737 
  },
  { 
    code: "HKG", 
    name: "Hong Kong International", 
    city: "Hong Kong", 
    country: "Hong Kong", 
    airportLat: 22.3080, airportLon: 113.9185,
    cityLat: 22.2855, cityLon: 114.1577 
  },
  { 
    code: "ICN", 
    name: "Seoul Incheon International", 
    city: "Seoul", 
    country: "South Korea", 
    airportLat: 37.4602, airportLon: 126.4407,
    cityLat: 37.5665, cityLon: 126.9780 
  },

  // Europe
  { 
    code: "BCN", 
    name: "Barcelona-El Prat Airport", 
    city: "Barcelona", 
    country: "Spain", 
    airportLat: 41.2974, airportLon: 2.0833,
    cityLat: 41.3874, cityLon: 2.1686 
  },
  { 
    code: "MAD", 
    name: "Adolfo Suárez Madrid-Barajas", 
    city: "Madrid", 
    country: "Spain", 
    airportLat: 40.4839, airportLon: -3.5680,
    cityLat: 40.4168, cityLon: -3.7038 
  },
  { 
    code: "FCO", 
    name: "Rome Fiumicino Leonardo da Vinci", 
    city: "Rome", 
    country: "Italy", 
    airportLat: 41.8003, airportLon: 12.2389,
    cityLat: 41.9028, cityLon: 12.4964 
  },
  { 
    code: "FLR", 
    name: "Florence Peretola", 
    city: "Florence", 
    country: "Italy", 
    airportLat: 43.8100, airportLon: 11.2012,
    cityLat: 43.7696, cityLon: 11.2558 
  },
  { 
    code: "CDG", 
    name: "Paris Charles de Gaulle", 
    city: "Paris", 
    country: "France", 
    airportLat: 49.0097, airportLon: 2.5479,
    cityLat: 48.8566, cityLon: 2.3522 
  },
  { 
    code: "LHR", 
    name: "London Heathrow", 
    city: "London", 
    country: "United Kingdom", 
    airportLat: 51.4700, airportLon: -0.4543,
    cityLat: 51.5074, cityLon: -0.1278 
  },
  { 
    code: "AMS", 
    name: "Amsterdam Schiphol", 
    city: "Amsterdam", 
    country: "Netherlands", 
    airportLat: 52.3105, airportLon: 4.7683,
    cityLat: 52.3676, cityLon: 4.9041 
  }
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
    airportLat: 41.8781,
    airportLon: -87.6298,
    cityLat: 41.8781,
    cityLon: -87.6298
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
  if (lower.includes("brooklyn")) {
    return { cityName: "Brooklyn, NY", lat: 40.6782, lon: -73.9442 };
  }
  if (lower.includes("jersey city")) {
    return { cityName: "Jersey City, NJ", lat: 40.7178, lon: -74.0431 };
  }
  if (lower.includes("san diego")) {
    return { cityName: "San Diego", lat: 32.7157, lon: -117.1611 };
  }
  if (lower.includes("taipei")) {
    return { cityName: "Taipei", lat: 25.0330, lon: 121.5654 };
  }
  if (lower.includes("tokyo")) {
    return { cityName: "Tokyo", lat: 35.6895, lon: 139.6917 };
  }
  if (lower.includes("barcelona")) {
    return { cityName: "Barcelona", lat: 41.3874, lon: 2.1686 };
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
    
    baseTileLayer = L.tileLayer(tileUrl, { maxZoom: 19, attribution: '© OpenStreetMap © CARTO' }).addTo(leafletMapInstance);
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
const cityTransitGuides = {
  CHI: [
    { title: "CTA 'L' Rapid Transit Network & Contactless Tap", badge: "Subway & Elevated Rail", desc: "Tap any contactless credit card, phone, or Ventra card at all 145 CTA train stations. Easy transfer connections across the Loop.", route: "Single Fare ($2.50) / 24-Hour Unlimited Pass ($5.00)" },
    { title: "Direct O'Hare (ORD) ➔ Loop Blue Line", badge: "24/7 Airport Express", desc: "Board the Blue Line directly inside O'Hare Airport Lower Level concourse for a direct 45-minute ride straight to downtown Loop stations.", route: "O'Hare ➔ Loop (45 mins, $5.00 from airport)" },
    { title: "Direct Midway (MDW) ➔ Loop Orange Line", badge: "Airport Express Link", desc: "Board the Orange Line inside the Midway terminal for a quick 25-minute scenic elevated ride into downtown Chicago.", route: "Midway ➔ Downtown Loop (25 mins, $2.50)" },
    { title: "Chicago Water Taxi & Lakefront Riverwalk", badge: "Scenic Waterways", desc: "Cruises linking Ogilvie/Union Station, Chinatown, River North, Michigan Avenue, and Navy Pier along the Chicago River.", route: "Single River Route ($6.00 / $10.00 All-Day Pass)" }
  ],
  SF: [
    { title: "BART (Bay Area Rapid Transit)", badge: "Airport & Regional Rail", desc: "Fast regional subway connecting SFO Airport directly to Downtown SF (Powell/Montgomery), Oakland, and Berkeley.", route: "SFO Airport ➔ Downtown SF (30 mins, $10.50 via Clipper)" },
    { title: "Clipper Card & SF Muni Network", badge: "Transit Card", desc: "Contactless card or Apple/Google Wallet for Muni buses, historic F-Market streetcars, Metro subway, and Cable Cars.", route: "Muni Single Ride ($2.50) / Cable Car ($8.00)" },
    { title: "Caltrain Peninsula Corridor", badge: "Silicon Valley Link", desc: "Commuter rail corridor linking San Francisco 4th & King through Millbrae, Palo Alto, Sunnyvale, to San Jose Diridon.", route: "San Francisco ➔ San Jose (~65 mins Express)" }
  ],
  PRINCETON: [
    { title: "NJ Transit Northeast Corridor & 'Dinky' Train", badge: "Rail Network", desc: "Take NJ Transit Northeast Corridor line to Princeton Junction, then connect on the 5-minute 'Dinky' shuttle directly to campus center.", route: "Princeton Junction ➔ Princeton Campus ($3.00)" },
    { title: "TigerTransit Campus & Town Shuttles", badge: "Free Local Transit", desc: "Free municipal and university shuttle buses connecting Palmer Square, Princeton Shopping Center, and train stations.", route: "Central Princeton Circulator (100% Free)" },
    { title: "Direct Newark EWR Airport Corridor", badge: "Airport Express", desc: "Direct NJ Transit Northeast Corridor commuter rail from Princeton Junction straight to Newark Liberty International Airport Station.", route: "Princeton Junction ➔ EWR Airport (~45 mins, $18.50)" }
  ],
  NYC: [
    { title: "MTA Subway & OMNY Tap-to-Pay", badge: "Subway System", desc: "Tap your contactless credit card or phone at any turnstile across all NYC subway lines. Automatic weekly fare capping after 12 rides.", route: "Single Ride ($2.90), 7-Day Unlimited Cap" },
    { title: "AirTrain JFK / EWR Express Link", badge: "Airport Express", desc: "Direct airport rail linking JFK to Jamaica Station and Newark EWR to NJ Transit into NY Penn Station.", route: "AirTrain JFK ($8.50) / NJ Transit EWR ($16.00)" },
    { title: "NYC Ferry Scenic Waterways", badge: "Scenic Ferry", desc: "Water transit along the East River connecting Wall Street, DUMBO, Williamsburg, and Midtown 34th Street.", route: "Single Ferry Ticket ($4.00)" }
  ],
  SAN: [
    { title: "MTS San Diego Trolley & PRONTO Card", badge: "Transit Network", desc: "Blue, Green, Orange, and Copper light-rail lines connect Downtown Gaslamp, Old Town, Mission Valley, Little Italy, and the US/Mexico border.", route: "PRONTO App or tap credit card ($2.50 / $6.00 Day Pass)" },
    { title: "San Diego Flyer Airport Shuttle", badge: "Free Airport Link", desc: "100% free electric express shuttle bus connecting San Diego Airport Terminal 1 & 2 directly to Old Town Transit Center.", route: "Airport ➔ Old Town Transit Station (Every 10-15 mins, Free)" },
    { title: "Coronado Ferry & Coastal Biking", badge: "Scenic Harbor Transit", desc: "Scenic 15-minute public ferry crossing San Diego Bay from Broadway Pier directly to Coronado Ferry Landing.", route: "Broadway Pier ➔ Coronado Island ($8.00 each way)" }
  ],
  TPE: [
    { title: "Taoyuan Airport MRT (Express Train)", badge: "Airport Express", desc: "Purple Express train connects Terminal 1 & 2 directly to Taipei Main Station in 36 minutes with free onboard Wi-Fi.", route: "Taoyuan Airport ➔ Taipei Main Station (36 mins, NT$150)" },
    { title: "Taipei EasyCard (Yoyo Card)", badge: "Transit Card", desc: "Contactless card used across Taipei MRT, public buses, YouBike rentals, and convenience stores.", route: "Available at all MRT stations (20% transit discount)" }
  ],
  HND: [
    { title: "Tokyo Monorail / Keikyu Line", badge: "Airport Express", desc: "Tokyo Monorail connects Haneda to Hamamatsucho Station in 13 minutes. Keikyu Line provides direct trains to Shinagawa and Asakusa.", route: "Haneda ➔ Shinagawa / Hamamatsucho (13-15 mins)" },
    { title: "Digital Suica / Pasmo IC Card", badge: "Transit Card", desc: "Add a digital Suica card to Apple Wallet or Google Wallet for instant tap transit on all Tokyo metro lines, JR trains, buses, and konbini stores.", route: "Accepted on all Japan Rail & Tokyo Metro" }
  ],
  BCN: [
    { title: "Barcelona Metro & T-Casual Card", badge: "Transit Card", desc: "Buy a 10-journey 'T-Casual' card at any metro station for integrated travel across Metro, Bus, and Tram in Zone 1.", route: "Metro Lines L1-L5, T-Casual (~€12.15)" },
    { title: "Aerobús Express (A1 / A2)", badge: "Airport Transfer", desc: "Dedicated express bus running every 5-10 minutes from Terminal 1 & 2 directly to Plaça de Catalunya.", route: "Airport ➔ Plaça Espanya ➔ Plaça Catalunya (35 mins, ~€7.25)" }
  ]
};

function renderTransitGuide(airportCode, cityName) {
  const transitContentEl = document.getElementById("transitContent");
  const subtitleEl = document.getElementById("transitCitySubtitle");
  if (!transitContentEl) return;

  const normCode = (airportCode || "").toUpperCase();
  const normCity = (cityName || "").toLowerCase();
  
  let key = normCode;
  if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") {
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
// 4. CURATED SIGHTS & CULINARY CATALOG
// ========================================================
const curatedCityGuides = {
  // CHICAGO & SURROUNDING METRO (Exact GPS)
  CHI: [
    { id: "chi_s1", type: "sight", name: "Millennium Park & Cloud Gate ('The Bean')", category: "Iconic Landmark", location: "Downtown Loop / Michigan Ave", lat: 41.8826, lon: -87.6226, desc: "World-famous polished steel sculpture reflecting Chicago's skyline, Lurie Garden, and Crown Fountain.", query: "Cloud Gate Millennium Park Chicago" },
    { id: "chi_s2", type: "sight", name: "The Art Institute of Chicago & Modern Wing", category: "World-Class Museum", location: "Michigan Avenue", lat: 41.8796, lon: -87.6237, desc: "Over 300,000 works of art featuring Seurat's Grand Jatte, Edward Hopper's Nighthawks, and Impressionist galleries.", query: "Art Institute of Chicago" },
    { id: "chi_s3", type: "sight", name: "Chicago Architecture Center River Cruise", category: "Iconic Architecture Tour", location: "Chicago Riverwalk / Michigan Ave", lat: 41.8887, lon: -87.6244, desc: "90-minute docent-led boat cruise through the canyon of skyscrapers that birthed modern architecture.", query: "Chicago Architecture Center River Cruise" },
    { id: "chi_s4", type: "sight", name: "Willis Tower Skydeck & 'The Ledge'", category: "Observation Deck", location: "Financial District / Wacker Dr", lat: 41.8789, lon: -87.6359, desc: "103rd-floor glass boxes extending 4.3 feet out over the street with sweeping 4-state views.", query: "Skydeck Chicago Willis Tower" },
    { id: "chi_s5", type: "sight", name: "360 CHICAGO Observation Deck & TILT", category: "Panoramic Viewpoint", location: "Magnificent Mile (875 N Michigan)", lat: 41.8988, lon: -87.6229, desc: "94th-floor observation deck with moving glass platform tilting visitors 30 degrees over Michigan Avenue.", query: "360 CHICAGO Observation Deck" },
    { id: "chi_s6", type: "sight", name: "The Field Museum of Natural History", category: "World-Class Museum", location: "Museum Campus / Lakefront", lat: 41.8663, lon: -87.6170, desc: "Renowned natural history museum home to 'Sue' the T. rex, ancient Egyptian tombs, and gemstone halls.", query: "Field Museum Chicago" },
    { id: "chi_s7", type: "sight", name: "Shedd Aquarium & Oceanarium", category: "Marine Sanctuary", location: "Museum Campus", lat: 41.8676, lon: -87.6140, desc: "Historic 1930 lakefront aquarium housing beluga whales, Caribbean coral reefs, and sea otters.", query: "Shedd Aquarium Chicago" },
    { id: "chi_s8", type: "sight", name: "Navy Pier & Centennial Wheel", category: "Waterfront Destination", location: "Streeterville / Lake Michigan", lat: 41.8917, lon: -87.6086, desc: "Lakefront pier featuring a 200-foot Ferris wheel, Shakespeare Theater, boat tours, and fireworks.", query: "Navy Pier Chicago" },
    { id: "chi_s9", type: "sight", name: "Wrigley Field Historic Ballpark (4.5 mi north)", category: "Historic Sports Heritage", location: "Wrigleyville / Lakeview", lat: 41.9484, lon: -87.6553, desc: "Legendary 1914 home of the Chicago Cubs with ivy-covered brick walls and neighborhood rooftop bleachers.", query: "Wrigley Field Chicago" },
    { id: "chi_s10", type: "sight", name: "Chicago Cultural Center (Tiffany Dome)", category: "Architectural Marvel", location: "Loop / Washington St", lat: 41.8837, lon: -87.6248, desc: "Magnificent 1897 public palace featuring the world's largest stained glass Tiffany dome.", query: "Chicago Cultural Center Tiffany Dome" },
    { id: "chi_s11", type: "sight", name: "Garfield Park Conservatory (4.5 mi west)", category: "Botanical Oasis", location: "Garfield Park", lat: 41.8863, lon: -87.7171, desc: "One of the largest botanical conservatories in the country with thousands of rare tropical plants under glass.", query: "Garfield Park Conservatory Chicago" },
    { id: "chi_s12", type: "sight", name: "Frank Lloyd Wright Home & Studio (8.5 mi west)", category: "Historic Architecture", location: "Oak Park", lat: 41.8940, lon: -87.7983, desc: "Birthplace of the American Prairie School architectural style and historic neighborhood walking district.", query: "Frank Lloyd Wright Home Oak Park" },
    { id: "chi_f1", type: "food", name: "Pequod's Pizza (Caramelized Crust Deep Dish)", category: "Legendary Deep Dish", location: "Lincoln Park", lat: 41.9219, lon: -87.6644, desc: "World-famous deep-dish pan pizza with a halo of dark caramelized crispy cheddar-mozzarella cheese crust.", query: "Pequod's Pizza Chicago" },
    { id: "chi_f2", type: "food", name: "Lou Malnati's Pizzeria (Buttercrust Deep Dish)", category: "Classic Deep Dish", location: "River North / Loop", lat: 41.8903, lon: -87.6338, desc: "Iconic Chicago buttercrust deep-dish loaded with vine-ripened California tomatoes and mozzarella.", query: "Lou Malnati's Pizzeria River North" },
    { id: "chi_f3", type: "food", name: "Portillo's (Chicago-Style Hot Dogs & Cake Shake)", category: "Iconic Street Food", location: "River North / Ontario St", lat: 41.8935, lon: -87.6318, desc: "All-beef frankfurter 'dragged through the garden', Italian beef, and chocolate cake blended milkshakes.", query: "Portillo's Hot Dogs Ontario Chicago" },
    { id: "chi_f4", type: "food", name: "Al's #1 Italian Beef (Since 1938)", category: "Historic Italian Beef", location: "Little Italy (Taylor St)", lat: 41.8698, lon: -87.6540, desc: "Thinly sliced roast beef soaked in seasoned au jus, tucked into French bread and crowned with spicy giardiniera.", query: "Al's Italian Beef Taylor Street" },
    { id: "chi_f5", type: "food", name: "Garrett Popcorn Shops (The Garrett Mix)", category: "Iconic Snack", location: "Michigan Avenue", lat: 41.8966, lon: -87.6241, desc: "Famous batch-cooked blend of sweet CaramelCrisp and savory sharp CheddarCraft popcorn.", query: "Garrett Popcorn Michigan Ave Chicago" },
    { id: "chi_f6", type: "food", name: "The Original Rainbow Cone (Since 1926)", category: "Historic Dessert", location: "Navy Pier / Beverly", lat: 41.8915, lon: -87.6080, desc: "Five legendary sliced layers of chocolate, strawberry, Palmer House (vanilla/walnut), pistachio, and orange sherbet.", query: "Original Rainbow Cone Navy Pier" },
    { id: "chi_f7", type: "food", name: "MingHin Cuisine & Chinatown Square", category: "Cantonese Dim Sum", location: "Chinatown", lat: 41.8533, lon: -87.6329, desc: "Michelin Bib Gourmand dim sum palace serving steamed dumplings, barbecue pork buns, and seafood.", query: "MingHin Cuisine Chinatown Chicago" },
    { id: "chi_f8", type: "food", name: "Green Mill Cocktail Lounge (Historic Jazz)", category: "Historic Jazz Lounge", location: "Uptown (5.5 mi north)", lat: 41.9691, lon: -87.6599, desc: "Historic 1907 cocktail lounge once patronized by Al Capone, hosting premier live jazz nightly.", query: "Green Mill Jazz Lounge Chicago" }
  ],

  // SAN FRANCISCO & BAY AREA REGION (Exact GPS)
  SF: [
    { id: "sf_s1", type: "sight", name: "Golden Gate Bridge (Vista Point & Walkway)", category: "Iconic Landmark", location: "Presidio / Marin Headlands", lat: 37.8199, lon: -122.4783, desc: "World-famous Art Deco suspension bridge spanning the Golden Gate strait with scenic walking paths.", query: "Golden Gate Bridge Vista Point" },
    { id: "sf_s2", type: "sight", name: "Alcatraz Island & Cellhouse Audio Tour", category: "National Historic Landmark", location: "San Francisco Bay", lat: 37.8269, lon: -122.4230, desc: "Legendary former federal penitentiary in the middle of SF Bay offering captivating ranger-led and audio tours.", query: "Alcatraz Island Tour" },
    { id: "sf_s3", type: "sight", name: "Fisherman's Wharf & Pier 39 Sea Lions", category: "Waterfront Attraction", location: "Fisherman's Wharf", lat: 37.8087, lon: -122.4098, desc: "Bustling waterfront promenade featuring famous barking sea lions, maritime museums, and sourdough bakeries.", query: "Pier 39 San Francisco" },
    { id: "sf_s4", type: "sight", name: "Historic Cable Cars (Powell-Hyde Line)", category: "Historic Transit", location: "Powell St / Nob Hill", lat: 37.7845, lon: -122.4080, desc: "The world's last manually operated cable car system climbing San Francisco's steepest scenic hills.", query: "Powell Hyde Cable Car Turnaround" },
    { id: "sf_s5", type: "sight", name: "Chinatown & Dragon Gate", category: "Cultural Heritage", location: "Grant Avenue / Bush St", lat: 37.7908, lon: -122.4058, desc: "Oldest Chinatown in North America filled with herbal shops, dragon lantern streets, and dim sum parlors.", query: "Chinatown Dragon Gate San Francisco" },
    { id: "sf_s6", type: "sight", name: "Palace of Fine Arts & Marina Lagoon", category: "Monumental Architecture", location: "Marina District", lat: 37.8029, lon: -122.4484, desc: "Greco-Roman rotunda and colonnade built for the 1915 Panama-Pacific Exposition surrounded by a peaceful lagoon.", query: "Palace of Fine Arts San Francisco" },
    { id: "sf_s7", type: "sight", name: "Twin Peaks Panoramic Viewpoint", category: "Scenic Viewpoint", location: "Twin Peaks Summit", lat: 37.7544, lon: -122.4477, desc: "Twin 922-foot hills offering the ultimate 360-degree panoramic view of downtown SF, the bridges, and the bay.", query: "Twin Peaks San Francisco" },
    { id: "sf_s8", type: "sight", name: "Muir Woods National Monument (11.5 mi north)", category: "Ancient Redwood Forest", location: "Mill Valley, Marin", lat: 37.8970, lon: -122.5811, desc: "Primeval coastal redwood sanctuary with towering 1,000-year-old trees and peaceful boardwalk trails.", query: "Muir Woods National Monument" },
    { id: "sf_f1", type: "food", name: "Tartine Bakery (Morning Buns & Sourdough)", category: "Iconic Bakery", location: "Mission District", lat: 37.7614, lon: -122.4241, desc: "World-renowned bakery famous for flaky country sourdough loaves, cinnamon morning buns, and artisan tarts.", query: "Tartine Bakery San Francisco" },
    { id: "sf_f2", type: "food", name: "La Taqueria (Mission-Style Burrito)", category: "Legendary Burrito", location: "Mission District", lat: 37.7508, lon: -122.4181, desc: "Award-winning Mission-style burritos grilled golden (dorado style) loaded with carne asada and guacamole.", query: "La Taqueria Mission San Francisco" },
    { id: "sf_f3", type: "food", name: "Swan Oyster Depot (Since 1912)", category: "Historic Seafood Counter", location: "Nob Hill / Polk St", lat: 37.7909, lon: -122.4211, desc: "18-seat marble counter serving fresh Pacific Dungeness crab, clam chowder, and oysters on the half shell.", query: "Swan Oyster Depot San Francisco" },
    { id: "sf_f4", type: "food", name: "House of Prime Rib", category: "Classic American Dining", location: "Nob Hill / Van Ness", lat: 37.7934, lon: -122.4228, desc: "Beloved San Francisco institution carving prime rib tableside from stainless steel Zeppelins with Yorkshire pudding.", query: "House of Prime Rib San Francisco" },
    { id: "sf_f5", type: "food", name: "Ghirardelli Chocolate Factory & Ice Cream", category: "Historic Dessert", location: "Ghirardelli Square", lat: 37.8059, lon: -122.4226, desc: "Historic 1893 chocolate landmark serving hot fudge sundaes and freshly made handmade chocolates.", query: "Ghirardelli Square San Francisco" },
    { id: "sf_f6", type: "food", name: "Ferry Building Food Hall & Farmers Market", category: "Artisan Marketplace", location: "Embarcadero", lat: 37.7955, lon: -122.3937, desc: "Historic 1898 clocktower ferry terminal packed with artisan food purveyors, oysters, cheeses, and Blue Bottle coffee.", query: "Ferry Building Marketplace San Francisco" }
  ],

  // PRINCETON & CENTRAL NEW JERSEY
  PRINCETON: [
    { id: "pr_s1", type: "sight", name: "Nassau Hall & Princeton Campus", category: "Historic Landmark", location: "Princeton Campus", lat: 40.3487, lon: -74.6593, desc: "Historic 1756 building that briefly served as the US Capitol in 1783, framed by Collegiate Gothic courtyards.", query: "Nassau Hall Princeton University" },
    { id: "pr_s2", type: "sight", name: "Princeton University Chapel", category: "Gothic Masterpiece", location: "Central Campus", lat: 40.3491, lon: -74.6565, desc: "One of the largest university chapels in the world, featuring soaring stained glass and Skinner organ.", query: "Princeton University Chapel" },
    { id: "pr_s3", type: "sight", name: "Princeton University Art Museum", category: "World-Class Museum", location: "McCormick Hall", lat: 40.3475, lon: -74.6575, desc: "Vast collection spanning ancient Mediterranean antiquities, Asian art, and Impressionist masterworks.", query: "Princeton University Art Museum" },
    { id: "pr_s4", type: "sight", name: "Palmer Square & Historic Downtown", category: "Town Square", location: "Downtown Princeton", lat: 40.3503, lon: -74.6610, desc: "Colonial revival square lined with boutique shops, independent bookstores, artisan cafes, and outdoor green.", query: "Palmer Square Princeton" },
    { id: "pr_s5", type: "sight", name: "Morven Museum & Garden", category: "Historic Estate", location: "Stockton Street", lat: 40.3468, lon: -74.6698, desc: "National Historic Landmark and former New Jersey Governor's mansion with five acres of historic gardens.", query: "Morven Museum Princeton" },
    { id: "pr_s6", type: "sight", name: "Princeton Battlefield State Park (1.5 mi)", category: "Revolutionary War", location: "Mercer Street", lat: 40.3308, lon: -74.6738, desc: "Site of General George Washington's pivotal 1777 victory, Clarke House Museum, and Mercer Oak grove.", query: "Princeton Battlefield State Park" },
    { id: "pr_s7", type: "sight", name: "McCarter Theatre Center", category: "Performing Arts", location: "University Place", lat: 40.3439, lon: -74.6625, desc: "Tony Award-winning theater producing world-premiere plays, classical music, and dance performances.", query: "McCarter Theatre Center Princeton" },
    { id: "pr_s8", type: "sight", name: "Grounds For Sculpture (9.5 mi out)", category: "Sculpture Park", location: "Hamilton Township", lat: 40.2372, lon: -74.7175, desc: "Expansive 42-acre sculpture park and arboretum with over 300 contemporary outdoor sculptures.", query: "Grounds For Sculpture Hamilton NJ" },
    { id: "pr_f1", type: "food", name: "Hoagie Haven (The Body Bag & Sanchez Hoagie)", category: "Legendary Eatery", location: "Nassau Street", lat: 40.3524, lon: -74.6548, desc: "Famous counter-service institution beloved by students since 1974 for loaded gourmet hoagies.", query: "Hoagie Haven Princeton" },
    { id: "pr_f2", type: "food", name: "The Bent Spoon Artisan Ice Cream", category: "Artisan Dessert", location: "Palmer Square", lat: 40.3502, lon: -74.6608, desc: "Award-winning small-batch ice cream and sorbet made with seasonal local New Jersey farm ingredients.", query: "The Bent Spoon Princeton" },
    { id: "pr_f3", type: "food", name: "Agricola Community Eatery (Farm-to-Table)", category: "Farm-to-Table Dining", location: "Witherspoon Street", lat: 40.3507, lon: -74.6601, desc: "Rustic-chic eatery sourcing heirloom vegetables, heritage meats, and flatbreads from local Great Meadow Farm.", query: "Agricola Eatery Princeton" },
    { id: "pr_f4", type: "food", name: "Conte's Pizza & Bar (Thin Crust)", category: "Historic Pizzeria", location: "Witherspoon Street", lat: 40.3562, lon: -74.6565, desc: "Classic 1936 tavern renowned across New Jersey for crispy bar-style thin-crust sausage and garlic pies.", query: "Conte's Pizza Princeton" },
    { id: "pr_f5", type: "food", name: "Mistral Modern Global Tapas", category: "Fine Dining", location: "Witherspoon Street", lat: 40.3508, lon: -74.6602, desc: "Chef-driven artisanal small plates blending French technique with global flavor profiles.", query: "Mistral Princeton" },
    { id: "pr_f6", type: "food", name: "Small World Coffee", category: "Craft Coffeehouse", location: "Witherspoon / Nassau", lat: 40.3504, lon: -74.6599, desc: "Beloved community hub serving house-roasted espresso blends, cold brew, and fresh pastries since 1993.", query: "Small World Coffee Princeton" }
  ],

  // NEW YORK METRO
  NYC: [
    { id: "ny_s1", type: "sight", name: "Central Park (Bethesda Terrace & Bow Bridge)", category: "Iconic Park", location: "Central Park / Manhattan", lat: 40.7738, lon: -73.9708, desc: "843-acre green oasis featuring scenic lakes, Bethesda Terrace, and Ramble woodlands.", query: "Central Park New York" },
    { id: "ny_s2", type: "sight", name: "The Metropolitan Museum of Art (The Met)", category: "World-Class Museum", location: "Museum Mile / Upper East Side", lat: 40.7794, lon: -73.9632, desc: "Over 5,000 years of global art, Egyptian Temple of Dendur, and rooftop skyline terrace.", query: "The Metropolitan Museum of Art" },
    { id: "ny_s3", type: "sight", name: "Top of the Rock & Rockefeller Center", category: "Observation Deck", location: "Midtown Manhattan", lat: 40.7587, lon: -73.9787, desc: "Panoramic 360-degree observation deck with direct views of the Empire State Building and Central Park.", query: "Top of the Rock Observation Deck" },
    { id: "ny_s4", type: "sight", name: "The High Line & Chelsea Market", category: "Elevated Park", location: "Chelsea / Meatpacking", lat: 40.7480, lon: -74.0048, desc: "1.45-mile elevated park built on historic freight rails alongside the Hudson River and food hall.", query: "The High Line New York" },
    { id: "ny_s5", type: "sight", name: "Times Square & Broadway Theater District", category: "Entertainment Hub", location: "Midtown Manhattan", lat: 40.7580, lon: -73.9855, desc: "Neon-lit crossroads of the world featuring flagship Broadway musicals and energetic street life.", query: "Times Square New York" },
    { id: "ny_s6", type: "sight", name: "Brooklyn Bridge & DUMBO Promenade (3.5 mi)", category: "Historic Bridge", location: "DUMBO / Brooklyn", lat: 40.7061, lon: -73.9969, desc: "Historic 1883 stone suspension bridge walkway leading into waterfront Brooklyn Bridge Park.", query: "DUMBO Brooklyn Bridge Park" },
    { id: "ny_s7", type: "sight", name: "Statue of Liberty & Ellis Island Ferry", category: "National Monument", location: "Battery Park / Harbor", lat: 40.6892, lon: -74.0445, desc: "Symbol of American freedom in New York Harbor and historic immigration station.", query: "Statue of Liberty New York" },
    { id: "ny_s8", type: "sight", name: "Flushing Meadows Corona Park & Unisphere (9 mi)", category: "Regional Park", location: "Queens", lat: 40.7465, lon: -73.8448, desc: "Site of the 1964 World's Fair featuring the monumental steel Unisphere globe.", query: "Unisphere Flushing Meadows" },
    { id: "ny_f1", type: "food", name: "Katz's Delicatessen (Pastrami on Rye)", category: "Iconic Deli", location: "Lower East Side", lat: 40.7222, lon: -73.9874, desc: "Legendary 1888 deli serving hand-carved hot pastrami and corned beef on seedless rye.", query: "Katz's Delicatessen New York" },
    { id: "ny_f2", type: "food", name: "Authentic New York Bagels at Russ & Daughters", category: "Historic Appetizing", location: "Lower East Side", lat: 40.7226, lon: -73.9882, desc: "Traditional bagel sandwiches loaded with house-smoked Gaspe Nova salmon and cream cheese.", query: "Russ and Daughters New York" },
    { id: "ny_f3", type: "food", name: "NY Style Pizza at Joe's Pizza (Greenwich Village)", category: "Iconic Pizza Slice", location: "West Village", lat: 40.7306, lon: -74.0021, desc: "The quintessential NYC thin-crust fold-and-eat cheese slice hot from the deck oven.", query: "Joe's Pizza Carmine Street" },
    { id: "ny_f4", type: "food", name: "Chinatown Dim Sum at Joe's Shanghai", category: "Cultural Dining", location: "Chinatown", lat: 40.7144, lon: -73.9981, desc: "Authentic soup dumplings (Xiao Long Bao), Cantonese roast pork, and steamed rice rolls.", query: "Joe's Shanghai Chinatown New York" }
  ],

  // SAN DIEGO
  SAN: [
    { id: "sd_s1", type: "sight", name: "Balboa Park & Spanish Village Art Center", category: "Cultural Park", location: "Balboa Park", lat: 32.7341, lon: -117.1446, desc: "1,200-acre historic park with 17 museums, Spanish Colonial Revival architecture, and gardens.", query: "Balboa Park San Diego" },
    { id: "sd_s2", type: "sight", name: "San Diego Zoo", category: "World-Class Zoo", location: "Balboa Park", lat: 32.7353, lon: -117.1490, desc: "World-famous 100-acre wildlife sanctuary pioneering cageless open-air animal exhibits.", query: "San Diego Zoo" },
    { id: "sd_s3", type: "sight", name: "USS Midway Aircraft Carrier Museum", category: "Maritime Museum", location: "Embarcadero / Downtown", lat: 32.7137, lon: -117.1751, desc: "Longest-serving US Navy aircraft carrier featuring 30 restored aircraft and flight simulators.", query: "USS Midway Museum San Diego" },
    { id: "sd_s4", type: "sight", name: "Historic Gaslamp Quarter & Petco Park", category: "Historic District", location: "Downtown San Diego", lat: 32.7114, lon: -117.1599, desc: "Victorian-era commercial district with brick buildings, rooftop lounges, and restaurants.", query: "Gaslamp Quarter San Diego" },
    { id: "sd_s5", type: "sight", name: "Coronado Beach & Hotel del Coronado (5 mi)", category: "Coastal Landmark", location: "Coronado Island", lat: 32.6809, lon: -117.1783, desc: "Legendary 1888 Victorian beach resort, sparkling sand beaches, and Orange Avenue shops.", query: "Hotel del Coronado San Diego" },
    { id: "sd_s6", type: "sight", name: "La Jolla Cove & Coastal Sea Caves (13 mi north)", category: "Scenic Ocean Reserve", location: "La Jolla", lat: 32.8504, lon: -117.2730, desc: "Picturesque cove sheltered by sandstone cliffs with sea lions, snorkeling, and sea caves.", query: "La Jolla Cove San Diego" },
    { id: "sd_f1", type: "food", name: "California Burrito at Lucha Libre Taco Shop", category: "Iconic Mexican", location: "Mission Hills", lat: 32.7441, lon: -117.1812, desc: "Carne asada, melted cheese, and French fries stuffed in a flour tortilla with house salsas.", query: "Lucha Libre Taco Shop San Diego" },
    { id: "sd_f2", type: "food", name: "Fresh Catch & Fish Tacos at Mitch's Seafood", category: "Waterfront Seafood", location: "Point Loma Marina", lat: 32.7233, lon: -117.2285, desc: "Dockside casual seafood counter serving fresh local grilled fish tacos overlooking fishing boats.", query: "Mitch's Seafood San Diego" }
  ]
};

function getCuratedGuideForCity(cityName, airportCode) {
  const normCity = (cityName || "").toLowerCase();
  const normCode = (airportCode || "").toUpperCase();

  if (normCity.includes("chicago") || normCode === "ORD" || normCode === "MDW") {
    return curatedCityGuides.CHI;
  }
  if (normCity.includes("san francisco") || normCity.includes("sf") || normCode === "SFO" || normCode === "SJC" || normCode === "OAK") {
    return curatedCityGuides.SF;
  }
  if (normCity.includes("princeton")) {
    return curatedCityGuides.PRINCETON;
  }
  if (normCity.includes("new york") || normCity.includes("manhattan") || normCity.includes("nyc") || normCity.includes("brooklyn") || normCode === "JFK" || normCode === "EWR" || normCode === "LGA") {
    return curatedCityGuides.NYC;
  }
  if (normCity.includes("san diego") || normCode === "SAN") {
    return curatedCityGuides.SAN;
  }
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
    { id: "fb_5", type: "sight", name: `${cityName} Regional Nature Reserve (8 mi out)`, category: "Regional Park", location: "Outer District", lat: centerLat + 0.09, lon: centerLon + 0.08, distanceKm: 13.0, desc: "Scenic regional park offering panoramic viewpoints and nature trails.", query: `${cityName} Nature Park` },
    { id: "fb_6", type: "food", name: `${cityName} Public Food Market`, category: "Food Market", location: "Downtown Market", lat: centerLat + 0.002, lon: centerLon - 0.005, distanceKm: 0.5, desc: "Vibrant indoor market packed with fresh regional produce, street food stalls, and bakeries.", query: `${cityName} Central Market` },
    { id: "fb_7", type: "food", name: `Traditional ${cityName} Regional Dining`, category: "Iconic Culinary", location: "Old Quarter", lat: centerLat - 0.003, lon: centerLon + 0.005, distanceKm: 0.6, desc: "Authentic local culinary dishes slow-cooked with fresh regional ingredients.", query: `${cityName} Traditional Food` },
    { id: "fb_8", type: "food", name: `${cityName} Street Food & Tapas Alley`, category: "Local Food & Dining", location: "Evening Market", lat: centerLat + 0.004, lon: centerLon + 0.006, distanceKm: 0.7, desc: "Evening street food strip featuring local skewers, pastries, and beverages.", query: `${cityName} Street Food` }
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

  // Curated Hotels for Chicago
  if (norm.includes("chicago") || airportCode === "ORD" || airportCode === "MDW") {
    const chiHotels = [
      { id: "chi_h1", name: "The Ritz-Carlton, Chicago", brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 460, lat: 41.8976, lon: -87.6231, area: "Magnificent Mile / Water Tower", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "chi_h2", name: "Chicago Marriott Downtown Magnificent Mile", brand: "Marriott Bonvoy", rating: 4.5, priceUSD: 285, lat: 41.8920, lon: -87.6247, area: "Magnificent Mile", badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "chi_h3", name: "Park Hyatt Chicago", brand: "World of Hyatt", rating: 4.9, priceUSD: 510, lat: 41.8980, lon: -87.6255, area: "Water Tower / Magnificent Mile", badge: "Palace Luxury Flagship", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "chi_h4", name: "Hyatt Regency Chicago", brand: "World of Hyatt", rating: 4.6, priceUSD: 260, lat: 41.8878, lon: -87.6225, area: "Chicago Riverwalk / Downtown", badge: "Riverfront Hub", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "chi_h5", name: "InterContinental Chicago Magnificent Mile", brand: "IHG", rating: 4.7, priceUSD: 310, lat: 41.8912, lon: -87.6244, area: "Magnificent Mile (Historic 1929 Tower)", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) },
      { id: "chi_h6", name: "The Kimpton Gray Hotel", brand: "IHG", rating: 4.7, priceUSD: 275, lat: 41.8812, lon: -87.6318, area: "Financial District / Loop", badge: "Boutique Luxury", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];

    return chiHotels.map(h => {
      const d = haversineDistance(centerLat, centerLon, h.lat, h.lon);
      return { ...h, distanceKm: parseFloat(d.toFixed(1)) };
    }).filter(h => selectedBrands.includes(h.brand));
  }

  // Curated Hotels for San Francisco
  if (norm.includes("san francisco") || norm.includes("sf") || airportCode === "SFO" || airportCode === "SJC" || airportCode === "OAK") {
    const sfHotels = [
      { id: "sf_h1", name: "The St. Regis San Francisco", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 520, lat: 37.7860, lon: -122.4010, area: "SoMa / SFMOMA", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "sf_h2", name: "San Francisco Marriott Marquis", brand: "Marriott Bonvoy", rating: 4.6, priceUSD: 295, lat: 37.7850, lon: -122.4045, area: "Union Square / SoMa", badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "sf_h3", name: "Grand Hyatt San Francisco", brand: "World of Hyatt", rating: 4.7, priceUSD: 310, lat: 37.7892, lon: -122.4075, area: "Union Square Center", badge: "Premium Hub", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "sf_h4", name: "Hyatt Regency San Francisco", brand: "World of Hyatt", rating: 4.6, priceUSD: 280, lat: 37.7942, lon: -122.3957, area: "Embarcadero Waterfront", badge: "Waterfront Atrium", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "sf_h5", name: "InterContinental Mark Hopkins San Francisco", brand: "IHG", rating: 4.7, priceUSD: 340, lat: 37.7918, lon: -122.4105, area: "Nob Hill (Top of the Mark)", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) },
      { id: "sf_h6", name: "Hotel Indigo San Francisco (8 mi south)", brand: "IHG", rating: 4.4, priceUSD: 190, lat: 37.6000, lon: -122.3800, area: "Millbrae / Peninsula", badge: "Boutique Stay", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];

    return sfHotels.map(h => {
      const d = haversineDistance(centerLat, centerLon, h.lat, h.lon);
      return { ...h, distanceKm: parseFloat(d.toFixed(1)) };
    }).filter(h => selectedBrands.includes(h.brand));
  }

  // Curated Hotels for Princeton
  if (norm.includes("princeton")) {
    const princetonHotels = [
      { id: "pr_h1", name: "Princeton Marriott at Forrestal", brand: "Marriott Bonvoy", rating: 4.6, priceUSD: 260, lat: 40.3575, lon: -74.6225, area: "Route 1 / Forrestal Village", badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "pr_h2", name: "Courtyard by Marriott Princeton", brand: "Marriott Bonvoy", rating: 4.4, priceUSD: 195, lat: 40.3458, lon: -74.6364, area: "Carnegie Center", badge: "Select Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "pr_h3", name: "Hyatt Regency Princeton", brand: "World of Hyatt", rating: 4.7, priceUSD: 275, lat: 40.3275, lon: -74.6468, area: "Carnegie Center Boulevard", badge: "Full Service Hub", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "pr_h4", name: "Hyatt Place Princeton", brand: "World of Hyatt", rating: 4.5, priceUSD: 185, lat: 40.3125, lon: -74.6785, area: "MarketFair / Route 1", badge: "Select Service", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "pr_h5", name: "Holiday Inn Express Princeton SE", brand: "IHG", rating: 4.4, priceUSD: 165, lat: 40.3235, lon: -74.6540, area: "Plainsboro / Route 1", badge: "Comfort Lodging", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];

    return princetonHotels.map(h => {
      const d = haversineDistance(centerLat, centerLon, h.lat, h.lon);
      return { ...h, distanceKm: parseFloat(d.toFixed(1)) };
    }).filter(h => selectedBrands.includes(h.brand));
  }
  
  if (norm.includes("manhattan") || norm.includes("new york") || airportCode === "JFK" || airportCode === "LGA" || airportCode === "EWR") {
    const nyHotels = [
      { id: "ny_h1", name: "The St. Regis New York", brand: "Marriott Bonvoy", rating: 4.9, priceUSD: 750, lat: 40.7616, lon: -73.9744, area: "Midtown / 5th Avenue", badge: "Iconic Luxury", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "ny_h2", name: "New York Marriott Marquis", brand: "Marriott Bonvoy", rating: 4.6, priceUSD: 380, lat: 40.7587, lon: -73.9862, area: "Times Square / Broadway", badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) },
      { id: "ny_h3", name: "Park Hyatt New York", brand: "World of Hyatt", rating: 4.9, priceUSD: 790, lat: 40.7654, lon: -73.9790, area: "Carnegie Hall / Central Park", badge: "Palace Luxury", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "ny_h4", name: "Grand Hyatt New York / Hyatt Grand Central", brand: "World of Hyatt", rating: 4.5, priceUSD: 320, lat: 40.7521, lon: -73.9763, area: "Grand Central Terminal", badge: "Premium Hub", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) },
      { id: "ny_h5", name: "InterContinental New York Barclay", brand: "IHG", rating: 4.7, priceUSD: 410, lat: 40.7562, lon: -73.9734, area: "Midtown East", badge: "Historic Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) },
      { id: "ny_h6", name: "Kimpton Hotel Eventi", brand: "IHG", rating: 4.6, priceUSD: 340, lat: 40.7478, lon: -73.9899, area: "Chelsea / NoMad", badge: "Boutique", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    ];

    return nyHotels.map(h => {
      const d = haversineDistance(centerLat, centerLon, h.lat, h.lon);
      return { ...h, distanceKm: parseFloat(d.toFixed(1)) };
    }).filter(h => selectedBrands.includes(h.brand));
  }

  const fallback = [];
  if (selectedBrands.includes("Marriott Bonvoy")) {
    fallback.push(
      { id: `fb_h1_${cityName}`, name: `Marriott ${cityName} Grand`, brand: "Marriott Bonvoy", rating: 4.8, priceUSD: 340, lat: centerLat + 0.005, lon: centerLon + 0.004, distanceKm: 0.7, area: `${cityName} Center`, badge: "Full Service", brandUrl: getBrandPortalUrl("Marriott Bonvoy", cityName, checkIn, checkOut) }
    );
  }
  if (selectedBrands.includes("World of Hyatt")) {
    fallback.push(
      { id: `fb_h2_${cityName}`, name: `Hyatt Regency ${cityName}`, brand: "World of Hyatt", rating: 4.7, priceUSD: 320, lat: centerLat + 0.006, lon: centerLon - 0.003, distanceKm: 0.8, area: "Downtown", badge: "Premium", brandUrl: getBrandPortalUrl("World of Hyatt", cityName, checkIn, checkOut) }
    );
  }
  if (selectedBrands.includes("IHG")) {
    fallback.push(
      { id: `fb_h3_${cityName}`, name: `InterContinental ${cityName}`, brand: "IHG", rating: 4.8, priceUSD: 390, lat: centerLat + 0.003, lon: centerLon + 0.006, distanceKm: 0.7, area: "Plaza Center", badge: "Luxury Landmark", brandUrl: getBrandPortalUrl("IHG", cityName, checkIn, checkOut) }
    );
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
    { name: "United Airlines", code: "UA" },
    { name: "American Airlines", code: "AA" },
    { name: "Delta Air Lines", code: "DL" },
    { name: "Southwest Airlines", code: "WN" }
  ];
  let layoverHubs = ["DEN", "DFW", "MSP", "SLC"];

  if (isTranspacific) {
    carrierPool = [
      { name: "United Airlines", code: "UA" },
      { name: "EVA Air", code: "BR" },
      { name: "China Airlines", code: "CI" },
      { name: "STARLUX Airlines", code: "JX" }
    ];
    layoverHubs = ["SFO", "TPE", "LAX", "SEA"];
  }

  const flights = [];
  const basePriceUSD = Math.round(isLongHaul ? 850 + (distanceKm * 0.045) : 180 + (distanceKm * 0.08));

  // 1. Non-stop #1
  const d1 = "06:45 AM";
  flights.push({
    id: "fl-1",
    airline: carrierPool[0].name,
    flightNum: `${carrierPool[0].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 0,
    stopDetails: "Non-stop",
    departTime: d1,
    arriveTime: calculateArrivalTime(d1, nonStopFlightMinutes, timeZoneDiffHours),
    rawDepartTimeMin: 405,
    durationText: formatMinutesToDuration(nonStopFlightMinutes),
    rawDurationMinutes: nonStopFlightMinutes,
    priceUSD: basePriceUSD + 140,
    cabin: "Economy Standard",
    bookingUrl: gFlightsUrl
  });

  // 2. Non-stop #2
  const d2 = "12:15 PM";
  flights.push({
    id: "fl-2",
    airline: carrierPool[1].name,
    flightNum: `${carrierPool[1].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 0,
    stopDetails: "Non-stop",
    departTime: d2,
    arriveTime: calculateArrivalTime(d2, nonStopFlightMinutes, timeZoneDiffHours),
    rawDepartTimeMin: 735,
    durationText: formatMinutesToDuration(nonStopFlightMinutes),
    rawDurationMinutes: nonStopFlightMinutes,
    priceUSD: basePriceUSD + 185,
    cabin: "Main Cabin",
    bookingUrl: gFlightsUrl
  });

  // 3. 1-Stop Connection
  const hub1 = layoverHubs[0];
  const dur1 = nonStopFlightMinutes + 120;
  const d3 = "08:30 AM";
  flights.push({
    id: "fl-3",
    airline: carrierPool[2].name,
    flightNum: `${carrierPool[2].code}${Math.floor(100 + Math.random() * 800)}`,
    stops: 1,
    stopDetails: `1 stop (${hub1} - 1h 40m)`,
    departTime: d3,
    arriveTime: calculateArrivalTime(d3, dur1, timeZoneDiffHours),
    rawDepartTimeMin: 510,
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

  const dailyFoodUSD = 75;
  const dailyTransitUSD = 15;
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