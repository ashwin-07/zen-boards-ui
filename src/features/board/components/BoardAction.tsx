import { Button, Group } from '@mantine/core';

type Props = {
    onAddNewColumn: () => void,
    onAddNewTask: () => void
}


//() => {setState([...state, gettasks(1)]);}


const BoardActions = ({ onAddNewColumn, onAddNewTask }: Props) => {
    return (
        <Group spacing={'sm'} m='md'>
            <Button variant="light" onClick={onAddNewColumn}>Add new column</Button>

            <Button variant="light" onClick={onAddNewTask}>Add new task</Button>
        </Group>
    )
}

export default BoardActions