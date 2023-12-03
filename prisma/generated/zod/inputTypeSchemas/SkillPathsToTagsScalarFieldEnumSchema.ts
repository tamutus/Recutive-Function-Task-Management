import { z } from 'zod';

export const SkillPathsToTagsScalarFieldEnumSchema = z.enum(['skillId','tagId','taggerId']);

export default SkillPathsToTagsScalarFieldEnumSchema;
