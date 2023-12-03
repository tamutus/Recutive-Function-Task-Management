import { z } from 'zod';

export const PrioritiesToSkillsScalarFieldEnumSchema = z.enum(['priorityId','skillId','notes']);

export default PrioritiesToSkillsScalarFieldEnumSchema;
