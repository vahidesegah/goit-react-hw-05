import { b as h, r, j as e } from "../pages/index.js";
import { c as w } from "./api.js";
const m = "_reviewsList_15u2l_1",
  d = "_reviewItem_15u2l_6",
  _ = "_author_15u2l_15",
  f = "_content_15u2l_21",
  x = "_error_15u2l_26",
  R = "_noReviews_15u2l_31",
  s = {
    reviewsList: m,
    reviewItem: d,
    author: _,
    content: f,
    error: x,
    noReviews: R,
  },
  L = () => {
    const { movieId: i } = h(),
      [o, u] = r.useState([]),
      [v, n] = r.useState(!1),
      [a, c] = r.useState(null);
    return (
      r.useEffect(() => {
        (async () => {
          try {
            n(!0), c(null);
            const l = await w(i);
            u(l);
          } catch {
            c("Failed to fetch reviews");
          } finally {
            n(!1);
          }
        })();
      }, [i]),
      v
        ? e.jsx("div", { children: "Loading..." })
        : a
        ? e.jsx("div", { className: s.error, children: a })
        : o.length === 0
        ? e.jsx("div", {
            className: s.noReviews,
            children: "We don't have any reviews for this movie.",
          })
        : e.jsx("ul", {
            className: s.reviewsList,
            children: o.map((t) =>
              e.jsxs(
                "li",
                {
                  className: s.reviewItem,
                  children: [
                    e.jsxs("h3", {
                      className: s.author,
                      children: ["Author: ", t.author],
                    }),
                    e.jsx("p", { className: s.content, children: t.content }),
                  ],
                },
                t.id
              )
            ),
          })
    );
  };
export { L as default };
