const Config = require('./Config');
const Feed = require('./Feed');
const Email = require('./Email');
const stampit = require('stampit');

const RssToEmail = stampit({
  props: {
    config: undefined,
    resolvedFeeds: undefined,
    email: undefined,
    defaultFormat: 'html',
  },
  init(options) {
    this.config = Config(options);
  },
  methods: {
    async generateEmail() {
      // Create an array of resolved feeds
      this.resolvedFeeds = await this.resolveFeeds(this.config.feeds);

      // Generate Email
      this.email = Email({config: this.config, feeds: this.resolvedFeeds});

      return this;
    },

    async getEmail(format) {
      this.email || await this.generateEmail();
      return this.email.get(format || this.defaultFormat);
    },

    resolveFeeds(feeds) {
      return Promise.all(feeds.map(this.resolveFeed));
    },

    resolveFeed(feedConfig) {
      return Feed({ feedConfig }).resolve();
    }
  }
});

module.exports = RssToEmail;