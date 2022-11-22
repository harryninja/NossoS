import LinaerStepper from "../../components/briefing/LinaerStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { Navigation } from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

function Briefing() {
  return (<>
    <CssBaseline />
    <Navigation />
    <Container className="paper">
        <LinaerStepper />
    </Container>
    <Footer />

  </>
  );
}

export default Briefing;
