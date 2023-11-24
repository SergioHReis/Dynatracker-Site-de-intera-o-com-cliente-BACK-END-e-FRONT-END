import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  // Lógica para verificação de autenticação e redirecionamento

  // Por exemplo:
  // if (!userLoggedIn) {
  //   router.push('/login');
  //   return null; // ou uma mensagem de erro, por exemplo
  // }

  return <>{children}</>;
};

export default PrivateRoute;
