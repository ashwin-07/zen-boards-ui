export interface TaskDetails {
    id: string,
    content: string
}

export interface BoardColumn extends Array<TaskDetails> { }


