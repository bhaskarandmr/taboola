export async function fetchRecomendations() {
  const response = await fetch(
    "https://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html"
  );
  if (!response.ok) {
    throw new Error(`Problem to load recomendations: ${response.status}`);
  }
  return await response.json();
}
