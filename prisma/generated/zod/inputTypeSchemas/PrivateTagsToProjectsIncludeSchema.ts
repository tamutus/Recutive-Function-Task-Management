import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagArgsSchema } from "../outputTypeSchemas/PrivateTagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const PrivateTagsToProjectsIncludeSchema: z.ZodType<Prisma.PrivateTagsToProjectsInclude> = z.object({
  tag: z.union([z.boolean(),z.lazy(() => PrivateTagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default PrivateTagsToProjectsIncludeSchema;
