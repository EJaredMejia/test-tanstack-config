import { publish } from "@tanstack/publish-config";

publish({
  branchConfigs: {
    main: {
      prerelease: false,
    },
    beta: {
      prerelease: true,
    },
  },
  packages: [
    {
      name: "@jared-m/tanstack-config",
      packageDir: "./",
    },
  ],
  rootDir: "./",
  branch: process.env.BRANCH,
  tag: process.env.TAG,
  ghToken: process.env.GH_TOKEN,
})
  .then(() => {
    console.log("Successfully published packages!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
