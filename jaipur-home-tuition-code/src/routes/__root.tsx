import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary hover:btn-primary-hover">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary hover:btn-primary-hover"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jaipur Home Tuition — Best Home Tutors in Jaipur for Science, Maths & PCM" },
      { name: "description", content: "Best home tuition in Jaipur. Experienced, verified home tutors for Class 1–12, CBSE/RBSE/ICSE, Science, Maths, PCM & competitive exams. Book a free demo today." },
      { name: "keywords", content: "best home tuition in jaipur, home tutor jaipur, home tuition jaipur, maths tutor jaipur, science tutor jaipur, PCM home tuition jaipur, CBSE tutor jaipur, RBSE tuition jaipur" },
      { name: "author", content: "Jaipur Home Tuition" },
      { property: "og:title", content: "Jaipur Home Tuition — Best Home Tutors in Jaipur for Science, Maths & PCM" },
      { property: "og:description", content: "Best home tuition in Jaipur. Experienced, verified home tutors for Class 1–12, CBSE/RBSE/ICSE, Science, Maths, PCM & competitive exams. Book a free demo today." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jaipur Home Tuition" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#ff6b1a" },
      { name: "twitter:title", content: "Jaipur Home Tuition — Best Home Tutors in Jaipur for Science, Maths & PCM" },
      { name: "twitter:description", content: "Best home tuition in Jaipur. Experienced, verified home tutors for Class 1–12, CBSE/RBSE/ICSE, Science, Maths, PCM & competitive exams. Book a free demo today." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f356bc2-e8a8-4de8-9a0d-b97569f08813/id-preview-f954e592--79441682-5f3e-4ca7-9d3f-b7428505c3b2.lovable.app-1780052909758.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f356bc2-e8a8-4de8-9a0d-b97569f08813/id-preview-f954e592--79441682-5f3e-4ca7-9d3f-b7428505c3b2.lovable.app-1780052909758.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Tiro+Devanagari+Sanskrit&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Jaipur Home Tuition",
          description: "Best home tuition service in Jaipur for Class 1–12, Science, Maths, PCM and competitive exams.",
          telephone: "+91-9982699530",
          email: "parveensony2001@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "H-75, Balaji Vihar, Hathoj Baag",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          areaServed: "Jaipur, Rajasthan",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
