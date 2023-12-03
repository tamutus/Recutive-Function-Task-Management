import { z } from 'zod';

export const SkillScalarFieldEnumSchema = z.enum(['id','name','info']);

export default SkillScalarFieldEnumSchema;
