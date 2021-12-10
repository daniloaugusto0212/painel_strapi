module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '735bd48382413f6220526a08b18ffff7'),
  },
});
