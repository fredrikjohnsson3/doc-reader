export type CellTypes = 'form' | 'list' | 'preview';
export interface Cell {
    id: string;
    type: CellTypes;
    content: string;
}
