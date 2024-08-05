import React from 'react';
import { MantineProvider, Container, Title, Text, Card, Image, Grid, SimpleGrid, Group, Button } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Title order={1} align="center" mt="xl">My Portfolio</Title>
        <Text align="center" mt="sm">Welcome to my portfolio. Here is a showcase of my projects and skills.</Text>
        <Grid>
          <Grid.Col span={12}>
            <SimpleGrid cols={3} mt="xl">
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image src="https://via.placeholder.com/150" alt="Project 1" />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Project 1</Text>
                </Group>
                <Text size="sm" color="dimmed">
                  Description of project 1. Explain what the project is about and the technologies used.
                </Text>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md" component="a" href="https://github.com/your-username/project-1" target="_blank">
                  View Project
                </Button>
              </Card>
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image src="https://via.placeholder.com/150" alt="Project 2" />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Project 2</Text>
                </Group>
                <Text size="sm" color="dimmed">
                  Description of project 2. Explain what the project is about and the technologies used.
                </Text>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md" component="a" href="https://github.com/your-username/project-2" target="_blank">
                  View Project
                </Button>
              </Card>
              <Card shadow="sm" padding="lg">
                <Card.Section>
                  <Image src="https://via.placeholder.com/150" alt="Project 3" />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Project 3</Text>
                </Group>
                <Text size="sm" color="dimmed">
                  Description of project 3. Explain what the project is about and the technologies used.
                </Text>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md" component="a" href="https://github.com/your-username/project-3" target="_blank">
                  View Project
                </Button>
              </Card>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </MantineProvider>
  );
}

export default App;
