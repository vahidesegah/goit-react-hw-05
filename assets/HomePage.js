import { r as t, j as e } from "./index.js";
import { M as d } from "./MovieList.js";
import { f } from "./api.js";
const m = "_container_ony4a_1",
  h = "_title_ony4a_5",
  r = { container: m, title: h },
  j = () => {
    const [s, a] = t.useState([]),
      [c, o] = t.useState(!1),
      [n, l] = t.useState(null);
    return (
      t.useEffect(() => {
        (async () => {
          try {
            o(!0);
            const i = await f();
            a(i);
          } catch {
            l("Failed to fetch trending movies");
          } finally {
            o(!1);
          }
        })();
      }, []),
      e.jsxs("div", {
        className: r.container,
        children: [
          e.jsx("h2", { className: r.title, children: "Trending today" }),
          c && e.jsx("div", { children: "Loading..." }),
          n && e.jsx("div", { children: n }),
          s.length > 0 && e.jsx(d, { movies: s }),
        ],
      })
    );
  };
export { j as default };
