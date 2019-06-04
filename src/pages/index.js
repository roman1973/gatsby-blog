import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <SEO
      title="First - test-task"
      keywords={[`First`, `company`, `learn`, `IT`]} />
    <div style={{ width: '100%', height: '88vh' }}/>

  </Layout>
)

export default IndexPage
