import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTasksCreateManyProjectInputSchema } from './ProjectsToTasksCreateManyProjectInputSchema';

export const ProjectsToTasksCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectsToTasksCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProjectsToTasksCreateManyProjectInputSchema),z.lazy(() => ProjectsToTasksCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProjectsToTasksCreateManyProjectInputEnvelopeSchema;
