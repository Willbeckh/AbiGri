import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

/*** User Service
 * Fetches the current userdata from supabase
 * @returns {Promise<Object | null>}
 * **/
export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
  return data.user;
};

/** Update User
 * @param {Object} metadata - User metadata to update
 * @returns {Promise<Object | null>} - Error Object is failed, else null
 * **/

export const updateUser = async (metadata: object): Promise<object | null> => {
  const { error } = await supabase.auth.updateUser(metadata);
  if (error) {
    console.error("Error updating user:", error.message);
    return null;
  }
  return metadata;
};
