export interface Lesson {
    name: string,
    description: string,
    author: string,
    publishDate: string,
    duration: string,
    image: string
}

export interface Lessons {
    lessons: Lesson[] | []
}
