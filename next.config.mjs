const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];

    const contentSecurityPolicy = process.env.NODE_ENV === "production"
      ? [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-src 'none'",
          "frame-ancestors 'none'",
          "form-action 'self' mailto:",
          "img-src 'self' data: blob:",
          "font-src 'self' data:",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline'",
          "connect-src 'self'",
          "manifest-src 'self'",
          "worker-src 'self' blob:",
        ].join("; ")
      : "frame-ancestors 'none'";
    securityHeaders.push({ key: "Content-Security-Policy", value: contentSecurityPolicy });

    if (process.env.VERCEL_ENV === "production") {
      securityHeaders.push({
        key: "Strict-Transport-Security",
        value: "max-age=31536000",
      });
    }

    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
