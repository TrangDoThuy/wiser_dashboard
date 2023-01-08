'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK] [YEAR (optional)]
 */

module.exports = {
  '*/1 * * * * *': async () => {
    const draftProjects = await strapi.services.project.find({
      _publicationState: 'preview',
      publish_at_lt: new Date(),
    });

    draftProjects.forEach(project => {
      strapi.services.project.update({id: project.id}, {
        published_at: new Date(),
        publish_at: null
      })
    });
  }
};
