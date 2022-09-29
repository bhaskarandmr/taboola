export const OriginType = {
  SPONSORED: "sponsored",
  ORGANIC: "organic"
};

export function Recomendation(recomendation) {
  this.id = recomendation.id;
  this.description = recomendation.description;
  this.type = recomendation.type;
  this.name = recomendation.name;
  this.created = recomendation.created;
  this.branding = recomendation.branding;
  this.duration = recomendation.duration;
  this.views = recomendation.views;
  this.thumbnail = recomendation.thumbnail ? recomendation.thumbnail : [];
  this.category = recomendation.categories ? recomendation.categories : [];
  this.origin = recomendation.origin;
  this.url = recomendation.url;
}

export function RecomendationContainer(recomendationList) {
  this.widgets = recomendationList;
}
