//Browser
const defaultBaseURL =
  "https://jigsaw.minhabiblioteca.com.br/books/9786555763195/epub/OEBPS/images/";

let urls;

const allImgTags = document.querySelectorAll("img");
const arrImg = Array.from(allImgTags);
const sources = arrImg.map((e) => e.src.split("/").pop());
urls = [...new Set(sources)];
