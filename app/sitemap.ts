import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://meishiou.com.tw"
  const languageAlternates = {
    "zh-TW": `${baseUrl}/`,
    en: `${baseUrl}/en`,
    ja: `${baseUrl}/ja`,
    ko: `${baseUrl}/ko`,
    "x-default": `${baseUrl}/`,
  }

  const routes = [
    "",
    "/booking",
    "/rooms",
    "/space",
    "/yilan",
    "/en",
    "/ja",
    "/ko",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === ""
        ? 1
        : route === "/en" || route === "/ja" || route === "/ko"
          ? 0.9
          : 0.8,
    ...(route === "" || route === "/en" || route === "/ja" || route === "/ko"
      ? { alternates: { languages: languageAlternates } }
      : {}),
  }))
}
