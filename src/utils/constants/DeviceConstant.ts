// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletM: "768px",
  tabletL: "1024px",
  laptopM: "1280px",
  laptopL: "1440px",
  desktop: "2560px"
};

const media = {
  mobileS: `@media (min-width: ${size.mobileS})`,
  mobileM: `@media (min-width: ${size.mobileM})`,
  mobileL: `@media (min-width: ${size.mobileL})`,
  tabletM: `@media (min-width: ${size.tabletM})`,
  tabletL: `@media (min-width: ${size.tabletL})`,
  laptopM: `@media (min-width: ${size.laptopM})`,
  laptopL: `@media (min-width: ${size.laptopL})`,
  desktop: `@media (min-width: ${size.desktop})`
};

export default media;
