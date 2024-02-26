import homeBackground from '../assets/hero-image.png'

export function getHeaderBackgroundImageByRoute(route) {
  switch (route) {
    case '/':
      return homeBackground;
    case '/our-services':
      return 'path_to_our_services_background_image.jpg';
    case '/our-company':
      return 'path_to_our_company_background_image.jpg';
    case '/our-company/why-us':
      return 'path_to_why_us_background_image.jpg';
    case '/our-company/where-are-we':
      return 'path_to_where_are_we_background_image.jpg';
    default:
      return 'default_background_image.jpg';
  }
}