import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksCreateManyTaskInputSchema } from './ProjectsToTasksCreateManyTaskInputSchema';

export const ProjectsToTasksCreateManyTaskInputEnvelopeSchema: z.ZodType<Prisma.ProjectsToTasksCreateManyTaskInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectsToTasksCreateManyTaskInputSchema),z.lazy(() => ProjectsToTasksCreateManyTaskInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectsToTasksCreateManyTaskInputEnvelopeSchema;
