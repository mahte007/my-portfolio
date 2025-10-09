import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createNextIntlPlugin from "next-intl/plugin";


const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withNextIntl(withVanillaExtract(nextConfig));
