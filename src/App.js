
import './App.css';
import ButtonAppBar from './Components/Navbar'
import Container from '@material-ui/core/Container';
import AllpagesRouter from './Routs/Allpagerouts'

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
     
      <Container style={{marginTop:"1rem"}} >
     <img style={{height: '300px', width: '100%'}} src="https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Heritage-Belt-Natural-Hero_c6926d2f-da36-466c-8788-87c6090b68bb_1944x.jpg?v=1640585642" alt="" />
      </Container>
      <AllpagesRouter/>
    </div>
  );
}

export default App;
