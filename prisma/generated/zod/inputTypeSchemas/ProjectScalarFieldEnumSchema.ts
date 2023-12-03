import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','name','info','completionRequirements','color','links','templateId','public','publicAt','createdAt','updatedAt','startAt','startedAt','dueAt','endedAt']);

export default ProjectScalarFieldEnumSchema;
