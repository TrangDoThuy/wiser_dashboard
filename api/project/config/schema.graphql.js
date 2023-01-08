module.exports = {
  definition: /* GraphQL */ `
    extend type Project {
      note: Float
      noteDetails: [ProjectNote!]!
    }
    type ProjectNote {
      note: Int
      count: Int
    }
  `,
};
