
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useScienceCommData = () => {
  return useQuery({
    queryKey: ['science-communication'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('science_communication')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useLabManagementResources = () => {
  return useQuery({
    queryKey: ['lab-management-resources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lab_management_resources')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useResearchPlasmids = () => {
  return useQuery({
    queryKey: ['research-plasmids'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('research_plasmids')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useResearchProtocols = () => {
  return useQuery({
    queryKey: ['research-protocols'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('research_protocols')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useApplicationResources = () => {
  return useQuery({
    queryKey: ['application-resources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('application_resources')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useOnlineCourses = () => {
  return useQuery({
    queryKey: ['online-courses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('online_courses')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useRecommendedBooks = () => {
  return useQuery({
    queryKey: ['recommended-books'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('recommended_books')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useResearchTools = () => {
  return useQuery({
    queryKey: ['research-tools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('research_tools')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};
