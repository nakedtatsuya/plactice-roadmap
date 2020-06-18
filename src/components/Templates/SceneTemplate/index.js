import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import SEO from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import Heading from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'

const SceneTemplate = ({scene, skills}) => {
  return (
    <div>
      <SEO title={scene.title} description={scene.description} lang={'ja'} />
      <Header />
      <main className={styles.main}>
        <Container>
          <div>
            <div>
              <Breadcrumb
                className={styles.breadcrumb}
                separator={<FontAwesomeIcon icon={faAngleRight} />}
              >
                <Link to='/'>
                  <Txt>Home</Txt>
                </Link>
                <Txt>{scene.id}</Txt>
              </Breadcrumb>
              <Heading level={1} className={styles.title}>
                {scene.title}
              </Heading>
            </div>
            <div className={styles.visual}>
              <img src={scene.image} alt={scene.title} />
            </div>
          </div>
          <div className={styles.body}>
            <div>
              <Txt>{scene.description}</Txt>
            </div>
            <div>
              <Heading level={4} className={styles.requireLabel}>
                必要なスキル
              </Heading>
              <SkillList skills={skills} />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default SceneTemplate
