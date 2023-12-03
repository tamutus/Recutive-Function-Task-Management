import { z } from 'zod';

export const PersonsToSkillsScalarFieldEnumSchema = z.enum(['personId','skillId']);

export default PersonsToSkillsScalarFieldEnumSchema;
