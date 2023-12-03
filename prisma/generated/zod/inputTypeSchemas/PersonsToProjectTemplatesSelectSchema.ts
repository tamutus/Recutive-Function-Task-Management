import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"

export const PersonsToProjectTemplatesSelectSchema: z.ZodType<Prisma.PersonsToProjectTemplatesSelect> = z.object({
  personId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
}).strict()

export default PersonsToProjectTemplatesSelectSchema;
