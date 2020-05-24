---
title: "{{header.title}} - Issue #{{header.issueNumber}}"
date: {{header.dateOfIssue}}
---

{% include newsletter-sponsor sponsorLink={{sponsorLink}} sponsorName={{sponsorName}} sponsorMessage={{sponsorMessage}}  %}

{{#each feeds}}
## {{this.title}}
{{#each items}}

### [{{this.title}}]({{this.link}})

Enter commentary Here.
{{/each}}
{{/each}}

{% include social-share.html %}

{% include newsletter-subscribe.html %}
