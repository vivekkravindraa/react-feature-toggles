import React from 'react';
import { FeatureToggleProvider, FeatureToggle } from 'react-feature-toggles';

const toggleNames = {
    SHOW_HELLO_WORLD: 'showHelloWorld'
};
 
const toggles = {
    [toggleNames.SHOW_HELLO_WORLD]: true
};
 
const App = () => (
    <FeatureToggleProvider featureToggleList={toggles}>
        <div>
            <h1>Toggling Example</h1>
            <FeatureToggle featureName={toggleNames.SHOW_HELLO_WORLD}>
                <p>Hello World</p>
            </FeatureToggle>
            <FeatureToggle featureName={toggleNames.SHOW_HELLO_WORLD} showOnlyWhenDisabled>
                <p>Sorry, toggle is off</p>
            </FeatureToggle>
        </div>
    </FeatureToggleProvider>
);

export default App;
