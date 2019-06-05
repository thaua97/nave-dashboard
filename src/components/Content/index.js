import React from 'react'

import { Container, Layout, Header, TitleHeader, ContentHeader, Section } from './styles'


export default function Content (props) {
    return (
      <Layout>
        <Container>
          <Header>
            <TitleHeader>Page Overview</TitleHeader>
            <ContentHeader>
            { props.header }
            </ContentHeader>
          </Header>
          <Section>
            { props.section }
          </Section>
        </Container>
      </Layout>
    )
}