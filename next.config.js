/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The full project list used to live at /projects.
    return [{ source: "/projects", destination: "/work", permanent: true }];
  },
};

module.exports = nextConfig;
