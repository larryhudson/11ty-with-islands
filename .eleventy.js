module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "is-land.js",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
