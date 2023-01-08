module.exports = {
  find: async (ctx) => {
    let projects;

    if (ctx.query._q) {
      projects = await strapi.api.project.services.project.search(ctx.query);
    } else {
      projects = await strapi.api.project.services.project.find(ctx.query);
    }

    projects = await Promise.all(
      projects.map(async (project) => {
        project.note = 5;
        return project;
      })
    );

    return projects;
  },

  findOne: async (ctx) => {
    const { id } = ctx.params;
    let project = await strapi.api.project.services.project.findOne({ id });

    if (!project) {
      return ctx.notFound();
    }

    return project;
  },
};
