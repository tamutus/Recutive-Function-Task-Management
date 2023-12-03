import { z } from 'zod';

export const PrioritiesToTasksScalarFieldEnumSchema = z.enum(['priorityId','taskId','notes']);

export default PrioritiesToTasksScalarFieldEnumSchema;
