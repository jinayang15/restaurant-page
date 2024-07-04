import GusHappy from "./images/gus_happy.png";
import PortraitBG from "./images/portrait_box.png";
import StardropSaloon from "./images/stardrop_saloon.jpeg";

export default function generateHomepage() {
  const heading = document.createElement("h2");
  const introSection = generateIntroSection();
  const featureSection = generateFeatureSection();

  heading.classList.add("restaurant");
  heading.classList.add("heading");

  heading.textContent = "The Stardrop Saloon";

  return [heading, introSection, featureSection];
}

function generateIntroSection() {
  const introSection = document.createElement("section");

  const introImgContainer = document.createElement("div");
  const introImgBG = document.createElement("img");
  const introImgPortrait = document.createElement("img");

  const introTextContainer = document.createElement("div");
  const introText1 = document.createElement("p");
  const introText2 = document.createElement("p");

  introSection.classList.add("intro-section");
  introImgContainer.classList.add("intro-img-container");
  introTextContainer.classList.add("intro-text-container");

  introImgBG.classList.add("intro-img-bg");
  introImgBG.setAttribute("src", PortraitBG);
  introImgPortrait.classList.add("intro-img-portrait");
  introImgPortrait.setAttribute("src", GusHappy);
  introImgPortrait.setAttribute("alt", "Happy Gus the Saloon Owner");

  introText1.classList.add("intro-text");
  introText2.classList.add("intro-text");
  introText1.textContent = "“Hungry? Thirsty? I've got just the thing!”";
  introText2.textContent = "- Gus";

  introImgContainer.appendChild(introImgBG);
  introImgContainer.appendChild(introImgPortrait);
  introTextContainer.appendChild(introText1);
  introTextContainer.appendChild(introText2);
  introSection.appendChild(introImgContainer);
  introSection.appendChild(introTextContainer);

  return introSection;
}

function generateFeatureSection() {
  const featureSection = document.createElement("section");
  const featureHeading1 = document.createElement("h3");
  const featureImg = document.createElement("img");
  const featureHeading2 = document.createElement("h3");
  const featureHeading3 = document.createElement("h3");

  featureSection.classList.add("feature-section");

  featureHeading1.classList.add("feature");
  featureHeading1.classList.add("subheading");
  featureHeading1.textContent = "Good Food, Fun, and Friends";

  featureImg.classList.add("feature-img");
  featureImg.setAttribute("src", StardropSaloon);
  featureImg.setAttribute(
    "alt",
    "Picture of Stardew Valley characters inside the Stardrop Saloon"
  );

  featureHeading2.classList.add("feature");
  featureHeading2.classList.add("subheading");
  featureHeading2.textContent = "Everyday from 12pm to 12am";

  featureHeading3.classList.add("feature");
  featureHeading3.classList.add("subheading");
  featureHeading3.textContent = "Come join us!";

  featureSection.appendChild(featureHeading1);
  featureSection.appendChild(featureImg);
  featureSection.appendChild(featureHeading2);
  featureSection.appendChild(featureHeading3);

  return featureSection;
}
