async function n(t) {
  try {
    return await import(t), !0;
  } catch {
    return !1;
  }
}
const l = async () => {
  let t = !1, a = !1, e = [], s = {};
  if (t = await n("typescript"), a = await n("jest"), t) {
    const { tsLintConfig: i } = await import("./ts.js");
    e = i;
  }
  if (a) {
    const { jestConf: i } = await import("./jest.js");
    s = i;
  }
  return {
    jestConfigs: s,
    tsConfigs: e
  };
};
export {
  l as getConditionalPackages
};
