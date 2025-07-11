import { Center, Image } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { ContactIconsList } from "../ContactIcons";
import classes from "../ContactUs.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));
  return (
    <>
      <Center h="40vh">
        <Image
          radius="md"
          h={300}
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        />
      </Center>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours.
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>

          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I just wanted to say hi"
              minRows={4}
              mt="md"
              radius="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} radius="md">
                Send message
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}

export default ContactUs;
