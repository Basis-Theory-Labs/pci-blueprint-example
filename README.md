# PCI Blueprint Example

Payment Card Industry Data Security Standard (PCI DSS) are a set of compliance requirements that must be met in order to collect, store, and process cardholder data. To fully implement these requirements is both costly and time intensive.

The Basis Theory PCI Blueprint will provide you with a guide to meet 95% of the compliance requirements of PCI in as little as ***5 minutes***.

This example application has implemented Basis Theory Elements and Proxy 

## Create Environment variables

Create a `.env.local` file with your secrets

```
NEXT_PUBLIC_BASIS_THEORY_PUBLIC_KEY=
BASIS_THEORY_PRIVATE_KEY=
```

Copy the values you created for `NEXT_PUBLIC_BASIS_THEORY_PUBLIC_KEY` from [Step 2](../02-add-elements/).

## Create a Public Application
To start, you'll need a new [Public Application](https://docs.basistheory.com/api-reference/#applications) using our PCI compliant template `Collect PCI Data` to be able to securely collect cardholder data. [Click here to create one.](https://portal.basistheory.com/applications/create?application_template_id=db9148c1-a55f-4164-b830-a20ab6d720ae)

Copy the API KEY to the `.env.local` file as the `NEXT_PUBLIC_BASIS_THEORY_PUBLIC_KEY` value.

## Create a Private Application
Next, you need a new [Private Application](https://docs.basistheory.com/api-reference/#applications) using our PCI compliant template `Use PCI Tokens` to be able to securely send cardholder data via the [Basis Theory Proxy](https://developers.basistheory.com/concepts/what-is-the-proxy/). [Click here to create one.](https://portal.basistheory.com/applications/create?application_template_id=31efed55-035c-4b49-b1a1-609a728d91ce)

Copy the API KEY to the `.env.local` file as the `BASIS_THEORY_PRIVATE_KEY` value.

## Running

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Key Integration Spots

| File                                          | Description                                                              |
| --------------------------------------------- | ------------------------------------------------------------------------ |
| [`pages/index.js`](./pages/index.js)          | Initialize Basis Theory Elements                                         |
| [`pages/card-form.js`](./pages/card-form.js) | Card form using CardElement and tokenizing the collected cardholder data |
| [`pages/api/proxy.js`](./pages/api/proxy.js)  | Outbound call to using Basis Theory Proxy                                |