export type Ayat = {
    order: number,
    arabianContent: string,
    ukrainianContent: string,
    comments: string[] | null,
    video: string | null
}

export type Sura = {
    id: string,
    ukrainianTitle: string,
    arabianTitle: string,
    numberOfAyats: number,
    numberOfWords: number,
    chronologicalOrder: number,
    traditionalOrder: number,
    place: string
    introduction: string,
    ayats: Array<Ayat>
}

export type Bookmark = {
    suraId: string,
    suraOrder: number,
    surasTitle: string,
    arabianContent: string,
    ukrainianContent: string,
    ayatOrder: number
}