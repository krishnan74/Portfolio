/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The old placeholder /about page now lives as a section on the home page.
    return [{ source: "/about", destination: "/#about", permanent: true }];
  },
};

module.exports = nextConfig;
