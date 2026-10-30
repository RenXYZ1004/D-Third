export default function manifest() {
  return {
    name: "D’THIRD — Visual Stories",
    short_name: "D’THIRD",
    description: "Independent films and visual stories by D’THIRD.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#171715",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
