export interface FileFace {
    id: number,
    parentId?: number,
    type: string,
    title: string,
    content?: any,
    status: 'open' | 'close', // Close or Open
}

export interface FolderFace {
    id: number,
    title: string,
    files?: FileFace[]
}