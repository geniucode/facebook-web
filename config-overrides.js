import { alias } from 'react-app-rewire-alias';

export default function override(config) {
  alias({
    // '@core': 'src/core',
    // '@features': 'src/features',
    // '@pages': 'src/pages',
    // '@shared': 'src/shared'
  })(config);

  return config;
};