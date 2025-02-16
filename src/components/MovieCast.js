import { b as h, r, j as t } from "../pages/index.js";
import { g as f, b as d } from "../pages/api.js";
const I = "_castList_rmt33_1",
  g = "_castItem_rmt33_9",
  u = "_castImage_rmt33_13",
  x = "_castInfo_rmt33_21",
  N = "_actorName_rmt33_25",
  p = "_character_rmt33_30",
  j = "_error_rmt33_35",
  C = "_noCast_rmt33_40",
  a = {
    castList: I,
    castItem: g,
    castImage: u,
    castInfo: x,
    actorName: N,
    character: p,
    error: j,
    noCast: C,
  },
  E = () => {
    const { movieId: c } = h(),
      [o, l] = r.useState([]),
      [_, n] = r.useState(!1),
      [m, i] = r.useState(null);
    return (
      r.useEffect(() => {
        (async () => {
          try {
            n(!0), i(null);
            const e = await d(c);
            l(e);
          } catch {
            i("Failed to fetch cast information");
          } finally {
            n(!1);
          }
        })();
      }, [c]),
      _
        ? t.jsx("div", { children: "Loading..." })
        : m
        ? t.jsx("div", { className: a.error, children: m })
        : o.length === 0
        ? t.jsx("div", {
            className: a.noCast,
            children: "No cast information available.",
          })
        : t.jsx("ul", {
            className: a.castList,
            children: o.map((s) =>
              t.jsxs(
                "li",
                {
                  className: a.castItem,
                  children: [
                    t.jsx("img", {
                      src: f(s.profile_path),
                      alt: s.name,
                      className: a.castImage,
                      onError: (e) => {
                        e.target.src =
                          "https://via.placeholder.com/200x300?text=No+Image";
                      },
                    }),
                    t.jsxs("div", {
                      className: a.castInfo,
                      children: [
                        t.jsx("p", {
                          className: a.actorName,
                          children: s.name,
                        }),
                        t.jsxs("p", {
                          className: a.character,
                          children: ["Character: ", s.character],
                        }),
                      ],
                    }),
                  ],
                },
                s.id
              )
            ),
          })
    );
  };
export { E as default };
