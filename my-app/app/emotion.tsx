// "use client";
// import { CacheProvider } from "@emotion/react";
// import { useEmotionCache, MantineProvider } from "@mantine/core";
// import { useServerInsertedHTML } from "next/navigation";

// export default function RootStyleRegistry({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const cache = useEmotionCache();
//   cache.compat = true;

//   useServerInsertedHTML(() => (
//     <style
//       data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
//       dangerouslySetInnerHTML={{
//         __html: Object.values(cache.inserted).join(" "),
//       }}
//     />
//   ));

//   return (
//     <CacheProvider value={cache}>
//       <MantineProvider withGlobalStyles withNormalizeCSS>
//         {children}
//       </MantineProvider>
//     </CacheProvider>
//   );
// }

'use client'
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@emotion/cache";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
  }) {
  const cacheOptions = { key: "netflirt-dating-application-cache" };
  const cache = createEmotionCache(cacheOptions);


  return (
    <CacheProvider value={cache}>
      {children}
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    </CacheProvider>
  );
}
