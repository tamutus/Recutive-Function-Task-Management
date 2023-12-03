import { z } from 'zod';

export const ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema = z.enum(['projectId','taskId','count','schedule']);

export default ProjectTemplatesToTaskTemplatesScalarFieldEnumSchema;
