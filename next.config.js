/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/api/movies/:mode/:params',
  //       destination: `https://api.themoviedb.org/3/movie/:mode?api_key=${
  //         process.env.NEXT_PUBLIC_API_KEY
  //       }${encodeURIComponent('&')}:params`,
  //       permanent: false,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: '/api/movies/:mode/:params',
        destination: `https://api.themoviedb.org/3/movie/:mode?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }${encodeURIComponent('&')}:params`,
      },
    ];
  },
};

module.exports = nextConfig;
