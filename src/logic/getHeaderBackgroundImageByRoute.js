import homeBackgroundDesktop from '../assets/hero-image.png'
import homeBackgroundMobile from '../assets/hero-image-mobile.png'
import injuryCareDesktop from '../assets/injury-care-desktop.png'
import injuryCareMobile from '../assets/injury-care-mobile.png'
import ourCompanyDesktop from '../assets/our-company-desktop.png'
import ourCompanyMobile from '../assets/our-company-mobile.png'
import ourServicesDesktop from '../assets/our-services-desktop.png'
import ourServicesMobile from '../assets/our-services-mobile.png'
import whereAreWeDesktop from '../assets/where-are-we-desktop.png'
import whereAreWeMobile from '../assets/where-are-we-mobile.png'
import whyUsDesktop from '../assets/why-us-desktop.png'
import whyUsMobile from '../assets/why-us-mobile.png'

const headerBackgroundsImages = {
  homeBackground: {
    mobile: homeBackgroundMobile,
    desktop: homeBackgroundDesktop
  },
  injuryCare: {
    mobile: injuryCareMobile,
    desktop: injuryCareDesktop
  },
  ourCompany: {
    mobile: ourCompanyMobile,
    desktop: ourCompanyDesktop
  },
  ourServices: {
    mobile: ourServicesMobile,
    desktop: ourServicesDesktop
  },
  whereAreWe: {
    mobile: whereAreWeMobile,
    desktop: whereAreWeDesktop
  },
  whyUs: {
    mobile: whyUsMobile,
    desktop: whyUsDesktop
  }
};

export function getHeaderBackgroundImageByRoute(route) {
  switch (route) {
    case '/':
      return headerBackgroundsImages.homeBackground
    case '/our-services':
      return headerBackgroundsImages.ourServices
    case '/our-company':
      return headerBackgroundsImages.ourCompany
    case '/our-company/why-us':
      return headerBackgroundsImages.whyUs
    case '/our-company/where-are-we':
      return headerBackgroundsImages.whereAreWe
    default:
      return headerBackgroundsImages.injuryCare
  }
}