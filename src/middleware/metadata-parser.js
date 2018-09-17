const metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-date")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-clearbit-logo")(),
  require("metascraper-publisher")(),
  require("metascraper-title")(),
  require("metascraper-url")()
]);

const got = require("got");

const parseMetadata = async link => {
  try {
    const { body: html, url } = await got(link);

    const metadata = await metascraper({ html, url });

    return metadata;
  } catch (error) {
    throw error;
  }
};

export { parseMetadata };
