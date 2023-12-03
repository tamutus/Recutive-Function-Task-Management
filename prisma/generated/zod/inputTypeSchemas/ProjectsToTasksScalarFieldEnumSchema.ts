import { z } from 'zod';

export const ProjectsToTasksScalarFieldEnumSchema = z.enum(['projectId','taskId']);

export default ProjectsToTasksScalarFieldEnumSchema;
