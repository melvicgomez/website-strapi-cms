module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("ACCESS_KEY_ID"),
      secretAccessKey: env("ACCESS_SECRET"),
      region: env("REGION_NAME"),
      params: {
        Bucket: env("S3_BUCKET_NAME"),
      },
    },
  },
});
