const Parser = require('rss-parser');
const stampit = require('stampit');
const fs = require('fs');

/**
 * Cleans an item
 * @param {Object} item
 * @return {Object}
 */
function cleanItem(item, itemDescription) {
  console.log(itemDescription);
  const cleanedItem = Object.assign({}, item);
  cleanedItem.title = item.title.replace(/\bhttps?:\/\/\S+/gi, '');
  cleanedItem.description = itemDescription;
  return cleanedItem;
}

const Feed = stampit({
  props: {
    config: undefined,
    parser: undefined,
    items: undefined,
    url: undefined,
    title: undefined,
    description: undefined,
  },

  /**
   * Creates a new Feed from a feed configuration object
   * @param { Object } Feed configuration object
   * @return { void }
   */
  init({ feedConfig }) {
    this.config = feedConfig;
    this.parser = new Parser(feedConfig.parserOptions || {});
  },

  methods: {
    /**
     * Promises a feed with items embedded
     * @return { Promise<Feed> }
     */
    async resolve() {
      const feedObject = await this.parser.parseURL(this.config.url);

      const itemDescription = JSON.parse(fs.readFileSync(this.config.dataFile, 'utf8'));

      this.items = feedObject.items.map((item,index) => cleanItem(item,itemDescription[index]));
      this.applyFilters();
      this.title = this.config.title || feedObject.title;
      this.description = this.config.description || feedObject.description;
      this.url = this.config.url || feedObject.feedUrl;      

      return this;
    },

    /**
     * Apply filters to the items in this object
     * @return {void}
     */
    applyFilters() {
      if (this.items) {
        // Filter by published since
        if (this.config.publishedSince) {
          this.items = this.items
            .filter(item => new Date(item.isoDate) >= new Date(this.config.publishedSince));
        }

        // Apply limit
        if (this.config.limit) {
          this.items = this.items.slice(0, this.config.limit);
        }
      }
    },

  },
});

module.exports = Feed;
