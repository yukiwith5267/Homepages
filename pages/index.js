import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  // useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        "タンポポ" 
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           Yuki Tezuka
          </Heading>
          <p>
          小学生がふらふらと たんぽぽの綿毛で遊んでいるような感じの生き方をしたい
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/yuki.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Life
        </Heading>
        <Paragraph>
        I left school in my sophomore year of high school because I had a sleep disorder and didn&apos;t want to wear myself out any more. I am now back in society and living a leisurely life as a college student. In my opinion, it is good to work hard according to the evaluation standards and competition set by school and society. However, if you have doubts about the indicators and competition, it is okay to step out of the competition. If you feel overwhelmed by competition or the pressure to meet society&apos;s expectations, you need to take a step back and reevaluate what is best for you. I have often seen people around me who cannot stop even when they want to, because winning the competition has become their own goal. It would be a waste if we become so obsessed with winning that we neglect our own happiness. We must remember that there are different measures of success and that we can prioritize things like self-care, mental health, and personal growth over traditional achievements. In order to enjoy life, we also need to uninstall our ideas and values of how we should be. I also think it is important to let go of the good waves we feel at the time. If you are tired of competition, it is good to listen to your intuition and pursue what brings you joy and fulfillment. If you want to spend your time chasing the success of others, remember that life is too short. It is good to have goals and aspirations, but it is also important to find balance and savor the present moment.
          <br />
          <br />
          &ldquo;Don&apos;t be afraid to stray from the expected path in order to pursue
          what you love.&ldquo;
          <br />
          <br />
          僕は睡眠障害で高校時代に不登校になりました。これ以上自分を消耗させたくないという思いから、高校2年生の春に退学しました。今は社会復帰して、大学生としてのんびり暮らしています。僕の考えとして、学校や社会が定めた評価の指標や競争の尺度に沿ってひたすら努力するのは良いことですが、もしその指標や競争の尺度に疑問を感じているならば、いったんその競争から外れてみても良いと思います。競争や社会の期待に応えなければならないというプレッシャーに押しつぶされそうになったら、一歩引いて自分にとってのベストは何なのかを見直してみることも必要です。僕の周りでは、競争に勝つことが自己目的化してしまい、止まろう思っていても止まれない人をよく見かけました。勝つことに執着するあまり、自分の幸福をないがしろにしてしまっては、元も子もないです。成功の尺度はさまざまであり、従来の成果よりもセルフケアやメンタルヘルス、自己成長といったものを優先させることができることを忘れてはいけません。人生を楽しむためには、「自分がこうあるべき」という考え方や価値観をアンインストールして、その時に感じる良い波に身を任せることも大切だと思います。競争に疲れたら、直感に耳を傾けて、喜びや充実感を得られることを追求してみるのも良いと思います。もし他人の成功を追いかけるのに時間を費やしたいのならば、人生はあまりにも短いということを忘れないでください。目標や願望を持つことは良いことですが、バランスを取り、今この瞬間を味わうことも大切です。
          <br />
          <br />
          &ldquo;好きなことを追求するために、期待された道から外れることを恐れてはいけない&ldquo;
          <br />
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Tochigi (栃木), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>I dropped out of high school due to a sleep
          disorder that caused me to stop going to school.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>I entered Tokyo University of
          Science.(東京理科大学 理学部応用物理学科)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Meditation,{' '}
          <Link href="https://" target="_blank">
            Physics
          </Link>
          , AtCoder, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/yukiwith5267" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @yukiwith5267
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCWjIf1L1-naXXPuSqRc9w2w"
            title="My YouTube channel"
            thumbnail={thumbYouTube}
          >
            This is something that helped me during the examination period!
          </GridItem>
          {/* <GridItem
            // href="https://www.inkdrop.app/"
            title=""
            thumbnail={thumbInkdrop}
          >
            
          </GridItem> */}
        </SimpleGrid>

        {/* <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
