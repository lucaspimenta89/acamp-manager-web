import React from 'react'
import useHomeStyles from './Home.styles'
import ApplicationBar from '../../components/ApplicationBar'
import PageFooter from '../../components/PageFooter'
import { navigate } from '@reach/router'

import {
  Container, Typography, Button, List, ListItem, ListItemText
} from '@material-ui/core'

import Provider from './Provider'
import { IHomePageProps } from './Interfaces'

import RoomListItem from '../../components/RoomListItem'

const Home: React.FC<IHomePageProps> = () => {
  const classes = useHomeStyles({})

  const rooms = [{
    name: 'Master Deluxe',
    description: '1 Cama de casal; 3 Beliches; Ar Condicionado; Banheiro',    
    price: '850,00',
    type: 'master-deluxe'
  }, {
    name: 'Master Plus',
    description: '1 Cama de casal; 2 Beliches; Ar Condicionado; Banheiro',    
    price: '750,00',
    type: 'master-plus'
  }, {
    name: 'Master',
    description: '1 Cama de casal; 1 Beliche; 1 Cama de solteiro, Ar Condicionado; Banheiro',    
    price: '650,00',
    type: 'master'
  }, {
    name: 'Standard Plus',
    description: '1 Cama de casal; 1 Beliche; Ar Condicionado; Banheiro',    
    price: '550,00',
    type: 'standard-plus'
  }, {
    name: 'Standard',
    description: '1 Cama de casal; 1 Cama de solteiro; Ar Condicionado; Banheiro',    
    price: '450,00',
    type: 'standard'
  }]

  return (
    <React.Fragment>
      <ApplicationBar />
      <div className={classes.hero}>
        <Container >
          <div className={classes.heroContainer}>
            <Typography variant="h3" className={classes.heroTitle} >
              SOBREVIVENTES
            </Typography>
            <Button variant="contained" 
              fullWidth={false}
              onClick={() => navigate('/sign-up')}>
              EFETUAR CADASTRO
            </Button>
          </div>
        </Container>
      </div>
      <Container>        
        <div className={classes.sectionTitlePill}>
          Informações Gerais
        </div>
        <div className={classes.tabContainer}>
          <Typography variant='h4' className={classes.sectionTitleLocal}>
            Local
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla et lectus nec luctus. Integer vehicula sagittis felis, rhoncus ullamcorper libero. Nunc id tortor consectetur, varius arcu in, posuere leo. Sed hendrerit purus a sem dignissim accumsan. Donec feugiat risus quam, eget tristique quam ornare at. Duis ut lacus viverra, luctus ipsum id, consectetur metus. Etiam a mi id neque molestie congue. Donec semper eros vitae tellus tempor, eget varius risus lobortis. Nullam eget nisi libero. Nullam pretium sed sem sed tristique. Nullam ornare pharetra gravida. In porta leo vitae vulputate malesuada. 
          </Typography>
          
          <div className={classes.videosContainer}>
            <iframe title='Vídeo Lançamento' width="560" height="315" src="https://www.youtube.com/embed/48EmpJ_jASg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <iframe title='Vídeo Informativo' width="560" height="315" src="https://www.youtube.com/embed/hdHsGfCWbuc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>          
        </div>
        <div className={classes.sectionTitlePill}>
          Inscrições
        </div>
        <div className={classes.tabContainer}>
          <Typography variant='h4' className={classes.sectionTitleLocal}>
            Preços até Novembro/2020
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary='R$ 220,00' secondary="Maiores de 12 anos idade" />
            </ListItem>
            <ListItem>
              <ListItemText primary='R$ 110,00' secondary="de 6 à 12 anos de idade" />
            </ListItem>
            <ListItem>
              <ListItemText primary='Isento' secondary="de 0 à 5 anos e 11 meses de idade" />
            </ListItem>
          </List>
        </div>
        <div className={classes.sectionTitlePill}>
          Quartos
        </div>
        <div className={classes.tabContainer}>          
          {
            rooms.map((it, index) => (
                <RoomListItem
                  key={index}
                  description={it.description}
                  name={it.name}
                  type={it.type}
                  price={it.price}
                />
            ))
          }          
        </div>
        <div className={classes.sectionTitlePill}>
          Quiosques
        </div>
        <div className={classes.tabContainer}>
          <RoomListItem
            description='Área coberta; Pia exclusiva; ideal para barraca de 4 pessoas'
            name='Quiosque'
            type='quiosque'
            price='150,00'
          />
        </div>
        <div className={classes.sectionTitlePill}>
          Termos de serviço
        </div>        
        <div className={classes.tabContainer}>          
          <Typography variant='body1' className={classes.paragraph}>
            Caso esteja em vigor um decreto ou orientação do poder público que venha recomendar ou proibir a aglomeração de pessoas, ou realização de eventos, o Acampamento Jovem 2021, será cancelado.
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            Na impossibilidade de ocorrer o Acampamento Jovem 2021, os pagamentos até então acertados, serão devolvidos aos acampantes no prazo de 10 dias, após a data do cancelamento.
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            No caso de desistência do acampante ou cancelamento do Acampamento Jovem 2021, o acampante receberá a devolução do valor pago, seguindo os seguintes critérios:
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 10/12/2020, o acampante receberá 100% do valor pago <br />    
            - Após a data de 10/12/2020, não serão feitas devoluções
          </Typography>  
        </div>

      </Container>
      <PageFooter />
    </React.Fragment>
  )
}

export default () =>  (
  <Provider>
    {
      (props) => (
        <Home {...props} />
      )
    }
  </Provider>
) 