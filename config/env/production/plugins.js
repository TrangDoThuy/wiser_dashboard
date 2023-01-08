module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 8,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'dvvtuabgp',
      api_key: '785958975447736',
      api_secret: 'e8LSUMnRQRVDcOFNpc2GHoyplGU',
    },
  },
});
