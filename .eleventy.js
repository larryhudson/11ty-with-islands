module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "is-land.js",
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/lite-youtube-embed/src": "web-components/lite-youtube-embed",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
