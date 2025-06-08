
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const usePrincipalInvestigator = () => {
  return useQuery({
    queryKey: ['principal-investigator'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('principal_investigator')
        .select('*')
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });
};

export const useCurrentMembers = () => {
  return useQuery({
    queryKey: ['current-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('current_members')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useLabAlumni = () => {
  return useQuery({
    queryKey: ['lab-alumni'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lab_alumni')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    },
  });
};
