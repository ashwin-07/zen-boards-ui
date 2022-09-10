import { DraggableLocation } from "@hello-pangea/dnd";
import { BoardColumn } from "./types";

// fake data generator
export const gettasks = (count: number, offset = 0): BoardColumn =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `task-${k + offset}-${new Date().getTime()}`,
        content: `task ${k + offset}`
    }));

export const reorder = (list: BoardColumn, starttaskIndexInColumn: number, endtaskIndexInColumn: number): BoardColumn => {
    const result = Array.from(list);
    const [removed] = result.splice(starttaskIndexInColumn, 1);
    result.splice(endtaskIndexInColumn, 0, removed);

    return result;
};

/**
 * Moves an task from one list to another list.
 */
export const move = (source: BoardColumn, destination: BoardColumn, droppableSource: DraggableLocation, droppableDestination: DraggableLocation): Array<BoardColumn> => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result: any = [];
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};