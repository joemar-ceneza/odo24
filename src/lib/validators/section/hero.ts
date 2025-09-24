import { SectionBase, SectionWithCTA } from "./common";

/**
 * Hero section configuration - typically the first section on a page
 * Used for capturing attention with primary message and action
 *
 * @example
 * {
 *   title: "Transform Your Business",
 *   subText: "Discover how our solutions can help you grow",
 *   cta: {
 *     ctaLabel: "Get Started",
 *     ctaUrl: "/contact"
 *   }
 * }
 */
export interface HeroSection extends SectionBase, SectionWithCTA {}
