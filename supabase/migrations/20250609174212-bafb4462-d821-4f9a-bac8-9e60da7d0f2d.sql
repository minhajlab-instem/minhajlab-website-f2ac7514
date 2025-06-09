
-- Create research_scales table
CREATE TABLE public.research_scales (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  detailed_description TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT 'from-blue-50 to-cyan-50',
  icon_color TEXT NOT NULL DEFAULT 'text-blue-600',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create collaborators table
CREATE TABLE public.collaborators (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  institution TEXT NOT NULL,
  department TEXT NOT NULL,
  expertise TEXT NOT NULL,
  collaboration TEXT NOT NULL,
  website TEXT,
  image_url TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create funding_agencies table
CREATE TABLE public.funding_agencies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  abbreviation TEXT NOT NULL,
  type TEXT NOT NULL,
  image_url TEXT,
  color TEXT NOT NULL DEFAULT 'bg-blue-100',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create research_media table
CREATE TABLE public.research_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  research_scale_id UUID REFERENCES public.research_scales(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('image', 'video')),
  url TEXT NOT NULL,
  caption TEXT NOT NULL,
  credit TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create research_publications table
CREATE TABLE public.research_publications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  research_scale_id UUID REFERENCES public.research_scales(id) ON DELETE CASCADE,
  short_form TEXT NOT NULL,
  full_title TEXT NOT NULL,
  link TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert existing research scales data
INSERT INTO public.research_scales (title, subtitle, description, detailed_description, color, icon_color, display_order) VALUES
('Molecular Scale', 'Single Protein Dynamics & Interactions', 'At the molecular level, we investigate the structural and dynamic properties of individual cytoskeletal proteins. Our research focuses on actin monomers, tubulin dimers, and intermediate filament subunits, examining how these building blocks assemble and interact through advanced biophysical techniques including single-molecule microscopy, atomic force microscopy, and cryo-electron microscopy.', 'We employ cutting-edge techniques to understand protein conformational changes, binding kinetics, and the molecular mechanisms underlying cytoskeletal protein assembly. Our work reveals how post-translational modifications, pH changes, and ionic strength affect protein behavior at the nanoscale.', 'from-blue-50 to-cyan-50', 'text-blue-600', 1),
('Mesoscopic Scale', 'Filament Networks & Bundles', 'At the mesoscopic scale, we study how individual cytoskeletal filaments organize into higher-order structures such as bundles, networks, and crosslinked assemblies. This intermediate scale bridges single-molecule behavior with cellular-level functions, focusing on collective properties that emerge from filament-filament interactions.', 'Our research examines how crosslinking proteins, motor proteins, and physical constraints shape filament organization. We use reconstitution assays, advanced fluorescence microscopy, and computational modeling to understand network mechanics, bundling dynamics, and the role of molecular crowding in filament assembly.', 'from-green-50 to-emerald-50', 'text-green-600', 2),
('Cellular Scale', 'Whole Cell Cytoskeleton Organization', 'At the cellular scale, we investigate how cytoskeletal networks coordinate to control cell shape, motility, and division. Our research examines the interplay between actin, microtubules, and intermediate filaments in live cells, focusing on how these systems respond to mechanical forces, chemical signals, and spatial constraints.', 'We use live-cell imaging, optogenetics, and mechanical perturbations to understand how cells organize their cytoskeleton in space and time. Our work reveals how cytoskeletal crosstalk enables cells to adapt their structure and function to environmental demands, including migration, adhesion, and response to mechanical stress.', 'from-purple-50 to-violet-50', 'text-purple-600', 3),
('Tissue/Organ Scale', 'Multicellular Cytoskeletal Coordination', 'At the tissue and organ scale, we explore how cytoskeletal organization coordinates across multiple cells to enable collective behaviors such as tissue morphogenesis, wound healing, and organ function. Our research investigates how mechanical forces propagate through tissue-level cytoskeletal networks and how cell-cell junctions transmit cytoskeletal information.', 'We study tissue-level cytoskeletal organization using organoids, tissue explants, and in vivo imaging. Our work focuses on how mechanical stress, biochemical gradients, and cell-cell communication coordinate cytoskeletal remodeling across multiple cells to achieve tissue-level functions and maintain homeostasis.', 'from-orange-50 to-red-50', 'text-orange-600', 4);

-- Insert existing collaborators data
INSERT INTO public.collaborators (name, institution, department, expertise, collaboration, website, image_url, display_order) VALUES
('Dr. Maria Santos', 'Stanford University', 'Department of Cell Biology', 'Cytoskeleton dynamics in cancer cells', 'Joint research on microtubule organization', 'https://stanford.edu', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60', 1),
('Dr. James Chen', 'MIT', 'Department of Biological Engineering', 'Live-cell imaging and microscopy', 'Development of advanced imaging techniques', 'https://mit.edu', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60', 2),
('Dr. Anna Mueller', 'Max Planck Institute', 'Department of Molecular Cell Biology', 'Protein dynamics and structural biology', 'Structural analysis of cytoskeletal proteins', 'https://mpi.de', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60', 3),
('Dr. Raj Patel', 'University of Cambridge', 'Department of Biochemistry', 'Computational modeling of cellular processes', 'Mathematical modeling of cytoskeleton networks', 'https://cambridge.ac.uk', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60', 4);

-- Insert existing funding agencies data
INSERT INTO public.funding_agencies (name, abbreviation, type, image_url, color, display_order) VALUES
('National Institutes of Health', 'NIH', 'Federal Government', 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-blue-100', 1),
('National Science Foundation', 'NSF', 'Federal Government', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-green-100', 2),
('Human Frontier Science Program', 'HFSP', 'International Organization', 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-purple-100', 3),
('American Cancer Society', 'ACS', 'Non-profit Organization', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-pink-100', 4),
('Chan Zuckerberg Initiative', 'CZI', 'Philanthropic Foundation', 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-orange-100', 5),
('European Research Council', 'ERC', 'International Government', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-indigo-100', 6),
('Gates Foundation', 'BMGF', 'Philanthropic Foundation', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-yellow-100', 7),
('Wellcome Trust', 'WT', 'Charitable Foundation', 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', 'bg-teal-100', 8);

-- Get the research scale IDs for inserting media and publications
-- We'll need to insert media and publications using the generated UUIDs

-- Insert research media for Molecular Scale (first entry)
INSERT INTO public.research_media (research_scale_id, type, url, caption, credit, display_order)
SELECT id, 'image', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Cryo-EM structure of actin filament revealing atomic-level detail of protein interactions', 'Structural Biology Core Facility', 1
FROM public.research_scales WHERE title = 'Molecular Scale'
UNION ALL
SELECT id, 'video', 'https://player.vimeo.com/video/123456789', 'Molecular dynamics simulation showing actin monomer conformational changes during ATP hydrolysis', 'Computational Biology Lab', 2
FROM public.research_scales WHERE title = 'Molecular Scale';

-- Insert research media for Mesoscopic Scale
INSERT INTO public.research_media (research_scale_id, type, url, caption, credit, display_order)
SELECT id, 'image', 'https://images.unsplash.com/photo-1628508364752-5550053663cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Fluorescence microscopy image of reconstituted actin networks with crosslinking proteins', 'Advanced Imaging Center', 1
FROM public.research_scales WHERE title = 'Mesoscopic Scale'
UNION ALL
SELECT id, 'video', 'https://player.vimeo.com/video/234567890', 'Time-lapse microscopy showing dynamic reorganization of microtubule bundles', 'Live Cell Imaging Lab', 2
FROM public.research_scales WHERE title = 'Mesoscopic Scale';

-- Insert research media for Cellular Scale
INSERT INTO public.research_media (research_scale_id, type, url, caption, credit, display_order)
SELECT id, 'image', 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Immunofluorescence image showing actin (red), microtubules (green), and nucleus (blue) in migrating cell', 'Cell Biology Core', 1
FROM public.research_scales WHERE title = 'Cellular Scale'
UNION ALL
SELECT id, 'video', 'https://player.vimeo.com/video/345678901', 'Live-cell imaging of cytoskeletal dynamics during cell division', 'Dynamic Microscopy Lab', 2
FROM public.research_scales WHERE title = 'Cellular Scale';

-- Insert research media for Tissue/Organ Scale
INSERT INTO public.research_media (research_scale_id, type, url, caption, credit, display_order)
SELECT id, 'image', 'https://images.unsplash.com/photo-1606037474310-e089fd5845a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Confocal microscopy of tissue section showing coordinated cytoskeletal organization across multiple cells', 'Tissue Imaging Facility', 1
FROM public.research_scales WHERE title = 'Tissue/Organ Scale'
UNION ALL
SELECT id, 'video', 'https://player.vimeo.com/video/456789012', 'Time-lapse imaging of collective cell migration during wound healing', 'Developmental Biology Lab', 2
FROM public.research_scales WHERE title = 'Tissue/Organ Scale';

-- Insert research publications
INSERT INTO public.research_publications (research_scale_id, short_form, full_title, link, display_order)
SELECT id, 'Vance et al., Nat Struct Mol Biol (2018)', 'Structural basis of actin filament nucleation by formins.', '/publications', 1
FROM public.research_scales WHERE title = 'Molecular Scale'
UNION ALL
SELECT id, 'Carter et al., Dev Cell (2022)', 'The role of microtubule-associated proteins in neurogenesis.', '/publications', 1
FROM public.research_scales WHERE title = 'Mesoscopic Scale'
UNION ALL
SELECT id, 'Vance et al., J Cell Biol (2023)', 'Novel insights into actin polymerization dynamics during cell migration.', '/publications', 1
FROM public.research_scales WHERE title = 'Cellular Scale'
UNION ALL
SELECT id, 'Khan et al., Nat Commun (2021)', 'Mechanical stress resilience mediated by intermediate filaments.', '/publications', 2
FROM public.research_scales WHERE title = 'Cellular Scale'
UNION ALL
SELECT id, 'Vance et al., Cancer Res (2020)', 'Cytoskeletal defects in cancer progression.', '/publications', 1
FROM public.research_scales WHERE title = 'Tissue/Organ Scale';
