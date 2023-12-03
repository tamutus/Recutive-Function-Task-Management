import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectTemplateArgsSchema } from "../outputTypeSchemas/ProjectTemplateArgsSchema"
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"

export const PrivateTagsToProjectTemplatesSelectSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesSelect> = z.object({
  projectId: z.boolean().optional(),
  privateTagId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectTemplateArgsSchema)]).optional(),
  privateTag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
}).strict()

export default PrivateTagsToProjectTemplatesSelectSchema;
