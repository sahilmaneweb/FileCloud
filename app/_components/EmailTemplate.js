import { Button, Container, Hr, Heading, Html, Img, Row, Section, Tailwind, Text, Column, Link } from "@react-email/components"

export function Email(props){
  const { senderName, receiverEmail, fileName, fileType, fileSize, fileUrl } = props;
  return (
    <Tailwind>
      <Html>
        <Container>
            <Img src="https://i.postimg.cc/V6x7C8nN/logo.jpg" width="200" height="80" className="mx-auto" alt="logo" />
          
          <Hr className="my-[16px] border-t-2 border-gray-300" />
          <Section>
            <Text className="block my-2 text-black no-underline text-[16px]">
              Hello {receiverEmail},
            </Text>
            <Heading as="h1" className="text-center">
              {senderName} wants to share a file with you
            </Heading>
            <Img src="https://i.postimg.cc/MKx52tYg/image.png" width="200" height="150" alt="file image" className="mx-auto" />
            <Section className="text-center my-2">
              <Heading as="h2" className="text-center">
                {fileName}
              </Heading>
              <Heading as="h3" className="text-center">
                {fileType} | {fileSize} MB
              </Heading>
            </Section>
            <Button href={fileUrl} className="box-border w-full text-[25px] rounded-lg bg-blue-600 px-[3px] py-4 text-center font-semibold text-white">
              Click Here to Download
            </Button>
          </Section>
          <Hr className="my-[16px] border-t-2 border-gray-300" />

          <Section className="text-center">
            <table className="w-full">
              <tr className="w-full">
                <td align="center">
                  <Img
                    alt="React Email logo"
                    width="130"
                    height="40"
                    src="https://i.postimg.cc/V6x7C8nN/logo.jpg"
                  />
                </td>
              </tr>
              <tr className="w-full">
                <td align="center">
                  
                  <Text className="mb-0 mt-[4px] text-[16px] leading-[24px] text-gray-500">
                    Upload and Share files easily...
                  </Text>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <Row className="table-cell h-[44px] w-[56px] align-bottom">
                    <Column className="pr-[8px]">
                      <Link href="#">
                        <Img
                          alt="Facebook"
                          height="36"
                          src="https://react.email/static/facebook-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                    <Column className="pr-[8px]">
                      <Link href="#">
                        <Img alt="X" height="36" src="https://react.email/static/x-logo.png" width="36" />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="#">
                        <Img
                          alt="Instagram"
                          height="36"
                          src="https://react.email/static/instagram-logo.png"
                          width="36"
                        />
                      </Link>
                    </Column>
                  </Row>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-500">
                    123 Main Street Anytown, CA 12345
                  </Text>
                  <Text className="mb-0 mt-[4px] text-[16px] font-semibold leading-[24px] text-gray-500">
                    filecloud@gmail.com | +123456789
                  </Text>
                </td>
              </tr>
            </table>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  )
}