import './App.css';
import { OFXQuoteContextProvider } from './state/UseOFXQuoteContext';
import OFXQuoteLayout from './components/Layout/OFXQuoteLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <OFXQuoteContextProvider>
      <OFXQuoteLayout></OFXQuoteLayout>
    </OFXQuoteContextProvider>
  )
}

export default App;
