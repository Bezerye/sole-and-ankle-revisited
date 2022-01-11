export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    500: '196deg 4% 60%',
    300: '190deg 5% 80%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
}

export const QUERIES = {
  phone : `(max-width: ${ BREAKPOINTS.phone / 16 }rem)`,
  tablet : `(max-width: ${ BREAKPOINTS.tablet / 16 }rem)`,
  laptop : `(max-width: ${ BREAKPOINTS.laptop / 16 }rem)`
}