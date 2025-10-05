module.exports = {
  apps: [
    {
      name: "nomaran",
      script: "npm",
      args: "run start",
      cwd: "/home/amletixq/nomaran",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
