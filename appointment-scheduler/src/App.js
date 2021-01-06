// import logo from './logo.svg';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './App.css';
import AppointmentApp from './components/AppointmentApp';

function App() {
  return (
    <div>
        <MuiThemeProvider>
          <AppointmentApp />
        </MuiThemeProvider>
      </div>
  );
}

export default App;
