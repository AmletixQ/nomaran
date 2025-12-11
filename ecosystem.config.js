module.exports = {
  apps: [
    {
      name: "nomaran",
      script: "npm",
      args: "run start",
      cwd: "/home/amletixq/nomaran",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
