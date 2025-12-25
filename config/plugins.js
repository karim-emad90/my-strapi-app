module.exports = ({ env }) => ({
 upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dw0ikxwux"),
        api_key: env("643692664488691"),
        api_secret: env("6GfyoSb6xbqEdSh2zi_MwGCS5Vo"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});