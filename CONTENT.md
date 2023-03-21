# GFLOAT Website Content

This describes the content slots available for this website, along with the locations in the code where this content lives.

## Page: What is G-FLOAT?

- path: `/about`
- content location: `src/content/about/`

Three sections of markdown content are available for the About page:
- `overview.md`
- `status.md`
- `future.md`

They are rendered in the order listed here.

## Page: Our Team

- path: `/team`
- content location: `src/content/team/`
  + details `./team.yaml`
  + photos `./[team-member-name].jpg`

This YAML file contains details about the G-FLOAT team members. Each person has four (string) fields available:
- name
- lastName
- photo
- institution

A team member's `photo` field should be a relative path to the person's photo, which should be stored in the same directory.

## Page: Publications

- path: `/publications`
- content location: `src/content/publications/`
  + `./papers.yaml`
  + `./webinars.yaml`

Two YAML files describe two different types of publications--papers and webinars. Papers have three string fields: `title`, `citation`, and `url`. Webinars have four: `title`, `date`, `description`, and `url`. The `url` field is intended to contain the URL to download the webinar resources, such as a slide deck.

## Page: Resources

- path: `/resources`
- content location: within the top of `src/content/resources/`
  + `./resources.yaml`

This content type is much like publications but is intended to link to informal artifacts, such as GitHub repositories.
