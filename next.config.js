module.exports = {
  // other next config
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en"
  },
  env: {
    SPREADSHEET_ID: "1egPbT0CH4xi_CERO_3rve8JryPpdRfIEZZNl4M0fHow",
    SHEET_ID: "0",
    CLIENT_EMAIL: "idf-320@airy-gamma-312614.iam.gserviceaccount.com",
    PRIVATE_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCYVkaZPjkjfkuF\nyuoeAQAkYlbFtNqRXJYbP7HcQmD3JXiLJHHY4YwlJG7J+5nMZ7NW0Nk0a9W2C0t/\n+Ekg3UFCJK2+eE94bokj3r2bhOIsmUh5KOk0SR8JEN07iazIH2GtlqmxoG/KRZmf\nDZZYf4op0xWsDRf9hNCQ0XHKPwtcWmjzltZgcmfLN/LlirEaPCzlFBFbZOw0zRLj\n1e9cwWn4E9NDZbqWBS2yinBGiUqjSsX8IBDK7FHnApPboyOClLtaxjlnXZwW4NvL\nDuUPmQFNTycqNAcuJjGx1rWU65l4Lhz1IaO16h8P7wcqjgyw27mQEWdM9KkDKmg4\nGo1YJ62LAgMBAAECggEAFW6gn3NjTedj2rPx/OdTzMqlE0sJgRqkkmWDXCNenwbU\n5HFBLyvfBWQQeOGpVq+0Sd+M33+DDAn0xPv6gIwrCpI8e31TuPQxiSwPmFoOtArw\nvlMPfugBXMt+70nEVvd195p9z1wXaOl33n+735bkqlO59dXLF+41UFqXMXFt42qB\nPQE5zg/Zwq73cO4tFVTwW5f+cwoJYZgA4MGvfMPyW7emywCt1Vt2HiPSJ1wgmTWv\ncpV4y3pDtSi+7UsYZGLo6KyWb1Awo7SswZJLM/fiFhR+2r9WWAv5dsuaTqo5sFqs\n+6uxmfnlnaK4jeQwrOBCz0aOJZL6fiiI50qXY2PVaQKBgQDPdZLUyo3Oq9nK+0yA\nG8plxPG3mIWzsXJ8ivoG0/AY9wWhkWVWXIfyi8O3irM1CsJkRvZpcPKOJIIamVwt\n7MXa9XJdKuC/qW0a4JpvQVmxT/nXg2+1HcEgbSPAaPkNh5x7Ya89A5wBZ9TAxtCV\nIYmc/BXXCj0QjGAA3LzBznhf/wKBgQC7+vslML8TDOSw6LU/AqCGE5WCHJgTa6HR\nh5cEbOupZddTfD7DzukmCveK18c9ms0zkIGaEnO631+zHDhrWYqAmb4rG/6zD53/\nqEMvHl+4vNaRJqL4+/Ed9pX1j+w02nxc/yoagDHJ5Oqiejo1G5cDjnAnhOxdfOqn\nxqBUB5wydQKBgQCc0GCWnC0opVnRRrcCtv78giu7/XxC4cSKQ3rOonEATehhwkd5\nSiQwwFjGaf8f/uwFZGZqOUf/DbWSaY314N2FrrYtmnWcKnMgN9pEcn9bufo+X0mW\n+9C5tAWsMSzgfztXP/V4BzxrC5MTzLRppZohoaLYkxKpaZI/1JqRXII8/QKBgA8j\nkWJXYKwKF8jflOk0LvVdUmceImk9+9RCFTl4BCqqVwMUOIHQghpcO79kzVj6xJfo\nhWeBIOzl3HEyTqDmny7oMtaJ9KM7GMBkLrT2v0LDgoxCDlH7CFofZ8hVBPLkvatH\nqX5k4J2f3/2h1lo8lJbmu8WTAO4uhz9n0bWyvzOZAoGBAJGRq1BfNAH3nF1/2i1g\nXHxb+Vq0ABZiTGWKsUR+h2gZDWDgVH62p6cdI7CqXXKubw65CQfs4i0srE/Yj8ms\nsny4TZBl1SUKQQXL3qD6Jz9cNtY821anseJakx3yOFKHEgsuusDNJCfFCo0+Maq1\nPCqrOn6HJvWMvWvNCp10SQ5C\n-----END PRIVATE KEY-----\n"
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: "empty",
      child_process: "empty",
      net: "empty",
      tls: "empty"
    };

    return config;
  }
};
