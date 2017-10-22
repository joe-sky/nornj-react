export default function (callback) {
  const doc = document;
  if (doc.addEventListener) {
    doc.addEventListener("DOMContentLoaded", callback, false);
  }
  else {
    self.attachEvent("onload", callback);
  }
}