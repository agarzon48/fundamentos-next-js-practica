/** @type {import('next').NextConfig} */
import bundleAnalizer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalizer({
  enabled: false,
});

const nextConfig = withBundleAnalyzer({
  // Configuraciones previas
});

export default nextConfig;
