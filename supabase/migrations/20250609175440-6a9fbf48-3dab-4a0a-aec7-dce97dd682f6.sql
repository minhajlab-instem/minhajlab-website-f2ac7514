
-- Table for Contact Information
CREATE TABLE public.contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  address TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  lab_hours TEXT NOT NULL,
  building_info TEXT,
  map_location JSON,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table for Lab Position Types
CREATE TABLE public.lab_positions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  position_type TEXT NOT NULL,
  icon TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  duration_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table for Position Requirements
CREATE TABLE public.position_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  position_id UUID NOT NULL REFERENCES public.lab_positions(id) ON DELETE CASCADE,
  requirement TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table for Application Process Steps
CREATE TABLE public.application_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  position_id UUID NOT NULL REFERENCES public.lab_positions(id) ON DELETE CASCADE,
  step_description TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table for Additional Position Information
CREATE TABLE public.position_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  position_id UUID NOT NULL REFERENCES public.lab_positions(id) ON DELETE CASCADE,
  note TEXT NOT NULL,
  highlight_color TEXT,
  is_important BOOLEAN DEFAULT FALSE,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Table for Contact Form Submissions
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  is_replied BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Insert initial contact information (based on hardcoded values in page)
INSERT INTO public.contact_info (address, email, phone, lab_hours, building_info)
VALUES (
  '123 Research Parkway, Science City, ST 98765, USA',
  'info@cytoskeletonlab.example.com',
  '+1 (555) 123-4567',
  'Monday - Friday: 9:00 AM - 5:00 PM
Weekends: Closed',
  'Located in the Chemistry Building, 3rd Floor'
);

-- Insert initial position types with their icons
INSERT INTO public.lab_positions (title, position_type, icon, duration_text, display_order)
VALUES 
  ('MSc Project Students', 'masters', 'GraduationCap', '6-12 months', 1),
  ('Project Associates', 'associates', 'Users', '1-2 years (renewable)', 2),
  ('PhD Students', 'phd', 'BookOpen', '4-5 years', 3),
  ('Postdoctoral Fellows', 'postdoc', 'Award', '2-4 years', 4);

-- Insert requirements for MSc students
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'masters' LIMIT 1)
INSERT INTO public.position_requirements (position_id, requirement, display_order)
VALUES 
  ((SELECT id FROM pos), 'Currently enrolled in a relevant MSc program (Biology, Biochemistry, Cell Biology, etc.)', 1),
  ((SELECT id FROM pos), 'Strong academic record (GPA ≥ 3.5)', 2),
  ((SELECT id FROM pos), 'Basic laboratory experience preferred', 3),
  ((SELECT id FROM pos), 'Commitment to full-time research during project period', 4);

-- Insert application steps for MSc students
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'masters' LIMIT 1)
INSERT INTO public.application_steps (position_id, step_description, display_order)
VALUES 
  ((SELECT id FROM pos), 'Email CV and cover letter to PI', 1),
  ((SELECT id FROM pos), 'Include academic transcripts', 2),
  ((SELECT id FROM pos), 'Provide contact information for 2 academic references', 3),
  ((SELECT id FROM pos), 'Schedule an interview if shortlisted', 4);

-- Insert position notes for MSc students
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'masters' LIMIT 1)
INSERT INTO public.position_notes (position_id, note, highlight_color, is_important)
VALUES 
  ((SELECT id FROM pos), 'Application Deadline: Rolling basis, apply 3-6 months before intended start date', 'text-sky-600', TRUE);

-- Insert requirements for Project Associates
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'associates' LIMIT 1)
INSERT INTO public.position_requirements (position_id, requirement, display_order)
VALUES 
  ((SELECT id FROM pos), 'BSc/MSc in relevant field', 1),
  ((SELECT id FROM pos), '2+ years of research experience', 2),
  ((SELECT id FROM pos), 'Proficiency in cell culture and microscopy techniques', 3),
  ((SELECT id FROM pos), 'Experience with molecular biology techniques', 4),
  ((SELECT id FROM pos), 'Strong publication record preferred', 5);

