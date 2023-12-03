import { z } from 'zod';

export const PrioritiesToSkillPathsScalarFieldEnumSchema = z.enum(['skillPathId','priorityId','notes']);

export default PrioritiesToSkillPathsScalarFieldEnumSchema;
