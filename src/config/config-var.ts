import * as process from 'process';

export const configVar = () => ({
    NODE_ENV: process.env.NODE_ENV,
    PORT: Number(process.env.PORT) || 3000,
    NODE_NAME: process.env.NODE_NAME,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    REDIS_CONNECTION_STRING: process.env.REDIS_CONNECTION_STRING,
    GITHUB_APP_URL: process.env.GITHUB_APP_URL,
    GITHUB_APP_ID: process.env.GITHUB_APP_ID,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AWS_SQS_QUEUE_URL: process.env.AWS_SQS_QUEUE_URL,
    GITHUB_CODE_VERSION_MANAGER_ID:
        process.env.GITHUB_CODE_VERSION_MANAGER_ID ||
        '2d20e769-416e-422a-920c-97eb1f71946a',
    GITLAB_CODE_VERSION_MANAGER_ID:
        process.env.GITLAB_CODE_VERSION_MANAGER_ID ||
        'b7f66709-69e4-4b6a-98ad-75253129a8d8',
    BITBUCKET_CODE_VERSION_MANAGER_ID:
        process.env.BITBUCKET_CODE_VERSION_MANAGER_ID ||
        '8766c2b0-ea6b-45c2-8b39-ad0513c36a7d',
    AWS_SQS_REGION: process.env.AWS_SQS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
});