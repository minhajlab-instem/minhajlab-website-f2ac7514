
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
        .order('display_order');
      
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
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const usePublications = () => {
  return useQuery({
    queryKey: ['publications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .order('publication_type')
        .order('year', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useCurrentLabPublications = () => {
  return useQuery({
    queryKey: ['current-lab-publications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .eq('publication_type', 'current_lab')
        .order('year', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

export const usePreLabPublications = () => {
  return useQuery({
    queryKey: ['pre-lab-publications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .eq('publication_type', 'pre_lab')
        .order('year', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

// New hooks for research page data
export const useResearchScales = () => {
  return useQuery({
    queryKey: ['research-scales'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('research_scales')
        .select(`
          *,
          research_media(*),
          research_publications(*)
        `)
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useCollaborators = () => {
  return useQuery({
    queryKey: ['collaborators'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('collaborators')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useFundingAgencies = () => {
  return useQuery({
    queryKey: ['funding-agencies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('funding_agencies')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};
