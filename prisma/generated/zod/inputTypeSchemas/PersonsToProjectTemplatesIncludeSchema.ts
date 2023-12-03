import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"

export const PersonsToProjectTemplatesIncludeSchema: z.ZodType<Prisma.PersonsToProjectTemplatesInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
}).strict()

export default PersonsToProjectTemplatesIncludeSchema;
