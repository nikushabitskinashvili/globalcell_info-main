import { getRequestConfig } from "next-intl/server";
import { useTranslation } from ".";

export default getRequestConfig(async ({ requestLocale }) => {
  const { locale } = useTranslation();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
