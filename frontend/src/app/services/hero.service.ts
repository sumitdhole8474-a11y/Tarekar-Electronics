const API_URL = process.env.NEXT_PUBLIC_API_URL;

/* =========================================
   GET HERO SECTION
========================================= */
export async function getHeroSection() {
  try {

    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
    }

    const res = await fetch(`${API_URL}/api/hero?ts=${Date.now()}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch hero: ${res.status}`);
    }

    const data = await res.json();

    console.log("Hero fetched:", data);

    return data;

  } catch (error) {
    console.error("Hero fetch error:", error);
    throw error;
  }
}