async function s(t) {
  try {
    return await import(t), !0;
  } catch {
    return !1;
  }
}
const l = async () => {
  let t = !1, a = !1, i = [], e = {};
  if (t = await s("typescript"), a = await s("jest"), t) {
    const { tsLintConfig: n } = await import("./ts-CiBFLphe.js");
    i = n;
  }
  return a && (e = await import("./jest-EcSTuD7h.js")), {
    jestConfigs: e,
    tsConfigs: i
  };
};
export {
  l as getConditionalPackages
};
