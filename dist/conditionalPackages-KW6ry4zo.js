async function e(t) {
  try {
    return await import(t), !0;
  } catch {
    return !1;
  }
}
const n = async () => {
  let t = !1, a = [], i = {};
  if (t = await e("typescript"), await e("jest"), t) {
    const { tsLintConfig: s } = await import("./ts-CiBFLphe.js");
    a = s;
  }
  return i = await import("./jest-EcSTuD7h.js"), {
    jestConfigs: i,
    tsConfigs: a
  };
};
export {
  n as getConditionalPackages
};
