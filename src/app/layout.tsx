// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import ReactQueryProvider from "@/components/ReactQueryProvider";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "Course Enrollment",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={{ primaryColor: "violet" }}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
