import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { type NextComponentType, type NextPage } from "next";
import { type ReactElement, type ReactNode } from "react";
import MainLayout from "~/components/layouts/MainLayout";
import {
  type AppInitialProps,
  type AppContextType,
} from "next/dist/shared/lib/utils";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppInitialProps<P> & {
  Component: NextPageWithLayout;
};

type AppWithLayout<P = object> = NextComponentType<
  AppContextType,
  P,
  AppPropsWithLayout<P>
>;

const MyApp: AppWithLayout<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  const layout = getLayout(<Component {...pageProps} />);

  return <SessionProvider session={session}>{layout}</SessionProvider>;
};

export default api.withTRPC(MyApp);
