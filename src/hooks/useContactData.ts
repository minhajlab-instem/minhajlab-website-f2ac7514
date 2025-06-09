
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useContactInfo = () => {
  return useQuery({
    queryKey: ['contact-info'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_info')
        .select('*')
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });
};

export const useLabPositions = () => {
  return useQuery({
    queryKey: ['lab-positions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lab_positions')
        .select(`
          *,
          position_requirements(*),
          application_steps(*),
          position_notes(*)
        `)
        .order('display_order');
      
      if (error) throw error;
      return data;
    },
  });
};

export const useContactSubmissions = () => {
  return useQuery({
    queryKey: ['contact-submissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

export const submitContactForm = async (formData: {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData])
    .select()
    .single();

  if (error) throw error;
  return data;
};
