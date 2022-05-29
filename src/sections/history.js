/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';



export default function History() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
             History
          </Heading>

          <Heading as="h2" variant="hero">
             Back in Time: A Closer Look At Levi's Vintage Clothing
          </Heading>
            <br></br>
            <Text as="p">
            For Paul O’Neill, Head of Design at Levi’s Vintage Clothing, thinking forward means looking backwards. By way of Dublin and Amsterdam, Paul recently continued his tenure at Levi’s HQ in San Francisco, where he’s just a quick elevator ride away from the 20,000 piece collection of historic denim garments that comprise the Levi Strauss & Co. Archives. Each season, he selects a handful of historical pieces from the comprehensive library to reissue for the Levi’s® Vintage Clothing collection.
            </Text>
            <br></br>
            <Text as="p" >
            Replicating the past — as opposed to predicting what’s next — is the main goal of LVC. The line was created to tell the many rich stories embedded in the 161-year old history of the Levi’s brand. Therefore, maintaining the authenticity and integrity of each iconic Levi’s piece is paramount.
            </Text>

            <br></br>
            <Text as="p" >
            Each collection begins with inspiration and a decision about which concept LVC will focus on. Past collections’ topics have ranged from the architects and workers who constructed New York City in 1930s to the underground music scene of 1960s Detroit. As an avid record collector, Paul connects music to many of his projects. Recently, the season’s theme was tied to mid-1950s Memphis, and the birth of rock ‘n’ roll. An inspiration trip involved visiting old recording studios and bowling alleys in the area, and the collection’s color palette was created by matching vintage cars from the era.
            </Text>
        </Box>

      </Container>

    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
