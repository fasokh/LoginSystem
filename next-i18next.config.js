module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
