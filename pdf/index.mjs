import { readdir, writeFile } from "fs/promises";
import puppeteer from "puppeteer";

(async () => {
  const files = await readdir("../html/", { withFileTypes: true });
  const htmlFiles = files
    .filter((e) => e.name.endsWith(".html"))
    .map((e) => e.name);
  console.log(htmlFiles);
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });

  const file = "10.pdf";

  browser.newPage().then((page) => {
    page.setViewport({ width: 2482, height: 3508 }).then(() => {
      page
        .goto("file:///C:/Users/gusta/repos/book-test/html/" + file)
        .then(() => {
          page
            .pdf()
            .then((e) =>
              writeFile("./" + file.split(".")[0] + ".pdf", e).then(() =>
                console.log("Ok")
              )
            );
        });
    });
  });

  await browser.close();
})();
