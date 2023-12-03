import { z } from 'zod';

export const PersonsToSkillPathsScalarFieldEnumSchema = z.enum(['personId','skillId','notes']);

export default PersonsToSkillPathsScalarFieldEnumSchema;
