// "use client";

// import * as Sentry from "@sentry/nextjs";
// import NextError from "next/error";
// import { useEffect } from "react";

// export default function GlobalError({
//   error,
// }: {
//   error: Error & { digest?: string };
// }) {
//   useEffect(() => {
//     Sentry.captureException(error);
//   }, [error]);

//   return (
//     <html lang="en">
//       <body>
//         {/* `NextError` is the default Next.js error page component. Its type
//         definition requires a `statusCode` prop. However, since the App Router
//         does not expose status codes for errors, we simply pass 0 to render a
//         generic error message. */}
//         <NextError statusCode={0} />
//       </body>
//     </html>
//   );
// }

"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="relative max-w-lg w-full px-6">
          {/* glow */}
          <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-purple-600 via-blue-500 to-cyan-400 blur opacity-30" />

          <div className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold">
                !
              </div>
              <h1 className="text-xl font-semibold tracking-tight">
                Nucleus encountered a fault
              </h1>
            </div>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Something unexpected disrupted the core process. The system is
              safe, but this view could not be rendered.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={reset}
                className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
              >
                Retry
              </button>

              <Link
                href="/"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/5 transition"
              >
                Go home
              </Link>
            </div>

            {process.env.NODE_ENV === "development" && (
              <details className="mt-6 text-xs text-white/60">
                <summary className="cursor-pointer select-none">
                  Technical details
                </summary>
                <pre className="mt-2 whitespace-pre-wrap wrap-break-word text-red-400">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
