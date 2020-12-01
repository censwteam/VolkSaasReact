import React from "react";
import { oauth2 as FHIR } from "fhirclient";
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import Card from 'terra-card/lib/Card';
import Input from 'terra-form-input';
import InputField from 'terra-form-input/lib/InputField';
import Heading from 'terra-heading';

export default class Launcher extends React.Component {

 
    /**
     * This is configured to make a Standalone Launch, just in case it
     * is loaded directly. An EHR can still launch it by passing `iss`
     * and `launch` url parameters
     */
    componentDidMount() {
        FHIR.authorize({
            target: "_self",
            width: 400,
            height: 450,
            completeInTarget: true,
            "client_id": "9283c310-51b9-4104-9fa6-958b78e54ac9",
            "iss": "https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
            "scope": "user/Appointment.read user/Condition.read user/Observation.read user/Patient.read user/Schedule.read user/Slot.read user/Appointment.write user/Condition.write user/Patient.write online_access openid profile",
            "serverUrl": "https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
            "fhirServiceUrl": "https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
            //"redirectUri": "https://censwteam.github.io/VolkSaas/SmartApp.html" 
            redirectUri: "./SmartIndex",
        });
    }
    /**
     * Could also return `null` for empty page
     */
    render() {
        return (
    <div className="App">
        <Grid className="HeaderApp">
            <Grid.Row>
            <Grid.Column tiny={1}>
                <div className="terra-grid-example">
                <p id="logo">
                    VolkSaasFhir
                </p>  
                </div>
            </Grid.Column>
            <Grid.Column tiny={11}>
                <div className="terra-grid-example"></div>
            </Grid.Column>
            </Grid.Row>
        </Grid>      
        <div>
        <Grid>
        <Grid.Row>
            <Grid.Column tiny={6}>
            <Card className="CardCustom">          
            <Card.Body>
            <Heading level={3} className="floatleft textcolorblue">
            SCHEDULED PATIENTS :           
            </Heading>
            <Grid className="margintop10">
                <Grid.Row>
                <Grid.Column tiny={3}>
                    <InputField
                    inputId="profile-name"
                    label="Practitioner ID"
                    type="text"
                    inputAttrs={{
                    name: 'profile',
                    }}
                />
                </Grid.Column>
                <Grid.Column tiny={3}>
                        <InputField
                    inputId="profile-name"
                    label="From(YYYY-MM-DD)"
                    type="text"
                    inputAttrs={{
                        name: 'profile',
                    }}
                    />
                </Grid.Column>
                <Grid.Column tiny={2}>
                        <InputField
                    inputId="profile-name"
                    label="To(YYYY-MM-DD)"
                    type="text"
                    inputAttrs={{
                        name: 'profile',
                    }}
                    />
                </Grid.Column>
                <Grid.Column tiny={2} className="paddingtop30">
                <Button text="View Patients" variant="emphasis" />
                </Grid.Column>
                <Grid.Column tiny={2} className="paddingtop30">
                <Button text="Authenticate" variant="emphasis" />
                </Grid.Column>
                </Grid.Row>
            </Grid>
            
            
            
            </Card.Body>
            </Card>
            </Grid.Column>
            <Grid.Column tiny={6}>
            
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </div>
        </div>

        );
    }
}