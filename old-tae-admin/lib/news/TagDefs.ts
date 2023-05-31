export class Tag {
    id: number;
    text: string;
    color: string;
    isSelected: boolean;

    constructor(text: string, color: string, id: number){
        this.id = id
        this.text = text
        this.color = color
        this.isSelected = false
    }

    setText(text: string){
        this.text = text;
    }

    setColor(color: string){
        this.color = color;
    }

    toggleIsSelected(): void{
        this.isSelected = !this.isSelected;
    }
}


export type TagArray = Tag[]

export const newsTags: TagArray = [
    new Tag("お申込みについて", "bg-sky-700", 1),
    new Tag("イベントのお知らせ", "bg-teal-700", 2),
    new Tag("授業について", "bg-red-700", 3),
    new Tag("休講について", "bg-purple-700",4),
    new Tag("次学期の募集について", "bg-green-700", 5),
    new Tag("その他", "bg-black", 6),
]

export const campusTags: TagArray = [
    new Tag("赤羽", "bg-red-400", 1),
    new Tag("川越", "bg-sky-500", 2),
    new Tag("白山", "bg-slate-600", 3),
    new Tag("WELLB", "bg-teal-600", 4),
    new Tag("INIAD", "bg-yellow-600", 5),
    new Tag("全キャンパス", "bg-black", 6)
]
