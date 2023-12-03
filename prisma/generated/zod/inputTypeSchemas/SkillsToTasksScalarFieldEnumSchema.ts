import { z } from 'zod';

export const SkillsToTasksScalarFieldEnumSchema = z.enum(['taskId','skillId']);

export default SkillsToTasksScalarFieldEnumSchema;
