import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { IconBrandVk } from "@tabler/icons";

function SignIn(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      login: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <Button
          radius="xl"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vk.com/"
          leftIcon={<IconBrandVk size={18} />}
          styles={(theme) => ({
            root: {
              backgroundColor: "#00acee",
              border: 0,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,

              "&:hover": {
                backgroundColor: theme.fn.darken("#00acee", 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          ВКонтакте
        </Button>
      </Group>

      <Divider label="ИЛИ" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Логин"
              placeholder="Твой логин"
              value={form.values.login}
              onChange={(event) =>
                form.setFieldValue("login", event.currentTarget.value)
              }
              error={form.errors.email && "Логин уже занят"}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@fictions.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
          />

          <PasswordInput
            required
            label="Пароль"
            placeholder="Твой пароль"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Пароль должен содержать не менее 6 символов"
            }
          />

          {type === "register" && (
            <PasswordInput
              required
              label="Подтверждение пароля"
              placeholder="Твой пароль"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password && "Неправильный пароль"}
            />
          )}

          {type === "register" && (
            <Checkbox
              label="Я принимаю условия"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Уже зарегистрированы? Войти"
              : "У вас нет аккаунта? Зарегистрироваться"}
          </Anchor>
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </Paper>
  );
}

export default SignIn;
