const getLangFromReq = (req: any = {}) => {
  const headers = req.headers || {};
  const acceptLanguage = headers["accept-language"];
  return acceptLanguage && acceptLanguage.length > 0
    ? acceptLanguage.split(",")[0]
    : "en";
};

export default getLangFromReq;
