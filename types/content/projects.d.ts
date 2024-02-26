type githubData = {
    link: string
}

type websiteData = {
    title: string
    link: string
}

type projectData = {
    title: string,
    description: string,
    skills: Array<string>
    github?: githubData,
    website: websiteData,
    logoName: string,
    inDevelopment?: boolean
}
