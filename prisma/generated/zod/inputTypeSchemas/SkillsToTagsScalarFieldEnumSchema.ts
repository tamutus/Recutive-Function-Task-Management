import { z } from 'zod';

export const SkillsToTagsScalarFieldEnumSchema = z.enum(['skillId','tagId','taggerId']);

export default SkillsToTagsScalarFieldEnumSchema;
