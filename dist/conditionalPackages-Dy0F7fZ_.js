async function s(t) {
  try {
    return await import(t), !0;
  } catch {
    return !1;
  }
}
const n = async () => {
  let t = !1, a = [], e = {};
  if (t = await s("typescript"), await s("jest"), t) {
    const { tsLintConfig: i } = await import("./ts-CiBFLphe.js");
    a = i;
  }
  {
    const { jestConf: i } = await import("./jest-CMIk9Y97.js");
    e = i;
  }
  return {
    jestConfigs: e,
    tsConfigs: a
  };
};
export {
  n as getConditionalPackages
};
