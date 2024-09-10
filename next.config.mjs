import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'opf.org.in',
      'jssaherstoragenew.blob.core.windows.net',
      'azpireeducations.com',
      'via.placeholder.com',
      'lh3.googleusercontent.com',
      'lh6.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'firebasestorage.googleapis.com'
    ],
  },
};

export default pwaConfig(nextConfig);