
-- Create table for Science Communication content
CREATE TABLE public.science_communication (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL, -- 'book', 'video', 'film'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  thumbnail_url TEXT,
  embed_id TEXT, -- YouTube embed ID for videos/films
  poster_url TEXT, -- For films
  shop_link TEXT, -- For books
  year TEXT,
  pages TEXT, -- For books
  duration TEXT, -- For videos/films
  awards TEXT, -- For films
  display_order INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Research Data - Lab Management Resources
CREATE TABLE public.lab_management_resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  icon TEXT NOT NULL, -- Lucide icon name
  category TEXT NOT NULL DEFAULT 'internal', -- 'internal' or 'external'
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Research Data - Plasmids
CREATE TABLE public.research_plasmids (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  addgene_id TEXT NOT NULL,
  resistance TEXT NOT NULL,
  availability TEXT NOT NULL, -- 'Available', 'In Review', etc.
  reference TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Research Data - Protocols
CREATE TABLE public.research_protocols (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  download_size TEXT NOT NULL,
  last_updated DATE NOT NULL,
  file_url TEXT, -- URL to the actual protocol file
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Useful Links - Application Resources
CREATE TABLE public.application_resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  type TEXT NOT NULL, -- 'Guide', 'Writing Guide', 'Database', etc.
  category TEXT NOT NULL DEFAULT 'application', -- 'application', 'course', 'book', 'tool'
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Useful Links - Online Courses
CREATE TABLE public.online_courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  provider TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  duration TEXT NOT NULL,
  level TEXT NOT NULL, -- 'Undergraduate', 'Graduate', 'Advanced', 'All Levels'
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Useful Links - Books
CREATE TABLE public.recommended_books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT NOT NULL,
  description TEXT NOT NULL,
  edition TEXT NOT NULL,
  link TEXT NOT NULL,
  category TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for Useful Links - Research Tools
CREATE TABLE public.research_tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  category TEXT NOT NULL,
  cost TEXT NOT NULL, -- 'Free', 'Commercial'
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for all tables
ALTER TABLE public.science_communication ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lab_management_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_plasmids ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_protocols ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.application_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recommended_books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_tools ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is public content)
CREATE POLICY "Allow public read access" ON public.science_communication FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.lab_management_resources FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.research_plasmids FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.research_protocols FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.application_resources FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.online_courses FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.recommended_books FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.research_tools FOR SELECT USING (true);

-- Insert sample data for Science Communication
INSERT INTO public.science_communication (type, title, description, thumbnail_url, shop_link, year, pages) VALUES
('book', 'The Dynamic Cell: Cytoskeleton in Focus', 'A comprehensive guide to understanding cellular dynamics and cytoskeletal organization. This book explores the fascinating world of cellular mechanics, from basic cytoskeletal components to complex regulatory networks that control cell shape, movement, and division. Written for students, researchers, and anyone interested in cell biology, it bridges fundamental concepts with cutting-edge research findings.', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop', 'https://example.com/shop/dynamic-cell-book', '2023', '312 pages');

INSERT INTO public.science_communication (type, title, description, embed_id, duration) VALUES
('video', 'The Secret Life of Cells', 'Take a fascinating journey into the microscopic world of cellular mechanics and cytoskeletal dynamics. This educational video reveals how cells maintain their shape, move, and respond to their environment through the intricate dance of proteins and molecular motors. Perfect for students and educators looking to understand the fundamental processes that drive all life.', 'dQw4w9WgXcQ', '15 min');

INSERT INTO public.science_communication (type, title, description, embed_id, poster_url, year, duration, awards) VALUES
('film', 'The Molecular Dance', 'A visually stunning short documentary that explores the beauty of protein interactions at the cellular level. Through advanced microscopy and artistic visualization, this film captures the elegant choreography of molecular processes that sustain life. Winner of the Science Film Festival 2023.', 'dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', '2023', '8 min', 'Science Film Festival 2023 Winner');

-- Insert sample data for Lab Management Resources
INSERT INTO public.lab_management_resources (title, description, link, icon, display_order) VALUES
('Lab Inventory System', 'Real-time tracking of equipment, reagents, and supplies', 'https://quartzy.com', 'Database', 1),
('Standard Operating Procedures', 'Complete collection of lab protocols and procedures', 'https://protocols.io', 'FileText', 2),
('Ordering Portal', 'Submit requests for new equipment and supplies', 'https://shopping.vwr.com', 'ExternalLink', 3),
('Equipment Booking', 'Schedule and reserve shared laboratory equipment', 'https://calendly.com', 'TestTube', 4),
('Safety Guidelines', 'Laboratory safety protocols and emergency procedures', 'https://www.osha.gov/labs', 'ExternalLink', 5),
('Lab Calendar', 'Shared calendar for meetings, seminars, and deadlines', 'https://calendar.google.com', 'ExternalLink', 6);

-- Insert sample data for Research Plasmids
INSERT INTO public.research_plasmids (name, description, addgene_id, resistance, availability, reference, display_order) VALUES
('pMinhaj-GFP-Actin', 'Green fluorescent protein tagged actin for live cell imaging', '12345', 'Ampicillin', 'Available', 'Smith et al., J Cell Biol 2023', 1),
('pMinhaj-mCherry-Tubulin', 'Red fluorescent protein tagged tubulin for microtubule visualization', '12346', 'Kanamycin', 'Available', 'Johnson et al., Mol Biol Cell 2022', 2),
('pMinhaj-FRAP-Construct', 'Optimized construct for FRAP analysis of cytoskeletal proteins', '12347', 'Ampicillin', 'In Review', 'Wilson et al., Nature Cell Biol 2023', 3),
('pMinhaj-Photoactivatable-Actin', 'Photoactivatable fluorescent actin for single molecule studies', '12348', 'Chloramphenicol', 'Available', 'Davis et al., Science 2023', 4);

-- Insert sample data for Research Protocols
INSERT INTO public.research_protocols (title, description, category, download_size, last_updated, display_order) VALUES
('Actin Polymerization Assay', 'Standard protocol for in vitro actin polymerization measurements', 'Biochemistry', '2.3 MB', '2024-01-15', 1),
('Live Cell Microscopy Setup', 'Complete guide for setting up live cell imaging experiments', 'Microscopy', '5.1 MB', '2024-02-20', 2),
('Protein Purification - His-Tag', 'Step-by-step protocol for purifying His-tagged cytoskeletal proteins', 'Protein Purification', '1.8 MB', '2024-01-30', 3),
('FRAP Analysis Protocol', 'Fluorescence recovery after photobleaching analysis workflow', 'Analysis', '3.2 MB', '2024-03-05', 4),
('Cell Culture - HeLa Cells', 'Maintenance and handling protocols for HeLa cell lines', 'Cell Culture', '1.5 MB', '2024-02-10', 5);
