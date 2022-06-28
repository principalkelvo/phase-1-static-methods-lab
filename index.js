class Formatter {
  //add static methods here
  static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
 
  }
  static sanitize(string){
      return string.replace(/[^a-zA-Z0-9-_ ']/g, '');
  }
  static titleize(string){
    // return string.replace(/\w\S*/g, (txt) => {
    //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //   });
      const 
  strs = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']),
  res = string
    .split(" ")
    .map((w) =>
      strs.has(w.toLowerCase())
        ? w.toLowerCase()
        : w[0].toUpperCase() + w.slice(1).split().map((c) => c.toLowerCase())
    )
    .join(" ");
    return res.charAt(0).toUpperCase() + res.slice(1);
    }
}
