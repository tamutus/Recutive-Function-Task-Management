import { z } from 'zod';

export const TaskTemplateScalarFieldEnumSchema = z.enum(['id','name','info','completionRequirements','color','links','schedule','createdAt','updatedAt']);

export default TaskTemplateScalarFieldEnumSchema;
