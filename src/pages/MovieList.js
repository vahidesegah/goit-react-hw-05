import { g as y, a as m, j as s, L as u } from "../pages/index.js";
var i = { exports: {} },
  h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  T = h,
  f = T;
function a() {}
function c() {}
c.resetWarningCache = a;
var _ = function () {
  function e(v, P, O, b, k, l) {
    if (l !== f) {
      var n = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((n.name = "Invariant Violation"), n);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: c,
    resetWarningCache: a,
  };
  return (r.PropTypes = r), r;
};
i.exports = _();
var d = i.exports;
const o = y(d),
  x = "_list_1polx_1",
  R = "_link_1polx_11",
  p = { list: x, link: R },
  g = ({ movies: e }) => {
    const t = m();
    return s.jsx("ul", {
      className: p.list,
      children: e.map((r) =>
        s.jsx(
          "li",
          {
            children: s.jsx(u, {
              to: `/movies/${r.id}`,
              state: { from: t },
              className: p.link,
              children: r.title,
            }),
          },
          r.id
        )
      ),
    });
  };
g.propTypes = {
  movies: o.arrayOf(
    o.shape({ id: o.number.isRequired, title: o.string.isRequired })
  ).isRequired,
};
export { g as M };
