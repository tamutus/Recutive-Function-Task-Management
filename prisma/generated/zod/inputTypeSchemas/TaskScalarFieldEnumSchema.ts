import { z } from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id','name','info','color','links','templateId','personId','public','publicAt','createdAt','updatedAt','startAt','startedAt','dueAt','endedAt']);

export default TaskScalarFieldEnumSchema;