-- Insert application steps for Project Associates
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'associates' LIMIT 1)
INSERT INTO public.application_steps (position_id, step_description, display_order)
VALUES 
  ((SELECT id FROM pos), 'Submit detailed CV with publication list', 1),
  ((SELECT id FROM pos), 'Cover letter outlining research interests and career goals', 2),
  ((SELECT id FROM pos), 'Provide contact details for 3 professional references', 3),
  ((SELECT id FROM pos), 'Present research seminar if invited', 4);

-- Insert position notes for Project Associates
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'associates' LIMIT 1)
INSERT INTO public.position_notes (position_id, note, highlight_color, is_important)
VALUES 
  ((SELECT id FROM pos), 'Positions available based on funding - check our website for current openings', 'text-sky-600', TRUE);

-- Insert requirements for PhD students
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'phd' LIMIT 1)
INSERT INTO public.position_requirements (position_id, requirement, display_order)
VALUES 
  ((SELECT id FROM pos), 'MSc in Cell Biology, Biochemistry, or related field', 1),
  ((SELECT id FROM pos), 'Excellent academic record', 2),
  ((SELECT id FROM pos), 'Research experience in cell biology or related area', 3),
  ((SELECT id FROM pos), 'Strong motivation for independent research', 4),
  ((SELECT id FROM pos), 'Good written and oral communication skills', 5);

-- Insert application steps for PhD students
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'phd' LIMIT 1)
INSERT INTO public.application_steps (position_id, step_description, display_order)
VALUES 
  ((SELECT id FROM pos), 'Apply through university graduate school', 1),
  ((SELECT id FROM pos), 'Submit research proposal (2-3 pages)', 2),
  ((SELECT id FROM pos), 'Provide academic transcripts and test scores', 3),
  ((SELECT id FROM pos), 'Submit 3 letters of recommendation', 4),
  ((SELECT id FROM pos), 'Interview with lab members and PI', 5);

-- Insert position notes for PhD students
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'phd' LIMIT 1)
INSERT INTO public.position_notes (position_id, note, display_order)
VALUES 
  ((SELECT id FROM pos), 'Funding: Stipend + tuition coverage available for qualified candidates', 1),
  ((SELECT id FROM pos), 'Application Deadline: January 15th for Fall admission', 2);

-- Insert requirements for Postdoctoral Fellows
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'postdoc' LIMIT 1)
INSERT INTO public.position_requirements (position_id, requirement, display_order)
VALUES 
  ((SELECT id FROM pos), 'PhD in Cell Biology, Biochemistry, Biophysics, or related field', 1),
  ((SELECT id FROM pos), 'Strong publication record in peer-reviewed journals', 2),
  ((SELECT id FROM pos), 'Expertise in cytoskeleton research preferred', 3),
  ((SELECT id FROM pos), 'Experience with advanced microscopy techniques', 4),
  ((SELECT id FROM pos), 'Ability to work independently and mentor students', 5);

-- Insert application steps for Postdoctoral Fellows
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'postdoc' LIMIT 1)
INSERT INTO public.application_steps (position_id, step_description, display_order)
VALUES 
  ((SELECT id FROM pos), 'Email detailed CV with complete publication list', 1),
  ((SELECT id FROM pos), 'Research statement (2 pages) outlining future goals', 2),
  ((SELECT id FROM pos), 'Arrange for 3 reference letters to be sent directly', 3),
  ((SELECT id FROM pos), 'Present job talk if invited', 4);

-- Insert position notes for Postdoctoral Fellows
WITH pos AS (SELECT id FROM public.lab_positions WHERE position_type = 'postdoc' LIMIT 1)
INSERT INTO public.position_notes (position_id, note, display_order)
VALUES 
  ((SELECT id FROM pos), 'Benefits: Competitive salary, health insurance, conference travel support', 1),
  ((SELECT id FROM pos), 'Applications accepted year-round - contact PI directly', 2);
