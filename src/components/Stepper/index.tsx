import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, MobileStepper } from "@mui/material";
import React from "react";

const Stepper: React.FC = () => {

    const backButton = <Button color="secondary" startIcon={<ArrowBackIos />}>Назад</Button>
    const nextButton = <Button color="secondary" endIcon={<ArrowForwardIos />}>Вперед</Button>

    return (
        <MobileStepper
            position="static"
            backButton={backButton}
            nextButton={nextButton}
            steps={6}
        />
    )
}

export default Stepper;