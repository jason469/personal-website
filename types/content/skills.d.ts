type singleSkillData = {
    iconName: string,
    title: string
}

type categoryData = {
    title: string,
    description: string
}

type allSkillsData = {
    category: categoryData,
    skills: Array<singleSkillData>
}