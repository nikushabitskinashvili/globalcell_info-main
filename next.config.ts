import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({});

export default withNextIntl({
  output: "export",
  images: { unoptimized: true },
  distDir: "dist",
});
