# KNIT Events Website

This website serves as the single location to promote information about FABRIC's KNIT events, which are held twice a year.

This website is a React application based off of [RENCI/react-starter](https://github.com/renci/react-starter).

## 🚀 Getting Started

### 🚧 Application Development

With Node > 18.13.2 installed, install the dependencies with `npm i`, and start a local development server with `npm start`.

### 🎁 Building for Production

To build a production-ready bundle, run `npm run build` from the project root directory. The bundled files will be exported to the `dist` directory. To build an easily debuggable production build, use `npm run build-dev`.

#### Docker

A Dockerfile lives in this repo to help get started with containerized deployment.
It is a multi-stage build that results in an bitnami/NGINX image that only serves this application.
Note that the resulting image is Sterling-ready.

The command to build an image might look something like the following.
```
docker build -t knit-website .
```

To spin up a container from your image, use a command such as the following.
```
docker run --rm -p 80:8080 knit-website
```

## Content Management

Content for this site is located in the src directory in a content folder. The content is formatted using mdx, and utilizes [markdown formatting](https://www.markdownguide.org/basic-syntax/). 

```plaintext
.
└── src
    ├── content
        ├── cfp.mdx
        ├── home.mdx
        ├── registration.mdx
        └── travel.mdx
```

To update the content, ensure you are on the `content` branch via the dropdown menu, or, click this [link](https://github.com/fabric-testbed/knit-website/tree/content/src/content)).

![Screenshot 2024-08-15 at 1 22 19 PM](https://github.com/user-attachments/assets/94b0a507-766d-4dbe-a417-46a65a6ef78c)

Then, navigate on the github UI to the file you'd like to change. Find the edit icon (pencil) and edit the text directly in the text editor. 

![Screenshot 2024-08-15 at 1 21 22 PM](https://github.com/user-attachments/assets/e7a1c2bb-229b-4143-b3d8-2d66a10ffa55)

When you're changes are complete, click the "Commit changes ... " button. This will open a dialog box that will prompt you to write a commit message, optional description, email address, and the option to choose one of the following options:

 - Commit directly to the `content` branch
 - Create a **new branch** for this commit and start a pull request

Please select the second option (Create a new branch for this commit and start a pull request). Our team will be notified of the pull request and will review and merge the requested changes. Or, you can contact a developer who can review and merge the changes based on your timeline and needs.

