import React from 'react'
import useHomeStyles from './Home.styles'
import ApplicationBar from '../../components/ApplicationBar'
import PageFooter from '../../components/PageFooter'
import { navigate } from '@reach/router'

import {
  Container, Typography, AppBar, Tabs, Tab, Button, List, ListItem, ListItemText
} from '@material-ui/core'

import Provider from './Provider'
import { IHomePageProps } from './Interfaces'

import { 
  HomePageSubscriptionEnum
} from './store/State'
import RoomListItem from '../../components/RoomListItem'

const Home: React.FC<IHomePageProps> = ({ onSetSubsInfoTab, state }) => {
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
    description: '1 Cama de casal; 1 Beliche; 1 Cama de casal, Ar Condicionado; Banheiro',    
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
  }, {
    name: 'Quiosque',
    description: 'Área coberta; Pia exclusiva; ideal para barraca de 4 pessoas',
    price: '150,00',
    type: 'quiosque'
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
        <AppBar position="relative">
          <Tabs value={state.currentSubsInfoTab} onChange={(event: any, newValue: string) => onSetSubsInfoTab(newValue as HomePageSubscriptionEnum) }>
            <Tab label="Informações Gerais" value='info' />
            <Tab label="Inscrições" value='subscriptions' />
            <Tab label="Quartos" value='rooms' />
            <Tab label="Quiosques" value='quiosques' />
            <Tab label="Termos de serviço" value='terms-of-service' />
          </Tabs>          
        </AppBar>

        <div role="tabpanel" className={classes.tabContainer} hidden={state.currentSubsInfoTab !== 'info'}>
          <Typography variant='h4' className={classes.sectionTitleLocal}>
            Local
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla et lectus nec luctus. Integer vehicula sagittis felis, rhoncus ullamcorper libero. Nunc id tortor consectetur, varius arcu in, posuere leo. Sed hendrerit purus a sem dignissim accumsan. Donec feugiat risus quam, eget tristique quam ornare at. Duis ut lacus viverra, luctus ipsum id, consectetur metus. Etiam a mi id neque molestie congue. Donec semper eros vitae tellus tempor, eget varius risus lobortis. Nullam eget nisi libero. Nullam pretium sed sem sed tristique. Nullam ornare pharetra gravida. In porta leo vitae vulputate malesuada. 
          </Typography>
          
          <Typography variant='h4' className={classes.sectionTitle}>
            Fotos do local
          </Typography>
          <div className={classes.videosContainer} />

          <Typography variant='h4' className={classes.sectionTitle}>
            Videos
          </Typography>

          <div className={classes.videosContainer} />
        </div>

        <div role="tabpanel" className={classes.tabContainer} hidden={state.currentSubsInfoTab !== 'subscriptions'}>
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

        <div role="tabpanel" className={classes.tabContainer} hidden={state.currentSubsInfoTab !== 'rooms'}>
          <List>
            {
              rooms.map((it, index) => (
                <ListItem key={index}>
                  <RoomListItem
                    description={it.description}
                    name={it.name}
                    type={it.type}
                    price={it.price}
                  />
                </ListItem>
              ))
            }
          </List>
        </div>
        <div role="tabpanel" className={classes.tabContainer} hidden={state.currentSubsInfoTab !== 'quiosques'}>
          <RoomListItem
            description='Área coberta; Pia exclusiva; ideal para barraca de 4 pessoas'
            name='Quiosque'
            type='quiosque'
            price='150,00'
          />
        </div>
        <div role="tabpanel" className={classes.tabContainer} hidden={state.currentSubsInfoTab !== 'terms-of-service'}>
          <Typography variant='h6'>
            Termos de Serviço
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            Caso esteja em vigor um decreto ou orientação do poder público que venha recomendar ou proibir a aglomeração de pessoas, ou realização de eventos, o Acampamento Jovem 2021, será cancelado.
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            Na impossibilidade de ocorrer o Acampamento Jovem 2021, os pagamentos até então acertados, serão devolvidos aos acampantes no prazo de 10 dias, após a data do cancelamento.
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            No caso de desistência do acampante, o mesmo receberá a devolução do valor pago, seguuindo os seguintes critérios:
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 10/12/2020, o acampante receberá 100% do valor pago
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 10/01/2021, o acampante receberá apenas 90% do valor pago
          </Typography>
          <Typography variant='body1' className={classes.paragraph}>
            - Desistência até 08/02/2021, o acampante receberá apenas 70% do valor pago
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