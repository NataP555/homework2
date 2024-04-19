export async function getData() {
    const url = "https://randomuser.me/api/?results=10";
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();

        return data;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }