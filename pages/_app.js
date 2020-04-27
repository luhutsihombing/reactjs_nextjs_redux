import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import DefaultLayout from '../components/layouts/DefaultLayout.js';

import '../scss/style.scss';
import '../scss/home-default.scss';
// development purpose
import '../scss/autopart.scss';
import '../scss/electronic.scss';
import '../scss/furniture.scss';
import '../scss/market-place-1.scss';
import '../scss/market-place-2.scss';
import '../scss/market-place-3.scss';
import '../scss/market-place-4.scss';
import '../scss/organic.scss';
import '../scss/technology.scss';


// TODO(alwan) migrate all .js files to typescript. start from init tsconfig.json
class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    componentDidMount() {
        setTimeout(function() {
            document.getElementById('__next').classList.add('loaded');
        }, 100);

        this.setState({ open: true });
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const getLayout =
            Component.getLayout || (page => <DefaultLayout>{page}</DefaultLayout>);
        return getLayout(
            <Provider store={store}>
                <PersistGate
                    loading={<Component {...pageProps} />}
                    persistor={this.persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
