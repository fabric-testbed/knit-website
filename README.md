# KNIT Events Website

This website serves as the single location to promote information about FABRIC's KNIT events, which are held twice a year.

This website is a React application based off of [https://github.com/renci/react-starter].

### 🚀 Getting Started

### 🚧 Application Development

With Node > 18.13.2 installed, install the dependencies with `npm i`, and start a local development server with `npm start`.

### 🎁 Building for Production

To build a production-ready bundle, run `npm run build` from the project root directory. The bundled files will be exported to the `dist` directory. To build an easily debuggable production build, use `npm run build-dev`.

#### Docker

A Dockerfile lives in this repo to help get started with containerized deployment.
It is a multi-stage build that results in an bitnami/NGINX image that only serves this application.
Note that this Dockerfile is Sterling-ready.

The command to build an image might look something like the following.
```
docker build -t knit-website .
```

To spin up a container from your image, use a command such as the following.
```
docker run --rm -p 80:8080 knit-website
```
