function readHTMLtags(htmlCode) {
  const tags = new Set(htmlCode.match(/(?<=<)\w+/g).sort());
  const tagsStringShape = [...tags].join(';');
  console.log(tagsStringShape);
}
