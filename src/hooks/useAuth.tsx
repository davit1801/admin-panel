import { useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';
import { getSession } from '@/supabase/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/supabase';
import { useEffect } from 'react';

const useAuth = () => {
  const setUser = useSetAtom(userAtom);

  const {
    data: session,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['get-session'],
    queryFn: getSession,
  });

  if (isSuccess && session) {
    setUser(session);
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return { isLoading };
};

export default useAuth;
