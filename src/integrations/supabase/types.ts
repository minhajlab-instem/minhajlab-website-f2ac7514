export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      current_members: {
        Row: {
          created_at: string
          cv_url: string | null
          display_order: number | null
          email: string
          focus: string | null
          id: string
          image_url: string | null
          interests: string | null
          linkedin: string | null
          name: string
          research_area: string | null
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          cv_url?: string | null
          display_order?: number | null
          email: string
          focus?: string | null
          id?: string
          image_url?: string | null
          interests?: string | null
          linkedin?: string | null
          name: string
          research_area?: string | null
          role: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          cv_url?: string | null
          display_order?: number | null
          email?: string
          focus?: string | null
          id?: string
          image_url?: string | null
          interests?: string | null
          linkedin?: string | null
          name?: string
          research_area?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      lab_alumni: {
        Row: {
          created_at: string
          current_position: string | null
          display_order: number | null
          duration_in_lab: string | null
          id: string
          name: string
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_position?: string | null
          display_order?: number | null
          duration_in_lab?: string | null
          id?: string
          name: string
          role: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_position?: string | null
          display_order?: number | null
          duration_in_lab?: string | null
          id?: string
          name?: string
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      principal_investigator: {
        Row: {
          created_at: string
          cv_url: string | null
          email: string
          focus: string | null
          id: string
          image_url: string | null
          interests: string | null
          linkedin: string | null
          name: string
          research_area: string | null
          role: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          cv_url?: string | null
          email: string
          focus?: string | null
          id?: string
          image_url?: string | null
          interests?: string | null
          linkedin?: string | null
          name: string
          research_area?: string | null
          role: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          cv_url?: string | null
          email?: string
          focus?: string | null
          id?: string
          image_url?: string | null
          interests?: string | null
          linkedin?: string | null
          name?: string
          research_area?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      publications: {
        Row: {
          authors: string
          created_at: string
          display_order: number | null
          doi: string | null
          id: string
          journal: string
          link: string | null
          publication_type: string
          title: string
          updated_at: string
          year: number
        }
        Insert: {
          authors: string
          created_at?: string
          display_order?: number | null
          doi?: string | null
          id?: string
          journal: string
          link?: string | null
          publication_type: string
          title: string
          updated_at?: string
          year: number
        }
        Update: {
          authors?: string
          created_at?: string
          display_order?: number | null
          doi?: string | null
          id?: string
          journal?: string
          link?: string | null
          publication_type?: string
          title?: string
          updated_at?: string
          year?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
