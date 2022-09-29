import { OriginType } from "./model";

export function renderRecomendationContainer({ recomendationContainer }) {
  const listElement = document.createElement("div");
  listElement.className = "recomendation-container";
  let widgetElement;
  recomendationContainer.widgets.forEach((widget) => {
    switch (widget.origin) {
      case OriginType.SPONSORED:
        widgetElement = renderSponsoredWidget(widget);
        listElement.appendChild(widgetElement);
        return;
      case OriginType.ORGANIC:
        widgetElement = renderOrganicWidget(widget);
        listElement.appendChild(widgetElement);
        return;
      default:
        //TODO: define render function here
        widgetElement = renderSponsoredWidget(widget);
        listElement.appendChild(widgetElement);
        return;
    }
  });
  return listElement;
}

export function renderSponsoredWidget(widget) {
  const anchorElement = document.createElement("a");
  anchorElement.href = widget.url;
  anchorElement.target = "_blank";

  const imgElement = document.createElement("img");
  imgElement.src = widget.thumbnail.length
    ? widget.thumbnail[0].url
    : "https://picsum.photos/150";

  const nameElement = document.createElement("p");
  nameElement.innerHTML = widget.name;

  const brandElement = document.createElement("h5");
  brandElement.innerHTML = widget.branding;

  anchorElement.appendChild(imgElement);
  anchorElement.appendChild(nameElement);
  anchorElement.appendChild(brandElement);

  const widgetElement = document.createElement("div");
  widgetElement.className = "widget";
  widgetElement.appendChild(anchorElement);
  return widgetElement;
}

export function renderOrganicWidget(widget) {
  const anchorElement = document.createElement("a");
  anchorElement.href = widget.url;
  anchorElement.target = "_blank";

  const imgElement = document.createElement("img");
  imgElement.src = widget.thumbnail;

  const nameElement = document.createElement("p");
  nameElement.innerHTML = widget.name;

  anchorElement.appendChild(imgElement);
  anchorElement.appendChild(nameElement);

  const widgetElement = document.createElement("div");
  widgetElement.className = "widget";
  widgetElement.appendChild(anchorElement);
  return widgetElement;
}
