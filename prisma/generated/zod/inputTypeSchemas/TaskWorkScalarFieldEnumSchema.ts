import { z } from 'zod';

export const TaskWorkScalarFieldEnumSchema = z.enum(['id','taskId','notes','startedAt','endedAt']);

export default TaskWorkScalarFieldEnumSchema;
