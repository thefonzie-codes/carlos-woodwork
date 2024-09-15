import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      strict: false // Disable strict mode to ignore dynamic routes
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '/carlos-woodwork' : '',
    }
  }
};
