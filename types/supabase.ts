export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      about_content: {
        Row: {
          about_desc: string | null
          about_image: string | null
          about_summary: string | null
          banner_image: string | null
          id: string
          title: string
        }
        Insert: {
          about_desc?: string | null
          about_image?: string | null
          about_summary?: string | null
          banner_image?: string | null
          id?: string
          title: string
        }
        Update: {
          about_desc?: string | null
          about_image?: string | null
          about_summary?: string | null
          banner_image?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
      accordion_content: {
        Row: {
          about_content_id: string
          content_body: string
          content_title: string
          id: number
        }
        Insert: {
          about_content_id: string
          content_body: string
          content_title: string
          id?: never
        }
        Update: {
          about_content_id?: string
          content_body?: string
          content_title?: string
          id?: never
        }
        Relationships: [
          {
            foreignKeyName: "fk_about_content"
            columns: ["about_content_id"]
            isOneToOne: false
            referencedRelation: "about_content"
            referencedColumns: ["id"]
          },
        ]
      }
      accounts: {
        Row: {
          access_token: string | null
          id: number
          provider: string | null
          provider_account: string | null
          refresh_token: string | null
          type: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          id?: never
          provider?: string | null
          provider_account?: string | null
          refresh_token?: string | null
          type: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          id?: never
          provider?: string | null
          provider_account?: string | null
          refresh_token?: string | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      homepage_images: {
        Row: {
          alt: string
          banner_image: string
          created_at: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          alt: string
          banner_image: string
          created_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          alt?: string
          banner_image?: string
          created_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          category_name: string
          id: number
          product_id: string
        }
        Insert: {
          category_name: string
          id?: never
          product_id: string
        }
        Update: {
          category_name?: string
          id?: never
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string | null
          description: string | null
          featured: boolean | null
          id: string
          image: string | null
          price: number | null
          title: string
        }
        Insert: {
          category?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image?: string | null
          price?: number | null
          title: string
        }
        Update: {
          category?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          image?: string | null
          price?: number | null
          title?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          email: string
          emailverified: string | null
          id: string
          image: string | null
          name: string
          password: string | null
          phone: string | null
          role: Database["public"]["Enums"]["UserRole"] | null
        }
        Insert: {
          email: string
          emailverified?: string | null
          id?: string
          image?: string | null
          name: string
          password?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["UserRole"] | null
        }
        Update: {
          email?: string
          emailverified?: string | null
          id?: string
          image?: string | null
          name?: string
          password?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["UserRole"] | null
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
      UserRole: "USER" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
