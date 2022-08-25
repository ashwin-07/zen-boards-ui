import { Button, SimpleGrid, Space } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import React, { useState } from 'react'
import BoardCards from './components/BoardCards'
import CreateBoardModal from './components/CreateBoardModal'

const Home = () => {

  let [opened, setOpened] = useState(false)

  return (
    <React.Fragment>

      <Button
        leftIcon={<IconPlus size={14} />}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 60 }}
        onClick={() => setOpened(true)}
      >
        Create New Board
      </Button>

      <Space h="md" />

      <CreateBoardModal opened={opened} setOpened={setOpened} />

      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        <BoardCards />
        <BoardCards />
        <BoardCards />
        <BoardCards />
        <BoardCards />
        <BoardCards />
      </SimpleGrid>
    </React.Fragment>
  )
}

export default Home