# ʕ •́؈•̀) `Cloudflare Workers TS Template with a Router`

This is just used for quickly prototyping handlers with TS.

## 🔋 Getting Started

Update `wrangler.toml` with your information

```shell
yarn
yarn dev
wrangler preview
```

### 👩 💻 Developing

The router returns the specified request handler, and will return the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

### 🧪 Testing

This comes with mocha tests which simply test that the request handler can handle each request method. `yarn test` will run your tests.

### ✏️ Formatting

This uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `yarn format`.

### 👀 Previewing and Publishing

Github actions will automatically deploy anything pushed to `main`.

For information on how to preview and publish workers, please see the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## ⚠️ Caveats

The `service-worker-mock` used by the tests is not a perfect representation of the Cloudflare Workers runtime. It is a general approximation. We recommend that you test end to end with `wrangler dev` in addition to a [staging environment](https://developers.cloudflare.com/workers/tooling/wrangler/configuration/environments/) to test things before deploying.
