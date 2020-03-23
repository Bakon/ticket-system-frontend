import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class RootDocument extends Document<any> {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        return {...initialProps, ...page, styleTags};
    }

    render() {
        const {styleTags} = this.props;

        return (
            <html>
                <Head>{styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
