import type React from 'react'

import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core'
import '@mantine/core/styles.css'
import { useMediaQuery } from '@mantine/hooks'
import {
  IconCamera,
  IconChartBar,
  IconCheck,
  IconClock,
  IconFingerprint,
  IconMapPin,
  IconUsers,
} from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const mantineTheme = useMantineTheme()
  const navigate = useNavigate()

  const handleGoToRegister = () => {
    navigate('/register')
  }

  return (
    <Box>
      <Box
        py="xs"
        px="md"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Container size="lg">
          <Flex justify="space-between" align="center">
            <Image src="/favicon.svg" w={150} />
            <Button onClick={handleGoToRegister}>Đăng ký</Button>
          </Flex>
        </Container>
      </Box>

      <Box
        py={{ base: 40, md: 80 }}
        style={{
          background: `linear-gradient(45deg, ${mantineTheme.colors.blue[0]} 0%, ${mantineTheme.colors.blue[1]} 100%)`,
        }}
      >
        <Container size="lg">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'xl', md: 'md' }}
            align="center"
          >
            <Box style={{ flex: 1 }}>
              <Stack gap="lg">
                <Title order={1} size={isMobile ? 'h2' : 'h1'}>
                  Giải pháp chấm công thông minh cho doanh nghiệp của bạn
                </Title>
                <Text size={isMobile ? 'md' : 'lg'} c="dimmed">
                  Quản lý chấm công, theo dõi vị trí và tính lương tự động với hệ thống hiện đại,
                  tiện lợi và dễ sử dụng.
                </Text>
                <Group mt="md">
                  <Button size="lg" onClick={handleGoToRegister}>
                    Đăng ký ngay
                  </Button>
                  <Button size="lg" variant="light">
                    Tìm hiểu thêm
                  </Button>
                </Group>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={{ base: 40, md: 60 }}>
        <Container size="lg">
          <Stack align="center" mb="xl">
            <Title order={2} ta="center">
              Tính năng nổi bật
            </Title>
            <Text c="dimmed" ta="center" maw={600}>
              Hệ thống chấm công hiện đại với đầy đủ tính năng cần thiết cho doanh nghiệp của bạn
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            <FeatureCard
              icon={<IconCamera />}
              title="Chấm công bằng camera"
              description="Nhân viên có thể chấm công nhanh chóng bằng camera, xác thực khuôn mặt an toàn"
            />
            <FeatureCard
              icon={<IconMapPin />}
              title="Định vị vị trí"
              description="Xác định chính xác vị trí chấm công của nhân viên thông qua GPS"
            />
            <FeatureCard
              icon={<IconChartBar />}
              title="Báo cáo chi tiết"
              description="Thống kê, báo cáo chi tiết về giờ làm, nghỉ phép và hiệu suất nhân viên"
            />
            <FeatureCard
              icon={<IconUsers />}
              title="Quản lý nhân viên"
              description="Quản lý thông tin nhân viên, phân quyền và theo dõi hoạt động"
            />
            <FeatureCard
              icon={<IconFingerprint />}
              title="Bảo mật cao"
              description="Hệ thống bảo mật nhiều lớp, bảo vệ dữ liệu của doanh nghiệp"
            />
            <FeatureCard
              icon={<IconClock />}
              title="Tính lương tự động"
              description="Tự động tính toán lương dựa trên dữ liệu chấm công thực tế"
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={{ base: 40, md: 60 }} bg={'gray.0'}>
        <Container size="lg">
          <Stack align="center" mb="md">
            <Title order={2} ta="center">
              Cách thức hoạt động
            </Title>
            <Text c="dimmed" ta="center" maw={600}>
              Quy trình đơn giản, dễ sử dụng cho cả quản lý và nhân viên
            </Text>
          </Stack>

          <Flex gap="xl" justify="center" align="center" direction="column">
            <List
              spacing="lg"
              size="lg"
              center
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconCheck style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text fw={500}>Đăng nhập vào ứng dụng</Text>
                <Text size="sm" c="dimmed">
                  Nhân viên đăng nhập bằng tài khoản được cấp
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>Chấm công bằng camera</Text>
                <Text size="sm" c="dimmed">
                  Sử dụng camera để xác thực khuôn mặt và chấm công
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>Xác nhận vị trí</Text>
                <Text size="sm" c="dimmed">
                  Hệ thống tự động xác nhận vị trí chấm công
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>Quản lý theo dõi</Text>
                <Text size="sm" c="dimmed">
                  Quản lý có thể theo dõi và xuất báo cáo chi tiết
                </Text>
              </List.Item>
            </List>
          </Flex>
        </Container>
      </Box>

      <Box
        py={{ base: 60, md: 80 }}
        style={{
          background: `linear-gradient(45deg, ${mantineTheme.colors.blue[6]} 0%, ${mantineTheme.colors.blue[4]} 100%)`,
        }}
      >
        <Container size="md">
          <Stack align="center" gap="lg">
            <Title order={2} ta="center" c={'white'}>
              Sẵn sàng nâng cao hiệu quả quản lý nhân sự?
            </Title>
            <Text ta="center" size="lg" c={'white'} maw={700}>
              Đăng ký ngay hôm nay để trải nghiệm giải pháp chấm công thông minh dành cho doanh
              nghiệp của bạn
            </Text>
            <Flex direction={{ base: 'column', sm: 'row' }} mt="md" gap={10}>
              <Button size="lg" color={'white'} variant="outline" onClick={handleGoToRegister}>
                Đăng ký dùng thử miễn phí
              </Button>
              <Button size="lg" color={'blue.9'}>
                Liên hệ tư vấn
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      <Box py={20} bg={'gray.0'}>
        <Container size="lg">
          <Flex
            justify="space-between"
            align="center"
            direction={{ base: 'column', sm: 'row' }}
            gap={{ base: 'md', sm: 0 }}
          >
            <Text size="sm" c="dimmed">
              © {new Date().getFullYear()} c.TimeKeeper. Tất cả các quyền được bảo lưu.
            </Text>
            <Group gap="md">
              <Anchor component="a" href="/terms-of-service" size="sm" c="dimmed">
                Điều khoản sử dụng
              </Anchor>
              <Anchor component="a" href="/privacy-policy" size="sm" c="dimmed">
                Chính sách bảo mật
              </Anchor>
            </Group>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%' }}>
      <ThemeIcon size={50} radius="md" mb="md">
        {icon}
      </ThemeIcon>
      <Text fw={700} size="lg" mb="xs">
        {title}
      </Text>
      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </Card>
  )
}
