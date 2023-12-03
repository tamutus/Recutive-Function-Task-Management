import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const PersonsToProjectsSelectSchema: z.ZodType<Prisma.PersonsToProjectsSelect> = z.object({
  personId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  volunteerDate: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default PersonsToProjectsSelectSchema;
