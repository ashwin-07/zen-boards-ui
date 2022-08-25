import { Modal, Button, Group, TextInput, ColorInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

interface Props {
    opened: boolean;
    setOpened: (isOpened: boolean) => void;
}

interface FormData {
    name: string;
    color: string;
}

const CreateBoardModal = ({ opened, setOpened }: Props) => {

    const form = useForm({
        initialValues: {
            name: '',
            color: '#b3e9ff'
        } as FormData,
        validate: {
            name: (value) => (value.length < 4 ? 'board name should be atleast 4 characters' : null),
        },
    });

    const navigate = useNavigate();

    const createBoardAndRedirect = (form: FormData) => {
        console.log(form, "form");
        navigate('/board');
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create New Board"
            >
                <form onSubmit={form.onSubmit(createBoardAndRedirect)}>
                    <div style={{ maxWidth: 320, margin: 'auto' }}>
                        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                        <ColorInput mt="md" placeholder="Pick a color" label="Board Background Color" {...form.getInputProps('color')} />

                        <Group position="center" mt="xl">
                            <Button type="submit">
                                Create Board
                            </Button>
                        </Group>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default CreateBoardModal