import { z } from 'zod';

export const ProjectTemplateScalarFieldEnumSchema = z.enum(['id','name','info','completionRequirements','image','color','links','createdAt','updatedAt']);

export default ProjectTemplateScalarFieldEnumSchema;
