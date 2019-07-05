import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import TopIndex from '../components/top-index'

const IndexPage = () => (
  <Layout>
    <SEO
      title="First - test-task"
      keywords={[`First`, `company`, `learn`, `Ir`]} />
    <TopIndex/>
  </Layout>
)

export default IndexPage
