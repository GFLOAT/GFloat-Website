# GFLOAT Website


## Description

This website is intended to provide information about the GFLOAT project, and it was built with [GatsbyJS](https://www.gatsbyjs.com/).

## Getting Started


## Development

Develop this site using Node ~18.0.0.
First clone this repo and install dependencies with `npm i`.
Spin up the development server on [http://localhost:8000](http://localhost:8000) with `npm start`. 

## Content Management

You will be able to access the content via an interactive GraphQL playground at [http://localhost:8000/__graphql](http://localhost:8000/__graphql) in your browser.
The content for this website lives as YAML files inside the `content`.

## Branding

- Fonts: Libre Franklin
- Colors: 
  - primary: #556270
  - secondary: #DC143C
- MUI components with theme and sx prop customization


## 🎁 Deployment

Build the application for production with `npm run build`. The `public` directory will contain the files bundled with Webpack. This assets in this bundle are what get copied into the release image, so it's a good idea to ensure that the result of build process is what's expected at this stage, before moving on to build Docker images.

#### Deploying to [Sterling](https://wiki.renci.org/index.php?title=Kubernetes_Cloud/Sterling).

Before doing anything, determine the next release version. Throughout this section, we'll assume the next version is `1.0.4`.

1. **Build.** Build a release image with the following command, executed from the project root.
```bash
docker build -t containers.renci.org/gfloat/gfloat-website:1.0.4 .
```
> Note: The version tag here, `1.0.4`, must match its occurrences elsewhere in these commands.

2. **Test.** Ensure a container can be spun up from your new image
```bash
docker run --rm -p 80:8080 containers.renci.org/gfloat/gfloat-website:1.0.4
```
The container should be running, and we should see the website in your browser at [http://localhost](http://localhost).

3. **Push.** Push the image to RENCI's image registry.
```bash
docker push containers.renci.org/gfloat/gfloat-website:1.0.4
```
> Note: If not already authenticated, log in with `docker login containers.renci.org`.

4. **Deploy.** Update the value of `image.tag` in the file `kubernetes/values.yaml` to match the image tag used in the Docker commands above. In our running example, the relevant part of `values.yaml` file would need to look like this.

```yaml
image:
  repository: containers.renci.org/gfloat/gfloat-website
  tag: "1.0.4"
```

Deploy the new release with the following command.
```bash
helm upgrade --install neurobridges-website kubernetes -n neurobridges -f kubernetes/prod_values.yaml
```
> Note: The values in YAML files included with the `-f` flag will overwrite defaults in `values.yaml`.
