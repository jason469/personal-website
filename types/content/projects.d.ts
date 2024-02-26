type githubData = {
    link: string
}

type websiteData = {
    title: string
    link: string
}

type logoData = {
    fontName: string
    colourHex: string
    additionalTailwindClass?: string
}

type projectData = {
    title: string,
    description: string,
    skills: Array<string>
    github?: githubData,
    website: websiteData,
    logo: logoData,
    inDevelopment?: boolean
}
