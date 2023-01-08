'use strict';

/**
 * Lifecycle callbacks for the `Project` model.
 */

module.exports = {
  lifecycles: {
    afterCreate(result, data) {
      strapi.services.history.create({
        action: 'create',
        contenttype: 'project',
        author: data.author_,
        before: {},
        after: result,
      });
    },
    async beforeUpdate(params, data) {
      const [previous_] = await strapi.services.project.find(params);
      data.previous_ = previous_;
    },
    afterUpdate(result, params, data) {
      strapi.services.history.create({
        action: 'update',
        contenttype: 'project',
        author: data.author_,
        before: data.previous_,
        after: result,
      });
    },
  },
};
