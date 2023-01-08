module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env(
        'ADMIN_JWT_SECRET',
        'AUAKyFUDQrnyDM91auU/vfnaGXJX0KmXOEdSe2V9GlPbM+jh5fK7wfg1P8DV36oQRL3gyW20Nam5BtJ9l9QGAw=='
      ),
    },
  },
});
