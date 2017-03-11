module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "GRAPHQL",
      script    : "graphql.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "mysql01.dimatit.com",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/home/www/production",
      "pre-setup" : "apt-get install git",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
    },
    dev : {
      user : "root",
      host : "mysql01.dimatit.com",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/home/www/development",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
