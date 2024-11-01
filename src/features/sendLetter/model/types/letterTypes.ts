export type Letter = {
  name: string;
  email: string;
  present: string;
  error?: Record<'name' | 'email' | 'present' | string, string | undefined>;
}